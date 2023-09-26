import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const projects = [
    {
        title1: 'Manufacturing & Maintenance',
        title2: 'Mechanical Engineering',
        image: require('./../../images/project/pic1.jpg'),
        description: 'You will find yourself working that result partnership in an incredible Experience, and an end products that is the best.',
    },
    {
        title1: 'Manufacturing & Maintenance',
        title2: 'Mechanical Engineering',
        image: require('./../../images/project/pic2.jpg'),
        description: 'You will find yourself working that result partnership in an incredible Experience, and an end products that is the best.',
    },
    {
        title1: 'Manufacturing & Maintenance',
        title2: 'Mechanical Engineering',
        image: require('./../../images/project/pic3.jpg'),
        description: 'You will find yourself working that result partnership in an incredible Experience, and an end products that is the best.',
    },
    {
        title1: 'Manufacturing & Maintenance',
        title2: 'Mechanical Engineering',
        image: require('./../../images/project/pic4.jpg'),
        description: 'You will find yourself working that result partnership in an incredible Experience, and an end products that is the best.',
    }
]

var bnr1 = require('./../../images/background/bg-1.png');

class Projects1 extends React.Component {
    render() {
        const options = {
            loop:true,
            autoplay:false,
            nav:true,
            dots: false,	
            margin:30,
            navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
            responsive:{
                0:{
                    items:1,
                },
                1400:{
                    items:1
                }		
            }
        };
        return (
            <>
                <div className="section-full project-1-outer-main p-t80">
                    <div className="container">
                        <div className="wt-separator-two-part bg-white">
                            <div className="row wt-separator-two-part-row">
                                <div className="col-lg-6 col-md-6 wt-separator-two-part-left">
                                    {/* TITLE START*/}
                                    <div className="section-head left wt-small-separator-outer">
                                        <div className="wt-small-separator site-text-primary">
                                            <div className="sep-leaf-left" />
                                            <div>Explore Recent Work</div>
                                            <div className="sep-leaf-right" />
                                        </div>
                                        <h2>We've Done Lot's Projects Let's Check Some Here</h2>
                                    </div>
                                    {/* TITLE END*/}
                                </div>
                                <div className="col-lg-6 col-md-6 wt-separator-two-part-right text-left">
                                    <p>You will find yourself working in a partnership that result in an incredible Experience, and an end products that is the best</p>
                                    <NavLink to="/project-grid" className="site-button-link">Read More</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-1-outer-section bg-gray bg-center" style={{ backgroundImage: "url(" + bnr1.default + ")" }}>
                        <div className="container">
                            {/* PROJECT SLIDER START */}
                            <div className="section-content">
                                <div className="project-1-outer clearfix">
                                    <div className="project-1-left">
                                        <div className="crane-image-section">
                                            <img src={require('./../../images/crane.png').default} alt="" />
                                        </div>
                                    </div>
                                    <div className="project-1-right">
                                        <OwlCarousel className="owl-carousel project-1-slider owl-btn-top-right long-arrow-next-prev" {...options}>
                                            {projects.map((item, index) => (
                                                <div key={index} className="item">
                                                    <div className="pproject-1-inner-block clearfix">
                                                        <div className="project-1-inner-media">
                                                            <div className="project-1-inner-pic">
                                                                <img src={item.image.default} alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="project-1-inner-info">
                                                            <h4 className="site-text-primary">{item.title1}</h4>
                                                            <h3 className="wt-title">{item.title2}</h3>
                                                            <p>{item.description}</p>
                                                            <NavLink to={"/project-detail"} className="site-button site-btn-effect">More Detail</NavLink>
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
            </>
        );
    }
};

export default Projects1;