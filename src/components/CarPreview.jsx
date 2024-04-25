import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

//eslint-disable-next-line react/prop-types
const CarPreview = ({ carData }) => {
  //name of state, function name of state.
  const [selectedCategory, setSelectedCategory] = useState("Crossover & SUVs"); // Initial state

  //filters by category
  // eslint-disable-next-line react/prop-types
  const filteredCars = carData.cars.filter(
    (car) => car.category === selectedCategory || selectedCategory === "All"
  );

  //handles our clicks in each button
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    // categories
    <main className="flex justify-center">
      <nav className="absolute">
        <div className="flex justify-center gap-6 mt-6 tracking-wide">
          <button
            onClick={() => handleCategoryClick("Crossover & SUVs")}
            className="hover:underline focus:font-bold"
          >
            Crossover & SUVs
          </button>

          <button
            onClick={() => handleCategoryClick("Cars")}
            className="hover:underline focus:font-bold"
          >
            Cars
          </button>

          <button
            onClick={() => handleCategoryClick("Trucks")}
            className="hover:underline focus:font-bold"
          >
            Trucks
          </button>

          <button
            onClick={() => handleCategoryClick("Sports Cars")}
            className="hover:underline focus:font-bold"
          >
            Sports Cars
          </button>

          <button
            onClick={() => handleCategoryClick("Electric Cars")}
            className="hover:underline focus:font-bold"
          >
            Electric Cars
          </button>
        </div>

        {/* Thumbnails for vehicles  */}
        <section className="flex justify-center mt-5">
          {filteredCars.map((car) => (
            <button key={car.id} className="flex relative justify-center ">
              <img
                src={car.image}
                alt={car.alt}
                className="w-44 hover:transition duration-75 ease-in-out transform 
                hover:translate-y-1 hover:scale-110 "
              />
              <p className="absolute bottom-1 text-xs">{car.model}®</p>
            </button>
          ))}
        </section>
        <div className="flex justify-center text-2xl text-gray-500 mt-2 ">
          <IoChevronDownOutline />
        </div>
      </nav>
    </main>
  );
};

export default CarPreview;
