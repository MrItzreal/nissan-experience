// import { useState } from "react";
// import carData from "../data/cars.json";

import rogueprofile from "../assets/profilephotos/rogue-profile.avif";

const CarGrids = () => {
  return (
    <main className="bg-neutral-900">
      <div className="container mx-auto px-8 py-14 pt-6 ">
        <h6 className="text-white whitespace-nowrap font-bold text-sm md:text-lg">
          Crossover & SUVs
        </h6>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 justify-center gap-6">
          <div className="relative mb-6">
            <img src={rogueprofile} className="rounded-2xl border" />
            <div className="absolute bottom-0 left-0 right-0 my-24 ml-8">
              <div className="flex flex-col items-center mr-6 -my-4 whitespace-nowrap">
                <h2 className="text-white text-xs  md:text-base">
                  2024 NISSAN ROGUE
                </h2>
                <h2 className=" text-white text-xs md:text-base ">
                  Starting at $28,000
                </h2>
                <h2 className="text-white text-xs md:text-base ">
                  Trims: FWD/AWD
                </h2>
              </div>
            </div>

            <button className="absolute inset-x-0 bottom-0 h-16 p-2  rounded-b-lg border  border-gray-100 bg-gray-800 hover:bg-red-700 duration-700">
              <p className="text-white text-base md:text-lg">Buy Now</p>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CarGrids;

// <img src={pathfinderprofile} className="relative rounded-lg h-5/6" />
// <img src={ariyaprofile} className="relative rounded-lg h-5/6" />
// <img src={kickprofile} className="relative rounded-lg h-5/6" />
// <img src={muranoprofile} className="relative rounded-lg h-5/6" />
// <img src={armadaprofile} className="relative rounded-lg h-5/6" />
