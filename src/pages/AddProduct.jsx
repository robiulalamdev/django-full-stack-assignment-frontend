import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  FiUpload,
  FiX,
  FiCheckCircle,
  FiAlertCircle,
  FiPackage,
  FiDollarSign,
  FiList,
  FiFileText,
  FiTag,
  FiBox,
} from "react-icons/fi";
import apiClient from "../services/api-client";
import authApiClient from "../services/auth-api-client";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [categories, setCategories] = useState([]);
  const [productId, setProductId] = useState(null);
  const [previewImages, setPreviewImages] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  // Fetch Categories
  useEffect(() => {
    apiClient
      .get("/categories/")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
        setError("Failed to load categories. Please try again.");
      });
  }, []);

  // Submit Product Details
  const handleProductAdd = async (data) => {
    setError(null);
    try {
      const productRes = await authApiClient.post("/products/", data);
      setProductId(productRes.data.id);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Error adding product", error);
      setError(
        "Failed to add product. Please check your inputs and try again."
      );
    }
  };

  // Handle Image Change
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    setPreviewImages(files.map((file) => URL.createObjectURL(file)));
  };

  // Remove preview image
  const removeImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);

    const newPreviews = [...previewImages];
    URL.revokeObjectURL(newPreviews[index]); // Free up memory
    newPreviews.splice(index, 1);
    setPreviewImages(newPreviews);
  };

  // Handle Image Upload
  const handleUpload = async () => {
    if (!images.length) {
      setError("Please select at least one image.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      for (const image of images) {
        const formData = new FormData();
        formData.append("image", image);
        await authApiClient.post(`/products/${productId}/images/`, formData);
      }
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        // Reset form after successful upload
        setImages([]);
        setPreviewImages([]);
      }, 3000);
    } catch (error) {
      setLoading(false);
      console.error("Error uploading image", error);
      setError("Failed to upload images. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-10 bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-white">
        <h2 className="text-2xl font-bold flex items-center">
          <FiPackage className="mr-2" />
          {!productId ? "Add New Product" : "Upload Product Images"}
        </h2>
        <p className="text-white/80 mt-1">
          {!productId
            ? "Fill in the details to add a new product to your inventory"
            : "Upload high-quality images to showcase your product"}
        </p>
      </div>

      {/* Alert messages */}
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 m-6 rounded">
          <div className="flex items-center">
            <FiAlertCircle className="text-red-500 mr-2" />
            <p className="text-red-700">{error}</p>
          </div>
        </div>
      )}

      {success && (
        <div className="bg-green-50 border-l-4 border-green-500 p-4 m-6 rounded">
          <div className="flex items-center">
            <FiCheckCircle className="text-green-500 mr-2" />
            <p className="text-green-700">
              {!productId
                ? "Product added successfully! Now you can upload images."
                : "Images uploaded successfully!"}
            </p>
          </div>
        </div>
      )}

      <div className="p-6">
        {!productId ? (
          <form onSubmit={handleSubmit(handleProductAdd)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product Name */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <FiTag className="mr-1 text-primary" /> Product Name
                </label>
                <input
                  {...register("name", {
                    required: "Product name is required",
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  placeholder="Enter product name"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message || "This field is required"}
                  </p>
                )}
              </div>

              {/* Description */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <FiFileText className="mr-1 text-primary" /> Description
                </label>
                <textarea
                  {...register("description", {
                    required: "Description is required",
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  placeholder="Describe your product in detail"
                  rows="4"
                ></textarea>
                {errors.description && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.description.message || "This field is required"}
                  </p>
                )}
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <FiDollarSign className="mr-1 text-primary" /> Price
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    $
                  </span>
                  <input
                    type="text"
                    {...register("price", {
                      required: "Price is required",
                      validate: (value) => {
                        const parsedValue = Number.parseFloat(value);
                        return (
                          !isNaN(parsedValue) || "Please enter a valid number!"
                        );
                      },
                    })}
                    className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="0.00"
                  />
                </div>
                {errors.price && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.price.message}
                  </p>
                )}
              </div>

              {/* Stock Quantity */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <FiBox className="mr-1 text-primary" /> Stock Quantity
                </label>
                <input
                  type="number"
                  {...register("stock", {
                    required: "Stock quantity is required",
                    min: {
                      value: 0,
                      message: "Stock cannot be negative",
                    },
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  placeholder="Enter available quantity"
                />
                {errors.stock && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.stock.message || "This field is required"}
                  </p>
                )}
              </div>

              {/* Category */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <FiList className="mr-1 text-primary" /> Category
                </label>
                <select
                  {...register("category", {
                    required: "Please select a category",
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors appearance-none bg-white"
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.category.message || "This field is required"}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : (
                "Add Product"
              )}
            </button>
          </form>
        ) : (
          <div className="space-y-6">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors">
              <input
                type="file"
                multiple
                accept="image/*"
                id="image-upload"
                className="hidden"
                onChange={handleImageChange}
              />
              <label
                htmlFor="image-upload"
                className="cursor-pointer flex flex-col items-center justify-center"
              >
                <FiUpload className="text-4xl text-primary mb-2" />
                <h3 className="text-lg font-medium text-gray-700">
                  Upload Product Images
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Drag and drop or click to browse
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Supports: JPG, PNG, GIF (Max 5MB each)
                </p>
              </label>
            </div>

            {previewImages.length > 0 && (
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Selected Images ({previewImages.length})
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {previewImages.map((src, idx) => (
                    <div key={idx} className="relative group">
                      <img
                        src={src || "/placeholder.svg"}
                        alt={`Preview ${idx + 1}`}
                        className="w-full h-24 object-cover rounded-lg border border-gray-200"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(idx)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <FiX size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={handleUpload}
              className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
              disabled={loading || images.length === 0}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Uploading Images...
                </>
              ) : (
                <>
                  <FiUpload className="mr-2" /> Upload Images
                </>
              )}
            </button>

            <div className="text-center">
              <button
                onClick={() => setProductId(null)}
                className="text-primary hover:text-primary/80 text-sm font-medium"
              >
                &larr; Back to product details
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddProduct;
