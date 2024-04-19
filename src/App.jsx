import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./Pages/Hero";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AboutPage from "./Pages/AboutPage";
import Events from "./Pages/Events";
import Blood from "./Pages/Blood";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/bloodDonation" element={<Blood />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
