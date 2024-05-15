import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import CarDetails from "./components/CarSinglePage/CarDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardetails" element={<CarDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
