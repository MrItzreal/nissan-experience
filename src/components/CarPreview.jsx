import { IoChevronDownOutline } from "react-icons/io5";
import rogue from "../assets/thumbnails/rogue-thumb.avif";
import pathfinder from "../assets/thumbnails/pathfinder-thumb.jpg";
import ariya from "../assets/thumbnails/ariya-thumb.avif";
import kicks from "../assets/thumbnails/kicks-thumb.avif";
import murano from "../assets/thumbnails/murano-thumb.avif";
import armada from "../assets/thumbnails/armada-thumb.avif";

const vehicles = [
  { name: "Rogue", image: rogue, alt: "Rogue" },
  { name: "Pathfinder", image: pathfinder, alt: "Pathfinder" },
  { name: "Ariya", image: ariya, alt: "Ariya" },
  { name: "Kicks", image: kicks, alt: "Kicks" },
  { name: "Murano", image: murano, alt: "Murano" },
  { name: "Armada", image: armada, alt: "Armada" },
];

const categories = [
  { title: "Crossover & SUVs" },
  { title: "Cars" },
  { title: "Trucks" },
  { title: "Sports Cars" },
  { title: "Electric Cars" },
];

const CarPreview = () => {
  return (
    // categories
    <main className="flex justify-center">
      <nav className="absolute">
        <div className="categories flex justify-center gap-6 mt-6 tracking-wide	">
          {categories.map((category) => (
            <button key={category} className="hover:underline">
              {category.title}
            </button>
          ))}
        </div>

        {/* Thumbnails for vehicles  */}
        <section className="thumbnails flex mt-5">
          {vehicles.map((vehicle) => (
            <button key={vehicle} className="flex relative justify-center ">
              <img src={vehicle.image} alt={vehicle.alt} className="w-44" />
              <p className="absolute bottom-1 text-xs">{vehicle.name}®</p>
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
