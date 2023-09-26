import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const products = [
    {
        image: require('./../../images/products/pic-1.jpg'),
        title: 'One Mechanical Tool',
        price: '49.00'
    },
    {
        image: require('./../../images/products/pic-2.jpg'),
        title: 'Two Mechanical Tool',
        price: '75.00'
    },
    {
        image: require('./../../images/products/pic-3.jpg'),
        title: 'Three Mechanical Tool',
        price: '69.00'
    },
    {
        image: require('./../../images/products/pic-4.jpg'),
        title: 'Four Mechanical Tool',
        price: '199.00'
    }
]


class FeaturedProducts extends React.Component {
    render() {
        const options = {
            loop:true,
            autoplay:true,
            nav:true,
            dots: false,	
            margin:30,
            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            responsive:{
                0:{
                    items:1,
                },
                640:{
                    items:2,
                },			
                767:{
                    items:2,
                },				
                991:{
                    items:3,
                },
                1024:{
                    items:3,
                }	
            }
        };
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-gray">
                    <div className="container">
                        <div className="section-content">
                            {/* TITLE START */}
                            <div className="wt-separator-two-part">
                                <div className="row wt-separator-two-part-row">
                                    <div className="col-lg-8 col-md-6 wt-separator-two-part-left">
                                        {/* TITLE START*/}
                                        <div className="section-head left wt-small-separator-outer">
                                            <div className="wt-small-separator site-text-primary">
                                                <div className="sep-leaf-left" />
                                                <div>Our Best Products</div>
                                                <div className="sep-leaf-right" />
                                            </div>
                                            <h2>Featured products</h2>
                                        </div>
                                        {/* TITLE END*/}
                                    </div>
                                    <div className="col-lg-4 col-md-6 wt-separator-two-part-right text-right">
                                        <NavLink to={"/shop-detail"} className="site-button site-btn-effect">More Detail</NavLink>
                                    </div>
                                </div>
                            </div>
                            {/* TITLE END */}
                            <OwlCarousel className="owl-carousel featured-products owl-btn-vertical-center" {...options}>

                                {products.map((item, index) => (
                                    <div key={index} className="item">
                                        <div className="wt-box wt-product-box   overflow-hide">
                                            <div className="wt-thum-bx wt-img-overlay1 wt-img-effect zoom">
                                                <img src={item.image.default} alt="" />
                                                <div className="overlay-bx">
                                                    <div className="overlay-icon">
                                                    <NavLink to={"#"}>
                                                            <i className="fa fa-cart-plus wt-icon-box-xs" />
                                                        </NavLink>
                                                        <NavLink to={"#"} className="mfp-link">
                                                            <i className="fa fa-heart wt-icon-box-xs" />
                                                        </NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wt-info  text-center">
                                                <div className="p-a20 bg-white">
                                                    <h3 className="wt-title">
                                                        <NavLink to={"/shop-detail"}>{item.title}</NavLink>
                                                    </h3>
                                                    <span className="price">
                                                        <ins>
                                                            <span><span className="Price-currencySymbol">$ </span>{item.price}</span>
                                                        </ins>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default FeaturedProducts;