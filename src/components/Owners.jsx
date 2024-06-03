import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/logos/logo.svg";
import ownersXl from "/xlargephotos/owners-xl.webp";
import ownersMd from "/mediumphotos/owners-md.webp";
import ownersSm from "/smallphotos/owners-sm.webp";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/#vehicles">Vehicles</NavLink>
      <NavLink to="/owners">Owners</NavLink>
      <NavLink to="/">Dealers</NavLink>
      <NavLink
        to="/"
        className="flex items-center justify-center text-[13.5px] border border-gray-100 rounded-full h-10 w-40 -my-2 hover:bg-red-700 hover:border-none duration-700"
      >
        Sign In
        <FaArrowRightLong className="ml-3 text-xl" />
      </NavLink>
    </>
  );
};

const Owner = () => {
  //name of state, function name of state.
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen); //Toggles navigation bar icons.
  };
  return (
    <>
      <main className="relative h-svh bg-gradient-to-r from-stone-200 to-slate-800">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Large Background (Large Screens) */}
          <div>
            <motion.img
              src={ownersXl}
              alt="Background Image (Large)"
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            />
          </div>

          {/* Medium Background (Medium Screens) */}
          <div className="lg:hidden">
            <img
              src={ownersMd}
              alt="Background Image (Medium)"
              className="absolute top-0 left-0 w-full h-full object-cover z-1"
            />
          </div>

          {/* Small Background (Small Screens) */}
          <div className="md:hidden lg:hidden xl:hidden">
            <img
              src={ownersSm}
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
                className="relative h-full flex flex-col items-center gap-4 -my-6 py-40 border-4 text-white md:hidden bg-gradient-to-r from-slate-600 to-slate-950"
              >
                <NavLinks />
              </motion.div>
            )}
          </>

          {/* Car Model Display & Mobile Drop Down Menu*/}
          <div className="relative p-8 top-96 py-32 md:p-80 md:top-20 md:py-10 lg:p-80 lg:top-20 lg:py-10 italic ">
            <div
              className={`absolute flex flex-col items-center whitespace-nowrap ${
                isOpen ? "hidden" : ""
              }`}
            >
              <span className="text-white text-lg">Reimagine Your Drive</span>
              <span className="relative text-white text-3xl sm:text-5xl">
                <p className="absolute top-0 right-0 -mx-4 text-white text-xs md:text-sm lg:text-base">
                  With a Nissan ®
                </p>
              </span>
            </div>
          </div>
        </div>
      </main>

      {/*VEHICLE OVERVIEW */}

      <section className="bg-neutral-900">
        <div className="container mx-auto px-14">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white md:whitespace-normal whitespace-nowrap text-center md:text-left"
            id="overview"
          >
            <div className="-mx-8 text-lg md:text-7xl">
              <p>Where To Explore Next?</p>
            </div>

            <div className="flex flex-col justify-center gap-4 md:gap-6">
              <p className="text-lg sm:text-xl -mt-8 md:mt-4">Starting At</p>
              <p className="-mx-8 sm:-mx-0 text-3xl sm:text-5xl">
                <span>$</span>
              </p>
              <p className="flex justify-center text-base md:text-lg text-wrap">
                <span></span>
              </p>
            </div>
          </div>
          <hr className="border-gray-200  mx-auto mt-8" />
        </div>

        {/* PERFORMANCE SECTION */}

        <div className="text-white text-center">
          <div className="m-4 p-2 text-lg sm:text-2xl mb-4">
            <span>PERFORMANCE</span>
          </div>

          <div className="flex flex-col lg:flex-row justify-center gap-4 md:gap-6">
            <div className="flex flex-col">
              <span className="text-3xl md:text-8xl"></span>
              <p className="text-lg sm:text-xl mt-2"></p>
            </div>
            <div className="flex flex-col border-l border-gray-200 pl-4 md:pl-8">
              <span className="text-3xl md:text-8xl"></span>
              <p className="text-lg sm:text-xl mt-2"></p>
            </div>
            <div className="flex flex-col border-l border-gray-200 pl-4 md:pl-8">
              <span className="text-3xl md:text-8xl"></span>
              <p className="text-lg sm:text-xl mt-2"></p>
            </div>
          </div>
        </div>

        {/* CAR IMAGES */}
        <div className="container mx-auto py-14 text-white ">
          <div className="flex flex-col lg:flex-row shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
            <>
              <img src="" className="h-[650px] w-[450px] object-cover " />

              <img src="" className="h-[650px] w-[450px] object-cover " />
              <img src="" className=" w-[650px] object-cover " />
            </>
          </div>

          {/* HERO TEXT */}
          <h2
            className="text-white text-center py-6 text-xl sm:text-3xl italic font-medium"
            id="features"
          >
            BUILT TO MOVE YOU!
          </h2>

          {/* BANNER PHOTO */}
          <div className="flex justify-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
            <img src="" />
          </div>

          {/* SPECIFICATIONS & FEATURES */}
          <div className="flex justify-center my-8">
            <div className="grid grid-cols-1 md:grid-cols-2  items-center text-white gap-12 p-4 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-500 via-neutral-900 to-stone-900 w-full rounded-xl">
              <h2 className="text-center text-2xl sm:text-5xl">FEATURES:</h2>
              <ul className="text-base sm:text-xl list-disc p-2">
                <li>
                  <span>.</span>
                </li>
                <li>
                  <span>. </span>
                </li>
                <li>
                  <span>.</span>
                </li>
                <li>
                  <span>.</span>
                </li>
                <li>
                  <span>.</span>
                </li>
              </ul>

              <h2 className="text-center text-2xl sm:text-5xl" id="specs">
                SPECIFICATIONS:
              </h2>

              <ul className="text-base sm:text-xl list-disc p-2 ">
                <li>
                  <span>.</span>
                </li>
                <li>
                  <span>.</span>
                </li>
                <li>
                  <span>.</span>
                </li>
                <li>
                  <span>.</span>
                </li>
                <li>
                  <span>.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Owner;
