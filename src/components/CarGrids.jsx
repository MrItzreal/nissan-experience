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
      <div>
        <h2 className="text-white"> Crossover & SUVs</h2>
        <div className="grid grid-cols-3">
          <img src={rogueprofile} />
          <img src={pathfinderprofile} />
          <img src={ariyaprofile} />
          <img src={kickprofile} />
          <img src={muranoprofile} />
          <img src={armadaprofile} />
        </div>
      </div>
    </main>
  );
};

export default CarGrids;
