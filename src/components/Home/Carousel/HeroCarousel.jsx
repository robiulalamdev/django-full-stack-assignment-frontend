import { useState } from "react";
import { Search } from "lucide-react"; // You can replace with your icon library
import heroImage from "../../../assets/images/banner.png";
import { useNavigate } from "react-router";

const HeroSection = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/products?search=${searchQuery}`);
    }
  };
  // bg-gradient-to-br from-primary/80 via-primary/40 to-primary/10
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-200 via-base-200 to-primary/75 backdrop-blur-3xl">
      {/* Background accent */}
      <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-primary/10 to-transparent opacity-30"></div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col space-y-6 z-10">
            <div>
              <h1 className="font-serif text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Clothify
                </span>
              </h1>
              <p className="mt-4 max-w-md text-base-content/80 md:text-lg">
                Discover the latest fashion trends and elevate your style with
                our premium collection of clothing and accessories.
              </p>
            </div>

            {/* Search System */}
            <div className="mt-2 max-w-md">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products..."
                  className="input input-bordered w-full bg-base-100/90 pr-12 focus:border-primary focus:ring-1 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 h-full rounded-r-md bg-gradient-to-r from-primary to-primary/90 px-3 text-primary-content transition-all hover:from-primary/90 hover:to-primary"
                >
                  <Search className="h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-base-content/70">
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>123-456-789</span>
              </div>
              <div className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>support@clothify.com</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            {/* Decorative elements */}

            {/* Image frame with gradient border */}
            <div className="relative z-10 p-1 rounded-lg ">
              <div className="h-[400px] w-full max-w-md overflow-hidden rounded-lg md:h-[500px]">
                {heroImage ? (
                  <img
                    src={heroImage || "/placeholder.svg"}
                    alt="Stylish model wearing Clothify fashion"
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-base-200">
                    <span className="text-base-content/50">
                      Image will appear here
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -right-6 top-1/4 h-20 rounded-full bg-primary/20 backdrop-blur-sm"></div>
      <div className="absolute bottom-1/4 left-1/3 h-12 w-12 rounded-full bg-primary/10 backdrop-blur-sm"></div>
    </div>
  );
};

export default HeroSection;
