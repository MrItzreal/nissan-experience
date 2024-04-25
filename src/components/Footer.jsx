import { TiChevronRight } from "react-icons/ti";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-900">
      <div className="container px-8 py-12 mx-auto">
        <div className="flex justify-between text-center">
          <span className="flex text-sm text-gray-800 dark:text-white tracking-wide	">
            Nissan USA
            <TiChevronRight className="text-xl text-neutral-500" />
            <p className="ml-2 font-bold">Home</p>
          </span>

          <div className="flex sm:flex-row sm:items-center sm:justify-center ">
            <button className="flex text-sm font-medium tracking-wide text-white mx-8">
              English
              <FaChevronDown className="text-xl text-neutral-500 ml-1" />
            </button>
            <a href="#" className="flex text-sm text-white tracking-wide">
              Live Chat <IoChatbubbleOutline className="ml-1" />
            </a>
          </div>
        </div>

        <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 justify-items-center">
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
              ABOUT
            </h3>

            <div className="flex flex-col items-start mt-4 space-y-4">
              <a
                href="#"
                className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                About Nissan
              </a>
              <a
                href="#"
                className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Sustainability & Diversity
              </a>
              <a
                href="#"
                className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                News & Events
              </a>
              <a
                href="#"
                className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Business & Fleet
              </a>
              <a
                href="#"
                className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Nissan Rental Car Program
              </a>
              <a
                href="#"
                className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Accessibility
              </a>
              <a
                href="#"
                className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Cookie Settings
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
                className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Nissan at Home
              </a>
              <a
                href="#"
                className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                All Vehicles
              </a>
              <a
                href="#"
                className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Search Inventory
              </a>
              <a
                href="#"
                className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                View a Brochure
              </a>
              <a
                href="#"
                className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Compare Competitors
              </a>
              <a
                href="#"
                className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Build & Price
              </a>
              <a
                href="#"
                className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Locate a Dealer
              </a>
              <a
                href="#"
                className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Parts & Accessories
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
                className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                MyNISSAN Owner Portal
              </a>
              <a
                href="#"
                className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Schedule Service
              </a>
              <a
                href="#"
                className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Manuals & Guides
              </a>
              <a
                href="#"
                className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Maintenance Schedules
              </a>
              <a
                href="#"
                className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                NissanConnect
              </a>
              <a
                href="#"
                className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Extended Protection Plans
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
                className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Deals & Offers
              </a>
              <a
                href="#"
                className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Financing Options
              </a>
              <a
                href="#"
                className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Estimate Payments
              </a>
              <a
                href="#"
                className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Get Pre-Approved
              </a>
              <a
                href="#"
                className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Estimate Credit Scores
              </a>
              <a
                href="#"
                className="text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-blue-400 hover:underline hover:text-blue-600"
              >
                Get Internet Quote
              </a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        <div className="flex items-center justify-between sm:flex-row ">
          <ul className="flex">
            <li className="bg-white rounded-md mx-2">
              <a href="blank_">
                <img src="./src/assets/logos/tiktok.svg" />
              </a>
            </li>
            <li className="bg-white rounded-md mx-2">
              <a href="blank_">
                <img src="./src/assets/logos/instagram.svg" />
              </a>
            </li>
            <li className="bg-white rounded-md mx-2">
              <a href="blank_">
                <img src="./src/assets/logos/youtube.svg" />
              </a>
            </li>
            <li className="rounded-md bg-white mx-2">
              <a href="blank_">
                <img src="./src/assets/logos/x.svg" />
              </a>
            </li>
            <li className="bg-white rounded-md mx-2">
              <a href="blank_">
                <img src="./src/assets/logos/facebook.svg" />
              </a>
            </li>
            <li className="bg-white rounded-md mx-2">
              <a href="blank_">
                <img src="./src/assets/logos/pinterest.svg" />
              </a>
            </li>
          </ul>
          <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-300">
            © NISSAN USA 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
