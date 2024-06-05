import { useState, useRef, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import logo from "../assets/logos/logo.svg";
import CarPreview from "./CarPreview";
import CarGrids from "./CarGrids";
import carData from "../data/cars.json";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";
import { motion } from "framer-motion";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/#vehicles">Vehicles</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contactus">Contact Us</NavLink>
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

const Home = () => {
  //name of state, function name of state.
  const [backgroundImage, setBackgroundImage] = useState("images/rogue.avif");

  const setCarBackgroundImage = (car) => {
    setBackgroundImage(car);
  };

  //name of state, function name of state.
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen); //Toggles navigation bar icons.
  };

  //Creates the reference so when button is clicked the transition takes place.
  const carGridsRef = useRef(null);

  // location & useEffect hooks also utilize the carGridsRef
  // but differ in the button triggered to scroll down to the CarGrids component.
  // Explore Vehicles & Vehicles are 2 different buttons but scroll to the CarGrids component.

  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#vehicles") {
      carGridsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <main className="h-screen relative">
        <motion.img
          src={backgroundImage}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        />

        {/* NISSAN LOGO DO NOT TOUCH THIS */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="absolute left-4 h-30 top-7 z-20"
          />
        </Link>

        <>
          <nav className="flex justify-end">
            <div className="hidden w-full justify-end z-10 md:flex gap-6 text-white font-medium px-10 py-16">
              <NavLinks />
            </div>
            <div className="md:hidden z-10">
              <motion.button whileTap={{ rotate: 20 }} onClick={toggleNavbar}>
                {isOpen ? (
                  <IoMdClose className="absolute right-4 text-3xl text-white" />
                ) : (
                  <HiOutlineMenuAlt3 className="text-white text-3xl mr-3 mt-4" />
                )}
              </motion.button>
            </div>
          </nav>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="relative h-full flex flex-col items-center gap-4 -my-6 py-36 border-4 text-white md:hidden bg-gradient-to-r from-slate-600 to-slate-950 "
            >
              <NavLinks />
            </motion.div>
          )}
        </>

        <section className="text-white absolute inset-x-0 bottom-1/4">
          <h2 className="text-4xl text-center">Adventure Ready?</h2>
          <div className="flex justify-center mt-4">
            <span className="flex items-center text-xl italic">
              Find YOUR Nissan!
            </span>
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={() =>
                carGridsRef.current.scrollIntoView({ behavior: "smooth" })
              }
              className="flex flex-col items-center justify-center text-[14.5px] border border-gray-100 rounded-full h-12 w-48 hover:bg-white hover:text-red-700 hover:border-none duration-300"
            >
              <span>Explore Vehicles®</span>
              <IoChevronDown className="text-xl -my-1" />
            </button>
          </div>

          {/* Car Model's Preview */}
          <CarPreview
            carData={carData}
            setCarBackgroundImage={setCarBackgroundImage}
          />
        </section>
      </main>
      {/* Displays All Nissan Vehicles */}
      <CarGrids ref={carGridsRef} id="vehicles" />
    </>
  );
};

export default Home;
