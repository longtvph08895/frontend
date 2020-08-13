import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

const Home = ({ products }) => {
  return (
    <div>
      <div className="product-collection-area pt-100 pb-50">
        <div className="container">
          <div className="section-title text-center mb-55">
            <h2>New Collection</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when look</p>
          </div>
          <div className="row">
            {products.map((product) => (
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="single-product mb-35">
                  <div className="product-img">
                    <a href="#"><img src={product.image} alt="" /></a>
                    {/* <span>sale</span> */}
                    <div className="product-action">
                      <a title="Wishlist" className="animate-left" href="#"><i className="ion-ios-heart-outline" /></a>
                      <a title="Quick View" data-toggle="modal" data-target="#exampleModal" className="animate-right" href="#"><i className="ion-ios-eye-outline" /></a>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="product-title-price">
                      <div className="product-title">
                        <h4>
                          <Link to={"/main/detail/" + product.id}>{product.name}</Link> </h4>
                        {/* <a href="product-details-6.html">{product.name}</a></h4> */}
                      </div>
                      <div className="product-price">
                        <span>${product.price}</span>
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
            ))}
          </div>
        </div>
      </div>

      <div className="blog-area pb-65">
        <div className="container">
          <div className="section-title text-center mb-55">
            <h2> Top Stories</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when look</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog mb-30">
                <div className="blog-img">
                  <a href="#"><img src="assets/img/blog/1.jpg" alt="" /></a>
                </div>
                <div className="blog-info">
                  <h3><a href="#">Standard blog post.</a></h3>
                  <div className="blog-meta">
                    <ul>
                      <li>February 13</li>
                      <li><a href="#">Momen Bhuiyan</a></li>
                      <li><a href="#">4 comments</a></li>
                    </ul>
                  </div>
                  <p>Lorem ipsum dolor sit amet, sectetur adipising elit, sed do eimod tempor incididunt ut labore.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog mb-30">
                <div className="blog-img">
                  <a href="#"><img src="assets/img/blog/2.jpg" alt="" /></a>
                </div>
                <div className="blog-info">
                  <h3><a href="#">But I must explain to you.</a></h3>
                  <div className="blog-meta">
                    <ul>
                      <li>February 13</li>
                      <li><a href="#">Momen Bhuiyan</a></li>
                      <li><a href="#">4 comments</a></li>
                    </ul>
                  </div>
                  <p>Lorem ipsum dolor sit amet, sectetur adipising elit, sed do eimod tempor incididunt ut labore.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog mb-30">
                <div className="blog-img">
                  <a href="#"><img src="assets/img/blog/3.jpg" alt="" /></a>
                </div>
                <div className="blog-info">
                  <h3><a href="#">Lorem ipsum dolor sit.</a></h3>
                  <div className="blog-meta">
                    <ul>
                      <li>February 13</li>
                      <li><a href="#">Momen Bhuiyan</a></li>
                      <li><a href="#">4 comments</a></li>
                    </ul>
                  </div>
                  <p>Lorem ipsum dolor sit amet, sectetur adipising elit, sed do eimod tempor incididunt ut labore.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

Home.propTypes = {

}

export default Home
