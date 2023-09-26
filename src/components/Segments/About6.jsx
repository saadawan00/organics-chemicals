import React from 'react';
import { NavLink } from 'react-router-dom';

class About6 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-no-repeat bg-center bg-white">
                    <div className="about-section-two">
                        <div className="container">
                            <div className="section-content">
                                <div className="row justify-content-center d-flex">
                                    <div className="col-lg-6 col-md-12 m-b30">
                                        <div className="about-section-two-right">
                                            {/* TITLE START*/}
                                            <div className="left wt-small-separator-outer">
                                                <div className="wt-small-separator site-text-primary">
                                                    <div className="sep-leaf-left" />
                                                    <div>About Industroz</div>
                                                    <div className="sep-leaf-right" />
                                                </div>
                                                <h2>We Provide top industrial Services.</h2>
                                                <div className="ab-two-info">
                                                    <p>There are many variations of passages of Lorem Ipsum available,
                                                    but the majority have suffered alteration in some form, by injected humour,
                                                    or randomised words which don't look even slightly believable.
                    </p>
                                                </div>
                                            </div>
                                            {/* TITLE END*/}
                                            <div className="row ab-two-icon-section">
                                                <div className="col-lg-6 col-md-12">
                                                    <div className="wt-icon-box-wraper center m-b30 bg-gray p-a20">
                                                        <span className="icon-md p-t10">
                                                            <i className="flaticon-robotic-arm site-text-primary" />
                                                        </span>
                                                        <div className="icon-content">
                                                            <h3 className="wt-tilte">A Full Services</h3>
                                                            <p>Train with the best experts in body building field.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-12">
                                                    <div className="wt-icon-box-wraper center m-b30 bg-gray p-a20">
                                                        <span className="icon-md p-t10">
                                                            <i className="flaticon-repair site-text-primary" />
                                                        </span>
                                                        <div className="icon-content">
                                                            <h3 className="wt-tilte">All Maintenance</h3>
                                                            <p>Our personal trainers will help you
                          find a perfect.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ab-two-info">
                                                <p>By injected humour,
                                                or randomised words which don't look even slightly believable.
                                                If you are going to use a passage of you need to be sure there embarrassing.
                  </p>
                  <NavLink to={"/about-1"} className="site-button-secondry site-btn-effect">Learn More</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 m-b30">
                                        <div className="about-max-two">
                                            <div className="about-max-two-media"><img src={require('./../../images/ui-9/intro-pic.jpg').default} alt="" /></div>
                                            <div className="about-two">
                                                <div className="about-year">
                                                    <div className="about-year-info">
                                                        <span>25+</span>
                                                        <p>Years of Working Experience in this field</p>
                                                    </div>
                                                </div>
                                            </div>
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

export default About6;