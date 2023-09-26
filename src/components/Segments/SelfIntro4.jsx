import React from 'react';
import { NavLink } from 'react-router-dom';

class SelfIntro4 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-gray">
                    <div className="container">
                        {/* TITLE START*/}
                        <div className="section-head center  wt-small-separator-outer">
                            <div className="wt-small-separator site-text-primary">
                                <div>Our Service features</div>
                            </div>
                            <h2 className="wt-title">What Else We’re Doing</h2>
                        </div>
                        {/* TITLE END*/}
                        <div className="s-section">
                            <div className="row justify-content-center">
                                {/* COLUMNS 1 */}
                                <div className="col-lg-4 col-md-6  col-sm-6 m-b30">
                                    <div className="imghvr1 text-center">
                                        <img src={require('./../../images/home-11/service-features/1.jpg').default} alt=""/>
                                        <figcaption>
                                            <div className="imghvr1-content">
                                                <h4 className="wt-title"><NavLink to={"/services-1"}>Duct Repairing</NavLink></h4>
                                                <p>Lorem ipsum dolor sit and amet, adipisicing elit, sed do eiusmod tempor.</p>
                                                <NavLink to={"/services-1"} className="site-button-link site-text-primary">Read More</NavLink>
                                            </div>
                                        </figcaption>
                                    </div>
                                </div>
                                {/* COLUMNS 2 */}
                                <div className="col-lg-4 col-md-6  col-sm-6 m-b30">
                                    <div className="imghvr1 text-center">
                                        <img src={require('./../../images/home-11/service-features/2.jpg').default} alt="" />
                                        <figcaption>
                                            <div className="imghvr1-content">
                                                <h4 className="wt-title"><NavLink to={"/services-1"}>HVAC Installation</NavLink></h4>
                                                <p>Lorem ipsum dolor sit and amet, adipisicing elit, sed do eiusmod tempor.</p>
                                                <NavLink to={"/services-1"} className="site-button-link site-text-primary">Read More</NavLink>
                                            </div>
                                        </figcaption>
                                    </div>
                                </div>
                                {/* COLUMNS 3 */}
                                <div className="col-lg-4 col-md-6  col-sm-6 m-b30">
                                    <div className="imghvr1 text-center">
                                        <img src={require('./../../images/home-11/service-features/3.jpg').default} alt=""/>
                                        <figcaption>
                                            <div className="imghvr1-content">
                                                <h4 className="wt-title"><NavLink to={"/services-1"}>Maintenance</NavLink></h4>
                                                <p>Lorem ipsum dolor sit and amet, adipisicing elit, sed do eiusmod tempor.</p>
                                                <NavLink to={"/services-1"} className="site-button-link site-text-primary">Read More</NavLink>
                                            </div>
                                        </figcaption>
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

export default SelfIntro4;