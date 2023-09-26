import React from 'react';
import { NavLink } from 'react-router-dom';

var bnr1 = require('./../../images/oil-gas/bg-1.png');

class WhatWeDo3 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-white bg-bottom-center bg-repeat-x" style={{ backgroundImage: "url(" + bnr1.default + ")" }}>
                    <div className="container">
                        <div className="section-content">
                            <div className="row d-flex justify-content-center flex-wrap">
                                <div className="col-lg-6 col-md-12 m-b30">
                                    <div className="arc-home-about-right masonry-wrap">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-6 masonry-item">
                                                <div className="arc-about-year text-uppercase text-right m-b20">
                                                    <div className="arc-about-year-pic">
                                                        <img src={require('./../../images/oil-gas/s-1.jpg').default} alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6 masonry-item">
                                                <div className="wt-media m-b20  img-reflection">
                                                    <img src={require('./../../images/oil-gas/l-2.jpg').default} alt=""/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6 masonry-item">
                                                <div className="wt-media m-b20  img-reflection">
                                                    <img src={require('./../../images/oil-gas/l-1.jpg').default} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6 masonry-item">
                                                <div className="wt-media m-b20  img-reflection">
                                                    <img src={require('./../../images/oil-gas/s-3.jpg').default} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 m-b40">
                                    <div className="whatWedo-info-section">
                                        {/* TITLE START*/}
                                        <div className="left wt-small-separator-outer">
                                            <div className="wt-small-separator site-text-primary">
                                                <div className="sep-leaf-left" />
                                                <div>What We do</div>
                                                <div className="sep-leaf-right" />
                                            </div>
                                            <h2>Providing Full Range of High Services Solution Worldwide</h2>
                                            <p>Progressively maintain extensive infomediaries via extensible niches. Capitalize on low hanging fruit to identify a ballpark value added is activity to beta test. Override the igital divide</p>
                                        </div>
                                        {/* TITLE END*/}
                                        <ul className="site-list-style-one">
                                            <li>Quality Control System , 100% Satisfaction Guarantee</li>
                                            <li>Unrivalled Workmanship, Professional and Qualified</li>
                                            <li>Environmental Sensitivity, Personalised Solutions</li>
                                        </ul>
                                        <div className="welcom-to-section-bottom d-flex justify-content-between">
                                            <div className="welcom-btn-position"><NavLink to={"/about-2"} className="site-button-secondry site-btn-effect">More About</NavLink></div>
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

export default WhatWeDo3;