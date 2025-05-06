"use client";

const FilterSection = ({
  priceRange,
  handlePriceChange,
  categories,
  selectedCategory,
  handleCategoryChange,
  searchQuery,
  handleSearchQuery,
  sortOrder,
  handleSorting,
}) => {
  return (
    <div className="mb-8 rounded-xl bg-base-200/50 p-6">
      <h3 className="mb-4 text-lg font-bold">Filter Products</h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Price Range */}
        <div className="rounded-lg bg-base-100 p-5 shadow-sm transition-shadow hover:shadow-md">
          <label className="mb-3 flex items-center text-sm font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-4 w-4 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Price Range
          </label>

          {/* Min Range */}
          <div className="mb-3 flex items-center space-x-4">
            <div className="relative">
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs font-medium text-base-content/70">
                $
              </span>
              <input
                type="number"
                min="0"
                max={priceRange[1]}
                value={priceRange[0]}
                onChange={(e) => handlePriceChange(0, Number(e.target.value))}
                className="w-20 rounded-md border-base-300 bg-base-100 py-2 pl-6 pr-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <input
              type="range"
              min="0"
              max={priceRange[1]}
              step="10"
              value={priceRange[0]}
              onChange={(e) => handlePriceChange(0, Number(e.target.value))}
              className="range range-primary range-xs w-full"
            />
          </div>

          {/* Max Range */}
          <div className="mb-3 flex items-center space-x-4">
            <div className="relative">
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs font-medium text-base-content/70">
                $
              </span>
              <input
                type="number"
                min={priceRange[0]}
                max="1000"
                value={priceRange[1]}
                onChange={(e) => handlePriceChange(1, Number(e.target.value))}
                className="w-20 rounded-md border-base-300 bg-base-100 py-2 pl-6 pr-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <input
              type="range"
              min={priceRange[0]}
              max="1000"
              step="10"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(1, Number(e.target.value))}
              className="range range-primary range-xs w-full"
            />
          </div>

          <div className="flex justify-between text-sm">
            <span className="font-medium text-primary">${priceRange[0]}</span>
            <span className="font-medium text-primary">${priceRange[1]}</span>
          </div>
        </div>

        {/* Category Filter */}
        <div className="rounded-lg bg-base-100 p-5 shadow-sm transition-shadow hover:shadow-md">
          <label className="mb-3 flex items-center text-sm font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-4 w-4 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              />
            </svg>
            Category
          </label>
          <div className="relative">
            <select
              className="select select-bordered w-full appearance-none bg-base-100 py-2 pl-3 pr-10 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-base-content/70">
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="rounded-lg bg-base-100 p-5 shadow-sm transition-shadow hover:shadow-md">
          <label className="mb-3 flex items-center text-sm font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-4 w-4 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Search
          </label>
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="input input-bordered w-full bg-base-100 py-2 pl-3 pr-10 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-base-content/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Sorting */}
        <div className="rounded-lg bg-base-100 p-5 shadow-sm transition-shadow hover:shadow-md">
          <label className="mb-3 flex items-center text-sm font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-4 w-4 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
              />
            </svg>
            Sort By Price
          </label>
          <div className="relative">
            <select
              className="select select-bordered w-full appearance-none bg-base-100 py-2 pl-3 pr-10 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
              value={sortOrder}
              onChange={(e) => handleSorting(e.target.value)}
            >
              <option value="">Default</option>
              <option value="price">Price: Low to High</option>
              <option value="-price">Price: High to Low</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-base-content/70">
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
