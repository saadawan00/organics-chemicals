import React from 'react';

class WhatWeDo4 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-white what-we-do-section2-new">
                    <div className="container">
                        <div className="section-content what-we-do-content-new">
                            <div className="row d-flex justify-content-center flex-wrap">
                                <div className="col-lg-6 col-md-12 m-b30">
                                    <div className="whatWedo-media-section-new">
                                        <div className="wt-media">
                                            <img src={require('./../../images/new-index/what-we_2/pic1.jpg').default} alt=""/>
                                        </div>
                                        <div className="whatWedo-media-content-new text-white">
                                            <div className="whatWedo-media-inner-new site-bg-primary">
                                                <h3>Team Working Dedicatedly</h3>
                                                <p>We have 26+ years of experience with providing wide area of specialty services works listed below</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 m-b40">
                                    <div className="whatWedo-info-section-new">
                                        {/* TITLE START*/}
                                        <div className="left wt-small-separator-outer">
                                            <div className="wt-small-separator site-text-primary">
                                                <div className="sep-leaf-left" />
                                                <div>What We do</div>
                                                <div className="sep-leaf-right" />
                                            </div>
                                            <h2>Providing Full Range of High Services Solution</h2>
                                            <p>Progressively maintain extensive infomediaries via extensible niches. Capitalize on low hanging fruit to identify a ballpark value added is activity to beta test. Override the igital divide</p>
                                        </div>
                                        {/* TITLE END*/}
                                        <div className="wt-icon-card-outer-new">
                                            <div className="wt-icon-card-new bg-gray-light">
                                                <div className="wt-card-header-new"><i className="flaticon-robotic-arm site-text-primary" /><span className="title-style-2 site-text-secondry">A Full Services</span></div>
                                                <div className="wt-card-content-new"><p>We can arrange and provides with the comprehensive service in the sphere.</p></div>
                                            </div>
                                            <div className="wt-icon-card-new bg-gray-light">
                                                <div className="wt-card-header-new"><i className="flaticon-repair  site-text-primary" /><span className="title-style-2 site-text-secondry">All Maintenance</span></div>
                                                <div className="wt-card-content-new"><p>We provides with the main types of basic conditions International sea Fright.</p></div>
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

export default WhatWeDo4;