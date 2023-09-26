import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const testimonials = [
    {
        image: require('./../../images/home-11/testimonials-12/pic1.jpg'),
        reviewername: 'Lina Casey',
        position: 'Founder',
        review: 'This is due to their excellent service, competitive pricing and customer support . It\'s throughly refresing to get such a personal touch.'
    },
    {
        image: require('./../../images/home-11/testimonials-12/pic2.jpg'),
        reviewername: 'Ashley Sanchez',
        position: 'Founder',
        review: 'This is due to their excellent service, competitive pricing and customer support . It\'s throughly refresing to get such a personal touch.'
    },
    {
        image: require('./../../images/home-11/testimonials-12/pic3.jpg'),
        reviewername: 'Shirley Gibson',
        position: 'Director',
        review: 'This is due to their excellent service, competitive pricing and customer support . It\'s throughly refresing to get such a personal touch.'
    },
    {
        image: require('./../../images/home-11/testimonials-12/pic4.jpg'),
        reviewername: 'Mike Hardson',
        position: 'Director',
        review: 'This is due to their excellent service, competitive pricing and customer support . It\'s throughly refresing to get such a personal touch.'
    },
    {
        image: require('./../../images/home-11/testimonials-12/pic5.jpg'),
        reviewername: 'Edword Howells',
        position: 'Founder & CEO',
        review: 'This is due to their excellent service, competitive pricing and customer support . It\'s throughly refresing to get such a personal touch.'
    }
]

var bnr1 = require('./../../images/background/self-info-bg.png');

class Testimonials10 extends React.Component {
    render() {
        const options = {
            loop: true,
            autoplay: false,
            nav: false,
            dots: true,
            center: true,
            margin: 0,
            navText: ['<i class="flaticon-arrows"></i>', '<i class="flaticon-point-to"></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                767: {
                    items: 2,
                },
                1140: {
                    items: 3
                }
            }
        };
        return (
            <>
                <div className="section-full  p-t80 p-b50 testimonial-12-outer bg-gray" style={{ backgroundImage: "url(" + bnr1.default + ")" }}>
                    <div className="container">
                        {/* TITLE START*/}
                        <div className="section-head center wt-small-separator-outer">
                            <div className="wt-small-separator site-text-primary">
                                <div>Feedback</div>
                            </div>
                            <h2 className="wt-title">Thoughts of our satisfied client about us</h2>
                        </div>
                        {/* TITLE END*/}
                    </div>
                    <div className="container">
                        <div className="section-content">
                            <OwlCarousel className="testimonial-12-content owl-carousel" {...options}>
                                {testimonials.map((item, index) => (
                                    <div key={index} className="item">
                                        <div className="testimonial-12 bg-white">
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
            </>
        );
    }
};

export default Testimonials10;