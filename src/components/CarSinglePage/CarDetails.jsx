import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import logo from "../../assets/logos/logo.svg";
import { motion } from "framer-motion";
import largebackground from "../../assets/xlargephotos/ariya-xl.webp";
import mediumBackground from "../../assets/mediumphotos/ariya-md.webp";
import smallBackground from "../../assets/smallphotos/ariya-sm.webp";
import Overview from "./Overview";

const NavLinks = () => {
  return (
    <>
      <NavLink to="">Overview</NavLink>
      <NavLink to="">Features</NavLink>
      <NavLink to="">Specs</NavLink>

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
    <>
      <main className="relative h-svh bg-gradient-to-r from-stone-200 to-slate-800 ">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Large Background (Large Screens) */}
          <div>
            <motion.img
              src={largebackground}
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            />
          </div>

          {/* Medium Background (Medium Screens) */}
          <div className="lg:hidden">
            <img
              src={mediumBackground}
              alt="Background Image (Medium)"
              className="absolute top-0 left-0 w-full h-full object-cover z-1"
            />
          </div>

          {/* Small Background (Small Screens) */}
          <div className="md:hidden lg:hidden xl:hidden">
            <img
              src={smallBackground}
              alt="Background Image (Small)"
              className="absolute top-0 left-0 w-full h-full object-cover z-2"
            />
          </div>

          {/* NISSAN LOGO DO NOT TOUCH THIS */}
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
                className="relative h-full flex flex-col items-center gap-4 -my-6 py-24 text-white md:hidden bg-gradient-to-r from-slate-600 to-slate-950"
              >
                <NavLinks />
              </motion.div>
            )}
          </>

          {/* Car Model Display */}
          <div className="relative p-6 top-96 py-40 md:p-80 md:top-20 md:py-10 lg:p-80 lg:top-20 lg:py-10  italic ">
            <div
              className={`absolute flex flex-col items-center whitespace-nowrap ${
                isOpen ? "hidden" : ""
              }`}
            >
              <span className="text-white text-lg">2024 NISSAN</span>
              <span className="relative text-white text-5xl">
                PATHFINDER
                <p className="absolute top-0 right-0 -mx-4 text-white text-xs md:text-sm lg:text-base">
                  ®
                </p>
              </span>
            </div>
          </div>
        </div>
      </main>
      <Overview />
    </>
  );
};

export default CarDetails;
