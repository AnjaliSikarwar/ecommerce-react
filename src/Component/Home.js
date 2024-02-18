import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'  //useSelector use for data get
import { getAllCategory } from '../Redux/Action/CategoryAction'
import Category from './Category/Category'
import Product from './Product/Product'
import { getAllProducts } from '../Redux/Action/ProductAction'
import Loading from './Layouts/Loading'
import Message from './Layouts/Message'
import MetaData from './Layouts/MetaData'

function Home() {
    const dispatch = useDispatch()  //dispatch use for action call
    const { categories, loading, error } = useSelector((state) => state.c)
    const { products } = useSelector((state) => state.pd)
    // console.log(products)
    useEffect(() => {
        dispatch(getAllCategory())
    }, [dispatch])
    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    
    return (
        <>

        <MetaData title='Home | ecommrece-1'/>
       
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8 mb-3">
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="" src="img/carousel-1.jpg" style={{ objectfit: "cover" }} alt='' />
                                        <div className="carousel-caption d-flex align-items-center justify-content-center">
                                            <div className="p-3">
                                                <h1 className="fs-1 text-white mb-3">Men Fashion</h1>
                                                <p className="mx-md-5">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                                <a className="btn btn-outline-light py-2 px-4 mt-3" href="/">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="" src="img/carousel-2.jpg" style={{ objectfit: "cover" }} alt='' />
                                        <div className="carousel-caption d-flex align-items-center justify-content-center">
                                            <div className="p-3">
                                                <h1 className="fs-1 text-white mb-3">Women Fashion</h1>
                                                <p className="mx-md-5 px-5">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                                <a className="btn btn-outline-light py-2 px-4 mt-3" href="/">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="" src="img/carousel-3.jpg" style={{ objectfit: "cover" }} alt='' />
                                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                            <div className="p-3">
                                                <h1 className="fs-4 text-white mb-3">Kids Fashion</h1>
                                                <p className="mx-md-5 px-5">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                                <a className="btn btn-outline-light py-2 px-4 mt-3" href="/">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                        <div className="col-lg-4 col-12 p-0">
                            <div className="first-section-img">
                                <img src="img/offer-1.jpg" className="img-fluid img-thumbnail" alt="" />
                                <div className="first-section-text mt-3">
                                    <h6 className="text-white text-uppercase">Save 20%</h6>
                                    <h3 className="text-white mb-3 fw-bold">Special Offer</h3>
                                    <a href="/" className="btn btn-warning">Shop Now</a>
                                </div>
                            </div>


                            <div className="first-section-img">
                                <img src="img/offer-2.jpg" className="img-fluid img-thumbnail" alt="" />
                                <div className="first-section-text mt-3">
                                    <h6 className="text-white text-uppercase">Save 20%</h6>
                                    <h3 className="text-white mb-3 fw-bold">Special Offer</h3>
                                    <a href="/" className="btn btn-warning">Shop Now</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Services start */}
                <div className="container">

                    <div className="row mt-5 pb-3">

                        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                            <div className="d-flex align-items-center bg-light mb-4" style={{ padding: "30px" }}>
                                <li className="fa fa-check fa-2x text-warning mx-3"></li>
                                <h5 className="fw-bolder">Quality Product</h5>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                            <div className="d-flex align-items-center bg-light mb-4" style={{ padding: "30px" }}>
                                <li className="fa fa-shipping-fast fa-2x text-warning mx-3"></li>
                                <h5 className="fw-bolder">Quality Product</h5>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                            <div className="d-flex align-items-center bg-light mb-4" style={{ padding: "30px" }}>
                                <li className="fas fa-exchange-alt fa-2x text-warning mx-3"></li>
                                <h5 className="fw-bolder">Quality Product</h5>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                            <div className="d-flex align-items-center bg-light mb-4" style={{ padding: "30px" }}>
                                <li className="fa fa-phone-volume fa-2x text-warning mx-3"></li>
                                <h5 className="fw-bolder">Quality Product</h5>
                            </div>
                        </div>

                    </div>

                </div>
                {/* Services end */}


                {/* Categories Start */}
                <div className="container py-3">
                    <h2 className="text-uppercase">Categories</h2>
                    <div className="row mt-4">
                        {
                            loading ? (<Loading />) : error ? (<Message variant={'danger'}>{error}</Message>)
                                : (
                                    categories.map((c) => (
                                        <Category category={c} />
                                    )))
                        }

                    </div>
                </div>
                {/* Categories end */}


                {/* featured product Start */}
                <div className='container pt-5 pb-3'>
                    <h2 className='section-title mb-4'>FEATURED PRODUCT</h2>
                    <div className='row'>
                        {
                            loading ? (<Loading />) : error ? (<Message variant={'danger'}>{error}</Message>)
                                : (
                                    products.map((pd) => (
                                        <Product product={pd} />
                                    )))
                        }

                    </div>
                </div>
                {/* featured product end */}


                {/* Offer start */}
                <div className='container pt-5 pt-3'>
                    <div className='row'>

                        <div className='col-md-6'>

                            <div className='product-offer'>
                                <img className='img-fluid' src='https://pnecommerce.netlify.app/img/offer-1.jpg' alt='' />

                                <div className='offer-text'>
                                    <h6 className='text-white'>SAVE 20%</h6>
                                    <h3 className='text-white'>Special Offer</h3>
                                    <a href className='btn'>Shop Now</a>
                                </div>
                            </div>

                        </div>


                        <div className='col-md-6'>

                            <div className='product-offer'>
                                <img className='img-fluid' src='	https://pnecommerce.netlify.app/img/offer-2.jpg' alt='' />

                                <div className='offer-text'>
                                    <h6 className='text-white'>SAVE 20%</h6>
                                    <h3 className='text-white'>Special Offer</h3>
                                    <a href className='btn'>Shop Now</a>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
                {/* Offer end */}


                {/* recent product Start */}
                <div className='container pt-5 pb-3'>
                    <h2 className='section-title mb-4'>RECENT PRODUCT</h2>
                    <div className='row'>

                        <div className='col-lg-3 col-md-4 col-sm-6 pb-1 box-3'>
                            <div className='product-item mb-4' >
                                <div className='product-img'>
                                    <img className='img-fluid w-100' src='https://pnecommerce.netlify.app/img/product-1.jpg' alt='' />
                                </div>
                                <div className=' product-text text-center py-4'>
                                    <a className='text-decoration-none' href>Product Name Goes Here</a>
                                    <div className='d-flex align-items-center justify-content-center mt-2'>
                                        <h5>$123.00</h5>
                                        <h6 className='text-muted'><del>$123.00</del></h6>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center mb-1'>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-4 col-sm-6 pb-1'>
                            <div className='product-item mb-4'>
                                <div className='product-img'>
                                    <img className='img-fluid w-100' src='https://pnecommerce.netlify.app/img/product-2.jpg' alt='' />
                                </div>
                                <div className=' product-text text-center py-4'>
                                    <a className='text-decoration-none' href>Product Name Goes Here</a>
                                    <div className='d-flex align-items-center justify-content-center mt-2'>
                                        <h5>$123.00</h5>
                                        <h6 className='text-muted'><del>$123.00</del></h6>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center mb-1'>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-4 col-sm-6 pb-1'>
                            <div className='product-item mb-4'>
                                <div className='product-img'>
                                    <img className='img-fluid w-100' src='https://pnecommerce.netlify.app/img/product-3.jpg' alt='' />
                                </div>
                                <div className=' product-text text-center py-4'>
                                    <a className='text-decoration-none' href>Product Name Goes Here</a>
                                    <div className='d-flex align-items-center justify-content-center mt-2'>
                                        <h5>$123.00</h5>
                                        <h6 className='text-muted'><del>$123.00</del></h6>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center mb-1'>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-4 col-sm-6 pb-1'>
                            <div className='product-item mb-4'>
                                <div className='product-img'>
                                    <img className='img-fluid w-100' src='	https://pnecommerce.netlify.app/img/product-4.jpg' alt='' />
                                </div>
                                <div className=' product-text text-center py-4'>
                                    <a className='text-decoration-none' href>Product Name Goes Here</a>
                                    <div className='d-flex align-items-center justify-content-center mt-2'>
                                        <h5>$123.00</h5>
                                        <h6 className='text-muted'><del>$123.00</del></h6>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center mb-1'>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-4 col-sm-6 pb-1'>
                            <div className='product-item mb-4'>
                                <div className='product-img'>
                                    <img className='img-fluid w-100' src='https://pnecommerce.netlify.app/img/product-5.jpg' alt='' />
                                </div>
                                <div className=' product-text text-center py-4'>
                                    <a className='text-decoration-none' href>Product Name Goes Here</a>
                                    <div className='d-flex align-items-center justify-content-center mt-2'>
                                        <h5>$123.00</h5>
                                        <h6 className='text-muted'><del>$123.00</del></h6>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center mb-1'>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-4 col-sm-6 pb-1'>
                            <div className='product-item mb-4'>
                                <div className='product-img'>
                                    <img className='img-fluid w-100' src='https://pnecommerce.netlify.app/img/product-6.jpg' alt='' />
                                </div>
                                <div className=' product-text text-center py-4'>
                                    <a className='text-decoration-none' href>Product Name Goes Here</a>
                                    <div className='d-flex align-items-center justify-content-center mt-2'>
                                        <h5>$123.00</h5>
                                        <h6 className='text-muted'><del>$123.00</del></h6>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center mb-1'>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-4 col-sm-6 pb-1'>
                            <div className='product-item mb-4'>
                                <div className='product-img'>
                                    <img className='img-fluid w-100' src='https://pnecommerce.netlify.app/img/product-7.jpg' alt='' />
                                </div>
                                <div className=' product-text text-center py-4'>
                                    <a className='text-decoration-none' href>Product Name Goes Here</a>
                                    <div className='d-flex align-items-center justify-content-center mt-2'>
                                        <h5>$123.00</h5>
                                        <h6 className='text-muted'><del>$123.00</del></h6>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center mb-1'>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-4 col-sm-6 pb-1'>
                            <div className='product-item mb-4'>
                                <div className='product-img'>
                                    <img className='img-fluid w-100' src='https://pnecommerce.netlify.app/img/product-8.jpg' alt='' />
                                </div>
                                <div className=' product-text text-center py-4'>
                                    <a className='text-decoration-none' href>Product Name Goes Here</a>
                                    <div className='d-flex align-items-center justify-content-center mt-2'>
                                        <h5>$123.00</h5>
                                        <h6 className='text-muted'><del>$123.00</del></h6>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center mb-1'>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                        <small className='fa fa-star text-primary mr-1'></small>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* recent product end */}

                {/* Vendor start */}
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-md-2 d-flex align-items-center justify-content-center'>
                            <div className='vendor-icons'>
                                <img src='https://pnecommerce.netlify.app/img/vendor-3.jpg' alt='' />
                            </div>
                        </div>


                        <div className='col-md-2 d-flex align-items-center justify-content-center'>
                            <div className='vendor-icons' >
                                <img src='https://pnecommerce.netlify.app/img/vendor-5.jpg' alt='' />
                            </div>
                        </div>


                        <div className='col-md-2 d-flex align-items-center justify-content-center'>
                            <div className='vendor-icons'>
                                <img src='https://pnecommerce.netlify.app/img/vendor-6.jpg' alt='' />
                            </div>
                        </div>

                        <div className='col-md-2 d-flex align-items-center justify-content-center'>
                            <div className='vendor-icons'>
                                <img src='https://pnecommerce.netlify.app/img/vendor-7.jpg' alt='' />
                            </div>
                        </div>



                        <div className='col-md-2 d-flex align-items-center justify-content-center'>
                            <div className='vendor-icons' >
                                <img src='https://pnecommerce.netlify.app/img/vendor-8.jpg' alt='' />
                            </div>
                        </div>


                        <div className='col-md-2 d-flex align-items-center justify-content-center '>
                            <div className='vendor-icons'>
                                <img src='https://pnecommerce.netlify.app/img/vendor-1.jpg' alt='' />
                            </div>
                        </div>

                    </div>
                 </div>

                {/* Vendor end */}

            
            

        </>
    )
}

export default Home