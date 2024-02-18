import React from 'react'

function Checkout() {
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



            {/* Checkout start */}
            <div className='container'>
                <div className='row'>

                    <div className='col-lg-8'>
                        <h5 className='section-title mb-3'><span>Billing Address</span></h5>
                        <div className='p-3 mb-5 billing-form'>

                            <div className='row'>
                                <div className='col-md-6 form-group'>
                                    <label>First Name</label>
                                    <input className='form-control' type='text' placeholder='John' />
                                </div>
                                <div className='col-md-6 form-group'>
                                    <label>Last Name</label>
                                    <input className='form-control' type='text' placeholder='Doe' />
                                </div>
                                <div className='col-md-6 form-group'>
                                    <label>E-mail</label>
                                    <input className='form-control' type='text' placeholder='john@email.com' />
                                </div>
                                <div className='col-md-6 form-group'>
                                    <label>Mobile No</label>
                                    <input className='form-control' type='text' placeholder='+123 456 789' />
                                </div>
                                <div className='col-md-6 form-group'>
                                    <label>Address Line 1</label>
                                    <input className='form-control' type='text' placeholder='123 street' />
                                </div>
                                <div className='col-md-6 form-group'>
                                    <label>Address Line 2</label>
                                    <input className='form-control' type='text' placeholder='123 street' />
                                </div>
                                <div className='col-md-6 form-group'>
                                    <label>Country</label>
                                    <select className='custom-select'>
                                        <option>United states</option>
                                        <option>Afganistan</option>
                                        <option>Albania</option>
                                        <option>Algeria</option>
                                    </select>
                                </div>
                                <div className='col-md-6 form-group'>
                                    <label>City</label>
                                    <input className='form-control' type='text' placeholder='New York' />
                                </div>
                                <div className='col-md-6 form-group'>
                                    <label>State</label>
                                    <input className='form-control' type='text' placeholder='New York' />
                                </div>
                                <div className='col-md-6 form-group'>
                                    <label>ZIP Code</label>
                                    <input className='form-control' type='text' placeholder='123' />
                                </div>
                                <div className='col-md-12 form-group'>
                                    <div className='custom-control custom-checkbox'>
                                        <input type='checkbox' className='custom-control-input' id='newaccount' />
                                        <label className='custom-control-label' for='newaccount'>Create an account</label>
                                    </div>
                                </div>
                                <div className='col-md-12 form-group'>
                                    <div className='custom-control custom-checkbox'>
                                        <input type='checkbox' className='custom-control-input' id='shipto' />
                                        <label className='custom-control-label' for='shipto' data-toggle='collapse' data-target='#shipping-address'>Ship to different address</label>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className='col-lg-4'>
                        <h5 className='section-title mb-3'><span>Order Total</span></h5>

                        <div className='mb-5 p-3 order'>
                            <div className='border-bottom'>
                                <h6 className='mb-3'>Products</h6>
                                <div className='d-flex justify-content-between'>
                                    <p>Product Name 1</p>
                                    <p>$150</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p>Product Name 2</p>
                                    <p>$150</p>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <p>Product Name 3</p>
                                    <p>$150</p>
                                </div>

                                <div className='border-bottom pt-3 pb-2'>
                                    <div className='d-flex justify-content-between mb-3'>
                                        <h6>Subtotal</h6>
                                        <h6>$150</h6>
                                    </div>
                                    <div className='d-flex justify-content-between '>
                                        <h6 className='font-weight-medium'>Shipping</h6>
                                        <h6 className='font-weight-medium'>$10</h6>
                                    </div>
                                </div>

                            </div>
                            <div className='pt-2'>
                                <div className='d-flex justify-content-between mt-2'>
                                    <h5>Total</h5>
                                    <h5>$160</h5>
                                </div>
                            </div>
                        </div>

                        <div className='mb-5'>
                            <h5 className='section-title mb-3'><span>PAYMENT</span></h5>
                            <div className='order p-3'>
                                <div className='form-group'>
                                    <div className='custom-control custom-radio'>
                                        <input type='radio' className='custom-control-input' name='payment' id='paypal' />
                                        <label className='custom-control-label' for='paypal'>Paypal</label>
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <div className='custom-control custom-radio'>
                                        <input type='radio' className='custom-control-input' name='payment' id='directcheck' />
                                        <label className='custom-control-label' for='directcheck'>Direct Check</label>
                                    </div>
                                </div>

                                <div className='form-group mb-4'>
                                    <div className='custom-control custom-radio'>
                                        <input type='radio' className='custom-control-input' name='payment' id='banktransfer' />
                                        <label className='custom-control-label' for='banktransfer'>Bank Transfer</label>
                                    </div>
                                </div>
                                <button className='btn btn-warning place-btn '>Place Order</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Checkout end */}
        </>
    )
}

export default Checkout