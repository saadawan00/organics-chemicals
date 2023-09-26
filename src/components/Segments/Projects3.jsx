import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const projects = [
    {
        title: 'Modern minimalist house',
        category: 'Construction',
        image: require('./../../images/gallery/portrait-2/pic1.jpg'),
        fullimage: require('./../../images/gallery/portrait-2/pic1.jpg'),
        description: 'Lorem ipsum dolor sit amet,tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        title: 'Modern minimalist house',
        category: 'Renovation',
        image: require('./../../images/gallery/portrait-2/pic2.jpg'),
        fullimage: require('./../../images/gallery/portrait-2/pic2.jpg'),
        description: 'Lorem ipsum dolor sit amet,tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        title: 'Modern minimalist house',
        category: 'Interior',
        image: require('./../../images/gallery/portrait-2/pic3.jpg'),
        fullimage: require('./../../images/gallery/portrait-2/pic3.jpg'),
        description: 'Lorem ipsum dolor sit amet,tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        title: 'Modern minimalist house',
        category: 'Construction',
        image: require('./../../images/gallery/portrait-2/pic4.jpg'),
        fullimage: require('./../../images/gallery/portrait-2/pic4.jpg'),
        description: 'Lorem ipsum dolor sit amet,tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        title: 'Modern minimalist house',
        category: 'Construction',
        image: require('./../../images/gallery/portrait-2/pic5.jpg'),
        fullimage: require('./../../images/gallery/portrait-2/pic5.jpg'),
        description: 'Lorem ipsum dolor sit amet,tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        title: 'Modern minimalist house',
        category: 'Renovation',
        image: require('./../../images/gallery/portrait-2/pic6.jpg'),
        fullimage: require('./../../images/gallery/portrait-2/pic6.jpg'),
        description: 'Lorem ipsum dolor sit amet,tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
]

class Projects3 extends React.Component {
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
                <div className="section-full p-t80 p-b50 bg-gray">
                    <div className="container">
                        {/* TITLE START*/}
                        <div className="section-head center wt-small-separator-outer text-center">
                            <div className="wt-small-separator site-text-primary">
                                <div className="sep-leaf-left" />
                                <div>Explore Recent Work</div>
                                <div className="sep-leaf-right" />
                            </div>
                            <h2>We've Done Lot's Projects Let's Check Some Here</h2>
                        </div>
                        {/* TITLE END*/}
                        <div className="section-content">
                            <OwlCarousel className="owl-carousel h3-project-slider  mfp-gallery" {...options}>
                                {projects.map((item, index) => (
                                    <div key={index} className="item">
                                        <div className="line-filter-outer">
                                            <div className="line-filter-media">
                                                <img src={item.image.default} alt="" />
                                                <div className="hover-effect-1">
                                                    <div className="hover-effect-content text-white">
                                                        <h3 className="m-tb0 h-category">{item.category}</h3>
                                                        <p>Lorem ipsum dolor sit amet,tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                        <a href={item.image.default} className="mfp-link"><i className="fa fa-search-plus" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="line-filter  bg-white p-a30">
                                                <div className="filter-content">
                                                    <h3 className="m-t0 m-b20 text-uppercase">{item.title}</h3>
                                                    <NavLink to="/project-detail" className="site-button-link">Read More</NavLink>
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

export default Projects3;