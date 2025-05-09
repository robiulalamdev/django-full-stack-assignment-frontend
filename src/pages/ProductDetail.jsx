import { Link, useParams } from "react-router";
import { Suspense, useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaShippingFast,
  FaShieldAlt,
  FaUndo,
} from "react-icons/fa";
import apiClient from "../services/api-client";
import AddToCartButton from "../components/ProductDetails/AddToCartButton";
import ProductImageGallery from "../components/ProductDetails/ProductImageGallery";
import ReviewSection from "../components/Reviews/ReviewSection";
// import RelatedProducts from "../components/ProductDetails/RelatedProducts";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    setLoading(true);
    apiClient.get(`/products/${productId}/`).then((res) => {
      setProduct(res.data);
      console.log(res.data);
      setLoading(false);
    });
  }, [productId]);

  if (loading) {
    return (
      <div className="w-3/4 mx-auto px-4 py-12">
        <div className="animate-pulse">
          <div className="h-4 w-32 bg-base-300 rounded mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="aspect-square bg-base-300 rounded-lg"></div>
            <div>
              <div className="h-6 w-24 bg-base-300 rounded mb-4"></div>
              <div className="h-10 w-3/4 bg-base-300 rounded mb-6"></div>
              <div className="h-6 w-32 bg-base-300 rounded mb-4"></div>
              <div className="space-y-3">
                <div className="h-4 w-full bg-base-300 rounded"></div>
                <div className="h-4 w-full bg-base-300 rounded"></div>
                <div className="h-4 w-2/3 bg-base-300 rounded"></div>
              </div>
              <div className="h-12 w-full bg-primary/20 rounded mt-8"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product)
    return (
      <div className="w-3/4 mx-auto px-4 py-12 text-center">
        <div className="bg-base-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="text-base-content/70 mb-6">
            The product you&apos;re looking for doesn&apos;t exist or has been
            removed.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center px-4 py-2 bg-primary text-primary-content rounded-md hover:bg-primary/90 transition-colors"
          >
            <FaArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </div>
      </div>
    );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          to="/products"
          className="inline-flex items-center text-sm text-base-content/70 hover:text-primary transition-colors"
        >
          <FaArrowLeft className="mr-2 h-4 w-4" />
          Back to products
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <Suspense
          fallback={
            <div className="aspect-square bg-base-300 animate-pulse rounded-lg"></div>
          }
        >
          <ProductImageGallery
            images={product?.images}
            productName={product.name}
          />
        </Suspense>

        <div className="flex flex-col">
          <div className="mb-4">
            <div className="badge badge-outline bg-primary/10 text-primary border-primary/20 mb-2">
              {product.category}
            </div>
            <h1 className="text-3xl font-bold tracking-tight">
              {product.name}
            </h1>
          </div>

          <div className="mt-2 mb-6">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-primary">
                ${product.price}
              </span>
              {product.price_with_tax > product.price && (
                <span className="text-sm text-base-content/70">
                  (${product.price_with_tax} incl. tax)
                </span>
              )}
            </div>
          </div>

          <div className="prose prose-sm mb-6">
            <p>{product.description}</p>
          </div>

          <div className="mb-6">
            <div className="flex items-center">
              <div className="mr-2 text-sm font-medium">Availability:</div>
              {product.stock > 0 ? (
                <div className="badge badge-outline bg-success/10 text-success border-success/20">
                  In Stock ({product.stock} available)
                </div>
              ) : (
                <div className="badge badge-outline bg-error/10 text-error border-error/20">
                  Out of Stock
                </div>
              )}
            </div>
          </div>

          {/* Product benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 text-sm">
            <div className="flex items-center p-3 bg-base-100 rounded-lg border border-base-300">
              <FaShippingFast className="h-5 w-5 text-primary mr-3" />
              <span>Free shipping over $50</span>
            </div>
            <div className="flex items-center p-3 bg-base-100 rounded-lg border border-base-300">
              <FaShieldAlt className="h-5 w-5 text-primary mr-3" />
              <span>2 year warranty</span>
            </div>
            <div className="flex items-center p-3 bg-base-100 rounded-lg border border-base-300">
              <FaUndo className="h-5 w-5 text-primary mr-3" />
              <span>30-day returns</span>
            </div>
          </div>

          <div className="mt-auto">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>

      {/* Reviews section with a divider */}
      <div className="my-12">
        <ReviewSection productId={productId} />
      </div>

      {/* Related products section */}
      {/* <div className="my-12">
        <div className="h-px bg-base-300 w-full my-8"></div>
        <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
        <RelatedProducts
          currentProductId={productId}
          category={product.category}
        />
      </div> */}
    </div>
  );
};

export default ProductDetail;
