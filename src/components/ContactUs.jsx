/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
        className="flex items-center justify-center border border-gray-100 rounded-full h-10 w-40 -my-2 hover:bg-red-700 hover:border-none duration-700"
      >
        Buy a Nissan
        <FaArrowRightLong className="ml-3 text-xl" />
      </NavLink>
    </>
  );
};

const ContactUs = ({ addFormSubmit }) => {
  //name of state, function name of state.
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen); //Toggles navigation bar icons.
  };

  //Submits New Form
  useEffect(() => {
    const fetchForms = async () => {
      try {
        const res = await fetch("http://localhost:8000/forms");
        const data = await res.json();
      } catch (error) {
        console.log("Error submitting form", error);
      }
    };

    fetchForms();
  }, []);

  //useState for formData.json
  //NOTE: adding a state for every field in your form is good practice.
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [nissanOwner, setNissanOwner] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //useNavigate allows you to navigate to a different URL within a functional component
  //We have to initialize this hook before using it.
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const newForm = {
      //Object has to match the same structure of our mock API.
      firstName,
      lastName,
      email,
      phone,
      location,
      nissanOwner,
      subject,
      message,
    };

    addFormSubmit(newForm); //1st, This submits the form

    toast.success("Form has been submitted!"); //gives a beautiful pop-up

    return navigate("/"); //2nd,This redirects to home page.
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
            <form onSubmit={submitForm}>
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
                  htmlFor="first_name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="border rounded w-full py-2 px-3"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="last_name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  className="border rounded w-full py-2 px-3"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="location"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="border rounded w-full py-2 px-3"
                  placeholder="ex: Country/State/City"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
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
                  value={nissanOwner}
                  onChange={(e) => setNissanOwner(e.target.value)}
                >
                  <option value="options">Select an option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
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
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                >
                  <option value="I have a question/comment...">
                    I have a question/comment...
                  </option>
                  <option value="Shopping for a Nissan Vehicle">
                    Shopping for a Nissan Vehicle
                  </option>
                  <option value="My current Nissan Vehicle">
                    My current Nissan Vehicle
                  </option>
                  <option value="NissanConnect Services">
                    NissanConnect Services
                  </option>
                  <option value="A Nissan Dealer">A Nissan Dealer</option>
                  <option value="Other">Other</option>
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  className="flex items-center border border-gray-900 rounded-lg hover:bg-red-700 hover:text-white hover:border-none duration-700 font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
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
