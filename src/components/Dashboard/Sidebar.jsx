import { useState, useEffect } from "react";
import {
  FiBarChart2,
  FiPackage,
  FiPlusCircle,
  FiShoppingCart,
  FiStar,
  FiTag,
  FiUsers,
  FiHome,
  FiSettings,
  FiLogOut,
  FiMenu,
  FiX,
  FiShoppingBag,
  FiHeart,
  FiCreditCard,
} from "react-icons/fi";

import { Link, useLocation } from "react-router";
import useAuthContext from "../../hooks/useAuthContext";

const Sidebar = () => {
  const { user } = useAuthContext();
  const location = useLocation();
  const pathname = location.pathname;
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Close mobile sidebar when path changes
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const customerMenus = [
    {
      group: "Overview",
      items: [
        { to: "/dashboard", icon: FiBarChart2, label: "Dashboard" },
        { to: "/", icon: FiHome, label: "Shop" },
      ],
    },
    {
      group: "Shopping",
      items: [
        { to: "/dashboard/cart", icon: FiShoppingCart, label: "Cart" },
        { to: "/dashboard/wishlist", icon: FiHeart, label: "Wishlist" },
        { to: "/dashboard/orders", icon: FiShoppingBag, label: "Orders" },
      ],
    },
    {
      group: "Account",
      items: [
        { to: "/dashboard/reviews", icon: FiStar, label: "My Reviews" },
        { to: "/dashboard/profile", icon: FiSettings, label: "Settings" },
      ],
    },
  ];

  const adminMenus = [
    {
      group: "Overview",
      items: [
        { to: "/dashboard", icon: FiBarChart2, label: "Dashboard" },
        { to: "/", icon: FiHome, label: "Store Front" },
      ],
    },
    {
      group: "Catalog",
      items: [
        { to: "/products", icon: FiPackage, label: "Products" },
        {
          to: "/dashboard/products/add",
          icon: FiPlusCircle,
          label: "Add Product",
        },
        { to: "/categories", icon: FiTag, label: "Categories" },
        { to: "/categories/add", icon: FiPlusCircle, label: "Add Category" },
      ],
    },
    {
      group: "Sales",
      items: [
        { to: "/dashboard/cart", icon: FiShoppingCart, label: "Cart" },
        { to: "/dashboard/orders", icon: FiShoppingBag, label: "Orders" },
        {
          to: "/dashboard/transactions",
          icon: FiCreditCard,
          label: "Transactions",
        },
      ],
    },
    {
      group: "Content",
      items: [
        { to: "/dashboard/reviews", icon: FiStar, label: "Reviews" },
        { to: "/users", icon: FiUsers, label: "Users" },
      ],
    },
  ];

  const menuGroups = user?.is_staff ? adminMenus : customerMenus;

  return (
    <>
      {/* Mobile overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile toggle button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="fixed top-4 left-4 z-40 md:hidden bg-white p-2 rounded-md shadow-md text-gray-700 hover:text-primary transition-colors"
        aria-label="Open sidebar"
      >
        <FiMenu className="h-6 w-6" />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col w-72 bg-white border-r border-gray-200 shadow-sm transition-all duration-300 ease-in-out ${
          isCollapsed ? "md:w-20" : "md:w-72"
        } ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <Link
            to="/"
            className={`flex items-center gap-2 text-primary transition-all duration-300 ${
              isCollapsed ? "md:justify-center" : ""
            }`}
          >
            <FiShoppingBag className="h-6 w-6 flex-shrink-0" />
            <h1
              className={`text-xl font-bold ${isCollapsed ? "md:hidden" : ""}`}
            >
              Clothify
            </h1>
          </Link>

          <div className="flex items-center">
            {/* Mobile close button */}
            <button
              onClick={() => setIsMobileOpen(false)}
              className="p-2 rounded-md text-gray-500 hover:text-gray-700 md:hidden"
            >
              <FiX className="h-5 w-5" />
            </button>

            {/* Desktop collapse button */}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden md:block p-2 rounded-md text-gray-500 hover:text-gray-700"
            >
              <FiMenu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Sidebar content */}
        <div className="flex-1 overflow-y-auto py-4 px-3">
          {menuGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="mb-6">
              {/* Group label */}
              <h2
                className={`text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2 ${
                  isCollapsed ? "md:text-center md:px-0" : ""
                }`}
              >
                {!isCollapsed && group.group}
                {isCollapsed && (
                  <span className="md:hidden">{group.group}</span>
                )}
              </h2>

              {/* Group items */}
              <ul className="space-y-1">
                {group.items.map((item, itemIndex) => {
                  const isActive = pathname === item.to;

                  return (
                    <li key={itemIndex}>
                      <Link
                        to={item.to}
                        className={`flex items-center px-3 py-2 text-sm rounded-md group transition-all ${
                          isActive
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-gray-700 hover:bg-gray-100"
                        } ${isCollapsed ? "md:justify-center md:px-2" : ""}`}
                      >
                        <span
                          className={`mr-3 flex-shrink-0 ${
                            isActive
                              ? "text-primary"
                              : "text-gray-500 group-hover:text-gray-700"
                          }`}
                        >
                          <item.icon className="h-5 w-5" />
                        </span>
                        <span
                          className={`truncate ${
                            isCollapsed ? "md:hidden" : ""
                          }`}
                        >
                          {item.label}
                        </span>

                        {/* Active indicator */}
                        {isActive && (
                          <span className="absolute inset-y-0 left-0 w-1 bg-primary rounded-r-md" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Sidebar footer */}
        <div
          className={`border-t border-gray-200 p-4 ${
            isCollapsed ? "md:text-center" : ""
          }`}
        >
          <div className="flex items-center mb-4">
            <div className="relative">
              <img
                src={
                  user?.avatar ||
                  `https://ui-avatars.com/api/?name=${
                    user?.username || "User"
                  }&background=random`
                }
                alt="User avatar"
                className="h-10 w-10 rounded-full"
              />
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
            </div>

            <div className={`ml-3 ${isCollapsed ? "md:hidden" : ""}`}>
              <p className="text-sm font-medium text-gray-700">
                {user?.username || "User"}
              </p>
              <p className="text-xs text-gray-500">
                {user?.is_staff ? "Administrator" : "Customer"}
              </p>
            </div>
          </div>

          <button
            className={`flex items-center w-full px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 transition-colors ${
              isCollapsed ? "md:justify-center" : ""
            }`}
          >
            <FiLogOut className="h-5 w-5 text-gray-500 mr-3" />
            <span className={`${isCollapsed ? "md:hidden" : ""}`}>
              Sign out
            </span>
          </button>

          <div
            className={`mt-4 text-xs text-gray-500 ${
              isCollapsed ? "md:hidden" : ""
            }`}
          >
            © {new Date().getFullYear()} Clothify
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
