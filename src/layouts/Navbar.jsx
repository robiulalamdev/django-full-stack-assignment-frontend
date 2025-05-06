"use client";

import { Link } from "react-router";
import useAuthContext from "../hooks/useAuthContext";
import useCartContext from "../hooks/useCartContext";

const Navbar = () => {
  const { user, logoutUser } = useAuthContext();
  const { cart } = useCartContext();
  return (
    <div className="bg-gradient-to-r from-base-100 to-base-200 shadow-md sticky top-0 z-50">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[100] mt-3 w-52 p-2 shadow-lg"
            >
              <li>
                <Link to="/" className="rounded-md hover:bg-base-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="rounded-md hover:bg-base-200">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/categories" className="rounded-md hover:bg-base-200">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/about" className="rounded-md hover:bg-base-200">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="flex items-center gap-2">
            <div className="mask mask-circle bg-primary p-1">
              <div className="mask mask-circle bg-base-100 p-1">
                <div className="mask mask-circle bg-primary h-6 w-6"></div>
              </div>
            </div>
            <span className="font-serif text-xl font-bold tracking-tight">
              Clothify
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium">
            <li>
              <Link to="/" className="rounded-md hover:bg-base-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="rounded-md hover:bg-base-200">
                Products
              </Link>
            </li>
            <li>
              <Link to="/categories" className="rounded-md hover:bg-base-200">
                Categories
              </Link>
            </li>
            <li>
              <Link to="/about" className="rounded-md hover:bg-base-200">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center">
              <div className="dropdown dropdown-end mr-4">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item badge-primary text-white font-bold">
                      {cart?.items?.length || 0}
                    </span>
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="card card-compact dropdown-content bg-base-100 z-[100] mt-3 w-52 shadow-lg"
                >
                  <div className="card-body">
                    <span className="text-lg font-bold">
                      {cart?.items?.length || 0} Items
                    </span>
                    <span className="text-primary font-medium">
                      Subtotal: ${cart?.total_price || 0}
                    </span>
                    <div className="card-actions">
                      <Link to="dashboard/cart/" className="w-full">
                        <button className="btn btn-primary btn-block">
                          View cart
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar ring ring-primary ring-offset-2 ring-offset-base-100"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="User avatar"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[100] mt-3 w-52 p-2 shadow-lg"
                >
                  <li className="font-medium">
                    <Link to="/dashboard" className="justify-between">
                      Dashboard
                    </Link>
                  </li>
                  <li className="font-medium">
                    <Link to="/dashboard/profile" className="justify-between">
                      Profile
                    </Link>
                  </li>
                  <li className="font-medium">
                    <Link to="/dashboard/cart">Cart</Link>
                  </li>
                  <li className="font-medium">
                    <a onClick={logoutUser}>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex gap-3">
              <Link to="/login" className="btn btn-ghost btn-sm">
                Login
              </Link>
              <Link to="/register" className="btn btn-primary btn-sm">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
