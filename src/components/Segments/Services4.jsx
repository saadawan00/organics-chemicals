import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const services = [
    {
        title: 'Tree &amp; Shrub Care',
        image: require('./../../images/gallery/portrait-3/pic1.jpg'),
        fullimage: require('./../../images/gallery/portrait-3/pic1.jpg'),
        category: 'Shrub Care',
        description: 'Lorem ipsum dolor sit amet,tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        title: 'Lawn Renovation',
        image: require('./../../images/gallery/portrait-3/pic2.jpg'),
        fullimage: require('./../../images/gallery/portrait-3/pic2.jpg'),
        category: 'Renovation',
        description: 'Lorem ipsum dolor sit amet,tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        title: 'Lawn Maintenance',
        image: require('./../../images/gallery/portrait-3/pic3.jpg'),
        fullimage: require('./../../images/gallery/portrait-3/pic3.jpg'),
        category: 'Maintenance',
        description: 'Lorem ipsum dolor sit amet,tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        title: 'Landscape Lighting',
        image: require('./../../images/gallery/portrait-3/pic4.jpg'),
        fullimage: require('./../../images/gallery/portrait-3/pic4.jpg'),
        category: 'Landscape',
        description: 'Lorem ipsum dolor sit amet,tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        title: 'Seasonal Clean-ups',
        image: require('./../../images/gallery/portrait-3/pic5.jpg'),
        fullimage: require('./../../images/gallery/portrait-3/pic5.jpg'),
        category: 'Clean-ups',
        description: 'Lorem ipsum dolor sit amet,tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        title: 'Flowerscaping',
        image: require('./../../images/gallery/portrait-3/pic6.jpg'),
        fullimage: require('./../../images/gallery/portrait-3/pic6.jpg'),
        category: 'Flowerscaping',
        description: 'Lorem ipsum dolor sit amet,tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
]

var bnr1 = require('./../../images/background/bg-12.jpg');

class Services4 extends React.Component {
    render() {
        const options = {
            loop: false,
            autoplay: true,
            margin: 20,
            nav: false,
            dots: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                580: {
                    items: 1
                },
                767: {
                    items: 2
                },
                991: {
                    items: 3
                },
                1152: {
                    items: 3
                },
                1360: {
                    items: 3
                },
                1366: {
                    items: 3
                }
            }
        };
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-gray bg-cover" style={{ backgroundImage: "url(" + bnr1.default + ")" }}>
                    <div className="container">
                        {/* TITLE START*/}
                        <div className="section-head center wt-small-separator-outer text-center">
                            <div className="wt-small-separator site-text-primary">
                                <div className="sep-leaf-left" />
                                <div>Welcome to Industro</div>
                                <div className="sep-leaf-right" />
                            </div>
                            <h2>Professional Gardening, Landscaping Services By Industro</h2>
                        </div>
                        {/* TITLE END*/}
                        <div className="section-content">
                            <OwlCarousel className="owl-carousel h3-project-slider  mfp-gallery" {...options}>
                                {services.map((item, index) => (
                                    <div key={index} className="item">
                                        <div className="line-filter-outer">
                                            <div className="line-filter-media">
                                                <img src={item.image.default} alt="" />
                                                <div className="hover-effect-1">
                                                    <div className="hover-effect-content text-white">
                                                        <h3 className="m-tb0 h-category">{item.category}</h3>
                                                        <p>{item.description}</p>
                                                        <a href={item.fullimage.default} className="mfp-link"><i className="fa fa-search-plus" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="line-filter  bg-white p-a30">
                                                <div className="filter-content">
                                                    <h3 className="m-t0 m-b20 text-uppercase">{item.title}</h3>
                                                    <NavLink to={"/services-agricultural"} className="site-button-link">Read More</NavLink>
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

export default Services4;