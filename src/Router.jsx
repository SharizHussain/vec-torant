import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from './components/About'
import Services from "./components/Services";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Booking from "./components/Booking";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Orders from "./components/Orders";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/testimonial" element={<Testimonial/>}/>
        <Route path="/orders" element={<Orders/>}/>
      </Routes>
    </BrowserRouter>
  );
}
