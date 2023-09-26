import React from 'react';

class About4 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50">
                    <div className="container">
                        {/* TITLE START*/}
                        <div className="section-head center wt-small-separator-outer text-center">
                            <div className="wt-small-separator site-text-primary">
                                <div className="sep-leaf-left" />
                                <div>Easy to Use</div>
                                <div className="sep-leaf-right" />
                            </div>
                            <h2>It's Safe Compared To Electricity</h2>
                        </div>
                        {/* TITLE END*/}
                        <div className="section-content hover-block-outer">
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-7 col-sm-12 m-b30 top-bottom-animation ">
                                    <div className="Safe-mid-section">
                                        <div className="wt-box">
                                            <div className="wt-media text-primary text-center">
                                                <img src={require('./../../images/solar-icon/img-1.png').default} alt="" className="img-top-bottom-aanimation" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 col-sm-12 m-b30  p-t30">
                                    <div className="wt-icon-box-wraper left p-a20">
                                        <div className="icon-xl text-primary">
                                            <span className="icon-cell"><img src={require('./../../images/solar-icon/2.png').default} alt=""/></span>
                                        </div>
                                        <div className="icon-content">
                                            <h3 className="wt-tilte text-uppercase">Solar Plates</h3>
                                            <p>Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra. </p>
                                        </div>
                                    </div>
                                    <div className="wt-icon-box-wraper left p-a20">
                                        <div className="icon-xl text-primary">
                                            <span className="icon-cell"><img src={require('./../../images/solar-icon/1.png').default} alt=""/></span>
                                        </div>
                                        <div className="icon-content">
                                            <h3 className="wt-tilte text-uppercase">Solar Wind</h3>
                                            <p>Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra. </p>
                                        </div>
                                    </div>
                                    <div className="wt-icon-box-wraper left p-a20">
                                        <div className="icon-xl text-primary">
                                            <span className="icon-cell"><img src={require('./../../images/solar-icon/4.png').default} alt=""/></span>
                                        </div>
                                        <div className="icon-content">
                                            <h3 className="wt-tilte text-uppercase">Solar Water Heater</h3>
                                            <p>Vitae adipiscing turpis. Aenean ligula nibh, molestie id viverra. </p>
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

export default About4;