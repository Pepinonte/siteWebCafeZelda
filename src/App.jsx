import { Navigate, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CafeZelda from "./pages/CafeZelda";
import Articles from "./pages/Articles";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LeCafeZelda" element={<CafeZelda />} />
        <Route path="/LesArticles" element={<Articles />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
