import Footer from '../Footer';
import Navbar from '../Navbar';
import imgTesti1 from "../assets/img/testimonial-1.jpg"
import imgTesti2 from "../assets/img/testimonial-2.jpg"
import imgTesti3 from "../assets/img/testimonial-3.jpg"
import imgTesti4 from "../assets/img/testimonial-4.jpg"
import "react-responsive-carousel/lib/styles/carousel.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import { PropTypes } from 'prop-types';

export default function Testimonial({showCondition=true}) {
  return (
    <>
      {showCondition && <Navbar prop="Testimonial"/>}

      {/* <!-- Testimonial Start --> */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s" id='testimonial'>
      <div className="container">
        <div className="text-center">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">Testimonial</h5>
          <h1 className="mb-5">Our Clients Say!!!</h1>
        </div>
        <div className="carousel testimonial-carousel">
        <Carousel className='carl' autoPlay={true} showThumbs={false} infiniteLoop={true} showArrows={true} centerMode={true} centerSlidePercentage={30} showStatus={false}>
          <div className="testimonial-item wow bg-transparent border rounded p-4">
            <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
            <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
            <div className="d-flex align-items-center">
              <img className="img-fluid flex-shrink-0 rounded-circle" src={imgTesti1} style={{ width: '50px', height: '50px' }} alt="Client 1" />
              <div className="ps-3">
                <h5 className="mb-1">Client Name</h5>
                <small>Profession</small>
              </div>
            </div>
          </div>
          <div className="testimonial-item wow bg-transparent border rounded p-4">
            <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
            <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
            <div className="d-flex align-items-center">
              <img className="img-fluid flex-shrink-0 rounded-circle" src={imgTesti2} style={{ width: '50px', height: '50px' }} alt="Client 2" />
              <div className="ps-3">
                <h5 className="mb-1">Client Name</h5>
                <small>Profession</small>
              </div>
            </div>
          </div>
          <div className="testimonial-item wow bg-transparent border rounded p-4">
            <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
            <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
            <div className="d-flex align-items-center">
              <img className="img-fluid flex-shrink-0 rounded-circle" src={imgTesti3} style={{ width: '50px', height: '50px' }} alt="Client 3" />
              <div className="ps-3">
                <h5 className="mb-1">Client Name</h5>
                <small>Profession</small>
              </div>
            </div>
          </div>
          <div className="testimonial-item wow bg-transparent border rounded p-4">
            <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
            <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
            <div className="d-flex align-items-center">
              <img className="img-fluid flex-shrink-0 rounded-circle" src={imgTesti4} style={{ width: '50px', height: '50px' }} alt="Client 4" />
              <div className="ps-3">
                <h5 className="mb-1">Client Name</h5>
                <small>Profession</small>
              </div>
            </div>
          </div>
        </Carousel>
        </div>
      </div>
    </div>
      {/* <!-- Testimonial End --> */}

      {showCondition && <Footer/>}
    </>
  );
}

Testimonial.propTypes = {
  showCondition: PropTypes.bool,
};