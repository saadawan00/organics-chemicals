import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const services = [
    {
        title: 'Warehousing',
        image: require('./../../images/services_2/1.jpg'),
    },
    {
        title: 'Air Freight',
        image: require('./../../images/services_2/2.jpg'),
    },
    {
        title: 'Ocean Freight',
        image: require('./../../images/services_2/3.jpg'),
    },
    {
        title: 'Road Freight',
        image: require('./../../images/services_2/4.jpg'),
    },
    {
        title: 'Insurance',
        image: require('./../../images/services_2/5.jpg'),
    }
]

class Services3 extends React.Component {
    render() {
        const options = {
            loop: true,
            autoplay: true,
            nav: true,
            dots: false,
            margin: 10,
            navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                640: {
                    items: 1,
                },
                767: {
                    items: 2,
                },
                991: {
                    items: 2,
                },
                1366: {
                    items: 2,
                },
                1400: {
                    items: 3
                }
            }
        };
        return (
            <>
                <div className="section-full p-t80 overlay-wraper services-main-section bg-white">
                    <div className="section-content services-section-content">
                        <div className="row">
                            <div className="col-xl-6 col-lg-12 col-md-12">
                                <div className="services-section-content-left">
                                    {/* TITLE START*/}
                                    <div className="left wt-small-separator-outer">
                                        <div className="wt-small-separator site-text-primary">
                                            <div className="sep-leaf-left" />
                                            <div>Services We Offer</div>
                                            <div className="sep-leaf-right" />
                                        </div>
                                        <h2>We Manage Lead Logistics For World’s Multinational Companies.</h2>
                                        <p>Progressively maintain extensive infomediaries via extensible and niches. Capitalize on low hanging fruit to identify a ballpark value added is activity to beta test. Override the igital divide additional click throughs from fruit to identify a ballpark value added.
              </p>
                                        <NavLink to="/contactus" className="site-button site-btn-effect">Contact Us</NavLink>
                                    </div>
                                    {/* TITLE END*/}
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-12">
                                <div className="services-section-content-right2">
                                    <OwlCarousel className="owl-carousel services-slider owl-btn-vertical-center" {...options}>
                                        {services.map((item, index) => (
                                            <div key={index} className="item">
                                                <div className="wt-box bg-gray  p-a10 project-2-block">
                                                    <div className="wt-thum-bx">
                                                        <img src={item.image.default} alt="" />
                                                    </div>
                                                    <div className="wt-info">
                                                        <h4 className="wt-title m-b0 m-t15"><NavLink to="/services-oilgas">{item.title}</NavLink></h4>
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

export default Services3;