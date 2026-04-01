import { ShoppingCart } from "lucide-react";
import logo from "../assets/logo.png";

function Navbar({ cart }) {
  return (
    <div className="sticky top-0 z-50 ">
      <div className=" navbar bg-base-100 shadow-sm ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2 border-2 border-purple-400"
            >
              <li className="hover:bg-purple-600 px-3 py-2 rounded-lg text-gray-400 hover:text-white font-semibold text-[16px] cursor-pointer">
                Products
              </li>
              <li className="hover:bg-purple-600 px-3 py-2 rounded-lg text-gray-400 hover:text-white font-semibold text-[16px] cursor-pointer">
                Features
              </li>
              <li className="hover:bg-purple-600 px-3 py-2 rounded-lg text-gray-400 hover:text-white font-semibold text-[16px] cursor-pointer">
                Pricing
              </li>
              <li className="hover:bg-purple-600 px-3 py-2 rounded-lg text-gray-400 hover:text-white font-semibold text-[16px] cursor-pointer">
                Testimonials
              </li>
              <li className="hover:bg-purple-600 px-3 py-2 rounded-lg text-gray-400 hover:text-white font-semibold text-[16px] cursor-pointer">
                FAQ
              </li>
            </ul>
          </div>
          <img className=" h-7" src={logo} alt="Nav-logo" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 cursor-pointer">
            <li className="text-gray-400 font-semibold hover:text-purple-500 text-[15px]">
              Products
            </li>
            <li className="text-gray-400 font-semibold hover:text-purple-500 text-[15px]">
              Features
            </li>
            <li className="text-gray-400 font-semibold hover:text-purple-500 text-[15px]">
              Pricing
            </li>
            <li className="text-gray-400 font-semibold hover:text-purple-500 text-[15px]">
              Testimonials
            </li>
            <li className="text-gray-400 font-semibold hover:text-purple-500 text-[15px]">
              FAQ
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-5">
          <div>
            <button className=" relative">
              <ShoppingCart />{" "}
              {cart.length > 0 && (
                <div className="badge badge-sm bg-red-500 text-white absolute -top-3 -right-4 ">
                  {cart.length}
                </div>
              )}
            </button>
          </div>
          <div className="m-5">
            <p className="text-purple-500 cursor-pointer font-semibold ">
              Login
            </p>
          </div>
          <a
            className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] 
             rounded-full px-3 py-2 text-white font-semibold cursor-pointer
             transition-all duration-300
             hover:from-[#3b2dd4] hover:to-[#7e12d8]
             text-lg sm:text-sm"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
