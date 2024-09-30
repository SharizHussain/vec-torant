import { useContext } from "react";
import { DataContext } from '../Context'
import Footer from "../Footer";
import Navbar from "../Navbar";
import arrBreakfast from "../images";
import { PropTypes } from "prop-types";
import { Bounce, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import { Link } from "react-router-dom";
import imgHero from "../assets/img/download1.png";
const projectId = import.meta.env.VITE_APP_PROJECT_ID;
const environmentId = import.meta.env.VITE_APP_ENVIRONMENT_ID;

export default function Menu({ showCondition = true }) {
  const breakfast = arrBreakfast;
  const { items, setItems } = useContext(DataContext);

  const notify = () => toast(`Added in Orders!`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  })

  const handleSubmit = async (item) => {
    try {
      const response = await fetch('https://free-ap-south-1.cosmocloud.io/development/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'projectId': projectId,  // Replace with your projectId
          'environmentId': environmentId,  // Replace with your environmentId
        },
        body: JSON.stringify({
          "title": item.name,
          "image": item.img,
          "description": item.desc,
          "category": item.category,
          "price": parseFloat(item.price),  // Convert price to number
          "availableQuantity": parseInt(item.qty, 10),  // Convert quantity to number
        }),
      });

      const result = await response.json();
      console.log('Order submitted successfully:', result);

      // Optionally, reset the form after submission
      // setItems({
      //   name: '',
      //   description: '',
      //   category: '',
      //   price: '',
      //   qty: '',
      // });

    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };

  return (
    <div>

      {showCondition && <Navbar prop="Menu" img={imgHero} />}


      {/* Menu Start */}
      <ToastContainer />
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
            <h1 className="mb-5">Most Popular Items</h1>
          </div>
          <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
            <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
              <li className="nav-item">
                <Link className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" to="#tab-1">
                  <i className="fa fa-coffee fa-2x text-primary"></i>
                  <div className="ps-3">
                    <small className="text-body">Popular</small>
                    <h6 className="mt-n1 mb-0">Breakfast</h6>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" to="#tab-2">
                  <i className="fa fa-hamburger fa-2x text-primary"></i>
                  <div className="ps-3">
                    <small className="text-body">Special</small>
                    <h6 className="mt-n1 mb-0">Lunch</h6>
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" to="#tab-3">
                  <i className="fa fa-utensils fa-2x text-primary"></i>
                  <div className="ps-3">
                    <small className="text-body">Lovely</small>
                    <h6 className="mt-n1 mb-0">Dinner</h6>
                  </div>
                </Link>
              </li>
            </ul>
            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  {breakfast.map((para, i) => (
                    <div className="col-lg-6" id="foodItems" key={i} onClick={() => { handleSubmit(para) }}>
                      <div className="d-flex align-items-center" onClick={notify}>
                        <img className="flex-shrink-0 object-fit-cover img-fluid rounded" src={para.img} alt="" style={{ width: "80px", height: "80px" }} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>{para.name}</span>
                            <span className="text-primary">{para.price}/-</span>
                          </h5>
                          <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div id="tab-2" className="tab-pane fade show p-0">
                <div className="row g-4">
                  {[...Array(8)].map((_, i) => (
                    <div className="col-lg-6" key={i}>
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src={`img/menu-${i + 1}.jpg`} alt="" style={{ width: "80px" }} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Food Name</span>
                            <span className="text-primary">xx /-</span>
                          </h5>
                          <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div id="tab-3" className="tab-pane fade show p-0">
                <div className="row g-4">
                  {[...Array(8)].map((_, i) => (
                    <div className="col-lg-6" key={i}>
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src={`img/menu-${i + 1}.jpg`} alt="" style={{ width: "80px" }} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Food Name</span>
                            <span className="text-primary">xx /-</span>
                          </h5>
                          <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Menu End --> */}

      {showCondition && <Footer />}
    </div>
  )
}

Menu.propTypes = {
  showCondition: PropTypes.bool,
}
