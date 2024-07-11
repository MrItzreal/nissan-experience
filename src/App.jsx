/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./components/Home";
import Footer from "./components/Footer";
import CarDetails from "./components/CarDetails";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Checkout from "./components/Checkout";

const App = () => {
  // POST's New Form
  const addForm = async (newForm) => {
    const res = await fetch("http://localhost:8000/forms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newForm),
    });
    return;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardetails/:id" element={<CarDetails />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/contactus"
          element={<ContactUs addFormSubmit={addForm} />}
        />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;

// NOTES ABOUT HTTP methods:
// POST adds data, GET requests data &
// PUT updates data & DELETE deletes data.
