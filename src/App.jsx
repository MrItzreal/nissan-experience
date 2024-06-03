import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import CarDetails from "./components/CarDetails";
import Owners from "./components/Owners";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardetails/:id" element={<CarDetails />} />
        <Route path="/owners" element={<Owners />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
