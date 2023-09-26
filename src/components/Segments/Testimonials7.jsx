import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const testimonials = [
    {
        image: require('./../../images/testimonials/pic1.jpg'),
        reviewername: 'Malcolm Franzcrip',
        position: 'Contractor',
        review: 'This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!'
    },
    {
        image: require('./../../images/testimonials/pic2.jpg'),
        reviewername: 'Malcolm Franzcrip',
        position: 'Contractor',
        review: 'This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!'
    },
    {
        image: require('./../../images/testimonials/pic3.jpg'),
        reviewername: 'Malcolm Franzcrip',
        position: 'Contractor',
        review: 'This is not just another nail salon! These ladies are super talented! My nails have never looked/felt more amazing!! the environment here is so happy and cheery!'
    }
]

class Testimonials7 extends React.Component {
    render() {
        const options = {
            loop: true,
            autoplay: false,
            nav: true,
            dots: false,
            margin: 30,
            navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                1400: {
                    items: 1
                }
            }
        };
        return (
            <>
                <div className="section-full  p-t80 p-b50 testimonial-4-outer bg-gray-light">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-12 m-b30 d-flex align-items-center">
                                <div className="testimonial-4-left-section">
                                    {/* TITLE START*/}
                                    <div className="left wt-small-separator-outer">
                                        <div className="wt-small-separator site-text-primary">
                                            <div className="sep-leaf-left" />
                                            <div>What our client say</div>
                                            <div className="sep-leaf-right" />
                                        </div>
                                        <h2>Happy With Customers &amp; Clients</h2>
                                        <p>Our experience spans every industry and challenge, which gives us a unique perspective that we bring to every client relationship. We help you see the world differently, discover opportunities you may never have imagined and achieve results that bridge what is with what can be.</p>
                                        <NavLink to={"/contactus"} className="site-button site-btn-effect">Contact Us</NavLink>
                                    </div>
                                    {/* TITLE END*/}
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 m-b30">
                                <div className="testimonial-4-content-outer">
                                    <OwlCarousel className="testimonial-4-content owl-carousel  owl-btn-vertical-center long-arrow-next-prev" {...options}>
                                        {testimonials.map((item, index) => (
                                            <div key={index} className="item">
                                                <div className="testimonial-4 bg-white">
                                                    <div className="testimonial-content">
                                                        <div className="testimonial-pic-block">
                                                            <div className="testimonial-pic">
                                                                <img src={item.image.default} alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="testimonial-text">
                                                            <i className="fa fa-quote-left" />
                                                            <p>{item.review}</p>
                                                        </div>
                                                        <div className="testimonial-detail clearfix">
                                                            <div className="testimonial-info">
                                                                <span className="testimonial-name  title-style-2 site-text-secondry">{item.reviewername}</span>
                                                                <span className="testimonial-position title-style-2 site-text-primary">{item.position}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Testimonials7;