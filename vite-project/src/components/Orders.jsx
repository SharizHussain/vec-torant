import { useContext, useEffect, useState } from "react";
import { DataContext } from "../Context";
import { Link, useNavigate } from "react-router-dom";

export default function Cart() {
  const { items, setItems } = useContext(DataContext);
  const [subTotal, setSubTotal] = useState(null);

  const updateQty = (para, i) => {
    const newItem = [...items];
    newItem[i].qty = para;
    setItems(newItem);
  };

  useEffect(() => {
    const subTotal = items.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price * currentValue.qty;
    }, 0);
    setSubTotal(subTotal);
  }, [items]);

  const nav = useNavigate();

  function navigate() {
    nav(-1);
  }

  return (
    <>
    {!subTotal && 
      <h3 className="p-5">There is nothing added for orders</h3>
    }
      {subTotal && (
        <>
          <div
            onClick={navigate}
            id="back"
            className="border border-warning px-3 py-1 position-absolute z-2 rounded-4 ms-2 my-2"
          >
            <b>Back</b>
          </div>
          <div className="container">
            <div className="row p-4">
              <div className="col-xl-8">
                {items.map((item, i) => {
                  return (
                    <div key={i}>
                      <div className="card border shadow-none mb-3">
                        <div className="card-body">
                          <div className="d-flex align-items-start border-bottom pb-3">
                            <div className="me-4">
                              <img
                                src={item.img}
                                alt=""
                                className="avatar-lg rounded object-fit-cover"
                                height={"80px !important"}
                                width={"80px"}
                              />
                            </div>
                            <div className="flex-grow-1 align-self-center overflow-hidden">
                              <div>
                                <h5 className="text-truncate font-size-18">
                                  <Link href="#" className="text-dark">
                                    {item.name}{" "}
                                  </Link>
                                </h5>
                                <p className="text-muted mb-0">
                                  <i className="bx bxs-star text-warning"></i>
                                  <i className="bx bxs-star text-warning"></i>
                                  <i className="bx bxs-star text-warning"></i>
                                  <i className="bx bxs-star text-warning"></i>
                                  <i className="bx bxs-star-half text-warning"></i>
                                </p>
                                <p className="mb-0 mt-1">
                                  Color :{" "}
                                  <span className="fw-medium">Gray</span>
                                </p>
                              </div>
                            </div>
                            <div className="flex-shrink-0 ms-2">
                              <ul className="list-inline mb-0 font-size-16">
                                <li className="list-inline-item">
                                  <Link href="#" className="text-muted px-1">
                                    <i className="mdi mdi-trash-can-outline"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="#" className="text-muted px-1">
                                    <i className="mdi mdi-heart-outline"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div>
                            <div className="row">
                              <div className="col-md-4">
                                <div className="mt-3">
                                  <p className="text-muted mb-2">Price</p>
                                  <h5 className="mb-0 mt-2">
                                    <span className="text-muted me-2">
                                      <del className="font-size-16 fw-normal">
                                        500/-
                                      </del>
                                    </span>
                                    {item.price}/-
                                  </h5>
                                </div>
                              </div>
                              <div className="col-md-5">
                                <div className="mt-3">
                                  <p className="text-muted mb-2">Quantity</p>
                                  <div className="d-inline-flex">
                                    <select
                                      value={item.qty}
                                      onChange={(para) =>
                                        updateQty(para.target.value, i)
                                      }
                                      className="form-select form-select-sm w-xl"
                                    >
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                                      <option value="6">6</option>
                                      <option value="7">7</option>
                                      <option value="8">8</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="mt-3">
                                  <p className="text-muted mb-2">Total</p>
                                  <h5>{item.price * item.qty}</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- end card --> */}
                    </div>
                  );
                })}

                <div className="row my-4">
                  <div className="col-sm-6">
                    <Link to="/menu" className="btn btn-link text-muted">
                      <i className="mdi mdi-arrow-left me-1"></i> Continue
                      Shopping{" "}
                    </Link>
                  </div>
                  {/* <!-- end col --> */}
                  <div className="col-sm-6">
                    <div className="text-sm-end mt-2 mt-sm-0">
                      <Link
                        href="ecommerce-checkout.html"
                        className="btn btn-success"
                      >
                        <i className="mdi mdi-cart-outline me-1"></i> Checkout{" "}
                      </Link>
                    </div>
                  </div>
                  {/* <!-- end col --> */}
                </div>
                {/* <!-- end row--> */}
              </div>

              <div className="col-xl-4">
                <div className="mt-5 mt-lg-0">
                  <div className="card border shadow-none">
                    <div className="card-header bg-transparent border-bottom py-3 px-4">
                      <h5 className="font-size-16 mb-0">
                        Order Summary <span className="float-end">#AG121</span>
                      </h5>
                    </div>
                    <div className="card-body p-4 pt-2">
                      <div className="table-responsive">
                        <table className="table mb-0">
                          <tbody>
                            <tr>
                              <td>Sub Total :</td>
                              <td className="text-end">{subTotal}</td>
                            </tr>
                            <tr>
                              <td>Discount : </td>
                              <td className="text-end">- 10</td>
                            </tr>
                            <tr>
                              <td>Shipping Charge :</td>
                              <td className="text-end"> 20</td>
                            </tr>
                            <tr>
                              <td>Estimated Tax : </td>
                              <td className="text-end"> 18.20</td>
                            </tr>
                            <tr className="bg-light">
                              <th>Total :</th>
                              <td className="text-end">
                                <span className="fw-bold">
                                  {" "}
                                  {subTotal - 10 + 20 + 18.2}
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/* <!-- end table-responsive --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end row --> */}
          </div>
        </>
      )}
    </>
  );
}
