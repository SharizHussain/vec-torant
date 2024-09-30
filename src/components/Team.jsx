import Navbar from "../Navbar";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import imgTeam1 from "../assets/img/team-4.jpg" 
import imgTeam2 from "../assets/img/chef.jpg" 
import imgTeam3 from "../assets/img/team-3.jpg" 
import imgTeam4 from "../assets/img/depositphotos_174777760-stock-photo-handsome-bodyguard-listening-message-security1.jpg" 
import imgTeam5 from "../assets/img/chef_in_uniform.jpeg"
import imgTeam6 from "../assets/img/1696248310323.png"
import imgTeam7 from "../assets/img/360_F_572230981_4X0ra8tqMPj1CPu8f2RXnt0NWtVBTC9g.jpg"
import imgTeam8 from "../assets/img/Select-The-Best-From-This-Stellar-Range-Of-Mens-T-shirts-Louis-Philippe-Fashion-Blogs.jpg"

export default function Team({ showCondition = true, subTeam = true }) {
  return (
    <div>
      {showCondition && <Navbar prop="Team" />}
      {/* <!-- Team Start --> */}
      <div className="container-xxl pt-5 pb-3">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">
              Team Members
            </h5>
            <h1 className="mb-5">Our Master Crew</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img
                    className="img-fluid"
                    src={imgTeam1}
                    alt="Team Member"
                  />
                </div>
                <h5 className="mb-0">Alexander Smith</h5>
                <small>Founder & CEO</small>
                <div className="d-flex justify-content-center mt-3">
                  <Link className="btn btn-square btn-primary mx-1" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link className="btn btn-square btn-primary mx-1" href="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link className="btn btn-square btn-primary mx-1" href="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img
                    className="img-fluid"
                    src={imgTeam2}
                    alt="Team Member"
                  />
                </div>
                <h5 className="mb-0">Michael Wilson</h5>
                <small>Manager (Vacation)</small>
                <div className="d-flex justify-content-center mt-3">
                  <Link className="btn btn-square btn-primary mx-1" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link className="btn btn-square btn-primary mx-1" href="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link className="btn btn-square btn-primary mx-1" href="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img
                    className="img-fluid"
                    src={imgTeam3}
                    alt="Team Member"
                  />
                </div>
                <h5 className="mb-0">Daniel Smith</h5>
                <small>Manager (Restaurant)</small>
                <div className="d-flex justify-content-center mt-3">
                  <Link className="btn btn-square btn-primary mx-1" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link className="btn btn-square btn-primary mx-1" href="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link className="btn btn-square btn-primary mx-1" href="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="rounded-circle overflow-hidden m-4">
                  <img
                    className="img-fluid"
                    src={imgTeam4}
                    alt="Team Member"
                  />
                </div>
                <h5 className="mb-0">Benjamin Johnson</h5>
                <small>Security Arrangement</small>
                <div className="d-flex justify-content-center mt-3">
                  <Link className="btn btn-square btn-primary mx-1" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link className="btn btn-square btn-primary mx-1" href="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link className="btn btn-square btn-primary mx-1" href="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
            {subTeam && (
              <>
                <div
                  className="col-lg-3 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="team-item text-center rounded overflow-hidden">
                    <div className="rounded-circle overflow-hidden m-4">
                      <img
                        className="img-fluid"
                        src={imgTeam5}
                        alt="Team Member"
                      />
                    </div>
                    <h5 className="mb-0">John Paul</h5>
                    <small>Chef</small>
                    <div className="d-flex justify-content-center mt-3">
                      <Link
                        className="btn btn-square btn-primary mx-1"
                        href="#"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link
                        className="btn btn-square btn-primary mx-1"
                        href="#"
                      >
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link
                        className="btn btn-square btn-primary mx-1"
                        href="#"
                      >
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="team-item text-center rounded overflow-hidden">
                    <div className="rounded-circle overflow-hidden m-4">
                      <img
                        className="img-fluid"
                        src={imgTeam6}
                        alt="Team Member"
                      />
                    </div>
                    <h5 className="mb-0">Emma Rose</h5>
                    <small>Chef</small>
                    <div className="d-flex justify-content-center mt-3">
                      <Link
                        className="btn btn-square btn-primary mx-1"
                        href="#"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link
                        className="btn btn-square btn-primary mx-1"
                        href="#"
                      >
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link
                        className="btn btn-square btn-primary mx-1"
                        href="#"
                      >
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="team-item text-center rounded overflow-hidden">
                    <div className="rounded-circle overflow-hidden m-4">
                      <img
                        className="img-fluid"
                        src={imgTeam7}
                        alt="Team Member"
                      />
                    </div>
                    <h5 className="mb-0">Anna Grace</h5>
                    <small>Chef</small>
                    <div className="d-flex justify-content-center mt-3">
                      <Link
                        className="btn btn-square btn-primary mx-1"
                        href="#"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link
                        className="btn btn-square btn-primary mx-1"
                        href="#"
                      >
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link
                        className="btn btn-square btn-primary mx-1"
                        href="#"
                      >
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-md-6 wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <div className="team-item text-center rounded overflow-hidden">
                    <div className="rounded-circle overflow-hidden m-4">
                      <img
                        className="img-fluid"
                        src={imgTeam8}
                        alt="Team Member"
                      />
                    </div>
                    <h5 className="mb-0">David James</h5>
                    <small>Vacation Planner</small>
                    <div className="d-flex justify-content-center mt-3">
                      <Link
                        className="btn btn-square btn-primary mx-1"
                        href="#"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link
                        className="btn btn-square btn-primary mx-1"
                        href="#"
                      >
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link
                        className="btn btn-square btn-primary mx-1"
                        href="#"
                      >
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {/* <!-- Team End --> */}

      {showCondition && <Footer />}
    </div>
  );
}
