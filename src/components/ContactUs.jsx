import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logos/logo.svg";
import { IoChevronForward } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

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

const ContactUs = () => {
  //name of state, function name of state.
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen); //Toggles navigation bar icons.
  };
  return (
    <>
      <main className="relative bg-gradient-to-r from-slate-800 to-stone-400">
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
              className="relative h-full flex flex-col items-center gap-4 mt-36 text-white md:hidden bg-gradient-to-r from-slate-800 to-stone-400"
            >
              <NavLinks />
            </motion.div>
          )}
        </>

        {/*SUBMIT FORM  */}
        <div className="container m-auto max-w-2xl py-16">
          <div className="bg-gray-300 px-6 py-8 mb-4 shadow-md rounded-md border m-8 md:m-0">
            <form>
              <h2 className="text-3xl text-center font-semibold mb-6">
                Contact Nissan
              </h2>

              <h2 className="mb-6">
                <span className="font-bold">SEND US A MESSAGE: </span>If you
                would like to send a question or comment to Nissan, please
                complete the form below.
              </h2>

              <h3 className="font-semibold mb-6">*Required Fields</h3>

              <div className="mb-4">
                <label
                  htmlFor="company"
                  className="block text-gray-700 font-bold mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="border rounded w-full py-2 px-3"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="company"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="border rounded w-full py-2 px-3"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="contact_email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  *Contact Email
                </label>
                <input
                  type="email"
                  id="contact_email"
                  name="contact_email"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Email address"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="contact_phone"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Contact Phone
                </label>
                <input
                  type="tel"
                  id="contact_phone"
                  name="contact_phone"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Optional phone number"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="contact_phone"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Location
                </label>
                <input
                  type="tel"
                  id="contact_phone"
                  name="contact_phone"
                  className="border rounded w-full py-2 px-3"
                  placeholder="ex: Country/State/City"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  *Are You a Nissan Owner?
                </label>
                <select
                  id="type"
                  name="type"
                  className="border rounded w-full py-2 px-3 font-semibold"
                  required
                >
                  <option value="options">Select an option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  *Select a Subject
                </label>
                <select
                  id="type"
                  name="type"
                  className="border rounded w-full py-2 px-3 font-semibold"
                  required
                >
                  <option value="options">I have a question/comment...</option>
                  <option value="options">Shopping for a Nissan Vehicle</option>
                  <option value="options">My current Nissan Vehicle</option>
                  <option value="options">NissanConnect Services</option>
                  <option value="options">A Nissan Dealer</option>
                  <option value="options">Other</option>
                </select>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-bold mb-2"
                >
                  *Message
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="How can we assist you?"
                  required
                ></textarea>
              </div>

              <div>
                <button
                  className="flex items-center border border-gray-900 rounded-lg hover:bg-red-700 hover:text-white hover:border-none duration-700 font-bold py-2 px-4 focus:outline-none focus:shadow-outline "
                  type="submit"
                >
                  Submit <IoChevronForward className="ml-1" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactUs;
