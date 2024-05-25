import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import CarDetails from "./components/CarDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardetails/:id" element={<CarDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
