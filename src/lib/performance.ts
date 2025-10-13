// Performance monitoring utilities
export const reportWebVitals = (metric: {
  id: string;
  name: string;
  label: string;
  value: number;
}) => {
  if (process.env.NODE_ENV === 'development') {
    // In development, we can log metrics
    if (metric.name === 'FCP' || metric.name === 'LCP' || metric.name === 'CLS') {
      console.info(`[Web Vitals] ${metric.name}:`, metric.value);
    }
  }
  
  // In production, you could send to analytics
  // e.g., analytics.track('web-vital', metric);
};

// Measure component render time
export const measureRender = (componentName: string) => {
  if (typeof window === 'undefined' || process.env.NODE_ENV !== 'development') {
    return { start: () => {}, end: () => {} };
  }

  let startTime: number;

  return {
    start: () => {
      startTime = performance.now();
    },
    end: () => {
      const endTime = performance.now();
      const duration = endTime - startTime;
      if (duration > 16) { // Longer than one frame (60fps)
        console.warn(`[Performance] ${componentName} render took ${duration.toFixed(2)}ms`);
      }
    },
  };
};

// Debounce function for search and input handlers
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  const debounced = (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };

  debounced.cancel = () => {
    if (timeout) clearTimeout(timeout);
  };

  return debounced;
}

// Throttle function for scroll handlers
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Lazy load images with intersection observer
export const lazyLoadImage = (imgElement: HTMLImageElement) => {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    });

    observer.observe(imgElement);
    return () => observer.disconnect();
  }

  return () => {};
};
