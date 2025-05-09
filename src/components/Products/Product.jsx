import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import ErroAlert from "../ErroAlert";
import apiClient from "../../services/api-client";
import { Link } from "react-router";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/products/latest")
      .then((res) => setProducts(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="bg-gray-50">
      <div className="container py-12 px-4 mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold">Latest Products</h2>
          <Link
            to={"/products"}
            className="btn btn-primary px-6 py-2 rounded-full text-sm md:text-base"
          >
            View All
          </Link>
        </div>
        {/* Spinner  */}
        {isLoading && (
          <div className="flex justify-center items-center py-10">
            <span className="loading loading-spinner loading-xl text-secondary"></span>
          </div>
        )}

        {error && <ErroAlert error={error} />}
        {/* Product Slider  */}
        {!isLoading && !error && products?.length > 0 && (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products?.map((product, idx) => (
              <ProductItem key={idx} product={product} isNew={true} />
            ))}
          </div>
        )}
        {!isLoading && !error && products?.length === 0 && (
          <p className="text-center text-gray-500 mt-6">
            No Products Available
          </p>
        )}
      </div>
    </section>
  );
};

export default Product;
