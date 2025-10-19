import { getUrl } from 'aws-amplify/storage';
import { useEffect, useState } from 'react';

export function useS3Url(s3Path: string | undefined) {
  const [url, setUrl] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!s3Path) {
      setUrl(undefined);
      return;
    }

    setIsLoading(true);
    getUrl({
      path: s3Path,
      options: {
        validateObjectExistence: false,
      },
    })
      .then((result) => {
        setUrl(result.url.toString());
        setError(null);
      })
      .catch((err) => {
        setError(err);
        console.error('Failed to get S3 URL:', err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [s3Path]);

  return { url, isLoading, error };
}