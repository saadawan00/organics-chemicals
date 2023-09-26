import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const projects = [
    {
        image: require('./../../images/ui-10/project/1.jpg'),
        title: 'Manufacturing',
        count: '01',
    },
    {
        image: require('./../../images/ui-10/project/2.jpg'),
        title: 'Manufacturing',
        count: '02',
    },
    {
        image: require('./../../images/ui-10/project/3.jpg'),
        title: 'Manufacturing',
        count: '03',
    },
    {
        image: require('./../../images/ui-10/project/4.jpg'),
        title: 'Manufacturing',
        count: '04',
    },
    {
        image: require('./../../images/ui-10/project/5.jpg'),
        title: 'Manufacturing',
        count: '05',
    },
    {
        image: require('./../../images/ui-10/project/6.jpg'),
        title: 'Manufacturing',
        count: '06',
    },
    {
        image: require('./../../images/ui-10/project/7.jpg'),
        title: 'Manufacturing',
        count: '07',
    }
];

class Projects10 extends React.Component {
    render() {
        const options = {
            loop: true,
            autoplay: false,
            margin: 15,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                640: {
                    items: 2
                },
                768: {
                    items: 2
                },
                991: {
                    items: 2
                },

                1024: {
                    items: 3
                },

                1280: {
                    items: 4
                },

                1366: {
                    items: 5
                }

            }
        };
        return (
            <>
                <div className="section-full  p-t80 p-b80 bg-gray-light">
                    <div className="container">
                        <div className="wt-separator-two-part">
                            <div className="row wt-separator-two-part-row">
                                <div className="col-lg-8 col-md-7 wt-separator-two-part-left">
                                    {/* TITLE START*/}
                                    <div className="section-head left wt-small-separator-outer">
                                        <div className="wt-small-separator site-text-primary">
                                            <div className="sep-leaf-left" />
                                            <div>Our Latest Projects</div>
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
                        <div className="container-fluid">
                            <div className="projects-slider-two">
                                <OwlCarousel className="owl-carousel projects-carousel-two owl-btn-vertical-center" {...options}>
                                    {projects.map((item, index) => (
                                        <div key={index} className="item">
                                            <div className="projects-two-info bg-white">
                                                <div className="wt-media img-reflection">
                                                    <img src={item.image.default} alt="" />
                                                </div>
                                                <h3 className="wt-tilte m-t0" data-title={item.count}><NavLink to={"/project-detail"}>{item.title}</NavLink></h3>
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

export default Projects10;