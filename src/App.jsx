import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./components/Home";
import Footer from "./components/Footer";
import CarDetails from "./components/CarDetails";
import About from "./components/About";
import ContactUs from "./components/ContactUs";

const App = () => {
  // Add New Form
  const addForm = async (newForm) => {
    console.log(newForm);
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
      </Routes>
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
