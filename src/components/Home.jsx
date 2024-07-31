import { useState, useRef, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../assets/logos/logo.svg";
import CarPreview from "./CarPreview";
import CarGrids from "./CarGrids";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";
import { motion } from "framer-motion";
import useAppContext from "../context";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/#vehicles">Vehicles</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contactus">Contact Us</NavLink>
    </>
  );
};

const Home = () => {
  const { vehicles, loading } = useAppContext(); //gives access to all vehicles

  // Dynamically loads background image based on screen size (large/small).
  const [backgroundImage, setBackgroundImage] = useState({
    large: "/images/rogue.avif",
    small: "/profilephotos/rogue-profile.avif",
  });

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const setCarBackgroundImage = (images) => {
    setBackgroundImage({
      large: images.image,
      small: images.profilephoto,
    });
  };

  //Provides the useState for the toggle effect.
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

  // I called this console so the loading & vehicles are called if not I'll get an error
  console.log({ loading, vehicles });

  return (
    <>
      <main className="h-screen relative">
        <motion.img
          src={isLargeScreen ? backgroundImage.large : backgroundImage.small}
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
              className="relative h-full flex flex-col text-xl items-center gap-4 -my-6 py-36 border-4 text-white md:hidden bg-gradient-to-r from-slate-600 to-slate-950 "
            >
              <NavLinks />
            </motion.div>
          )}
        </>

        <section
          className={`text-white absolute inset-x-0 bottom-1/4 ${
            isOpen ? "hidden" : ""
          }`}
        >
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
          <CarPreview setCarBackgroundImage={setCarBackgroundImage} />
        </section>
      </main>
      {/* Displays All Nissan Vehicles */}
      <CarGrids ref={carGridsRef} id="vehicles" />
    </>
  );
};

export default Home;
