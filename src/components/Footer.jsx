import { useState } from "react";
import { TiChevronRight } from "react-icons/ti";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Tiktok from "../assets/logos/tiktok.svg";
import Instagram from "../assets/logos/instagram.svg";
import YouTube from "../assets/logos/youtube.svg";
import X from "../assets/logos/x.svg";
import Facebook from "../assets/logos/facebook.svg";
import Pinterest from "../assets/logos/pinterest.svg";

const Footer = () => {
  //name of state, function name of state.
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const toggleLanguage = () => {
    setSelectedLanguage((prevLanguage) =>
      prevLanguage === "English" ? "Spanish" : "English"
    );
  };

  return (
    <footer className="bg-neutral-900">
      <main className="container px-8 py-14 mx-auto">
        <section className="flex justify-between text-center">
          <span className="flex items-center text-sm text-gray-800 dark:text-white tracking-wide">
            Nissan USA
            <TiChevronRight className="text-xl text-neutral-500" />
            <a href="/" className="ml-2 font-bold hover:underline">
              Home
            </a>
          </span>

          <div>
            <div className="flex justify-center items-center w-full">
              <p className="flex text-sm p-4 font-bold tracking-wide text-white hover:underline">
                {selectedLanguage}
              </p>

              <button className="flex	justify-center" onClick={toggleLanguage}>
                {selectedLanguage === "English" ? (
                  <FaChevronDown className="-mx-2 text-lg text-neutral-500 " />
                ) : (
                  <FaChevronUp className="-mx-2 text-lg text-neutral-500  " />
                )}
              </button>
            </div>

            <a
              href="#"
              className="flex justify-center items-center text-sm text-white whitespace-nowrap"
            >
              Live Chat <IoChatbubbleOutline className="ml-1" />
            </a>
          </div>
        </section>

        {/* FOOTER OPTIONS */}
        <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 justify-items-center">
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              ABOUT
            </h3>

            <div className="flex flex-col items-start mt-4 space-y-4">
              <a
                href="#"
                className="text-sm text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                About Nissan
              </a>
              <a
                href="#"
                className="text-sm text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Sustainability & Diversity
              </a>
              <a
                href="#"
                className="text-sm text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                News & Events
              </a>
              <a
                href="#"
                className="text-sm text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Business & Fleet
              </a>
              <a
                href="#"
                className="text-sm text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Nissan Rental Car Program
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-m font-medium text-gray-500 dark:text-gray-400">
              SHOP
            </h3>

            <div className="flex flex-col items-start mt-4 space-y-4">
              <a
                href="#"
                className="text-sm text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Nissan at Home
              </a>
              <a
                href="#"
                className="text-sm text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                All Vehicles
              </a>
              <a
                href="#"
                className="text-sm text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Search Inventory
              </a>
              <a
                href="#"
                className="text-sm text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                View a Brochure
              </a>
              <a
                href="#"
                className="text-sm text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Compare Competitors
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              OWNERS
            </h3>

            <div className="flex flex-col items-start mt-4 space-y-4">
              <a
                href="#"
                className="text-sm text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                MyNISSAN Owner Portal
              </a>
              <a
                href="#"
                className="text-sm text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Schedule Service
              </a>
              <a
                href="#"
                className="text-sm text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Manuals & Guides
              </a>
              <a
                href="#"
                className="text-sm text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Maintenance Schedules
              </a>
              <a
                href="#"
                className="text-sm text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                NissanConnect
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              OFFERS & FINANCING
            </h3>

            <div className="flex flex-col items-start mt-4 space-y-4">
              <a
                href="#"
                className="text-sm text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Deals & Offers
              </a>
              <a
                href="#"
                className="text-sm text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Financing Options
              </a>
              <a
                href="#"
                className="text-sm text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Estimate Payments
              </a>
              <a
                href="#"
                className="text-sm text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Get Pre-Approved
              </a>
              <a
                href="#"
                className="text-sm text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Estimate Credit Scores
              </a>
            </div>
          </div>
        </div>

        {/* SOCIAL MEDIA ICONS */}
        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />
        <section className="flex items-center justify-between sm:flex-row ">
          <ul className="flex">
            <li className="bg-white rounded-md mx-2">
              <a
                href="https://www.tiktok.com/@nissanusa?lang=en"
                target="blank_"
              >
                <img src={Tiktok} />
              </a>
            </li>
            <li className="bg-white rounded-md mx-2">
              <a href="https://www.instagram.com/nissanusa/" target="blank_">
                <img src={Instagram} />
              </a>
            </li>
            <li className="bg-white rounded-md mx-2">
              <a
                href="https://www.youtube.com/user/nissanusa/featured"
                target="blank_"
              >
                <img src={YouTube} />
              </a>
            </li>
            <li className="rounded-md bg-white mx-2">
              <a href="https://twitter.com/NissanUSA" target="blank_">
                <img src={X} />
              </a>
            </li>
            <li className="bg-white rounded-md mx-2">
              <a href="https://www.facebook.com/nissanusa/" target="blank_">
                <img src={Facebook} />
              </a>
            </li>
            <li className="bg-white rounded-md mx-2">
              <a href="https://www.pinterest.com/nissanusa/" target="blank_">
                <img src={Pinterest} />
              </a>
            </li>
          </ul>
          <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-300">
            © NISSAN USA 2024
          </p>
        </section>
      </main>
    </footer>
  );
};

export default Footer;
