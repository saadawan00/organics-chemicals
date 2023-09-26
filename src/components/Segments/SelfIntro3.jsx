import React from 'react';
import { NavLink } from 'react-router-dom';

class SelfIntro3 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t90 p-b50 bg-gray">
                    <div className="container">
                        {/* TITLE START*/}
                        <div className="section-head center  wt-small-separator-outer">
                            <div className="wt-small-separator site-text-primary">
                                <div>What We Do!</div>
                            </div>
                            <h2 className="wt-title">Let's build your dream together</h2>
                        </div>
                        {/* TITLE END*/}
                        <div className="s-section">
                            <div className="row">
                                {/* COLUMNS 1 */}
                                <div className="col-lg-3 col-md-6  col-sm-6 m-b30">
                                    <div className="service-icon-box-three shadow-bx text-center">
                                        <div className="wt-icon-box-wraper circle-bg  scale-up-center">
                                            <div className="icon-lg inline-icon">
                                                <span className="icon-cell"><img src={require('./../../images/home-11/icon/pic-1.png').default} alt=""/></span>
                                            </div>
                                        </div>
                                        <div className="service-icon-box-title">
                                            <h4 className="wt-title"><NavLink to={"/services-1"}>Architecture Design</NavLink></h4>
                                        </div>
                                        <div className="service-icon-box-content">
                                            <p>Lorem ipsum dolor sit and amet, adipisicing elit, sed do eiusmod tempor.</p>
                                            <NavLink to={"/services-1"} className="site-button-link site-text-primary">Read More</NavLink>
                                        </div>
                                    </div>
                                </div>
                                {/* COLUMNS 2 */}
                                <div className="col-lg-3 col-md-6  col-sm-6 m-b30">
                                    <div className="service-icon-box-three shadow-bx text-center">
                                        <div className="wt-icon-box-wraper circle-bg  scale-up-center">
                                            <div className="icon-lg inline-icon">
                                                <span className="icon-cell"><img src={require('./../../images/home-11/icon/pic-2.png').default} alt=""/></span>
                                            </div>
                                        </div>
                                        <div className="service-icon-box-title">
                                            <h4 className="wt-title"><NavLink to={"/services-1"}>Build Construction</NavLink></h4>
                                        </div>
                                        <div className="service-icon-box-content">
                                            <p>Lorem ipsum dolor sit and amet, adipisicing elit, sed do eiusmod tempor.</p>
                                            <NavLink to={"/services-1"} className="site-button-link site-text-primary">Read More</NavLink>
                                        </div>
                                    </div>
                                </div>
                                {/* COLUMNS 3 */}
                                <div className="col-lg-3 col-md-6  col-sm-6 m-b30">
                                    <div className="service-icon-box-three shadow-bx text-center">
                                        <div className="wt-icon-box-wraper circle-bg  scale-up-center">
                                            <div className="icon-lg inline-icon">
                                                <span className="icon-cell"><img src={require('./../../images/home-11/icon/pic-3.png').default} alt=""/></span>
                                            </div>
                                        </div>
                                        <div className="service-icon-box-title">
                                            <h4 className="wt-title"><NavLink to={"/services-1"}>Building Renovation</NavLink></h4>
                                        </div>
                                        <div className="service-icon-box-content">
                                            <p>Lorem ipsum dolor sit and amet, adipisicing elit, sed do eiusmod tempor.</p>
                                            <NavLink to={"/services-1"} className="site-button-link site-text-primary">Read More</NavLink>
                                        </div>
                                    </div>
                                </div>
                                {/* COLUMNS 4 */}
                                <div className="col-lg-3 col-md-6  col-sm-6 m-b30">
                                    <div className="service-icon-box-three shadow-bx text-center">
                                        <div className="wt-icon-box-wraper circle-bg  scale-up-center">
                                            <div className="icon-lg inline-icon">
                                                <span className="icon-cell"><img src={require('./../../images/home-11/icon/pic-4.png').default} alt=""/></span>
                                            </div>
                                        </div>
                                        <div className="service-icon-box-title">
                                            <h4 className="wt-title"><NavLink to={"/services-1"}>Awesome Worker</NavLink></h4>
                                        </div>
                                        <div className="service-icon-box-content">
                                            <p>Lorem ipsum dolor sit and amet, adipisicing elit, sed do eiusmod tempor.</p>
                                            <NavLink to={"/services-1"} className="site-button-link site-text-primary">Read More</NavLink>
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

export default SelfIntro3;