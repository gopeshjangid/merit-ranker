import { uploadData } from 'aws-amplify/storage';
import { nanoid } from 'nanoid';
import { configureAmplifyServer } from './amplify-server-config';

// Server-side utility for uploading files to S3 via Amplify
export async function uploadToS3Server(
  file: Buffer | Blob,
  fileName: string,
  storagePath: 'media' | 'document' | 'images' = 'images'
) {
  try {
    configureAmplifyServer();
    // Generate unique file key to prevent collisions
    const fileExtension = fileName.split('.').pop() || 'png';
    const uniqueKey = `${nanoid()}.${fileExtension}`;
    const s3Path = `${storagePath}/${uniqueKey}`;

    // Upload file buffer/blob directly to S3
    const uploadResult = await uploadData({
      path: s3Path,
      data: file,
      options: {
        contentType: getContentType(fileExtension),
      },
    }).result;

    // Return standardized upload result matching previous UploadThing structure
    return {
      success: true,
      key: s3Path,
      path: uploadResult.path,
      url: uploadResult.path, // S3 path - will need getUrl() for public access
    };
  } catch (error) {
    console.error('S3 upload failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Upload failed',
    };
  }
}

// Helper to determine MIME type from file extension
function getContentType(extension: string): string {
  const mimeTypes: Record<string, string> = {
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    gif: 'image/gif',
    webp: 'image/webp',
    svg: 'image/svg+xml',
    pdf: 'application/pdf',
    json: 'application/json',
  };
  return mimeTypes[extension.toLowerCase()] || 'application/octet-stream';
}

// Helper to get public URL from S3 path
export async function getPublicUrl(s3Path: string): Promise<string> {
  configureAmplifyServer();  
  const { getUrl } = await import('aws-amplify/storage');
  const urlResult = await getUrl({
    path: s3Path,
    options: {
      validateObjectExistence: false,
    },
  });
  return urlResult.url.toString();
}
