import Footer from "./Footer";
import Navbar from "./Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Menu from "./components/Menu";
import Team from "./components/Team";
import Booking from './components/Booking';
import Testimonial from "./components/Testimonial";
import imgHero from "./assets/img/Unveiling-the-Life-of-a-Professional-Chef.webp"

export default function Home() {
  return (
    <div className="container-xxl bg-white p-0">
      <Navbar prop="Home" img={imgHero}/>
      <Services showCondition={false} />
      <About showCondition={false} teamShow={false} />
      <Menu showCondition={false}/>
      <Booking showCondition={false}/>
      <Team showCondition={false} subTeam={false}/>
      <Testimonial showCondition={false}/>
      <Footer />
    </div>
  );
}
