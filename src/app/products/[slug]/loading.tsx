// app/products/[slug]/loading.tsx
const ProductDetailLoading = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="h-4 bg-gray-200 rounded w-64"></div>
      </div>

      {/* Desktop Layout Skeleton */}
      <div className="hidden lg:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-12">
          {/* Left Column - Image Gallery Skeleton */}
          <div>
            <div className="aspect-square rounded-lg bg-gray-200 animate-pulse"></div>
            <div className="flex gap-2 mt-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-20 h-20 rounded-md bg-gray-200 animate-pulse"></div>
              ))}
            </div>
          </div>

          {/* Right Column - Product Info Skeleton */}
          <div>
            <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-1/4 mt-4 animate-pulse"></div>
            <div className="h-10 bg-gray-200 rounded w-1/3 mt-6 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-full mt-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 mt-2 animate-pulse"></div>
            
            {/* Color Selector Skeleton */}
            <div className="mt-6">
              <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
              <div className="flex gap-3 mt-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 animate-pulse"></div>
                ))}
              </div>
            </div>

            {/* Size Selector Skeleton */}
            <div className="mt-6">
              <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
              <div className="flex gap-3 mt-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-12 h-10 rounded-md bg-gray-200 animate-pulse"></div>
                ))}
              </div>
            </div>

            {/* Quantity Selector Skeleton */}
            <div className="mt-6">
              <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
              <div className="w-32 h-10 rounded-lg bg-gray-200 animate-pulse mt-2"></div>
            </div>

            {/* Add to Cart Button Skeleton */}
            <div className="mt-8 w-full h-12 rounded-lg bg-gray-200 animate-pulse"></div>

            {/* Trust Badges Skeleton */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse"></div>
                  <div className="h-3 bg-gray-200 rounded w-16 mt-2 animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs Section Skeleton */}
        <div className="mt-16">
          <div className="h-10 bg-gray-200 rounded w-1/2 animate-pulse"></div>
        </div>
      </div>

      {/* Mobile Layout Skeleton */}
      <div className="lg:hidden">
        <div className="px-4 sm:px-6">
          <div className="aspect-square rounded-lg bg-gray-200 animate-pulse"></div>
          
          <div className="mt-6">
            <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mt-3 animate-pulse"></div>
            <div className="h-8 bg-gray-200 rounded w-1/3 mt-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-full mt-4 animate-pulse"></div>
            
            {/* Color Selector Skeleton */}
            <div className="mt-6">
              <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
              <div className="flex gap-3 mt-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 animate-pulse"></div>
                ))}
              </div>
            </div>

            {/* Size Selector Skeleton */}
            <div className="mt-6">
              <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
              <div className="flex gap-3 mt-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-12 h-10 rounded-md bg-gray-200 animate-pulse"></div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Sticky Add to Cart Skeleton */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
            <div className="w-full h-12 rounded-lg bg-gray-200 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailLoading;