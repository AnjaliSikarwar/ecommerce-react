import React from 'react'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";


function Cart(){
    const dispatch = useDispatch();
  const navigate = useNavigate()
const [quantityCounter, setQuantityCounter] = useState(1);
const { cartItems } = useSelector((state) => state.cart);
     
  return (
    <>
        
            {/* <!-- Breadcrumb Start --> */}
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-12">
                        <nav className="breadcrumb bg-light mb-5 p-3">
                            <a className="breadcrumb-item text-dark" href="/">Home</a>
                            <a className="breadcrumb-item text-dark" href="/">Shop</a>
                            <span className="breadcrumb-item active">Shopping Cart</span>
                        </nav>
                    </div>
                </div>
            </div>
            {/* <!-- Breadcrumb End --> */}
            

            {/* <!-- Cart Start --> */}
            <div className="container-fluid">
                <div className="row px-xl-5">

                    <div className="col-lg-8 table-responsive mb-5">
                        <table className="table table-light table-borderless table-hover text-center mb-0">
                            <thead className="table-dark">
                                <tr>
                                    <th>Products</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody className="align-middle">
                            {
                              cartItems.map((c)=>(
                                <tr>
                                    <td className="align-middle"><img src={c.images} alt="" style={{ width: "50px" }} />{c.name}</td>
                                    <td className="align-middle">{c.price}</td>
                                    <td className="align-middle">
                                        <div className="input-group mx-auto" style={{ width: "100px" }}>
                                            <div className="input-group-btn">
                                                <button className="btn btn-sm btn-warning btn-minus">
                                                    <i className="fa fa-minus"></i>
                                                </button>
                                            </div>
                                            <input type="text" className="form-control form-control-sm bg-light border-0 text-center" value={c.quantity} />
                                            <div className="input-group-btn">
                                                <button className="btn btn-sm btn-warning btn-plus">
                                                    <i className="fa fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="align-middle">{c.price * c.quantity}</td>
                                    <td className="align-middle"><button className="btn btn-sm btn-danger"><i className="fa fa-times"></i></button></td>
                                </tr>
                              ))
                            }

                            </tbody>
                        </table>
                    </div>

                    <div className="col-lg-4">
                        <form className="mb-3" action="">
                            <div className="input-group">
                                <input type="text" className="form-control border-0 p-2" placeholder="Coupon Code" />
                                <div className="input-group-append">
                                    <button className="btn btn-warning p-2">Apply Coupon</button>
                                </div>
                            </div>
                        </form>

                        <h5 className="text-uppercase fw-bold mb-3"><span className=" pr-3">Cart Summary</span></h5>

                        <div className="bg-light p-3 mt-4">
                            <div className="border-bottom pb-2">
                                <div className="d-flex justify-content-between mb-3">
                                    <h6>Subtotal</h6>
                                    <h6>
                                        {
                                            cartItems.reduce(
                                                (acc,c)=> acc + Number(c.quantity),
                                                0
                                            )
                                        }{" "}
                                        (Units)
                                    </h6>
                                </div>

                                {/* <div className="d-flex justify-content-between">
                                    <h6 className="">Shipping</h6>
                                    <h6 className="">$10</h6>
                                </div> */}
                            </div>

                            <div className="pt-2">
                                <div className="d-flex justify-content-between mt-2">
                                    <h5>Total</h5>
                                    <h6 className="font-weight-medium">{`₹${cartItems.reduce(
                        (acc, c) => acc + c.quantity * c.price,
                        0
                      )}`}</h6>



                                </div>
                                <button className="btn btn-block btn-warning fw-bold my-3 py-3">Proceed To Checkout</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* <!-- Cart End --> */}
    </>
  )
}
export default Cart
