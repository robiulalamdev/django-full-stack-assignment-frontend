import { FaShoppingCart } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { FaTags } from "react-icons/fa";
import { BsShieldLock } from "react-icons/bs";

const Features = () => {
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
    <section className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 my-20">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {feature.icon}
            <h3 className="text-lg font-semibold mt-2">{feature.title}</h3>
            <p className="text-gray-500 text-sm max-w-[300px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
