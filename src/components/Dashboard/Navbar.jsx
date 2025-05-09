import { FiMenu, FiShoppingCart } from "react-icons/fi";
import useAuthContext from "../../hooks/useAuthContext";

const Navbar = ({ toggleSidebar }) => {
  const { user } = useAuthContext();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        {/* Left side - Mobile menu button and search */}
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md text-gray-500 hover:text-gray-700 md:hidden"
            aria-label="Open sidebar"
          >
            <FiMenu className="h-6 w-6" />
          </button>
        </div>

        {/* Right side - Notifications, cart, profile */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 relative">
            <FiShoppingCart className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-5 w-5 rounded-full bg-primary text-white text-xs flex items-center justify-center">
              3
            </span>
          </button>

          <div className="border-l border-gray-300 h-8 mx-2"></div>

          <div className="flex items-center">
            <img
              src={
                user?.avatar ||
                `https://ui-avatars.com/api/?name=${
                  user?.username || "User"
                }&background=random`
              }
              alt="User avatar"
              className="h-8 w-8 rounded-full"
            />
            <span className="ml-2 text-sm font-medium text-gray-700 hidden md:block">
              {user?.username || "User"}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
