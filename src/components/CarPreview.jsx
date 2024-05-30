import { useState, useEffect } from "react";
import { motion } from "framer-motion";

//eslint-disable-next-line react/prop-types
const CarPreview = ({ carData, setCarBackgroundImage }) => {
  //name of state, function name of state.
  const [selectedCategory, setSelectedCategory] = useState("Crossover & SUVs"); // Initial state

  //filters by category
  // eslint-disable-next-line react/prop-types
  const filteredCars = carData.cars.filter(
    (car) => car.category === selectedCategory || selectedCategory === "All"
  );

  //handles category selection with our clicks in each button
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  //handles car selection with our clicks
  const handleCarClick = (car) => {
    setCarBackgroundImage(car);
  };

  return (
    // categories
    <main className="flex justify-center">
      <nav className="absolute">
        <motion.div
          className="flex justify-center gap-6 mt-6 tracking-wide text-xs md:text-lg"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
          }}
        >
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
        </motion.div>

        {/* Thumbnails for vehicles & Background Image when clicked  */}
        <section className="flex justify-center mt-5">
          {filteredCars.map((car) => (
            <button
              key={car.id}
              className="flex relative justify-center"
              onClick={() => handleCarClick(car.image)}
            >
              <img
                src={car.thumbnail}
                alt={car.alt}
                className="w-44 hover:transition duration-75 ease-in-out transform 
                hover:translate-y-1 hover:scale-110"
              />
              <p className="absolute bottom-1 text-xs">{car.model}®</p>
            </button>
          ))}
        </section>
      </nav>
    </main>
  );
};

export default CarPreview;

// Just in case I want to use it:
//Handles the main background image based on size with a ternary operator
// const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);

// useEffect(() => {
//   const handleResize = () => setIsLargeScreen(window.innerWidth > 1024);
//   window.addEventListener("resize", handleResize);
//   return () => removeEventListener("resize", handleResize);
// }, []);
