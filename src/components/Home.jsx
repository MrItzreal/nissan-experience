import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import logo from "../assets/logos/logo.svg";
import CarPreview from "./CarPreview";
import carData from "../data/cars.json";

const Home = () => {
  //name of state, function name of state.
  const [backgroundImage, setBackgroundImage] = useState(
    "src/assets/images/rogue.avif"
  );

  const setCarBackgroundImage = (car) => {
    setBackgroundImage(car);
  };

  return (
    <main className="h-screen relative ">
      <img
        src={backgroundImage}
        className="absolute w-full h-full object-cover"
      />

      <header className="absolute z-10 top-0 left-0 right-0 px-4">
        <nav className="flex items-center justify-end">
          <a href="blank_">
            <img src={logo} alt="Logo" className="absolute left-4 h-30 top-7" />
          </a>
          <ul className="flex gap-6 text-white font-medium px-10 py-16">
            <li>
              <a href="blank_">Vehicles</a>
            </li>
            <li>
              <a href="blank_">Shop</a>
            </li>
            <li>
              <a href="blank_">Electric</a>
            </li>
            <li>
              <a href="blank_">Owners</a>
            </li>
            <li>
              <a href="blank_">Dealers</a>
            </li>
          </ul>

          <div className="flex items-center justify-center text-[13.5px] text-white mr-16 border border-gray-100 rounded-full h-10 w-40 z-10 hover:bg-red-700 hover:border-none duration-700">
            <a href="blank_">Build & Price</a>
            <FaArrowRightLong className="ml-3 text-xl" />
          </div>
        </nav>
      </header>

      <section className="text-white absolute inset-x-0 bottom-1/4">
        <h2 className="text-4xl text-center">Adventure Ready</h2>
        <div className="flex justify-center mt-4">
          <p>Starting at $28,850 [*]</p>
          <a href="blank_" className="ml-4">
            View Offers
          </a>
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex items-center justify-center text-[14.5px] border border-gray-100 rounded-full h-12 w-48 hover:bg-white hover:text-red-700 hover:border-none duration-300">
            <a href="blank_">Explore Vehicles®</a>
            <FaArrowRightLong className="ml-2 text-xl" />
          </div>
        </div>

        {/* Car Model's Preview */}
        <CarPreview
          carData={carData}
          setCarBackgroundImage={setCarBackgroundImage}
        />
      </section>
    </main>
  );
};

export default Home;
