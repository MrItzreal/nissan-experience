import photo from "../../assets/images/rogue.avif";
import profilePhoto from "../../assets/profilephotos/rogue-profile.avif";
import smallPhoto from "../../assets/smallphotos/rogue-sm.webp";
import bannerphoto from "../../assets/bannerphotos/rogue-banner.webp";

const Overview = () => {
  return (
    <main className="bg-neutral-900">
      <div className="container mx-auto px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white md:whitespace-normal whitespace-nowrap	text-center md:text-left">
          <div className="m-4 p-2 md:m-8 md:p-6 text-2xl md:text-7xl">
            <p>Where To Explore Next?</p>
          </div>

          <div className="flex flex-col justify-center gap-4 md:gap-6">
            <p className="text-xl -mt-8 md:mt-4">Starting At</p>
            <p className="text-5xl">
              <span>$28,850</span>
            </p>
            <p className="text-base md:text-lg text-pretty tracking-wide ">
              The 2024 Rogue is a mid-size crossover with a big appetite for
              adventure. There’s a bold new look, updated tech, plus loads of
              room for cargo and friends. And with great mileage and available
              Intelligent AWD, Rogue is the answer: from your daily commute to
              your next road trip.
            </p>
          </div>
        </div>
        <hr className=" border-gray-200  mx-auto mt-8" />
      </div>

      {/* PERFORMANCE SECTION */}

      <div className="text-white text-center md:whitespace-normal whitespace-nowrap">
        <div className="m-4 p-2 text-2xl mb-4">
          <span>PERFORMANCE</span>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-4 md:gap-6 md:mr-44">
          <div className="flex flex-col">
            <span className="text-5xl md:text-8xl">201</span>
            <p className="text-xl">Horsepower with a VC-Turbo® Engine</p>
          </div>
          <div className="flex flex-col border-l border-gray-200 pl-4 md:pl-8">
            <span className="text-5xl md:text-8xl">29/36</span>
            <p className="text-xl">Up to — MPG City/Highway</p>
          </div>
          <div className="flex flex-col border-l border-gray-200 pl-4 md:pl-8">
            <span className="text-5xl md:text-8xl">225</span>
            <p className="text-xl">lb-ft of Torque</p>
          </div>
        </div>
      </div>

      {/* CAR IMAGES */}
      <div className="container mx-auto py-14 text-white ">
        <div className="flex flex-col lg:flex-row">
          <>
            <img src={smallPhoto} className="w-[450px] object-cover " />

            <img src={profilePhoto} className="w-[450px] object-cover " />
            <img src={photo} className="w-[650px]   object-cover " />
          </>
        </div>

        <h2 className="text-white text-center py-6 text-3xl italic font-medium	">
          BUILT TO MOVE YOU!
        </h2>

        <div className="flex justify-center ">
          <img src={bannerphoto} />
        </div>

        <div className="container mx-auto my-6">
          {/* SPECIFICATIONS & FEATURES */}
          <div className="text-center items-center border-2  h-full gap-36 ">
            <ul className="whitespace-nowrap  ">
              <h2 className="text-center"> FEATURES </h2>
              <li>
                <span>5 Drive Modes.</span>
              </li>
              <li>
                <span>All Wheel Drive (AWD) Capability. </span>
              </li>
              <li>
                <span>Seats Up To Five.</span>
              </li>
              <li>
                <span>Practical Cargo Space.</span>
              </li>
              <li>
                <span>Automatic Braking with Pedestrian Detection.</span>
              </li>
            </ul>

            <ul className="whitespace-nowrap ">
              <h2 className="text-center">SPECIFICATIONS</h2>
              <li>
                <span>19" Unique aluminum-alloy wheels.</span>
              </li>
              <li>
                <span>Dual Panel Panoramic Moonroof.</span>
              </li>
              <li>
                <span>Quilted semi-aniline leather-appointed seats.</span>
              </li>
              <li>
                <span>Wireless Apple CarPlay® integration.</span>
              </li>
              <li>
                <span>ProPILOT Assist 1.1.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Overview;

// Possible taglines
// [model]: Drive Your Story
// [model]: Engineered for Every Adventure
// [model]: Where Performance Meets Innovation.
// [model]: Your Everyday Escape.
// [model]: Built to Move You.
