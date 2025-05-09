import defaultImage from "../../assets/default_product.png";
import { viewImage } from "../../services/viewImage";

const ProductImageGallery = ({ images, ProductName }) => {
  return (
    <div className="rounded-lg overflow-hidden">
      <img
        src={images?.length > 0 ? viewImage(images[0]?.image) : defaultImage}
        alt={ProductName}
        className="h-full w-full object-contain"
      />
    </div>
  );
};

export default ProductImageGallery;
