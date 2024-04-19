import { FaArrowRightLong } from "react-icons/fa6";
import logo from "../assets/logos/logo.svg";
import Hero from "./Hero";

const Navbar = () => {
  return (
    <div className="relative">
      <Hero />
      <nav className=" text-white">
        <a href="blank_">
          <img src={logo} className="fixed top-4 left-4" />
        </a>

        <div className="flex items-center justify-end">
          <ul className="flex gap-6 mt-9 mr-6 font-medium z-10">
            <li>
              <a href="blank_">Vehicles</a>
            </li>
            <li>
              <a href="blank_">Shop</a>
            </li>
            <li>
              <a href="blank_">Electric</a>
            </li>
            <li>
              <a href="blank_">Owners</a>
            </li>
            <li>
              <a href="blank_">Dealers</a>
            </li>
          </ul>

          <div className="flex items-center text-[14.5px] border border-gray-100 rounded-full h-12 p-4 mt-10 mr-20 z-10 hover:bg-red-700 hover:border-none duration-700">
            <a href="blank_">Build & Price</a>
            <FaArrowRightLong className="ml-3 text-xl" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
