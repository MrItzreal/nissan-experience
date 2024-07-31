import { useState } from "react";
import { motion } from "framer-motion";
import useAppContext from "../context";

//eslint-disable-next-line react/prop-types
const CarPreview = ({ setCarBackgroundImage }) => {
  const { vehicles } = useAppContext();

  //name of state, function name of state.
  const [selectedCategory, setSelectedCategory] = useState("Crossover & SUVs"); // Initial state

  //filters by category
  // eslint-disable-next-line react/prop-types
  const filteredCars = vehicles.filter(
    (car) => car.category === selectedCategory || selectedCategory === "All"
  );

  //handles category selection with our clicks in each button
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  //handles car selection with our clicks
  const handleCarClick = (car) => {
    setCarBackgroundImage(car.images);
  };

  return (
    <main className="flex justify-center">
      <nav className="absolute w-full px-4">
        {/* CATEGORY BUTTONS */}
        <div className="flex justify-center">
          <motion.div
            className="flex overflow-x-auto snap-x snap-mandatory whitespace-nowrap gap-6 mt-6 tracking-wide text-lg no-scrollbar"
            style={{ paddingRight: "1rem" }}
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
        </div>

        {/* THUMBNAILS for vehicles & Background Image when clicked */}
        <div className="flex justify-center ">
          <section className="flex overflow-x-auto snap-x snap-mandatory whitespace-nowrap mt-5 px-4 no-scrollbar">
            {filteredCars.map((car) => (
              <button
                key={car.id}
                className="flex relative justify-center snap-center shrink-0"
                onClick={() => handleCarClick(car)}
              >
                <img
                  src={car.images.thumbnail}
                  alt={car.alt}
                  className="w-44 hover:transition duration-75 ease-in-out transform 
                hover:translate-y-1 hover:scale-110"
                />
                <p className="absolute bottom-1 text-xs">{car.model}®</p>
              </button>
            ))}
          </section>
        </div>
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
