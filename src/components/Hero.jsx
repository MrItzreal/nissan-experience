import rogue from "../assets/images/rogue.avif";

const Hero = () => {
  return (
    <section className="container">
      <img src={rogue} className="w-full h-full object-cover fixed z-0" />
    </section>
  );
};

export default Hero;
