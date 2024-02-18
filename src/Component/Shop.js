import React from 'react'

function Shop() {
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


            <div className="container-fluid">
                <div className="row px-xl-4">

                    <div className="col-lg-3 col-md-4">

                        {/* Price start */}
                        <h5 className="section-title text-uppercase mb-3"><span className="pr-3">Filter by price</span></h5>
                        <div className="bg-light p-4 mb-3">
                            <form>
                                <div className="d-flex justify-content-between mb-3">
                                    <input type="checkbox" className="" />
                                    <label className="" for="price-all">All Price</label>
                                    <span className="border text-dark fw-bold">1000</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="" />
                                    <label className="" for="price-1">$0 - $100</label>
                                    <span className="border text-dark fw-bold">150</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="" />
                                    <label className="" for="price-2">$100 - $200</label>
                                    <span className="border text-dark fw-bold">295</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="" />
                                    <label className="" for="price-3">$200 - $300</label>
                                    <span className="border text-dark fw-bold">246</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="" />
                                    <label className="" for="price-4">$300 - $400</label>
                                    <span className="border text-dark fw-bold">145</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <input type="checkbox" className="" />
                                    <label className="" for="price-5">$400 - $500</label>
                                    <span className="border text-dark fw-bold">168</span>
                                </div>
                            </form>
                        </div>
                        {/* Price end */}
                        
                        {/* Colorbar start */}
                        <h5 className="section-title position-relative text-uppercase mb-3 mt-3"><span className="">Filter by color</span></h5>
                        <div className="bg-light p-4 mb-3">
                            <form>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" />
                                    <label className="" for="price-all">All Color</label>
                                    <span className="border text-dark fw-bold">1000</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" />
                                    <label className="" for="color-1">Black</label>
                                    <span className="border text-dark fw-bold">150</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" />
                                    <label className="" for="color-2">White</label>
                                    <span className="border text-dark fw-bold">295</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" />
                                    <label className="" for="color-3">Red</label>
                                    <span className="border text-dark fw-bold">246</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" />
                                    <label className="" for="color-4">Blue</label>
                                    <span className="border text-dark fw-bold">145</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <input type="checkbox" />
                                    <label className="" for="color-5">Green</label>
                                    <span className="text-dark border fw-bold">168</span>
                                </div>
                            </form>
                        </div>
                        {/* Colorbar end */}

                        {/* Size start */}
                        <h5 className="section-title text-uppercase mb-3"><span className="">Filter by size</span></h5>
                        <div className="bg-light p-4 mb-3">
                            <form>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="" />
                                    <label className="" for="size-all">All Size</label>
                                    <span className="border text-dark fw-bold">1000</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="" />
                                    <label className="" for="size-1">XS</label>
                                    <span className="border text-dark fw-bold">150</span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="" />
                                    <label className="" for="size-2">S</label>
                                    <span className="border text-dark fw-bold">295</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="" />
                                    <label className="" for="size-3">M</label>
                                    <span className="border text-dark fw-bold">246</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <input type="checkbox" className="" />
                                    <label className="" for="size-4">L</label>
                                    <span className="border text-dark fw-bold">145</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <input type="checkbox" className="" />
                                    <label className="" for="size-5">XL</label>
                                    <span className="border text-dark fw-bold">168</span>
                                </div>
                            </form>
                        </div>
                        {/* Size end */}
                    </div>

                    {/* shop product start */}
                    <div className="col-lg-9 col-md-8">
                        <div className="row pb-3">

                            <div className="col-12 pb-1">
                                <div className="d-flex align-items-center justify-content-between mb-4">

                                    <div className="ml-2">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-bs-toggle="dropdown">Sorting</button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="/">Latest</a>
                                                <a className="dropdown-item" href="/">Popularity</a>
                                                <a className="dropdown-item" href="/">Best Rating</a>
                                            </div>
                                        </div>
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-bs-toggle="dropdown">Showing</button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="/">10</a>
                                                <a className="dropdown-item" href="/">20</a>
                                                <a className="dropdown-item" href="/">30</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product-item bg-light mb-4">
                                    <div className="product-img">
                                        <img className="img-fluid w-100" src="img/product-1.jpg" alt="" />
                                        <div className="product-action">
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-shopping-cart"></i></a>
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="far fa-heart"></i></a>
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-sync-alt"></i></a>
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-search"></i></a>
                                        </div>
                                    </div>
                                    <div className="text-center py-4">
                                        <a className="text-decoration-none" href="/">Product Name Goes Here</a>
                                        <div className="d-flex align-items-center justify-content-center mt-2">
                                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center mb-1">
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="fa fa-star text-warning"></small>
                                            <small>(99)</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product-item bg-light">
                                    <div className="product-img">
                                        <img className="img-fluid w-100" src="img/product-2.jpg" alt="" />
                                        <div className="product-action">
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-shopping-cart"></i></a>
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="far fa-heart"></i></a>
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-sync-alt"></i></a>
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-search"></i></a>
                                        </div>
                                    </div>
                                    <div className="text-center py-4">
                                        <a className="text-decoration-none" href="/">Product Name Goes Here</a>
                                        <div className="d-flex align-items-center justify-content-center mt-2">
                                            <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center mb-1">
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="fa fa-star-half-alt text-warning"></small>
                                            <small>(99)</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product-item bg-light">
                                    <div className="product-img">
                                        <img className="img-fluid w-100" src="img/product-3.jpg" alt="" />
                                        <div className="product-action">
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-shopping-cart"></i></a>
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="far fa-heart"></i></a>
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-sync-alt"></i></a>
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-search"></i></a>
                                        </div>
                                    </div>
                                    <div className="text-center py-4">
                                        <a className="text-decoration-none" href="/">Product Name Goes Here</a>
                                        <div className="d-flex align-items-center justify-content-center mt-2">
                                            <h5>$123.00</h5><h6 className="text-muted"><del>$123.00</del></h6>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center mb-1">
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="fa fa-star-half-alt text-warning"></small>
                                            <small className="far fa-star text-warning"></small>
                                            <small>(99)</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product-item bg-light">
                                    <div className="product-img">
                                        <img className="img-fluid w-100" src="img/product-4.jpg" alt="" />
                                        <div className="product-action">
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-shopping-cart"></i></a>
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="far fa-heart"></i></a>
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-sync-alt"></i></a>
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-search"></i></a>
                                        </div>
                                    </div>
                                    <div className="text-center py-4">
                                        <a className="text-decoration-none" href="/">Product Name Goes Here</a>
                                        <div className="d-flex align-items-center justify-content-center mt-2">
                                            <h5>$123.00</h5><h6 className="text-muted"><del>$123.00</del></h6>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center mb-1">
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="far fa-star text-warning"></small>
                                            <small className="far fa-star text-warning"></small>
                                            <small>(99)</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product-item bg-light">
                                    <div className="product-img">
                                        <img className="img-fluid w-100" src="img/product-5.jpg" alt="" />
                                        <div className="product-action">
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-shopping-cart"></i></a>
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="far fa-heart"></i></a>
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-sync-alt"></i></a>
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-search"></i></a>
                                        </div>
                                    </div>
                                    <div className="text-center py-4">
                                        <a className="text-decoration-none" href="/">Product Name Goes Here</a>
                                        <div className="d-flex align-items-center justify-content-center mt-2">
                                            <h5>$123.00</h5><h6 className="text-muted"><del>$123.00</del></h6>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center mb-1">
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="far fa-star text-warning"></small>
                                            <small className="far fa-star text-warning"></small>
                                            <small>(99)</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product-item bg-light">
                                    <div className="product-img">
                                        <img className="img-fluid w-100" src="img/product-6.jpg" alt="" />
                                        <div className="product-action">
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-shopping-cart"></i></a>
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="far fa-heart"></i></a>
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-sync-alt"></i></a>
                                            <a className="btn btn-outline-dark btn-square" href="/"><i className="fa fa-search"></i></a>
                                        </div>
                                    </div>
                                    <div className="text-center py-4">
                                        <a className="text-decoration-none" href="/">Product Name Goes Here</a>
                                        <div className="d-flex align-items-center justify-content-center mt-2">
                                            <h5>$123.00</h5><h6 className="text-muted"><del>$123.00</del></h6>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center mb-1">
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="fa fa-star text-warning"></small>
                                            <small className="far fa-star text-warning"></small>
                                            <small className="far fa-star text-warning"></small>
                                            <small>(99)</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 mt-5">
                                <nav>
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item disabled"><a className="page-link" href="/"><span>Previous</span></a></li>
                                        <li className="page-item active"><a className="page-link border-0 bg-warning fw-bold" href="/">1</a></li>
                                        <li className="page-item"><a className="page-link text-warning fw-bold" href="/">2</a></li>
                                        <li className="page-item"><a className="page-link text-warning fw-bold" href="/">3</a></li>
                                        <li className="page-item"><a className="page-link text-warning fw-bold" href="/">Next</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* shop product end */}
                </div>
            </div>
        </>
    )
}

export default Shop