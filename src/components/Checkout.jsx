import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/logos/logo.svg";
import { motion } from "framer-motion";
import profilephoto from "../../public/profilephotos/pathfinder-profile.jpg";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/vehicles">Vehicles</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contactus">Contact Us</NavLink>
    </>
  );
};

const Checkout = () => {
  //name of state, function name of state.
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen); //Toggles navigation bar icons.
  };
  return (
    <>
      <main className="relative h-svh bg-gradient-to-r from-stone-200 to-slate-800">
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

        {/* CHECKOUT SECTION */}
        <div className="container mx-auto py-14 text-white">
          <div
            className={`flex flex-col lg:flex-row shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] ${
              isOpen ? "hidden" : ""
            }`}
          >
            <img
              src={profilephoto}
              className="h-[650px] w-[650px] object-cover "
            />

            <div className="flex flex-col border rounded-md bg-gradient-to-r from-slate-800 to-stone-700">
              <div className="relative m-8 text-xl">
                <div className="">
                  <img
                    src={logo}
                    alt="Logo"
                    className="absolute right-4 h-30 z-10 "
                  />
                  <h4>Model: PATHFINDER.</h4>
                  <h4>Category: Crossover & SUVs.</h4>
                  <h4>Trim: AWD.</h4>
                  <h4>Quantity: 1.</h4>
                  <h4>Total: $36,650.</h4>
                  <h4 className="text-balance leading-normal py-8">
                    Disclaimer: This website is a demonstration project created
                    for educational purposes only. It is not affiliated with,
                    endorsed by, or representative of Nissan Motor Corporation.
                    No actual transactions or purchases can be made on this
                    site.
                  </h4>
                </div>
              </div>

              {/* BUTTON */}
              <div className="flex justify-center">
                <NavLink
                  to="/"
                  className="flex items-center justify-center  border border-gray-100 rounded-xl h-12 w-80  hover:bg-red-700 hover:border-none duration-700"
                >
                  CHECKOUT
                </NavLink>
              </div>
              <p className="flex justify-center text-xl mt-4 m-8 text-center">
                We appreciate your business and hope to see you soon!
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Checkout;
