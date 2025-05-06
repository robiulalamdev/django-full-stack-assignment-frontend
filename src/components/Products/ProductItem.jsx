import { Link } from "react-router";
import defaultImage from "../../assets/default_product.png";
import { viewImage } from "../../services/viewImage";

const ProductItem = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} className="group">
      <div className="card shadow bg-base-100 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
        <figure className="relative h-52 overflow-hidden w-full">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
          <img
            src={
              product.images.length > 0
                ? viewImage(product.images[0].image)
                : defaultImage
            }
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* <div className="absolute bottom-4 right-4">
            <span className="badge badge-primary text-xs font-bold uppercase text-white">
              New
            </span>
          </div> */}
        </figure>
        <div className="card-body p-3">
          <div className="mb-1 flex items-center justify-between min-h-[60px]">
            <h2 className="card-title text-lg font-bold transition-colors group-hover:text-primary line-clamp-2">
              {product.name}
            </h2>
            <h3 className="font-bold text-xl text-primary">${product.price}</h3>
          </div>
          <div className="min-h-[50px]">
            <p className="text-sm text-base-content/70 line-clamp-2">
              {product.description}
            </p>
          </div>
          <div className="card-actions mt-4 justify-center">
            <button className="btn btn-primary btn-sm w-full transition-all duration-300 group-hover:btn-primary-focus">
              <span className="mr-2">Buy Now</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
