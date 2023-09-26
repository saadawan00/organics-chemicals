import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const services = [
    {
        image: require('./../../images/home-11/s-gallery/1.jpg'),
        title: 'Building Planning',
        description: 'You can dream, create, design and build the most wonderful place in the world.'
    },
    {
        image: require('./../../images/home-11/s-gallery/2.jpg'),
        title: 'Architecture & Building',
        description: 'You can dream, create, design and build the most wonderful place in the world.'
    },
    {
        image: require('./../../images/home-11/s-gallery/3.jpg'),
        title: 'House Renovation',
        description: 'You can dream, create, design and build the most wonderful place in the world.'
    },
    {
        image: require('./../../images/home-11/s-gallery/4.jpg'),
        title: 'Interior construction',
        description: 'You can dream, create, design and build the most wonderful place in the world.'
    },
    {
        image: require('./../../images/home-11/s-gallery/5.jpg'),
        title: 'Mines construction',
        description: 'You can dream, create, design and build the most wonderful place in the world.'
    }
]

class Services11 extends React.Component {

    render() {
        const options = {
            loop:true,
			nav:true,
			dots: false,				
			margin:15,
			autoplay:true,
			navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			responsive:{
				0:{
					items:1,
				},
				480:{
					items:1,
				},			
				767:{
					items:2,
				},
				1000:{
					items:2
				}
			}
        };
        return (
            <>
                <div className="section-full  service-gallery-style1-wrapper">
                    <div className="services-gallery-block-outer">
                        <div className="container half-wide-bg-outer p-t90 p-b50 ">
                            <div className="half-wide-bg" />
                            <div className="section-content">
                                <div className="row">
                                    <div className="col-lg-4 col-md-12 m-b30">
                                        {/* TITLE START*/}
                                        <div className="section-head left wt-small-separator-outer text-white">
                                            <div className="wt-small-separator site-text-white">
                                                <div>Our Services</div>
                                            </div>
                                            <h2 className="wt-title">We provide you all the construction related services.</h2>
                                            <p>Our goal is simple, to make things that people care about.
                                                We were founded on this principle and we will always be
                                                commited to it.</p>
                                                <NavLink to={"/about-1"} className="site-button-secondry site-btn-effect">Explore all services</NavLink>
                                        </div>
                                        {/* TITLE END*/}
                                    </div>
                                    <div className="col-lg-8 col-md-12">
                                        <div className="services-gallery-style2">
                                            <OwlCarousel className="owl-carousel services-gallery-two owl-btn-vertical-center" {...options}>
                                                {services.map((item, index) => (
                                                    <div key={index} className="item">
                                                        <div className="service-box-style2">
                                                            <div className="service-media">
                                                                <img src={item.image.default} alt="" />
                                                            </div>
                                                            <div className="service-content">
                                                                <h3 className="service-title-large"><NavLink to={"/services-mechanical"}>{item.title}</NavLink></h3>
                                                                <p>{item.description}</p>
                                                                <NavLink to={"/services-mechanical"} className="site-button site-btn-effect">View All</NavLink>
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
                    </div>
                </div>
            </>
        );
    }
};

export default Services11;