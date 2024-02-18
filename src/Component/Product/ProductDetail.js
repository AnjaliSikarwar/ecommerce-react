import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getProductDetail } from '../../Redux/Action/ProductAction'
import Loading from '../Layouts/Loading'
import MetaData from '../Layouts/MetaData'
import {addItemsToCart} from '../../Redux/Action/CartAction'


function ProductDetail() {
    const { id } = useParams()
    // console.log(id)
    const [quantity, setQuantity] = useState(1)
    const increaseQty = () => {
        if (productDetail.stock <= quantity) return;

        const qty = quantity + 1;
        setQuantity(qty);

    }
    const decreaseQty = () => {
        if (1 >= quantity) return;

        const qty = quantity - 1;
        setQuantity(qty);
    }
    const { productDetail,loading } = useSelector(state => state.pdetail)
    // console.log(getProductdata)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProductDetail(id))
    }, [dispatch, id])

    const addtoCartHandler = () =>{
        //alert('Hello Cart add)
        dispatch(addItemsToCart(id,quantity))
    }
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



            {/* Shop detail start */}
            <div className='container'>

                <div className='row'>

                    <div className='col-lg-5'>
                        <div className='left-detail'>
                            <img className='img-fluid' src={productDetail?.images?.url} alt='' />
                        </div>
                    </div>

                    <div className='col-lg-7'>
                        <div className='h-100 p-3 h-auto right-detail'>
                        {
                                loading ? <Loading/> : (
                                    <>
                                    <MetaData title={'Product Detail'} />
                                    <h3>{productDetail.name}</h3>
                                    </>
                                )
                            }
                            <h3>{productDetail.name}</h3>

                            <div className='d-flex mb-3'>
                                <div className='text-warning mr-2'>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star-half-alt'></i>
                                    <i className='fas fa-star'></i>
                                </div>
                                <h6 className='pt-1'>(99 Reviews)</h6>
                            </div>

                            <h3 className='mb-4'>{productDetail.price}</h3>
                            <p className='mb-4'>{productDetail.description}</p>

                            <div className='d-flex mb-3'>
                                <strong className='text-dark mr-3'>Sizes:</strong>
                                <form className='d-flex gap-3 px-2'>

                                    <div className='custom-control custom-radio'>
                                        <input type='radio' className='custom-control-input' id='size-1' name='size' />
                                        <label className='custom-control-label' for='size-1'>XS</label>
                                    </div>

                                    <div className='custom-control custom-radio'>
                                        <input type='radio' className='custom-control-input' id='size-2' name='size' />
                                        <label className='custom-control-label' for='size-2'>S</label>
                                    </div>

                                    <div className='custom-control custom-radio'>
                                        <input type='radio' className='custom-control-input' id='size-3' name='size' />
                                        <label className='custom-control-label' for='size-3'>M</label>
                                    </div>

                                    <div className='custom-control custom-radio'>
                                        <input type='radio' className='custom-control-input' id='size-4' name='size' />
                                        <label className='custom-control-label' for='size-4'>L</label>
                                    </div>

                                    <div className='custom-control custom-radio'>
                                        <input type='radio' className='custom-control-input' id='size-5' name='size' />
                                        <label className='custom-control-label' for='size-5'>XL</label>
                                    </div>

                                </form>
                            </div>

                            <div className='d-flex mb-3 gap-2'>
                                <strong className='text-dark mr-3'>Colors:</strong>

                                <form className='d-flex'>
                                    <div className='custom-control custom-radio'>
                                        <input type='radio' className='custom-control-input' id='color-1' name='color' />
                                        <label className='custom-control-label' for='color-1'>Black</label>
                                    </div>
                                    <div className='custom-control custom-radio'>
                                        <input type='radio' className='custom-control-input' id='color-2' name='color' />
                                        <label className='custom-control-label' for='color-2'>White</label>
                                    </div>
                                    <div className='custom-control custom-radio'>
                                        <input type='radio' className='custom-control-input' id='color-3' name='color' />
                                        <label className='custom-control-label' for='color-3'>Red</label>
                                    </div>
                                    <div className='custom-control custom-radio'>
                                        <input type='radio' className='custom-control-input' id='color-4' name='color' />
                                        <label className='custom-control-label' for='color-4'>Blue</label>
                                    </div>
                                    <div className='custom-control custom-radio'>
                                        <input type='radio' className='custom-control-input' id='color-5' name='color' />
                                        <label className='custom-control-label' for='color-5'>Green</label>
                                    </div>
                                </form>
                            </div>

                            <div className='d-flex align-items-center mb-4 pt-2'>
                                <div className='input-group quantity mr-3'>
                                    <div className='input-group-btn'>
                                        <button className='btn btn-warning' onClick={decreaseQty}>
                                            <i className='fa fa-minus'></i>
                                        </button>
                                    </div>

                                    <input type='text' className='form-control border-0 text-center' value={quantity}></input>

                                    <div className='input-group-btn'>
                                        <button className='btn btn-warning btn-plus' onClick={increaseQty}>
                                            <i className='fa fa-plus'></i>
                                        </button>
                                    </div>
                                </div>
                                <Link to= '/Cart'>
                                <button className='btn btn-warning' onClick={addtoCartHandler}>
                                    <i className='fa fa-shopping-cart mx-1'></i>
                                    Add To Cart
                                </button>
                                </Link>
                            </div>

                            <div className='d-flex pt-2'>
                                <strong className='text-dark'>Share on:</strong>
                                <div className='d-inline-flex'>
                                    <a className='text-dark px-2' href>
                                        <i className='fab fa-facebook-f'></i>
                                    </a>
                                    <a className='text-dark px-2' href>
                                        <i className='fab fa-twitter'></i>
                                    </a>
                                    <a className='text-dark px-2' href>
                                        <i className='fab fa-linkedin-in'></i>
                                    </a>
                                    <a className='text-dark px-2' href>
                                        <i className='fab fa-pinterest'></i>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='row mt-5'>
                    <div className='col'>
                        <div className='description px-3'>
                            <div className='nav nav-tabs mb-4'>
                                <Link className='nav-item nav-link text-dark active' data-toggle='tab'>
                                    Description
                                </Link>
                                <Link className='nav-item nav-link text-dark ' data-toggle='tab'>
                                    Information
                                </Link>
                                <Link className='nav-item nav-link text-dark ' data-toggle='tab'>
                                    Reviews (0)
                                </Link>
                            </div>
                            <div className='tab-content'>
                                <div className='tab-pane show active' id='tab-pane-1'>
                                    <h4 className='mb-3'>{productDetail.description}</h4>
                                    <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                                    <p>Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* Shop detail end */}




            {/* product start here */}
            <div className='container pt-5 pb-3'>
                <h2 className='section-title mb-4'>YOU MAY ALSO LIKE</h2>
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
                                    <i className='fa fa-star text-warning mr-1'></i>
                                    <i className='fa fa-star text-warning mr-1'></i>
                                    <i className='fa fa-star text-warning mr-1'></i>
                                    <i className='fa fa-star text-warning mr-1'></i>
                                    <i className='fa fa-star text-warning mr-1'></i>
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
                                    <i className='fa fa-star text-warning mr-1'></i>
                                    <i className='fa fa-star text-warning mr-1'></i>
                                    <i className='fa fa-star text-warning mr-1'></i>
                                    <i className='fa fa-star text-warning mr-1'></i>
                                    <i className='fa fa-star text-warning mr-1'></i>
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
                                    <i className='fa fa-star text-warning mr-1'></i>
                                    <i className='fa fa-star text-warning mr-1'></i>
                                    <i className='fa fa-star text-warning mr-1'></i>
                                    <i className='fa fa-star text-warning mr-1'></i>
                                    <i className='fa fa-star text-warning mr-1'></i>
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
                                    <i className='fa fa-star text-warning mr-1'></i>
                                    <i className='fa fa-star text-warning mr-1'></i>
                                    <i className='fa fa-star text-warning mr-1'></i>
                                    <i className='fa fa-star text-warning mr-1'></i>
                                    <i className='fa fa-star text-warning mr-1'></i>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* product end here */}
        </>
    )
}

export default ProductDetail