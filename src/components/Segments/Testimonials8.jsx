import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const testimonials = [
    {
        image: require('./../../images/testimonials/pic1.jpg'),
        reviewername: 'Poul Andersonhgi',
        position: 'Architect',
        review: 'Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house.'
    },
    {
        image: require('./../../images/testimonials/pic2.jpg'),
        reviewername: 'Michael Evens',
        position: 'Architect',
        review: 'Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house.'
    },
    {
        image: require('./../../images/testimonials/pic3.jpg'),
        reviewername: 'Pamela Smith',
        position: 'Architect',
        review: 'Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house.'
    },
    {
        image: require('./../../images/testimonials/pic4.jpg'),
        reviewername: 'Poul Anderson',
        position: 'Architect',
        review: 'Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house.'
    },
    {
        image: require('./../../images/testimonials/pic1.jpg'),
        reviewername: 'Taminm Alows',
        position: 'Architect',
        review: 'Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house.'
    },
]

var bnr1 = require('./../../images/background/bg-map.png');

class Testimonials8 extends React.Component {
    render() {
        const options = {
            loop: true,
            autoplay: false,
            margin: 30,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                991: {
                    items: 2
                }

            }
        };
        return (
            <>
                <div className="section-full  p-t80 p-b50 bg-no-repeat bg-center bg-white" style={{ backgroundImage: "url(" + bnr1.default + ")" }}>
                    <div className="container">
                        {/* TITLE START*/}
                        <div className="section-head center wt-small-separator-outer">
                            <div className="wt-small-separator site-text-primary">
                                <div className="sep-leaf-left" />
                                <div>What our client say</div>
                                <div className="sep-leaf-right" />
                            </div>
                            <h2>Happy WIth Customers &amp; Clients</h2>
                        </div>
                        {/* TITLE END*/}
                        <div className="testimonial-slider-two">
                            <OwlCarousel className="testimonial-carousel-5 owl-carousel owl-theme owl-btn-bottom-center" {...options}>
                                {testimonials.map((item, index) => (
                                    <div key={index} className="item">
                                        <div className="testimonial-slider-content clearfix">
                                            <div className="testimonial-5 clearfix">
                                                <div className="testimonial-text shadow-sm">
                                                    <div className="testimonial-paragraph">
                                                        <div className="quote-left" />
                                                        <p>{item.review}</p>
                                                    </div>
                                                    <div className="testimonial-detail ">
                                                        <h4 className="testimonial-name">{item.reviewername}</h4>
                                                    </div>
                                                    <div className="testimonial-detail ">
                                                        <span className="testimonial-position">{item.position}</span>
                                                    </div>
                                                </div>
                                                <div className="testimonial-pic-block">
                                                    <div className="testimonial-pic">
                                                        <img src={item.image.default} alt="" />
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
            </>
        );
    }
};

export default Testimonials8;