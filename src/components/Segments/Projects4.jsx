import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const projects = [
    {
        title: 'Distribution',
        image: require('./../../images/project_2/pic1.jpg'),
        fullimage: require('./../../images/project_2/pic1.jpg'),
        description: 'High Performance Services For Multiple Insdustries And Technologies!',
    },
    {
        title: 'Warehousing',
        image: require('./../../images/project_2/pic2.jpg'),
        fullimage: require('./../../images/project_2/pic2.jpg'),
        description: 'Committed to delivering high quality projects and innovate business.',
    },
    {
        title: 'Optimization',
        image: require('./../../images/project_2/pic3.jpg'),
        fullimage: require('./../../images/project_2/pic3.jpg'),
        description: 'High Performance Services For Multiple Insdustries And Technologies!',
    },
    {
        title: 'Logistics',
        image: require('./../../images/project_2/pic4.jpg'),
        fullimage: require('./../../images/project_2/pic4.jpg'),
        description: 'Committed to delivering high quality projects and innovate business.',
    },
    {
        title: 'Analystics',
        image: require('./../../images/project_2/pic5.jpg'),
        fullimage: require('./../../images/project_2/pic5.jpg'),
        description: 'High Performance Services For Multiple Insdustries And Technologies!',
    },
    {
        title: 'Storage',
        image: require('./../../images/project_2/pic6.jpg'),
        fullimage: require('./../../images/project_2/pic6.jpg'),
        description: 'Committed to delivering high quality projects and innovate business.',
    }
]

var bnr1 = require('./../../images/background/bg-11.jpg');

class Projects4 extends React.Component {
    render() {
        const options = {
            loop: true,
            autoplay: false,
            nav: true,
            dots: false,
            margin: 30,
            navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                640: {
                    items: 2,
                },
                767: {
                    items: 2,
                },
                991: {
                    items: 3,
                },
                1024: {
                    items: 3,
                },

                1200: {
                    items: 4,
                },
                1366: {
                    items: 4,
                },
                1400: {
                    items: 5
                }
            }
        };
        return (
            <>
                <div className="section-full p-t80 p-b80 overlay-wraper  bg-cover" style={{ backgroundImage: "url(" + bnr1.default + ")" }}>
                    <div className="overlay-main bg-black opacity-07" />
                    <div className="container">
                        {/* TITLE START*/}
                        <div className="section-head center wt-small-separator-outer text-white">
                            <div className="wt-small-separator site-text-primary">
                                <div className="sep-leaf-left" />
                                <div>Latest Case Studies</div>
                                <div className="sep-leaf-right" />
                            </div>
                            <h2>Featured Projects</h2>
                        </div>
                        {/* TITLE END*/}
                    </div>
                    <div className="section-content container-fluid">
                        <OwlCarousel className="owl-carousel gallery-slider owl-btn-vertical-center mfp-gallery" {...options}>
                            {projects.map((item, index) => (
                                <div key={index} className="item">
                                    <div className="project-img-effect-1">
                                        <img src={item.image.default} alt="" />
                                        <div className="wt-info">
                                            <h3 className="wt-tilte m-b10 m-t0">{item.title}</h3>
                                            <p>{item.description}</p>
                                            <NavLink to={"/project-detail"} className="site-button-link">Read More</NavLink>
                                        </div>
                                        <a href={item.image.default} className="mfp-link"><i className="fa fa-search-plus" /></a>
                                    </div>
                                </div>
                            ))}
                        </OwlCarousel>
                    </div>
                </div>
            </>
        );
    }
};

export default Projects4;