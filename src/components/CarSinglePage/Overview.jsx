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

      <div className="mx-auto text-white text-center md:whitespace-normal whitespace-nowrap">
        <div className="m-4 p-2 text-2xl mb-4">
          <span>PERFORMANCE</span>
        </div>

        <div className="flex flex-col md:flex-row justify-evenly gap-4 md:gap-6">
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
    </main>
  );
};

export default Overview;
{
  /* <hr className="border-gray-200 w-2/3 mx-auto mt-4" /> */
}
// Possible taglines
// [model]: Drive Your Story
// [model]: Engineered for Every Adventure
// [model]: Where Performance Meets Innovation.
// [model]: Your Everyday Escape.
// [model]: Built to Move You.
