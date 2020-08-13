import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

const Detail = ({ products }) => {
    const { id } = useParams();
    const product = products.find(product => product.id == id);
    return (
        <div>
            <div className="product-details ptb-100 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="product-details-btn">
                                <a href="#"><i className="ion-arrow-left-c" /></a>
                                <a className="active" href="#"><i className="ion-arrow-right-c" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-7 col-12">
                            <div className="product-details-img-content">
                                <div className="product-details-tab mr-70">
                                    <div className="product-details-large tab-content">
                                        <div className="tab-pane active show fade" id="pro-details1" role="tabpanel">
                                            <div className="easyzoom easyzoom--overlay">
                                                <a href="">
                                                    <img src={product.image} alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-5 col-12">
                            <div className="product-details-content">
                                <h3>{product.name}</h3>
                                {/* <div className="rating-number">
                                    <div className="quick-view-rating">
                                        <i className="ion-ios-star red-star" />
                                        <i className="ion-ios-star red-star" />
                                        <i className="ion-android-star-outline" />
                                        <i className="ion-android-star-outline" />
                                        <i className="ion-android-star-outline" />
                                    </div>
                                    <div className="quick-view-number">
                                        <span>2 Ratting (S)</span>
                                    </div>
                                </div> */}
                                <div className="details-price">
                                    <span>$120.00</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmol tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veni quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
                                {/* <div className="quick-view-select">
                                    <div className="select-option-part">
                                        <label>Size*</label>
                                        <select className="select">
                                        <option value>- Please Select -</option>
                                        <option value>xl</option>
                                        <option value>ml</option>
                                        <option value>m</option>
                                        <option value>sl</option>
                                        </select>
                                    </div>
                                    <div className="select-option-part">
                                        <label>Color*</label>
                                        <select className="select">
                                        <option value>- Please Select -</option>
                                        <option value>orange</option>
                                        <option value>pink</option>
                                        <option value>yellow</option>
                                        </select>
                                    </div>
                                </div> */}
                                <div className="quickview-plus-minus">
                                    <div className="cart-plus-minus">
                                        <input type="text" name="qtybutton" className="cart-plus-minus-box" />
                                    </div>
                                    <div className="quickview-btn-cart">
                                        <a className="btn-hover-black" href="#">add to cart</a>
                                    </div>
                                    <div className="quickview-btn-wishlist">
                                        <a className="btn-hover" href="#"><i className="ion-ios-heart-outline" /></a>
                                    </div>
                                </div>
                                <div className="product-categories product-cat-tag">
                                    <ul>
                                        <li className="categories-title">Categories :</li>
                                        <li><a href="#">fashion</a></li>
                                        <li><a href="#">electronics</a></li>
                                        <li><a href="#">toys</a></li>
                                        <li><a href="#">food</a></li>
                                        <li><a href="#">jewellery</a></li>
                                    </ul>
                                </div>
                                {/* <div className="product-tags product-cat-tag">
                                <ul>
                                    <li className="categories-title">Tags :</li>
                                    <li><a href="#">fashion</a></li>
                                    <li><a href="#">electronics</a></li>
                                    <li><a href="#">toys</a></li>
                                    <li><a href="#">food</a></li>
                                    <li><a href="#">jewellery</a></li>
                                </ul>
                                </div> */}
                                <div className="product-share">
                                    <ul>
                                        <li className="categories-title">Share :</li>
                                        <li>
                                            <a href="#">
                                                <i className="ion-social-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="ion-social-tumblr" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="ion-social-facebook" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="ion-social-instagram-outline" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="product-description-review-area pb-100">
                <div className="container">
                <div className="product-description-review text-center">
                    <div className="description-review-title nav" role="tablist">
                    <a className="active" href="#pro-dec" data-toggle="tab" role="tab" aria-selected="true">
                        Description
                    </a>
                    <a href="#pro-review" data-toggle="tab" role="tab" aria-selected="false">
                        Reviews (0)
                    </a>
                    </div>
                    <div className="description-review-text tab-content">
                    <div className="tab-pane active show fade" id="pro-dec" role="tabpanel">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
                    </div>
                    <div className="tab-pane fade" id="pro-review" role="tabpanel">
                        <a href="#">Be the first to write your review!</a>
                    </div>
                    </div>
                </div>
                </div>
            </div> */}
            <div className="product-collection-area pb-60">
                <div className="container">
                    <div className="section-title text-center mb-55">
                        <h2>Related products</h2>
                    </div>
                    <div className="row">
                        <div className="new-collection-slider owl-carousel">
                            <div className="col-md-3 col-lg-3 col-sm-4 col-xs-12">
                                <div className="single-product mb-35">
                                    <div className="product-img">
                                        <a href="#"><img src="assets/img/shop/shop-grid-1/1.jpg" alt="" /></a>
                                        <span>sale</span>
                                        <div className="product-action">
                                            <a title="Wishlist" className="animate-left" href="#"><i className="ion-ios-heart-outline" /></a>
                                            <a title="Quick View" data-toggle="modal" data-target="#exampleModal" className="animate-right" href="#"><i className="ion-ios-eye-outline" /></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="product-title-price">
                                            <div className="product-title">
                                                <h4><a href="product-details-6.html">WOODEN FURNITURE</a></h4>
                                            </div>
                                            <div className="product-price">
                                                <span>$110.00</span>
                                            </div>
                                        </div>
                                        <div className="product-cart-categori">
                                            <div className="product-cart">
                                                <span>Furniter</span>
                                            </div>
                                            <div className="product-categori">
                                                <a href="#"><i className="ion-bag" /> Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3 col-sm-4 col-xs-12">
                                <div className="single-product mb-35">
                                    <div className="product-img">
                                        <a href="#"><img src="assets/img/shop/shop-grid-1/7.jpg" alt="" /></a>
                                        <div className="product-action">
                                            <a title="Wishlist" className="animate-left" href="#"><i className="ion-ios-heart-outline" /></a>
                                            <a title="Quick View" data-toggle="modal" data-target="#exampleModal" className="animate-right" href="#"><i className="ion-ios-eye-outline" /></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="product-title-price">
                                            <div className="product-title">
                                                <h4><a href="product-details-6.html">WOODEN FURNITURE</a></h4>
                                            </div>
                                            <div className="product-price">
                                                <span>$120.00</span>
                                            </div>
                                        </div>
                                        <div className="product-cart-categori">
                                            <div className="product-cart">
                                                <span>Furniter</span>
                                            </div>
                                            <div className="product-categori">
                                                <a href="#"><i className="ion-bag" /> Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3 col-sm-4 col-xs-12">
                                <div className="single-product mb-35">
                                    <div className="product-img">
                                        <a href="#"><img src="assets/img/shop/shop-grid-1/14.jpg" alt="" /></a>
                                        <span>sale</span>
                                        <div className="product-action">
                                            <a title="Wishlist" className="animate-left" href="#"><i className="ion-ios-heart-outline" /></a>
                                            <a title="Quick View" data-toggle="modal" data-target="#exampleModal" className="animate-right" href="#"><i className="ion-ios-eye-outline" /></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="product-title-price">
                                            <div className="product-title">
                                                <h4><a href="product-details-6.html">HANDCRAFTED MUG</a></h4>
                                            </div>
                                            <div className="product-price">
                                                <span>$130.00</span>
                                            </div>
                                        </div>
                                        <div className="product-cart-categori">
                                            <div className="product-cart">
                                                <span>Furniter</span>
                                            </div>
                                            <div className="product-categori">
                                                <a href="#"><i className="ion-bag" /> Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3 col-sm-4 col-xs-12">
                                <div className="single-product mb-35">
                                    <div className="product-img">
                                        <a href="#"><img src="assets/img/shop/shop-grid-1/11.jpg" alt="" /></a>
                                        <div className="product-action">
                                            <a title="Wishlist" className="animate-left" href="#"><i className="ion-ios-heart-outline" /></a>
                                            <a title="Quick View" data-toggle="modal" data-target="#exampleModal" className="animate-right" href="#"><i className="ion-ios-eye-outline" /></a>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="product-title-price">
                                            <div className="product-title">
                                                <h4><a href="product-details-6.html">HANDCRAFTED MUG</a></h4>
                                            </div>
                                            <div className="product-price">
                                                <span>$140.00</span>
                                            </div>
                                        </div>
                                        <div className="product-cart-categori">
                                            <div className="product-cart">
                                                <span>Furniter</span>
                                            </div>
                                            <div className="product-categori">
                                                <a href="#"><i className="ion-bag" /> Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

Detail.propTypes = {

}

export default Detail
