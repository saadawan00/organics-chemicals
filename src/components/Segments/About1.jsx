import React from 'react';
import { NavLink } from 'react-router-dom';

class About1 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full welcome-section-outer">
                    <div className="welcome-section-top bg-white p-tb80">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div className="img-colarge">
                                        <div className="colarge-1"><img src={require('./../../images/colarge/s1.jpg').default} alt="" className="slide-righ" /></div>
                                        <div className="since-year-outer"><div className="since-year"><span>Since</span><strong>2015</strong></div></div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="welcom-to-section">
                                        {/* TITLE START*/}
                                        <div className="left wt-small-separator-outer">
                                            <div className="wt-small-separator site-text-primary">
                                                <div className="sep-leaf-left" />
                                                <div>Welcome to industro</div>
                                                <div className="sep-leaf-right" />
                                            </div>
                                        </div>
                                        <h2>We Are Here to Increase Your Knowledge With Experience</h2>
                                        {/* TITLE END*/}
                                        <ul className="site-list-style-one">
                                            <li>Quality Control System , 100% Satisfaction Guarantee</li>
                                            <li>Unrivalled Workmanship, Professional and Qualified</li>
                                            <li>Environmental Sensitivity, Personalised Solutions</li>
                                        </ul>
                                        <p>Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit. a ballpark value added is activity to beta test. Override the digital divide with additional click throughs from fruit to identify a ballpark value added.</p>
                                        <div className="welcom-to-section-bottom d-flex justify-content-between">
                                            <div className="welcom-btn-position"><NavLink to={"/about-1"} className="site-button-secondry site-btn-effect">More About</NavLink></div>
                                            <div className="welcom-sign-pic"><img src={require('./../../images/sign.png').default} alt="" /></div>
                                            <div className="welcom-sign-info"><strong>Brayden</strong><span>( CEO &amp; Founder )</span></div>
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

export default About1;