import { Link } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import imgHero from "../assets/img/88f18ce59ec1735607f46caa91c9a0fa.jpg";
import imgAbout1 from "../assets/img/peter-thomas-qXbueROjM9I-unsplash.jpg"
import imgAbout2 from "../assets/img/about-4.jpg"
import imgAbout3 from "../assets/img/download1.png"
import imgAbout4 from "../assets/img/premium_photo-1668916513964-fa8e252bafaf-transformed.jpeg"

import Team from "./Team";

export default function About({ showCondition = true, teamShow = true }) {
  return (
    <div className="container-xxl bg-white p-0">
      {showCondition && <Navbar prop="About" img={imgHero} />}
      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container-fluid">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-100 h-100 object-fit-cover wow zoomIn"
                    data-wow-delay="0.1s"
                    src={
                      imgAbout1
                    }
                    alt="About 1"
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-75 wow zoomIn"
                    data-wow-delay="0.3s"
                    src={imgAbout2}
                    alt="About 2"
                    style={{ marginTop: "25%" }}
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-100 h-75 object-fit-cover wow zoomIn"
                    data-wow-delay="0.5s"
                    src={imgAbout3}
                    alt="About 3"
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-100 h-100 wow zoomIn"
                    data-wow-delay="0.7s"
                    src={
                      imgAbout4
                    }
                    alt="About 4"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="section-title ff-secondary text-start text-primary fw-normal">
                About Us
              </h5>
              <h1 className="mb-4">
                Welcome to <i className="fa fa-utensils text-primary me-2"></i>
                Vec-torant
              </h1>
              <p className="mb-4">
                Welcome to Vectorant! We offer exceptional dining with Link variety
                of delicious meals, available for dine-in and online orders.
              </p>
              <p className="mb-4">
                Additionally, we create personalized vacation packages
                for your desires. We
                ensure top-notch experiences. At Vectorant, we make your dining
                and travel dreams come true.
              </p>
              <div className="row g-4 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                    <h1
                      className="flex-shrink-0 display-5 text-primary mb-0"
                      id="counter"
                    >
                      15
                    </h1>
                    <div className="ps-4">
                      <p className="mb-0">Years of</p>
                      <h6 className="text-uppercase mb-0">Experience</h6>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                    <h1
                      className="flex-shrink-0 display-5 text-primary mb-0"
                      id="counter"
                    >
                      50
                    </h1>
                    <div className="ps-4">
                      <p className="mb-0">Popular</p>
                      <h6 className="text-uppercase mb-0">Master Chefs</h6>
                    </div>
                  </div>
                </div>
              </div>
              <Link className="btn btn-primary py-3 px-5 mt-2" href="">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Team Start */}
      {teamShow && 
        <Team showCondition={false} subTeam={false}/>
      }
      {/* Team End */}

      {showCondition && <Footer />}
    </div>
  );
}
