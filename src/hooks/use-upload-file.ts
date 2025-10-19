import * as React from 'react';
import { toast } from 'sonner';
import { z } from 'zod';
import { uploadData } from 'aws-amplify/storage';
import { nanoid } from 'nanoid';

export type UploadedFile<T = unknown> = {
  key: string;
  name: string;
  size: number;
  type: string;
  url: string;
  ufsUrl: string;
  appUrl?: string;
  customId?: string | null;
  serverData?: T;
};

interface UseUploadFileProps {
  onUploadBegin?: (fileName: string) => void;
  onUploadProgress?: (progress: number) => void;
  onUploadComplete?: (file: UploadedFile) => void;
  onUploadError?: (error: unknown) => void;
  storagePath?: 'editor' | 'media' | 'document';
}

export function useUploadFile({
  onUploadComplete,
  onUploadError,
  onUploadBegin,
  onUploadProgress,
  storagePath = 'editor',
}: UseUploadFileProps = {}) {
  const [uploadedFile, setUploadedFile] = React.useState<UploadedFile>();
  const [uploadingFile, setUploadingFile] = React.useState<File>();
  const [progress, setProgress] = React.useState<number>(0);
  const [isUploading, setIsUploading] = React.useState(false);

  async function uploadFile(file: File) {
    setIsUploading(true);
    setUploadingFile(file);
    onUploadBegin?.(file.name);

    try {
      const fileExtension = file.name.split('.').pop();
      const uniqueKey = `${nanoid()}.${fileExtension}`;

      const s3Path = `${storagePath}/${uniqueKey}`;

      const uploadResult = await uploadData({
        path: s3Path,
        data: file,
        options: {
          contentType: file.type,
          onProgress: ({ transferredBytes, totalBytes }) => {
            if (totalBytes) {
              const progressPercent = Math.round(
                (transferredBytes / totalBytes) * 100
              );
              setProgress(progressPercent);
              onUploadProgress?.(progressPercent);
            }
          },
        },
      }).result;

      const uploadedFileData: UploadedFile = {
        key: s3Path,
        name: file.name,
        size: file.size,
        type: file.type,
        url: uploadResult.path, 
        ufsUrl: uploadResult.path, 
        appUrl: uploadResult.path,
        customId: null,
      };

      setUploadedFile(uploadedFileData);
      onUploadComplete?.(uploadedFileData);

      return uploadedFileData;
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      toast.error(errorMessage || 'Upload failed');
      onUploadError?.(error);
      throw error;
    } finally {
      setProgress(0);
      setIsUploading(false);
      setUploadingFile(undefined);
    }
  }

  return {
    isUploading,
    progress,
    uploadedFile,
    uploadFile,
    uploadingFile,
  };
}

export function getErrorMessage(err: unknown) {
  const unknownError = 'Something went wrong, please try again later.';

  if (err instanceof z.ZodError) {
    const errors = err.issues.map((issue) => issue.message);
    return errors.join('\n');
  } else if (err instanceof Error) {
    return err.message;
  } else {
    return unknownError;
  }
}

export function showErrorToast(err: unknown) {
  const errorMessage = getErrorMessage(err);
  return toast.error(errorMessage);
}
