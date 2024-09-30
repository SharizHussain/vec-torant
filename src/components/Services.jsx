import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Services({showCondition = true}) {
  return (
    <div>
       {showCondition && <Navbar prop="Services"/>}
        <div className="container-xxl py-5">
      <div className="container">
        {
        showCondition &&
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="section-title ff-secondary text-center text-primary fw-normal">Our Services</h5>
          <h1 className="mb-5">Explore Our Services</h1>
        </div>
      }

        <div className="row g-4">
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-user-tie text-primary mb-4"></i>
                <h5>Master Chefs</h5>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-utensils text-primary mb-4"></i>
                <h5>Quality Food</h5>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-cart-plus text-primary mb-4"></i>
                <h5>Online Order</h5>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-headset text-primary mb-4"></i>
                <h5>Organized Trips</h5>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {showCondition && <Footer/>}
    </div>
  )
}
