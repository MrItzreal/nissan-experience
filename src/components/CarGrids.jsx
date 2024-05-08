// import { useState } from "react";
// import carData from "../data/cars.json";

import pathfinderprofile from "../assets/profilephotos/pathfinder-profile.jpg";
import rogueprofile from "../assets/profilephotos/rogue-profile.avif";
import ariyaprofile from "../assets/profilephotos/ariya-profile.avif";
import kickprofile from "../assets/profilephotos/kicks-profile.avif";
import muranoprofile from "../assets/profilephotos/murano-profile.webp";
import armadaprofile from "../assets/profilephotos/armada-profile.avif";

const CarGrids = () => {
  return (
    <main className="bg-neutral-900">
      <section className="container mx-auto relative pt-6">
        <h6 className="text-white whitespace-nowrap font-bold text-lg">
          Crossover & SUVs
        </h6>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 justify-center">
          <div className="relative mb-6">
            <img src={rogueprofile} className="rounded-2xl border" />
            <div className="absolute bottom-0 left-0 mb-24 ml-8 ">
              <h2 className="text-white text-2xl">2024 NISSAN ROGUE </h2>
              <h2 className=" text-white text-xl">Starting at $28,000</h2>
              <h2 className="text-white text-lg">Trims: FWD/AWD</h2>
            </div>

            <button className="absolute inset-x-0 bottom-0 h-16 p-2  rounded-b-lg border  border-gray-100 bg-gray-800 hover:bg-red-700 hover:border-none duration-700">
              <p className="text-white text-xl">Buy Now</p>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CarGrids;

// <img src={pathfinderprofile} className="relative rounded-lg h-5/6" />
// <img src={ariyaprofile} className="relative rounded-lg h-5/6" />
// <img src={kickprofile} className="relative rounded-lg h-5/6" />
// <img src={muranoprofile} className="relative rounded-lg h-5/6" />
// <img src={armadaprofile} className="relative rounded-lg h-5/6" />
