import React from 'react'
import PropTypes from 'prop-types'

const Header = props => {
    return (
        <div className="pb-200">
        <header className="pl-155 pr-155 intelligent-header">
            <div className="header-area header-area-2">
                <div className="container-fluid p-0">
                <div className="row no-gutters">
                    <div className="col-lg-3 col-md-6 col-6">
                    <div className="logo">
                        <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
                    </div>
                    </div>
                    <div className="col-lg-6 menu-none-block menu-center">
                    <div className="main-menu">
                        <nav>
                        <ul>
                            <li><a href="#">home</a></li>
                            <li><a href="about-us.html">about us</a></li>
                            <li><a href="shop-grid-view-5-col.html">shop</a></li>
                            <li><a href="#">pages</a>
                            <ul className="dropdown">
                                <li><a href="about-us.html">about us</a></li>
                                <li><a href="cart.html">cart</a></li>
                                <li><a href="checkout.html">checkout</a></li>
                                <li><a href="wishlist.html">wishlist</a></li>
                                <li><a href="contact.html">contact</a></li>
                                <li><a href="login.html">login</a></li>
                                <li><a href="register.html">register</a></li>
                            </ul>
                            </li>
                            <li><a href="#">blog</a>
                            <ul className="dropdown">
                                <li><a href="blog.html">blog </a></li>
                                <li><a href="blog-details.html">blog details</a></li>
                            </ul>
                            </li>
                            <li><a href="contact.html">contact</a></li>
                        </ul>
                        </nav>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-6">
                    <div className="header-search-cart">
                        <div className="header-search common-style">
                            <button className="sidebar-trigger-search">
                                <span className="ion-ios-search-strong" />
                            </button>
                        </div>
                        <div className="header-cart common-style">
                            <button className="sidebar-trigger">
                                <span className="ion-bag" />
                            </button>
                        </div>
                        <div className="header-sidebar common-style">
                            <button className="header-navbar-active">
                                <span className="ion-navicon" />
                            </button>
                        </div>
                    </div>
                    </div>
                    <div className="mobile-menu-area d-md-block col-md-12 col-lg-12 col-12 d-lg-none d-xl-none">
                    <div className="mobile-menu">
                        <nav id="mobile-menu-active">
                        <ul className="menu-overflow">
                            <li><a href="#">HOME</a>
                            <ul>
                                <li><a href="index.html">furniture</a></li>
                                <li><a href="index-electronics.html">electronics</a></li>
                                <li><a href="index-fashion.html">fashion</a></li>
                                <li><a href="index-jewellery.html">jewellery</a></li>
                                <li><a href="index-food-drink.html">food &amp; drink</a></li>
                                <li><a href="index-toys.html">Toys &amp; Games</a></li>
                            </ul>
                            </li>
                            <li><a href="#">pages</a>
                            <ul>
                                <li><a href="about-us.html">about us</a></li>
                                <li><a href="cart.html">cart</a></li>
                                <li><a href="checkout.html">checkout</a></li>
                                <li><a href="wishlist.html">wishlist</a></li>
                                <li><a href="contact.html">contact</a></li>
                                <li><a href="login.html">login</a></li>
                                <li><a href="register.html">register</a></li>
                            </ul>
                            </li>
                            <li><a href="#">shop</a>
                            <ul>
                                <li><a href="shop-grid-view-3-col.html">grid 3 column</a></li>
                                <li><a href="shop-grid-view-5-col.html">grid 5 column</a></li>
                                <li><a href="shop-grid-view-sidebar.html">grid with sidebar</a></li>
                                <li><a href="shop-list-view-1-col.html">list 1 column</a></li>
                                <li><a href="shop-list-view-2-col.html">list 2 column</a></li>
                                <li><a href="shop-list-view-sidebar.html">list with sidebar</a></li>
                                <li><a href="shop-list-view-1-col-container.html">list 1 column box</a></li>
                                <li><a href="product-details.html">tab style 1</a></li>
                                <li><a href="product-details-2.html">tab style 2</a></li>
                                <li><a href="product-details-3.html">tab style 3</a></li>
                                <li><a href="product-details-6.html">sticky style</a></li>
                                <li><a href="product-details-7.html">sticky style 2</a></li>
                                <li><a href="product-details-8.html">gallery style</a></li>
                                <li><a href="product-details-9.html">gallery style 2</a></li>
                                <li><a href="product-details-4.html">fixed image style</a></li>
                                <li><a href="product-details-5.html">fixed image style 2</a></li> 
                            </ul>
                            </li>
                            <li><a href="#">BLOG</a>
                            <ul>
                                <li><a href="blog.html">blog </a></li>
                                <li><a href="blog-2-col.html">blog 2 column</a></li>
                                <li><a href="blog-left-sidebar.html">blog left sidebar</a></li>
                                <li><a href="blog-details.html">blog details</a></li>
                            </ul>
                            </li>
                            <li><a href="contact.html"> Contact</a></li>
                        </ul>
                        </nav>							
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </header>
        <div className="container">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
            {/* Indicators */}
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to={0} className="active" />
                <li data-target="#myCarousel" data-slide-to={1} />
                <li data-target="#myCarousel" data-slide-to={2} />
            </ol>
            {/* Wrapper for slides */}
            <div className="carousel-inner">
                <div className="item active">
                <img src="la.jpg" alt="Los Angeles" style={{width: '100%'}} />
                </div>
                <div className="item">
                <img src="chicago.jpg" alt="Chicago" style={{width: '100%'}} />
                </div>
                <div className="item">
                <img src="ny.jpg" alt="New york" style={{width: '100%'}} />
                </div>
            </div>
            {/* Left and right controls */}
            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" />
                <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" />
                <span className="sr-only">Next</span>
            </a>
            </div>
        </div>
        </div>
      

    )
}

Header.propTypes = {

}

export default Header
