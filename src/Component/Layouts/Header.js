import { Link } from 'react-router-dom'
import Topbar from './Topbar'
function Header() {
    return (
        <>
            <Topbar />

            <nav className="navbar navbar-expand-md navbar-dark">
                <div className='container-fluid bg-dark'>

                    <Link to="/" className='navbar-brand' >
                        <div className="text-decoration-none d-none d-lg-block bg-warning" data-toggle="collapse" href="/" style={{ height: "56px", padding: "14px 30px" }}>
                            <span className="text-dark"><i className="fa fa-bars mx-3"></i>Categories</span>
                            <i className="fa fa-angle-down text-dark mx-4"></i>
                        </div>
                        <div className="text-decoration-none d-block d-lg-none">
                            <span className="fs-1 text-uppercase text-dark bg-light px-2">Multi</span>
                            <span className="fs-1 text-uppercase text-light bg-warning px-2">Shop</span>
                        </div>
                    </Link>

                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#a">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="a">
                        <ul className="navbar-nav menu-navbar-nav mx-4">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/shop">Shop</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/shopdetail">Shop Detail</Link>
                            </li>

                            <div className="nav-item dropdown" id="page">
                                <Link to="pages" className="nav-link dropdown-toggle text-warning" id="page" data-bs-toggle="dropdown">Pages</Link>
                                <div className="dropdown-menu bg-warning rounded-0 border-0 m-0">
                                    <Link className='dropdown-item' to='/shoppingcart'>Shopping Cart</Link>
                                    <Link className='dropdown-item' to='/checkout'>Checkout</Link>
                                </div>
                            </div>

                            <li className="nav-item">
                                <Link className="nav-link" to="contact">Contact</Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav menu-navbar-nav mx-4 ms-auto">
                            <div className="liked-bag d-none d-lg-block">
                                <Link to="/" className="likedHeart">
                                    <i className="fas fa-heart text-warning mx-2"></i>
                                    <span className="badge text-secondary border border-secondary rounded-circle" style={{ paddingbottom: "2px" }}>0</span>
                                </Link>
                                <Link to="/" className="shoppingCart">
                                    <i className="fas fa-shopping-cart text-warning mx-2"></i>
                                    <span className="badge text-secondary border border-secondary rounded-circle" style={{ paddingbottom: "2px" }}>0</span>
                                </Link>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header