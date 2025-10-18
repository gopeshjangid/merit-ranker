import { useState, useCallback, useMemo } from 'react';
import { uploadData } from 'aws-amplify/storage';

// Define the possible states of an upload
type State =
  | 'PENDING'
  | 'UPLOADING'
  | 'PAUSED'
  | 'CANCELLED'
  | 'SUCCESS'
  | 'ERROR';

export interface JsonInput {
  location: string; // S3 folder path
  data: any; // JSON data from Plate Editor
  fileName?: string; // Optional custom file name, defaults to timestamp
}

export interface UploadJson {
  json: JsonInput;
  s3key?: string; // S3 key after upload
  path?: string; // Full S3 path
  basePath?: string;
  progress: number; // Upload progress (0-100)
  state: State; // Current state of the upload
  error?: string; // Error message if any
  uploadTask?: any; // Upload task for controlling upload (pause, resume, cancel)
}

interface UseJsonUploadReturn {
  uploadJsons: (jsons: JsonInput | JsonInput[]) => Promise<UploadJson[]>;
  pause: (index: number) => void;
  resume: (index: number) => void;
  cancel: (index: number) => void;
  getStatus: () => UploadJson[];
}

export const useJsonUpload = (): UseJsonUploadReturn => {
  const [uploads, setUploads] = useState<UploadJson[]>([]);

  /**
   * Upload a single JSON.
   * @param jsonInput - The JSON input containing location and data.
   * @param index - The index of the JSON in the uploads array.
   * @returns A promise that resolves to the finalized UploadJson.
   */
  const uploadJson = useCallback(
    async (jsonInput: JsonInput, index: number): Promise<UploadJson> => {
      const { data, location, fileName } = jsonInput;
      const name = fileName || `plate-editor-${Date.now()}.json`;

      try {
        // Convert JSON data to string and then to Blob
        const jsonString = JSON.stringify(data);
        const blob = new Blob([jsonString], { type: 'application/json' });

        // Initiate the upload
        const uploadTask = uploadData({
          path: ({ identityId }) => `${location}/${identityId}/${name}`,
          data: blob,
          options: {
            contentType: 'application/json',
            onProgress: ({ transferredBytes, totalBytes }) => {
              if (totalBytes) {
                const progress = Math.round(
                  (transferredBytes / totalBytes) * 100
                );
                setUploads(prev => {
                  const updated = [...prev];
                  if (updated[index]) {
                    updated[index].progress = progress;
                  }
                  return updated;
                });
              }
            },
          },
        });

        // Set initial state for this upload to UPLOADING
        setUploads(prev => {
          const updated = [...prev];
          if (updated[index]) {
            updated[index].basePath = location;
            updated[index].state = 'UPLOADING';
            updated[index].uploadTask = uploadTask;
          }
          return updated;
        });

        // Await upload completion
        const result = await uploadTask.result;

        // Build the finalized upload object
        const resultUpload: UploadJson = {
          json: jsonInput,
          basePath: location,
          state: 'SUCCESS',
          s3key: result.path, // Adjust based on Amplify response
          path: result.path,
          progress: 100,
          uploadTask,
        };

        // Update state to SUCCESS
        setUploads(prev => {
          const updated = [...prev];
          if (updated[index]) {
            updated[index] = resultUpload;
          }
          return updated;
        });

        return resultUpload;
      } catch (error: unknown) {
        // Update state to ERROR
        setUploads(prev => {
          const updated = [...prev];
          if (updated[index]) {
            updated[index].state = 'ERROR';
            updated[index].error =
              error instanceof Error
                ? error.message
                : 'Something went wrong during upload.';
          }
          return updated;
        });
        console.error('Error uploading JSON:', error);
        throw error;
      }
    },
    []
  );

  /**
   * Upload multiple JSONs.
   * @param jsons - A single JsonInput or an array of JsonInput.
   * @returns A promise that resolves to an array of finalized UploadJson objects.
   */
  const uploadJsons = useCallback(
    async (jsons: JsonInput | JsonInput[]): Promise<UploadJson[]> => {
      const jsonsArray = Array.isArray(jsons) ? jsons : [jsons];
      // Initialize uploads state with PENDING state
      const initialUploads: UploadJson[] = jsonsArray.map(json => ({
        json,
        progress: 0,
        state: 'PENDING',
      }));

      setUploads(initialUploads);

      // Start each upload and gather promises
      const uploadPromises = jsonsArray.map((json, index) =>
        uploadJson(json, index)
      );

      try {
        const results = await Promise.all(uploadPromises);
        return results;
      } catch (error) {
        console.error('One or more uploads failed:', error);
        throw error;
      }
    },
    [uploadJson]
  );

  const pause = useCallback((index: number) => {
    setUploads(prev => {
      const updated = [...prev];
      const upload = updated[index];
      if (upload && upload.state === 'UPLOADING' && upload.uploadTask?.pause) {
        upload.uploadTask.pause();
        updated[index].state = 'PAUSED';
      }
      return updated;
    });
  }, []);

  const resume = useCallback((index: number) => {
    setUploads(prev => {
      const updated = [...prev];
      const upload = updated[index];
      if (upload && upload.state === 'PAUSED' && upload.uploadTask?.resume) {
        upload.uploadTask.resume();
        updated[index].state = 'UPLOADING';
      }
      return updated;
    });
  }, []);

  const cancel = useCallback((index: number) => {
    setUploads(prev => {
      const updated = [...prev];
      const upload = updated[index];
      if (
        upload &&
        (upload.state === 'UPLOADING' || upload.state === 'PAUSED') &&
        upload.uploadTask?.cancel
      ) {
        upload.uploadTask.cancel();
        updated[index].state = 'CANCELLED';
      }
      return updated;
    });
  }, []);

  const getStatus = useCallback(() => uploads, [uploads]);

  return useMemo(
    () => ({
      uploadJsons,
      pause,
      resume,
      cancel,
      getStatus,
    }),
    [uploadJsons, pause, resume, cancel, getStatus]
  );
};