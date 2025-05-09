import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaArrowRight,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaTiktok,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail("");
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }, 1000);
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40"></div>

      {/* Fashion pattern overlay */}
      <div className="absolute top-0 left-0 right-0 h-full w-full opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="pattern-circles"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
          >
            <circle
              id="pattern-circle"
              cx="10"
              cy="10"
              r="1.6257413380501518"
              fill="#fff"
            ></circle>
          </pattern>
          <rect
            id="rect"
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#pattern-circles)"
          ></rect>
        </svg>
      </div>

      <div className="container mx-auto px-6 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              <span className="text-primary">Cloth</span>ify
            </h2>
            <p className="text-gray-400 mb-6">
              Elevate your style with Clothify&apos;s premium fashion
              collections. We blend contemporary trends with timeless elegance
              for the modern fashion enthusiast.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<FaFacebookF />} />
              <SocialIcon icon={<FaInstagram />} />
              <SocialIcon icon={<FaTiktok />} />
              <SocialIcon icon={<FaPinterestP />} />
            </div>
          </div>

          {/* Collections */}
          <div>
            <h6 className="text-lg font-semibold mb-6 relative">
              <span className="relative z-10">Collections</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-primary"></span>
            </h6>
            <ul className="space-y-3">
              <FooterLink>Women&apos;s Fashion</FooterLink>
              <FooterLink>Men&apos;s Apparel</FooterLink>
              <FooterLink>Seasonal Collections</FooterLink>
              <FooterLink>Accessories</FooterLink>
              <FooterLink>Limited Editions</FooterLink>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h6 className="text-lg font-semibold mb-6 relative">
              <span className="relative z-10">Customer Service</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-primary"></span>
            </h6>
            <ul className="space-y-3">
              <FooterLink>Size Guide</FooterLink>
              <FooterLink>Shipping & Returns</FooterLink>
              <FooterLink>Order Tracking</FooterLink>
              <FooterLink>Loyalty Program</FooterLink>
              <FooterLink>Gift Cards</FooterLink>
            </ul>

            <h6 className="text-lg font-semibold mt-8 mb-6 relative">
              <span className="relative z-10">About Clothify</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-primary"></span>
            </h6>
            <ul className="space-y-3">
              <FooterLink>Our Story</FooterLink>
              <FooterLink>Sustainability</FooterLink>
              <FooterLink>Careers</FooterLink>
              <FooterLink>Press</FooterLink>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h6 className="text-lg font-semibold mb-6 relative">
              <span className="relative z-10">Style Updates</span>
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-primary"></span>
            </h6>
            <p className="text-gray-400 mb-4">
              Subscribe for exclusive offers, style tips, and first access to
              new collections.
            </p>

            {isSubscribed ? (
              <div className="bg-green-500/20 text-green-300 p-3 rounded-lg border border-green-500/30">
                Thank you for subscribing to Clothify updates!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary/90 text-white p-2 rounded-md transition-all duration-200"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <FaArrowRight />
                  )}
                </button>
              </form>
            )}

            <div className="mt-8 space-y-3">
              <ContactItem
                icon={<FaMapMarkerAlt />}
                text="123 Fashion Avenue, Style District"
              />
              <ContactItem icon={<FaPhone />} text="+1 (800) CLOTHIFY" />
              <ContactItem icon={<FaEnvelope />} text="hello@clothify.com" />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Clothify. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#"
              className="text-gray-500 hover:text-primary text-sm transition-colors"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-primary text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-primary text-sm transition-colors"
            >
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper components
const FooterLink = ({ children }) => (
  <li>
    <a
      href="#"
      className="text-gray-400 hover:text-primary transition-colors duration-200 flex items-center group"
    >
      <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-200"></span>
      {children}
    </a>
  </li>
);

const SocialIcon = ({ icon }) => (
  <a
    href="#"
    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors duration-200"
  >
    {icon}
  </a>
);

const ContactItem = ({ icon, text }) => (
  <div className="flex items-center text-gray-400">
    <div className="text-primary mr-3">{icon}</div>
    <span>{text}</span>
  </div>
);

export default Footer;
