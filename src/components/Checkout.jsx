import { useState, useMemo } from "react";
import { NavLink, Link, useParams } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/logos/logo.svg";
import { motion } from "framer-motion";
import useAppContext from "../context";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Publishable Stripe Key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const NavLinks = () => {
  return (
    <>
      <NavLink to="/#vehicles">Vehicles</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contactus">Contact Us</NavLink>
    </>
  );
};

const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.log("[error]", error);
    } else {
      try {
        const res = await fetch("/stripe-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ paymentMethod: paymentMethod.id, car }),
        });

        if (res.ok) {
          const { url } = await res.json();
          window.location.href = url;
        } else {
          console.error("Error from backend:", res.statusText);
        }
      } catch (err) {
        console.error("Error sending payment info to backend", err);
      }
    }
  };

  //name of state, function name of state.
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen); //Toggles navigation bar icons.
  };

  //Retrieves car details from DB for current route.
  const { id } = useParams();
  const { vehicles } = useAppContext();
  const car = useMemo(
    () => vehicles.find(({ car_id }) => car_id === id),
    [id, vehicles]
  );

  if (!car) return null;

  return (
    <main className="sm:py-6 bg-gradient-to-r from-slate-800 to-stone-700">
      {/* NISSAN LOGO DO NOT TOUCH THIS */}
      <Link to="/">
        <img
          src={logo}
          alt="Logo"
          className="absolute left-4 h-20 sm:h-[98px] top-7 z-10"
        />
      </Link>

      {/* NAV BAR */}
      <>
        <nav className="flex justify-end mb-16">
          <div className="hidden justify-end md:flex gap-6 text-white font-medium px-12 py-12 z-10">
            <NavLinks />
          </div>
          <div className="md:hidden z-10">
            <motion.button whileTap={{ rotate: 20 }} onClick={toggleNavbar}>
              {isOpen ? (
                <IoMdClose className="absolute right-4 text-3xl text-white" />
              ) : (
                <HiOutlineMenuAlt3 className="text-white text-3xl mr-3 mt-4" />
              )}
            </motion.button>
          </div>
        </nav>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="relative h-full flex flex-col items-center gap-4 py-8 text-white md:hidden bg-gradient-to-r from-slate-800 to-stone-700"
          >
            <NavLinks />
          </motion.div>
        )}
      </>

      {/* PRE-CHECKOUT SECTION */}
      <div
        className={`flex justify-center items-center text-white text-xl sm:text-6xl mb-2 ${
          isOpen ? "hidden" : ""
        }`}
      >
        <p>Review Your Order Details:</p>
      </div>

      {/* CHECKOUT SECTION */}
      <section className="container mx-auto text-white ">
        <div
          className={`flex flex-col lg:flex-row shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] ${
            isOpen ? "hidden" : ""
          }`}
        >
          <img
            src={car.images.profilephoto}
            className="h-[650px] w-[850px] object-cover"
          />

          <div className="flex flex-col border bg-gradient-to-r from-slate-800 to-stone-700">
            <div className="relative m-8 text-base sm:text-xl">
              <div className="flex justify-center items-center h-30 mb-4">
                <img src={logo} alt="Logo" className="h-20 sm:h-[98px]" />
              </div>

              <div className="space-y-2">
                <h4 className="text-xl sm:text-3xl text-center">
                  Order Summary
                </h4>
                <hr className="mx-16" />
                <h4>
                  <strong>Model:</strong> {car.model}.
                </h4>
                <h4>
                  <strong>Category:</strong> {car.category}.
                </h4>
                <h4>
                  <strong>Trim:</strong> FWD/AWD.
                </h4>
                <h4>
                  <strong>Quantity:</strong> 1.
                </h4>
                <h4>
                  <strong>Total:</strong> ${car.price}.
                </h4>
              </div>

              <p className="container mx-auto text-base text-justify text-gray-200 mt-7">
                <strong>Disclaimer:</strong> This website is a demonstration
                project created for educational purposes only. It is not
                affiliated with, endorsed by, or representative of Nissan Motor
                Corporation. No actual transactions or purchases can be made on
                this site.
              </p>
            </div>

            {/*CHECKOUT BUTTON */}
            <form className="flex justify-center">
              <CardElement />
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={!stripe}
                className="flex items-center justify-center  border border-gray-100 rounded-xl h-12 w-2/3 sm:w-80 hover:bg-red-700 hover:border-none duration-700"
              >
                CHECKOUT
              </button>
            </form>
            <p className="flex justify-center text-sm sm:text-base mt-2 text-center">
              We appreciate your business and hope to see you soon!
            </p>
            <p className="text-end text-xs sm:text-sm text-gray-500 dark:text-gray-300 m-2 mr-2">
              © NISSAN USA 2024
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

// Export the wrapper component instead of Checkout
const CheckoutWrapper = () => {
  return (
    <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
  );
};

export default CheckoutWrapper;

// export default Checkout;
