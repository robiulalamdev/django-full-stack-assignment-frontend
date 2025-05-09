import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { FaTags } from "react-icons/fa";
import { BsShieldLock } from "react-icons/bs";

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: <FaShoppingCart className="text-primary text-4xl" />,
      title: "Free Delivery",
      description:
        "Get your orders delivered at no extra cost, fast and hassle-free.",
    },
    {
      icon: <MdVerified className="text-primary text-4xl" />,
      title: "Quality Guarantee",
      description:
        "We ensure top-notch quality for every product you purchase.",
    },
    {
      icon: <FaTags className="text-primary text-4xl" />,
      title: "Daily Offers",
      description: "Exclusive discounts and special deals available every day.",
    },
    {
      icon: <BsShieldLock className="text-primary text-4xl" />,
      title: "100% Secure Payment",
      description:
        "Your payment information is encrypted and completely secure.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Why Choose Us</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We pride ourselves on providing exceptional service and value to our
            customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-md hover:border-primary/20 hover:translate-y-[-5px]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`
                absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                w-16 h-16 rounded-full flex items-center justify-center
                ${
                  hoveredIndex === index
                    ? "bg-primary text-white"
                    : "bg-white text-primary"
                }
                border-4 border-white shadow-sm transition-colors duration-300
              `}
              >
                {feature.icon}
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <div
                  className={`w-10 h-0.5 bg-primary mx-auto mb-3 transition-all duration-300 ${
                    hoveredIndex === index ? "w-16" : "w-10"
                  }`}
                ></div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
