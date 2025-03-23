interface LoadingStateProps {
  type?: 'card' | 'text' | 'metric' | 'testimonial' | 'nav' | 'footer';
  count?: number;
  className?: string;
}

const LoadingState = ({ type = 'card', count = 1, className = '' }: LoadingStateProps) => {
  const shimmer = `relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent`;

  const renderSkeleton = () => {
    switch (type) {
      case 'nav':
        return (
          <div className="h-20 bg-white shadow-lg animate-pulse">
            <div className="container mx-auto px-4 h-full flex items-center justify-between">
              <div className="w-40 h-8 bg-gray-200 rounded" />
              <div className="hidden md:flex items-center space-x-8">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-20 h-4 bg-gray-200 rounded" />
                ))}
              </div>
            </div>
          </div>
        );

      case 'footer':
        return (
          <div className="bg-gray-900 py-12 animate-pulse">
            <div className="container mx-auto px-4 grid grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <div className="w-32 h-6 bg-gray-700 rounded" />
                  <div className="space-y-2">
                    {[...Array(4)].map((_, j) => (
                      <div key={j} className="w-24 h-4 bg-gray-700 rounded" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'card':
        return (
          <div className={`bg-white rounded-xl p-6 shadow-md ${shimmer}`}>
            <div className="w-14 h-14 bg-gray-200 rounded-xl mb-6" />
            <div className="h-7 bg-gray-200 rounded-md mb-4 w-3/4" />
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
              <div className="h-4 bg-gray-200 rounded w-4/6" />
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-lg" />
                  <div className="h-4 bg-gray-200 rounded w-20" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-lg" />
                  <div className="h-4 bg-gray-200 rounded w-20" />
                </div>
              </div>
            </div>
          </div>
        );

      case 'metric':
        return (
          <div className={`text-center ${shimmer}`}>
            <div className="h-12 bg-gray-200 rounded-md w-28 mx-auto mb-2" />
            <div className="h-4 bg-gray-200 rounded w-36 mx-auto" />
          </div>
        );

      case 'testimonial':
        return (
          <div className={`bg-white rounded-xl p-6 shadow-md ${shimmer}`}>
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-4 h-4 bg-gray-200 rounded-full" />
              ))}
            </div>
            <div className="space-y-3 mb-6">
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
              <div className="h-4 bg-gray-200 rounded w-4/6" />
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              <div className="w-10 h-10 bg-gray-200 rounded-full" />
              <div>
                <div className="h-4 bg-gray-200 rounded w-24 mb-2" />
                <div className="h-3 bg-gray-200 rounded w-32" />
              </div>
            </div>
          </div>
        );

      case 'text':
      default:
        return (
          <div className={`space-y-3 ${shimmer}`}>
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-5/6" />
            <div className="h-4 bg-gray-200 rounded w-4/6" />
          </div>
        );
    }
  };

  return (
    <div className={`grid gap-6 ${count > 1 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : ''} ${className}`}>
      {[...Array(count)].map((_, index) => (
        <div key={index}>{renderSkeleton()}</div>
      ))}
    </div>
  );
};

export default LoadingState; 