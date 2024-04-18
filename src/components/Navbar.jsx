import { FaArrowRight } from "react-icons/fa";
import logo from "../assets/logos/logo.svg";

const Navbar = () => {
  return (
    <nav className="ml-2 p-1 shadow-md text-stone-200">
      <div className="container">
        <div className="flex justify-between ml-20">
          <div>
            <h1>
              <img src={logo} />
            </h1>
          </div>
          <ul className=" flex items-center gap-6 ">
            <li className="inline-block py-4">
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

          <div className="flex items-center border border-gray-100 rounded-full h-12 p-2 mt-6	">
            <a href="blank_">Build & Price</a>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
