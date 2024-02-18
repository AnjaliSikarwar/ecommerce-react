import React from 'react'
import { Link } from 'react-router-dom'

function Product({product}) {
  return (
   <>
    
    <div className='col-lg-3 col-md-4 col-sm-6 pb-1 box-3'>
                            <div className='product-item mb-4' >
                                <div className='product-img'>
                                <Link to={`productDetail/${product._id}`}>
                                    <img className='img-fluid w-100' src={product.images.url} alt='' />
                                    </Link>
                                </div>
                                <div className=' product-text text-center py-4'>
                                    <Link className='text-decoration-none' to={`productDetail/${product._id}`}><h6>{product.name}</h6></Link>
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

   </>
  )
}

export default Product