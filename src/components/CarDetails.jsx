import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/logos/logo.svg";
import { motion } from "framer-motion";
import temporarybackground from "../assets/largephotos/kicks-xl.webp";

const NavLinks = () => {
  return (
    <>
      <NavLink to="">Overview</NavLink>
      <NavLink to="">Gallery</NavLink>
      <NavLink to="">Features</NavLink>
      <NavLink to="">Specs</NavLink>
      <NavLink to="">Offers</NavLink>
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
  //name of state, function name of state.
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen); //Toggles navigation bar icons.
  };
  return (
    <main className="relative h-screen bg-gradient-to-r from-stone-200 to-slate-800">
      <div>
        <motion.img
          src={temporarybackground}
          className="absolute w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        />
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="absolute left-4 h-30 top-7 z-10"
          />
        </Link>
        <>
          <nav className="flex justify-end">
            <div className="hidden justify-end md:flex gap-6 text-white font-medium px-12 py-16 z-0">
              <NavLinks />
            </div>
            <div className="md:hidden z-10">
              <motion.button whileTap={{ rotate: 20 }} onClick={toggleNavbar}>
                {isOpen ? (
                  <IoMdClose className="absolute right-4 text-3xl text-white" />
                ) : (
                  <HiOutlineMenuAlt3 className=" text-white text-3xl mr-3 mt-4" />
                )}
              </motion.button>
            </div>
          </nav>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="relative h-full flex flex-col items-center gap-4 -my-6 py-24 text-white md:hidden bg-gradient-to-r from-slate-600 to-slate-950 "
            >
              <NavLinks />
            </motion.div>
          )}
        </>
        <div className="absolute my-24 ml-8 flex flex-col items-center mr-6 whitespace-nowrap">
          <span className="text-white text-sm md:text-base lg:text-lg">
            2024 NISSAN
          </span>
          <span className="text-white text-sm md:text-base lg:text-6xl">
            GT-R
          </span>
          <span className="ml-20 -my-6 md:-my-16 text-white text-xs md:text-sm lg:text-base">
            ®
          </span>
        </div>
      </div>
    </main>
  );
};

export default CarDetails;
