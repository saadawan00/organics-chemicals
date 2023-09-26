import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const projects = [
    {
        thumbimage: require('./../../images/home-11/project/1.jpg'),
        fullimage: require('./../../images/home-11/project/1.jpg'),
        title: 'Nh-16 Highway Bridge',
        category: 'Bridger',
        description: 'You can dream, create, design and build the  most wonderful place in the world.',
    },
    {
        thumbimage: require('./../../images/home-11/project/2.jpg'),
        fullimage: require('./../../images/home-11/project/2.jpg'),
        title: 'Ruma Dam Project',
        category: 'Engineering',
        description: 'You can dream, create, design and build the  most wonderful place in the world.',
    },
    {
        thumbimage: require('./../../images/home-11/project/3.jpg'),
        fullimage: require('./../../images/home-11/project/3.jpg'),
        title: 'Dubai Housing Project',
        category: 'Apartment',
        description: 'You can dream, create, design and build the  most wonderful place in the world.',
    },
    {
        thumbimage: require('./../../images/home-11/project/4.jpg'),
        fullimage: require('./../../images/home-11/project/4.jpg'),
        title: 'House Extensions',
        category: 'Building',
        description: 'You can dream, create, design and build the  most wonderful place in the world.',
    },
    {
        thumbimage: require('./../../images/home-11/project/5.jpg'),
        fullimage: require('./../../images/home-11/project/5.jpg'),
        title: 'Renovation',
        category: 'Renovation',
        description: 'You can dream, create, design and build the  most wonderful place in the world.',
    },
    {
        thumbimage: require('./../../images/home-11/project/6.jpg'),
        fullimage: require('./../../images/home-11/project/6.jpg'),
        title: 'Tehla Mines Project',
        category: 'Mines',
        description: 'You can dream, create, design and build the  most wonderful place in the world.',
    }
];

class Projects11 extends React.Component {
    
    render() {
        const options = {
            loop: true,
            nav: false,
            dots: true,
            margin: 20,
            autoplay: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                640: {
                    items: 2
                },
                767: {
                    items: 2
                },
                991: {
                    items: 4
                },
                1366: {
                    items: 4
                }

            }
        };
        return (
            <>
                <div className="section-full p-t90 p-b50 p-lr30 project-style-new ">
                    <div className="container">
                        {/* TITLE START*/}
                        <div className="section-head center wt-small-separator-outer">
                            <div className="wt-small-separator site-text-primary">
                                <div>Explore Recent Work</div>
                            </div>
                            <h2>Some of our finished projects that will amaze you</h2>
                        </div>
                        {/* TITLE END*/}
                    </div>
                    {/* IMAGE CAROUSEL START */}
                    <div className="section-content">
                        <div className="container">
                            <OwlCarousel className="owl-carousel project-carousel  owl-btn-vertical-center m-b30" {...options}>
                                {projects.map((item, index) => (
                                    <div key={index} className="item">
                                        <div className="project-new-2">
                                            <div className="wt-img-effect">
                                                <img src={item.thumbimage.default} alt="" />
                                                <div className="project-view">
                                                    <a className="elem pic-long project-view-btn" href={item.fullimage.default} title={item.title} data-lcl-thumb={item.fullimage.default}>
                                                        <i className="fa fa-search-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="project-new-content2">
                                                <span className="project-new-category">{item.category}</span>
                                                <h3 className="wt-title"><NavLink to={"/project-detail"}>{item.title}</NavLink></h3>
                                                <p>{item.description}</p>
                                                <NavLink to={"/project-detail"} className="site-button-link site-text-primary">Read More</NavLink>
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

export default Projects11;