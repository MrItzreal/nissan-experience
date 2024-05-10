import { NavLink, Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import logo from "../assets/logos/logo.svg";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/">Overview</NavLink>
      <NavLink to="/">Gallery</NavLink>
      <NavLink to="/">Features</NavLink>
      <NavLink to="/">Specs</NavLink>
      <NavLink to="/">Offers</NavLink>
      <NavLink
        to="/"
        className="flex items-center justify-center text-[13.5px] border border-gray-100 rounded-full h-10 w-40 -my-2 hover:bg-red-700 hover:border-none duration-700"
      >
        Buy Now
        <FaArrowRightLong className="ml-3 text-xl" />
      </NavLink>
    </>
  );
};

const CarDetails = () => {
  return (
    <main className="border-box mb-">
      <Link to="/">
        <img
          src={logo}
          alt="Logo"
          className="absolute left-4 h-30 top-7 z-10"
        />
      </Link>

      <div>
        <NavLinks />
      </div>
    </main>
  );
};

export default CarDetails;
