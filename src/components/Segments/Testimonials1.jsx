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

class Testimonials1 extends React.Component {
    render() {
        const options = {
            loop:true,
            autoplay:false,
            nav:true,
            dots: false,	
            margin:30,
            navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
            responsive:{
                0:{
                    items:1,
                },
                1400:{
                    items:1
                }		
            }
        };
        return (
            <>
                <div className="section-full  p-t80 testimonial-1-outer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                {/* TITLE START*/}
                                <div className="left wt-small-separator-outer">
                                    <div className="wt-small-separator site-text-primary">
                                        <div className="sep-leaf-left" />
                                        <div>What our client say</div>
                                        <div className="sep-leaf-right" />
                                    </div>
                                    <h2>Happy WIth Customers &amp; Clients</h2>
                                    <p>I feel very happy and be proud to connect with this industry. i presume this is a very productive and professional industry.i wish very good luck &amp; success for this industry</p>
                                    <NavLink to={"/contactus"} className="site-button site-btn-effect">Contact Us</NavLink>
                                </div>
                                {/* TITLE END*/}
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <div className="testimonial-1-content-outer">
                                    <OwlCarousel className="testimonial-1-content owl-carousel  owl-btn-top-right long-arrow-next-prev" {...options}>

                                        {testimonials.map((item, index) => (
                                            <div key={index} className="item">
                                                <div className="testimonial-1 bg-white">
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
                    <div className="hilite-large-title title-style-2">
                        <span>Client says</span>
                    </div>
                </div>
            </>
        );
    }
};

export default Testimonials1;