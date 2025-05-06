import ProductItem from "../Products/ProductItem";

const ProductList = ({ products, loading }) => {
  if (loading) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center py-16">
        <div className="relative">
          <span className="loading loading-spinner loading-lg text-primary"></span>
          <span className="loading loading-spinner loading-lg absolute inset-0 text-primary opacity-30"></span>
        </div>
        <p className="mt-4 animate-pulse text-base-content/70">
          Loading amazing products...
        </p>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center py-16 text-center">
        <div className="mb-4 rounded-full bg-base-200 p-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold">No products found</h3>
        <p className="mt-2 max-w-md text-base-content/70">
          We couldn&apos;t find any products matching your criteria. Please try
          a different search or check back later.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">
          <span className="inline-block border-b-2 border-primary pb-1">
            Products
          </span>
        </h2>
        <p className="mt-2 text-base-content/70">
          Discover our collection of {products.length} amazing products
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product, idx) => (
          <ProductItem key={idx} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
