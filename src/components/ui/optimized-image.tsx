import Image, { type ImageProps } from 'next/image';
import { useState } from 'react';
import { Spinner } from './spinner-loader';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  fallbackSrc?: string;
  showLoader?: boolean;
}

export function OptimizedImage({
  src,
  alt,
  fallbackSrc = '/placeholder-image.png',
  showLoader = true,
  className = '',
  ...props
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative">
      {showLoader && isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <Spinner size="md" />
        </div>
      )}
      <Image
        {...props}
        src={imgSrc}
        alt={alt}
        className={className}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
          if (fallbackSrc) {
            setImgSrc(fallbackSrc);
          }
        }}
        loading="lazy"
        quality={props.quality || 85}
      />
    </div>
  );
}
