import React from 'react';
import { NavLink } from 'react-router-dom';

class About9 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-no-repeat bg-bottom-left bg-white">
                    <div className="about-section-11">
                        <div className="container">
                            <div className="section-content">
                                <div className="row justify-content-center d-flex">
                                    <div className="col-lg-6 col-md-12 m-b30 about-max-11-position">
                                        <div className="about-max-11">
                                            <div className="about-max-11-media"><img src={require('./../../images/home-11/intro-pic2.jpg').default} alt=""/></div>
                                            <div className="ab-call-us">
                                                <div className="wt-icon-box-wraper left bg-white p-a30">
                                                    <div className="icon-xl text-primary radius">
                                                        <span className="icon-cell site-text-primary"><i className="flaticon-call" /></span>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h3 className="wt-tilte text-uppercase">Call us anytime</h3>
                                                        <p>+(06) 0205 783 5586</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 m-b30">
                                        <div className="about-section-11-right">
                                            {/* TITLE START*/}
                                            <div className="section-head left wt-small-separator-outer">
                                                <div className="wt-small-separator site-text-primary">
                                                    <div>Your home comfort experts</div>
                                                </div>
                                                <h2>Quality Heating &amp; Cooling Services</h2>
                                            </div>
                                            {/* TITLE END*/}
                                            <div className="about-one">
                                                <p>
                                                    It is a long established fact that a reader will be distracted by the readable to content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,opposed using 'Con't here.
                  </p>
                                                <p>
                                                    We believe our warranties set us apart from our competitors and show our commitment to quality work and service.
                  </p>
                                            </div>
                                            <ul className="description-list p-b20">
                                                <li><i className="fa fa-angle-right" /> Refresing to get such a personal touch.</li>
                                                <li><i className="fa fa-angle-right" />We Believe in Maintaining Solid Core Values</li>
                                                <li><i className="fa fa-angle-right" />We Believe in Setting the Standard Higher</li>
                                            </ul>
                                            <NavLink to={"/about-2"} className="site-button site-btn-effect">More About</NavLink>
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

export default About9;