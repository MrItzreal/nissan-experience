const Overview = () => {
  return (
    <main className="bg-neutral-900">
      <div className="container mx-auto px-8 py-4">
        <h1 className="text-center text-white text-xl md:text-3xl font-bold whitespace-nowrap">
          Built to Move You: GT-R
        </h1>
        <div className="grid grid-cols-1 gap-4 mt-4">
          <p className="text-center text-white text-lg md:text-2xl">
            Starting at: $121,090
          </p>

          <div className="md:px-32">
            <p className="text-center text-white text-lg tracking-wide text-wrap">
              An unmatched blend of power and soul: the Nissan GT-R. Experience
              the singular supercar that sculpts the wind, with enhanced
              aerodynamics to improve ride and handling for 2024. The 2024 GT-R
              features a redesigned front bumper, front lip, and canards. At the
              rear, bumper sides and a revised rear spoiler help the GT-R add
              downforce without increasing drag.
            </p>
          </div>
        </div>
        <hr className="border-gray-200 my-4" />
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
