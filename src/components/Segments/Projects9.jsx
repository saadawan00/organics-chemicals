import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const projects = [
    {
        thumbimage: require('./../../images/ui-9/project/1.jpg'),
        fullimage: require('./../../images/ui-9/project/1.jpg'),
        title: 'Compliance System',
        category: 'Energy',
    },
    {
        thumbimage: require('./../../images/ui-9/project/2.jpg'),
        fullimage: require('./../../images/ui-9/project/2.jpg'),
        title: 'Florida Chemical Factories',
        category: 'industry',
    },
    {
        thumbimage: require('./../../images/ui-9/project/3.jpg'),
        fullimage: require('./../../images/ui-9/project/3.jpg'),
        title: 'Flyover Construction',
        category: 'Construction',
    },
    {
        thumbimage: require('./../../images/ui-9/project/4.jpg'),
        fullimage: require('./../../images/ui-9/project/4.jpg'),
        title: 'Documents Electronics Data',
        category: 'Oil & Gas',
    },
    {
        thumbimage: require('./../../images/ui-9/project/5.jpg'),
        fullimage: require('./../../images/ui-9/project/5.jpg'),
        title: 'Automotive Manufactureing',
        category: 'Automobile',
    },
    {
        thumbimage: require('./../../images/ui-9/project/6.jpg'),
        fullimage: require('./../../images/ui-9/project/6.jpg'),
        title: 'California Power Point',
        category: 'Industrial',
    },
    {
        thumbimage: require('./../../images/ui-9/project/7.jpg'),
        fullimage: require('./../../images/ui-9/project/7.jpg'),
        title: 'California Power Point',
        category: 'Industrial',
    },
    {
        thumbimage: require('./../../images/ui-9/project/8.jpg'),
        fullimage: require('./../../images/ui-9/project/8.jpg'),
        title: 'California Power Point',
        category: 'Industrial',
    }
];

var bnr1 = require('./../../images/ui-9/background/bg-map2.png');

class Projects9 extends React.Component {
    
    render() {
        const options = {
            loop: true,
            autoplay: false,
            nav: true,
            dots: false,
            margin: 0,
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
                    items: 3,
                },
                1366: {
                    items: 3,
                },

            }
        };
        return (
            <>
                <div className="section-full  p-t80 p-b50 bg-black project-gallery-style1-wrapper" style={{ backgroundImage: "url(" + bnr1.default + ")" }}>
                    <div className="container">
                        <div className="wt-separator-two-part">
                            <div className="row wt-separator-two-part-row">
                                <div className="col-lg-8 col-md-7 wt-separator-two-part-left">
                                    {/* TITLE START*/}
                                    <div className="section-head left wt-small-separator-outer text-white">
                                        <div className="wt-small-separator site-text-white">
                                            <div className="sep-leaf-left" />
                                            <div>Our Recent Work</div>
                                            <div className="sep-leaf-right" />
                                        </div>
                                        <h2>Recently Completed Projects</h2>
                                    </div>
                                    {/* TITLE END*/}
                                </div>
                                <div className="col-lg-4 col-md-5 wt-separator-two-part-right text-right">
                                    <NavLink to={"/project-grid"} className="site-button site-btn-effect">More Detail</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-content">
                        <div className="project-gallery-block-outer m-b30">
                            <div className="container">
                                <div className="project-gallery-style1">
                                    <OwlCarousel className="owl-carousel project-gallery-one owl-btn-vertical-center" {...options}>
                                        {projects.map((item, index) => (
                                            <div key={index} className="item">
                                                <div className="project-box-style1">
                                                    <div className="project-content">
                                                        <div className="project-title">
                                                            {item.category}
                                                        </div>
                                                        <h3 className="project-title-large"><NavLink to={"/project-detail"}>{item.title}</NavLink></h3>
                                                    </div>
                                                    <div className="project-media">
                                                        <img src={item.thumbimage.default} alt="" />
                                                    </div>
                                                    <div className="project-view">
                                                        <a className="elem pic-long project-view-btn" href={item.fullimage.default} title={item.category} data-lcl-txt={item.title} data-lcl-author="someone" data-lcl-thumb={item.fullimage.default}>
                                                            <i />
                                                        </a>
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

export default Projects9;