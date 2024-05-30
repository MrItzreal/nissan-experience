/* eslint-disable react/no-unescaped-entities */
import React from "react";
import carData from "../data/cars.json";
import { NavLink } from "react-router-dom";

//This will filter and remove duplicate car objects with the same ID.
const filterDuplicateCars = (cars) => {
  const seenIds = new Set();
  return cars.filter((car) => {
    const hasSeenId = seenIds.has(car.id);
    seenIds.add(car.id);
    return !hasSeenId;
  });
};

//This will display all vehicles through map array.
const displayCars = filterDuplicateCars(carData.cars);

const CarGrids = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <main className="bg-neutral-900">
        <div className="container mx-auto px-8 py-2">
          <h6 className="flex justify-center text-center text-white font-bold text-base md:text-lg">
            Your lifestyle. Your Nissan!
          </h6>
          <p className="flex justify-center text-center text-white text-base md:text-lg">
            Whether you're a new driver, a family adventurer, a creature of
            comfort or just about any other kind of driver,
            <br /> there's a Nissan with the tech, the fuel efficiency and the
            features you need to drive your way.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 justify-center gap-6">
            {displayCars.map((car) => (
              <div key={car.id} className="relative mb-12">
                <img src={car.profilephoto} className="rounded-2xl border" />
                <div className="absolute bottom-0 left-0 right-0 my-24 ml-8">
                  <div className="flex flex-col items-center mr-6 -my-4 whitespace-nowrap">
                    <h2 className="text-white text-xs md:text-base font-extrabold uppercase">
                      {car.model}
                    </h2>
                    <h2 className=" text-white text-xs md:text-base ">
                      Starting at ${car.price}
                    </h2>
                    <h2 className="text-white text-xs md:text-base ">
                      Trims: FWD/AWD
                    </h2>
                  </div>
                </div>

                <button className="absolute bottom-0 left-0 h-16  w-full  rounded border border-gray-100 bg-gray-800 hover:bg-red-700 duration-700">
                  <NavLink
                    key={car.id}
                    to={`/cardetails/${car.id}`}
                    className="text-white text-base md:text-lg"
                  >
                    Details
                  </NavLink>
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
});
//Setting the displayName property, essentially gives React DevTools a way to identify a component.
//This makes it easier to debug and understand the structure of an application.
CarGrids.displayName = "CarGrids";

export default CarGrids;
