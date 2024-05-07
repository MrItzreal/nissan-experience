import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import CarGrids from "./components/CarGrids";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <CarGrids/>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
