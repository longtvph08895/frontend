import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => {
    return (
        <footer className="footer-area gray-bg pt-100 pb-95">
            <div className="container">
                <div className="row">
                <div className="col-lg-3 col-md-5 col-12">
                    <div className="footer-widget">
                    <div className="footer-widget-l-content">
                        <h4>20 Years Experience</h4>
                        <ul>
                        <li><a href="#"><i className="ion-social-twitter" /></a></li> 
                        <li><a href="#"><i className="ion-social-tumblr" /></a></li>
                        <li><a href="#"><i className="ion-social-facebook" /></a></li> 
                        <li><a href="#"><i className="ion-social-instagram-outline" /></a></li> 
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-7 col-12">
                    <div className="footer-widget">
                    <div className="footer-widget-m-content text-center">
                        <div className="footer-logo">
                        <a href="#"><img src="assets/img/logo/logo.png" alt="" /></a>
                        </div>
                        <div className="footer-nav">
                        <nav>
                            <ul>
                            <li><a href="#">home</a></li>
                            <li><a href="#">about us</a></li>
                            <li><a href="#">shop </a></li>
                            <li><a href="#"> blog </a></li>
                            <li><a href="#">pages </a></li>
                            </ul>
                        </nav>
                        </div>
                        <p>Copyright <i className="fa fa-copyright" /> 2018 <a href="https://freethemescloud.com/" target="_blank">Free Themes Cloud.</a> All rights reserved. </p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12 col-12">
                    <div className="footer-widget f-right">
                    <div className="footer-widget-r-content">
                        <ul>
                        <li><span>Phone :</span> +00 123 54 0056</li>
                        <li><span>Email : </span> <a href="#">neha@gmail.com</a></li>
                        <li><span>Address :</span> Dhaka Bangladesh</li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </footer>

    )
}

Footer.propTypes = {

}

export default Footer
