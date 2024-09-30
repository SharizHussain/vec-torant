import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect } from "react";
import imgHero from "./assets/img/download2.png"

export default function Navbar({ prop = "Home", img = imgHero }) {
  useEffect(() => {
    const hero_header = document.querySelector(".hero-header");
    hero_header.style.backgroundImage = `url(${img})`;
  }, [img]);
  
  

  return (
    <div>
      {/* Navbar & Hero Start */}
      <div className="container-xxl position-relative p-0">
        <nav className="navbar mt-1 navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
          <Link to="/" className="navbar-brand p-0">
            <h1 className="text-primary m-0"><i className="fa fa-utensils me-3"></i>Vectorant</h1>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0 pe-4">
              <Link to="/" className="nav-item nav-link">Home</Link>
              <Link to="/about" className="nav-item nav-link">About</Link>
              <Link to="/menu" className="nav-item nav-link">Menu</Link>
              <Link to="/booking" className="nav-item nav-link">Booking</Link>
              
              <span className="dropdown nav-item">
  <Link className="dropdown-toggle nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Pages
  </Link>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to={"/services"}>Services</Link></li>
    <li><Link className="dropdown-item" to={"/team"}>Team</Link></li>
    <li><Link className="dropdown-item" id="testimonial" to={"/testimonial"}>Testimonial</Link></li>
  </ul>
              </span>

              <Link to="/contact" className="nav-item nav-link">Contact</Link>
            </div>
            <Link to="/orders" className="btn btn-primary py-2 px-4">Orders</Link>
          </div>
        </nav>

        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <div className="container text-center my-5 pt-5 pb-4">
            <h1 className="display-3 text-white mb-3 animated slideInDown">{prop}</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                <li className="breadcrumb-item text-white active" aria-current="page">{prop}</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* Navbar & Hero End */}
    </div>
  );
}

Navbar.propTypes = {
  prop: PropTypes.string,
  img: PropTypes.string,
};
