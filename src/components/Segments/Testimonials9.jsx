import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const testimonials = [
    {
        image: require('./../../images/home-11/testimonials/pic1.jpg'),
        reviewername: 'Lina Casey',
        position: 'Founder',
        review: 'You could debate whether it is an issue of the theme or a new extension Plaza theme support and response has been amazing'
    },
    {
        image: require('./../../images/home-11/testimonials/pic2.jpg'),
        reviewername: 'Ashley Sanchez',
        position: 'Founder',
        review: 'Extension Plaza theme support and response has been amazing, helping me with several issues.'
    },
    {
        image: require('./../../images/home-11/testimonials/pic3.jpg'),
        reviewername: 'Shirley Gibson',
        position: 'Director',
        review: 'You could debate whether it is an issue of the theme or a new extension Plaza theme support and response has been amazing'
    },
    {
        image: require('./../../images/home-11/testimonials/pic1.jpg'),
        reviewername: 'Mike Hardson',
        position: 'Director',
        review: 'Extension Plaza theme support and response has been amazing, helping me with several issues.'
    },
    {
        image: require('./../../images/home-11/testimonials/pic2.jpg'),
        reviewername: 'Edword Howells',
        position: 'Founder & CEO',
        review: 'You could debate whether it is an issue of the theme or a new extension Plaza theme support and response has been amazing'
    }
]

var bnr1 = require('./../../images/home-11/background/bg11.jpg');

class Testimonials9 extends React.Component {
    render() {
        const options = {
            loop: true,
            autoplay: true,
            nav: true,
            dots: false,
            margin: 30,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 1,
                },
                1200: {
                    items: 2
                }
            }
        };
        return (
            <>
                <div className="section-full bg-cover p-t80 p-b50" style={{ backgroundImage: "url(" + bnr1.default + ")" }}>
                    <div className="container">
                        <div className="testimonial11-outer m-b30 bg-white">
                            {/* TITLE START*/}
                            <div className="section-head center wt-small-separator-outer">
                                <div className="wt-small-separator site-text-primary">
                                    <div>Client Testimonial </div>
                                </div>
                                <h2 className="wt-title">The customer's perception is your reality</h2>
                            </div>
                            {/* TITLE END*/}
                            <div className="section-content">
                                <OwlCarousel className="testimonial-11-content owl-carousel owl-btn-bottom-center" {...options}>
                                    {testimonials.map((item, index) => (
                                        <div key={index} className="item">
                                            <div className="testimonial-11">
                                                <div className="testimonial-content">
                                                    <div className="testimonial-detail clearfix">
                                                        <div className="testimonial-pic-block">
                                                            <div className="testimonial-pic">
                                                                <img src={item.image.default} alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="testimonial-info">
                                                            <span className="testimonial-name">{item.reviewername}</span>
                                                            <span className="testimonial-position">{item.position}</span>
                                                        </div>
                                                    </div>
                                                    <div className="testimonial-text">
                                                        <p>{item.review}</p>
                                                        <i className="fa fa-quote-right" />
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
            </>
        );
    }
};

export default Testimonials9;