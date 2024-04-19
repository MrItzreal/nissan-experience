import { FaArrowRight } from "react-icons/fa";
import logo from "../assets/logos/logo.svg";

const Navbar = () => {
  return (
    <nav className="text-stone-200">
      <span>
        <img src={logo} className="fixed top-4 left-4" />
      </span>

      <div className="flex items-center justify-end">
        <ul className="flex gap-6 mt-9 mr-6 font-medium">
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

        <div>
          <div className="flex items-center border border-gray-100 rounded-full h-12 p-4 mt-10 mr-20 ">
            <a href="blank_">Build & Price</a>
            <FaArrowRight className="ml-3" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
