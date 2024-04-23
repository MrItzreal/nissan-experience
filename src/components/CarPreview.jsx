import { IoChevronDownOutline } from "react-icons/io5";
import rogue from "../assets/thumbnails/rogue-thumb.avif";
import pathfinder from "../assets/thumbnails/pathfinder-thumb.jpg";
import ariya from "../assets/thumbnails/ariya-thumb.avif";
import kicks from "../assets/thumbnails/kicks-thumb.avif";
import murano from "../assets/thumbnails/murano-thumb.avif";
import armada from "../assets/thumbnails/armada-thumb.avif";

const CarPreview = () => {
  return (
    <main className="flex justify-center">
      <nav className="absolute">
        <div className="categories flex justify-center gap-6 mt-6 tracking-wide	">
          <button>Crossover & SUVs</button>
          <button>Cars</button>
          <button>Trucks</button>
          <button>Sports Cars</button>
          <button>Electric Cars</button>
        </div>

        {/* Thumbnails for vehicles */}
        <div className="thumbnails flex mt-5">
          <button className="flex relative justify-center">
            <img src={rogue} alt="Rogue" className="w-44" />
            <p className="absolute bottom-1 text-xs">Rogue®</p>
          </button>
          <button className="flex relative justify-center">
            <img src={pathfinder} alt="Pathfinder" className="w-44" />
            <p className="absolute bottom-1 text-xs">Pathfinder®</p>
          </button>
          <button className="flex relative justify-center">
            <img src={ariya} alt="Ariya" className="w-44" />
            <p className="absolute bottom-1 text-xs">Ariya®</p>
          </button>
          <button className="flex relative justify-center">
            <img src={kicks} alt="Kicks" className="w-44" />
            <p className="absolute bottom-1 text-xs">Kicks®</p>
          </button>
          <button className="flex relative justify-center">
            <img src={murano} alt="Murano" className="w-44" />
            <p className="absolute bottom-1 text-xs">Murano®</p>
          </button>
          <button className="flex relative justify-center">
            <img src={armada} alt="Armada" className="w-44" />
            <p className="absolute bottom-1 text-xs">Armada®</p>
          </button>
        </div>
        <div className="flex justify-center text-2xl text-gray-500 mt-2 ">
          <IoChevronDownOutline />
        </div>
      </nav>
    </main>
  );
};

export default CarPreview;
