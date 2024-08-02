/* eslint-disable react/no-unescaped-entities */
import { useState, useMemo } from "react";
import { NavLink, Link, useParams } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/logos/logo.svg";
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

const Checkout = () => {
  // This function connects to our stripe.js file
  const handleCheckoutClick = async () => {
    try {
      const res = await fetch("http://localhost:4242/stripe-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ car }),
      });

      if (res.ok) {
        const { url } = await res.json();
        window.location.href = url;
      } else {
        console.error("Error from backend:", res.statusText);
      }
    } catch (err) {
      console.error("Error sending payment info to backend", err);
    }
  };

  //name of state, function name of state.
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen); //Toggles navigation bar icons.
  };

  //Retrieves car details from DB for current route.
  const { id } = useParams();
  const { vehicles } = useAppContext();
  const car = useMemo(
    () => vehicles.find(({ car_id }) => car_id === id),
    [id, vehicles]
  );

  if (!car) return null;

  return (
    <motion.main
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="sm:py-6 bg-gradient-to-r from-slate-800 to-stone-700"
    >
      {/* NISSAN LOGO DO NOT TOUCH THIS */}
      <Link to="/">
        <img
          src={logo}
          alt="Logo"
          className="absolute left-4 h-20 sm:h-[98px] top-7 z-10"
        />
      </Link>

      {/* NAV BAR */}
      <>
        <nav className="flex justify-end mb-16">
          <div className="hidden justify-end md:flex gap-6 text-white font-medium px-12 py-12 z-10">
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
            className="relative h-full flex flex-col items-center gap-4 py-24 text-white md:hidden bg-gradient-to-r from-slate-800 to-stone-700"
          >
            <NavLinks />
          </motion.div>
        )}
      </>

      {/* CHECKOUT SECTION */}
      <section className="container mx-auto text-white ">
        <div
          className={`flex flex-col lg:flex-row shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] ${
            isOpen ? "hidden" : ""
          }`}
        >
          <img
            src={car.images.profilephoto}
            className="h-[650px] w-[850px] object-cover rounded-md"
          />

          <div className="flex flex-col border rounded-xl bg-gradient-to-r from-slate-800 to-stone-700">
            <div className="relative m-8 text-base sm:text-xl">
              <div className="flex justify-center items-center h-30 mb-4">
                <img src={logo} alt="Logo" className="h-20 sm:h-[98px]" />
              </div>

              <div className="space-y-2">
                <h4 className="text-xl sm:text-3xl text-center">
                  Order Summary
                </h4>
                <hr className="mx-16" />
                <h4>
                  <strong>Model:</strong> {car.model}.
                </h4>
                <h4>
                  <strong>Category:</strong> {car.category}.
                </h4>
                <h4>
                  <strong>Trim:</strong> FWD/AWD.
                </h4>
                <h4>
                  <strong>Quantity:</strong> 1.
                </h4>
                <h4>
                  <strong>Total:</strong> ${car.price}.
                </h4>
              </div>

              <p className="container mx-auto text-base text-justify text-gray-200 mt-7">
                <strong>Disclaimer:</strong> This website is a demonstration
                project created for educational purposes only. It is not
                affiliated with, endorsed by, or representative of Nissan Motor
                Corporation. No actual transactions or purchases can be made on
                this site.
              </p>
            </div>

            {/*CHECKOUT BUTTON */}
            <div className="flex justify-center">
              <button
                type="button"
                onClick={handleCheckoutClick}
                className="flex items-center justify-center  border border-gray-100 rounded-xl h-12 w-2/3 sm:w-80 hover:bg-red-700 hover:border-none duration-700"
              >
                CHECKOUT
              </button>
            </div>
            <p className="flex justify-center text-sm sm:text-base mt-2 text-center">
              We appreciate your business and hope to see you soon!
            </p>
            <p className="text-end text-xs sm:text-sm text-gray-500 dark:text-gray-300 m-2 mr-2">
              © NISSAN USA 2024
            </p>
          </div>
        </div>
      </section>

      {/* LEGAL SECTION & COPYWRITE */}
      <div className={`container mx-auto px-14 py-4 ${isOpen ? "hidden" : ""}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white md:whitespace-normal whitespace-nowrap text-center md:text-left">
          <div className="-mx-8 text-lg md:text-6xl py-2 text-balance	">
            <p>Legal Website Terms Of Use</p>
          </div>

          <div className="flex flex-col justify-center gap-4 md:gap-6">
            <p className="flex justify-center text-lg sm:text-xl -mt-8 md:mt-4">
              LEGAL NOTICE
            </p>

            <p className="flex justify-center text-base md:text-lg text-balance">
              <span>
                These Terms of Use govern the use of Nissan North America,
                Inc.'s websites and mobile apps. The information provided is for
                general purposes only and is subject to change without notice.
                Nissan makes no guarantees about the accuracy of the information
                and users are advised to confirm details with a dealer before
                making a purchase decision. Due to various factors, actual
                vehicles may differ from what is presented on the platforms.
                Specifications and availability may also vary by location.
              </span>
            </p>
          </div>
        </div>
        <hr className="border-gray-200  mx-auto mt-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white md:whitespace-normal whitespace-nowrap text-center md:text-left">
          <div className="-mx-8 text-lg md:text-6xl py-2 text-balance	">
            <p>Copyright / Trademark Information</p>
          </div>

          <div className="flex flex-col justify-center gap-4 md:gap-6">
            <p className="flex justify-center text-lg sm:text-xl -mt-8 md:mt-4">
              COPYRIGHT NOTICE
            </p>

            <p className="flex justify-center text-base md:text-lg text-balance">
              <span>
                The Nissan names, logos and slogans are trademarks owned by or
                licensed to Nissan Motor Co. Ltd. and/or its North American
                subsidiaries. Other trademarks and trade names are those of
                their respective owners. ©2008-2023 Nissan North America, Inc.
                All rights reserved. Materials contained on this website may not
                be used or reproduced without written permission from Nissan
                North America, Inc.
              </span>
            </p>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Checkout;
