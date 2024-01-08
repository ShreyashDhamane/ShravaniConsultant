import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import ContactUs from "./pages/ContactUs/ContactUs";
import Footer from "./components/footer/Footer";
import AboutUs from "./pages/AboutUs/AboutUs";
import Services from "./pages/Services/Services";
import Careers from "./pages/Careers/Careers";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/careers" element={<Careers />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
