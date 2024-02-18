import React from 'react'

function Footer() {
  return (
    <>
      <footer className="first-footer text-center text-light">

        {/* Section quick Links*/}
        <section className="footer-section">
          <div className="container middle-footer text-center text-md-start">

            <div className="row">

              <div className="col-md-3 col-lg-4 mx-auto mb-4">
                <h4 className="text-uppercase fw-bold mb-4">
                  Get In Touch
                </h4>
                <p>
                  No dolore ipsum accusam no lorem. 
                  Invidunt sed clita kasd clita et et dolor sed dolor. 
                  Rebum tempor no vero est magna amet no
                </p>
                <p className="mb-2">
                  <i className="fa fa-map-marker-alt text-warning mx-2"></i>
                  123 Street, New York, USA
                </p>
                <p className="mb-2"><i className="fa fa-envelope text-warning mx-2"></i>
                info@example.com
                </p>
                <p className="mb-0"><i className="fa fa-phone-alt text-warning mx-2"></i>
                +012 345 67890
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h4 className="text-uppercase fw-bold mb-4">QUICK SHOP</h4>
                <p><a href="/" className="text-light text-decoration-none">Home</a></p>
                <p><a href="/" className="text-light text-decoration-none">Our shop</a></p>
                <p><a href="/" className="text-light text-decoration-none">Shop detail</a></p>
                <p><a href="/" className="text-light text-decoration-none">Shopping Cart</a></p>
                <p><a href="/" className="text-light text-decoration-none">Checkout</a></p>
                <p><a href="/" className="text-light text-decoration-none">Contact us</a></p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h4 className="text-uppercase fw-bold mb-4">MY ACCOUNT</h4>
                <p><a href="/" className="text-light text-decoration-none">Home</a></p>
                <p><a href="/" className="text-light text-decoration-none">Our shop</a></p>
                <p><a href="/" className="text-light text-decoration-none">Shop detail</a></p>
                <p><a href="/" className="text-light text-decoration-none">Shopping Cart</a></p>
                <p><a href="/" className="text-light text-decoration-none">Checkout</a></p>
                <p><a href="/" className="text-light text-decoration-none">Contact us</a></p>
              </div>

              {/*follow start */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h4 className="text-uppercase fw-bold mb-4">NEWS LETTER</h4>
                <p>
                  Duo stet tempor ipsum sit amet magna ipsum tempor est
                </p>
                <form action="">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Your Email Address" />
                    <div className="input-group-append">
                      <button className="btn btn-warning">Sign Up</button>
                    </div>
                  </div>
                </form>

                <h6 className="text-light text-uppercase mt-4 mb-3">Follow Us</h6>
                <div className="social-icons d-flex">
                  <a className="btn btn-warning mx-1" href="/"><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-warning mx-1" href="/"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-warning mx-1" href="/"><i className="fab fa-linkedin-in"></i></a>
                  <a className="btn btn-warning mx-1" href="/"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
              {/*follow end */}

            </div>

          </div>
          {/*Grid row end*/}
        </section>
        {/*Section quick Links*/}

        {/*Copyright*/}
        <div className="row border-top mx-xl-4 py-4" style={{ borderColor: "#626161!importants" }}>
          <div className="col-md-12 px-xl-0">
            <p className="text-center">
              &copy;
              <a className="text-center text-light" href="/">PNINFOSYS</a>
            </p>
          </div>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </>
  )
}

export default Footer