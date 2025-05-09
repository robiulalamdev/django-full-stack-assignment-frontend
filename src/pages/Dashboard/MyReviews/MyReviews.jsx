import { useEffect, useState } from "react";
import apiClient from "../../../services/api-client";

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiClient.get(`/reviews/`).then((res) => {
      if (res.data?.length > 0) {
        setReviews(res.data);
      }
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    apiClient.get(`/admin/statistics/`).then((res) => {
      console.log(res.data);
    });
  }, []);
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">My Reviews</h2>

      {loading ? (
        <div className="flex justify-center py-8">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : reviews.length === 0 ? (
        <div className="text-center py-8">
          <h3 className="text-xl font-semibold mb-2">No Reviews Yet</h3>
          <p className="text-base-content/70">
            You haven&apos;t written any reviews yet.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-6 py-4 text-left">Product</th>
                <th className="px-6 py-4 text-left">Rating</th>
                <th className="px-6 py-4 text-left">Comment</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <tr
                  key={review.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-6 py-4">{review.user.name}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="text-yellow-400">
                        {"★".repeat(review.ratings)}
                        {"☆".repeat(5 - review.ratings)}
                      </span>
                      <span className="ml-2">{review.ratings}/5</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="line-clamp-2">{review.comment}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyReviews;
