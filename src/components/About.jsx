import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/logos/logo.svg";
import aboutXl from "/xlargephotos/about-xl.webp";
import aboutMd from "/mediumphotos/about-md.webp";
import aboutSm from "/smallphotos/about-sm.webp";
import imgbanner from "/bannerphotos/nissans-banner.webp";
import interiorProfile from "/profilephotos/interior-profile.png";
import outsideProfile from "/profilephotos/outside-profile.webp";
import nissansMd from "/mediumphotos/nissans-md.webp";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/#vehicles">Vehicles</NavLink>
      <NavLink to="/about">About</NavLink>
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
              src={aboutXl}
              alt="Background Image (Large)"
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            />
          </div>

          {/* Medium Background (Medium Screens) */}
          <div className="lg:hidden">
            <img
              src={aboutMd}
              alt="Background Image (Medium)"
              className="absolute top-0 left-0 w-full h-full object-cover z-1"
            />
          </div>

          {/* Small Background (Small Screens) */}
          <div className="md:hidden lg:hidden xl:hidden">
            <img
              src={aboutSm}
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
              <span className="text-white text-xl">Reimagine Your Drive</span>
              <span className="relative text-white text-3xl sm:text-5xl">
                <p>With a Nissan</p>
                <p className="absolute top-0 right-0 -mx-4 text-white text-xs md:text-sm lg:text-base">
                  ®
                </p>
              </span>
            </div>
          </div>
        </div>
      </main>

      {/*MISSION STATEMENT*/}

      <section className="bg-neutral-900">
        <div className="container mx-auto px-14">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white md:whitespace-normal whitespace-nowrap text-center md:text-left"
            id="overview"
          >
            <div className="-mx-8 text-lg md:text-7xl py-2 italic">
              <p>Innovation That Excites!</p>
            </div>

            <div className="flex flex-col justify-center gap-4 md:gap-6">
              <p className="flex justify-center text-lg sm:text-xl -mt-8 md:mt-4">
                OUR MISSION STATEMENT
              </p>

              <p className="flex justify-center text-base md:text-lg text-wrap">
                <span>
                  The power of movement. The thrill of being in the driver’s
                  seat. Innovation without reservation. This is the promise
                  built into every Nissan car, truck, SUV, sports car and EV —
                  one that’s fulfilled every time you take the wheel.
                </span>
              </p>
            </div>
          </div>
          <hr className="border-gray-200  mx-auto mt-8" />
        </div>

        {/* WHAT NISSAN HAS TO OFFER? */}

        <div className="text-white text-center">
          <div className="m-4 p-2 text-lg sm:text-2xl mb-4">
            <span>What Does Nissan Have To Offer?</span>
          </div>

          <div className="flex flex-col lg:flex-row justify-center gap-4 md:gap-6">
            <div className="flex flex-col">
              <span className="text-3xl md:text-8xl">15</span>
              <p className="text-lg sm:text-xl mt-2">Models To Choose From</p>
            </div>
            <div className="flex flex-col border-l border-gray-200 pl-4 md:pl-8">
              <span className="text-3xl md:text-8xl">5</span>
              <p className="text-lg sm:text-xl mt-2">Vehicle Categories</p>
            </div>
            <div className="flex flex-col border-l border-gray-200 pl-4 md:pl-8">
              <span className="text-3xl md:text-8xl">110</span>
              <p className="text-lg sm:text-xl mt-2">
                Years of Manufacturing Experience
              </p>
            </div>
          </div>
        </div>

        {/* NISSAN FOR EVERYONE */}
        <div className="container mx-auto py-14 text-white ">
          <h2 className="text-white text-center text-xl sm:text-3xl italic font-medium">
            A Nissan For Everyone
          </h2>

          <p className="sm:mx-16 md:mx-36 lg:mx-48 text-center text-wrap text-base sm:text-xl py-4">
            Whether you're a new driver, a family adventurer, a creature of
            comfort or just about any other kind of driver, there's a Nissan
            with the tech, the fuel efficiency and the features you need to
            drive your way
          </p>

          {/* BANNER PHOTO */}
          <div className="flex justify-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
            <img src={imgbanner} className="rounded" />
          </div>

          {/* ORIGINS OF NISSAN*/}

          <div className="container mx-auto px-14">
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white md:whitespace-normal whitespace-nowrap text-center md:text-left"
              id="overview"
            >
              <div className="-mx-8 py-4 text-base md:text-6xl italic">
                <p>A Legacy of Innovation</p>
              </div>

              <div className="flex flex-col justify-center gap-4 md:gap-6">
                <p className="flex justify-center text-base sm:text-xl -mt-8 md:mt-4">
                  Origins of Nissan:
                </p>

                <p className="flex justify-center text-base md:text-lg text-wrap">
                  <span>
                    The global automotive manufacturer known today as Nissan
                    first debuted in 1911 when the Kwaishinsha (Kaishinsha)
                    Motor Car Works was founded in Tokyo. 3 years later its
                    first DAT model — an acronym of the initial investors
                    surnames — was produced. The 70s were a great decade for
                    Nissan. Nissan sold the one-millionth Datsun and became the
                    top vehicle importer in the United States by 1975.
                  </span>
                </p>
              </div>
            </div>
            <hr className="border-gray-200  mx-auto mt-8" />
          </div>

          {/*MORE CAR IMAGES */}
          <div className="flex flex-col lg:flex-row shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] py-6">
            <>
              <img
                src={interiorProfile}
                className="h-[650px] w-[450px] object-cover "
              />

              <img
                src={outsideProfile}
                className="h-[650px] w-[450px] object-cover "
              />
              <img
                src={nissansMd}
                className=" h-[650px]  w-[650px] object-cover "
              />
            </>
          </div>

          {/* NISSAN HAS YOU COVERED*/}

          <div className="container mx-auto px-14">
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white md:whitespace-normal whitespace-nowrap text-center md:text-left"
              id="overview"
            >
              <div className="-mx-8 py-4 text-base md:text-6xl italic">
                <p>Regardless of Speed or Power</p>
              </div>

              <div className="flex flex-col justify-center gap-4 md:gap-6">
                <p className="flex justify-center text-base sm:text-3xl -mt-8 md:mt-4 ">
                  Nissan Has You Covered!
                </p>

                <p className="flex justify-center text-base md:text-lg text-wrap">
                  <span>
                    From the rugged capability of our trucks to the electrifying
                    efficiency of our EVs, the versatile comfort of our SUVs,
                    the spirited drive of our sports cars. Nissan's diverse
                    lineup is engineered to match your lifestyle and ambitions.
                    <br />
                    Whether you're conquering tough terrain, commuting through
                    city streets, embarking on a cross-country adventure, or
                    simply seeking the thrill of the open road, there's a Nissan
                    perfectly suited to your needs. Explore our range and
                    discover the innovation, reliability, and performance that
                    have made Nissan a trusted name in automotive excellence for
                    over <span className="font-bold">100 years</span>.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Owner;
