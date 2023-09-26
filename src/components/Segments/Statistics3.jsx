import React from 'react';
import CountUp from 'react-countup';

class Statistics3 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b40  bg-white bdr-t-1 bdr-solid bdr-gray">
                    <div className="container">
                        <div className="counter2-section-outer-bottom">
                            <div className="counter-outer">
                                <div className="row justify-content-center">
                                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30 ">
                                        <div className="wt-icon-box-wraper center">
                                            <h2 className="counter site-text-primary"><CountUp end={35} duration={5} /></h2>
                                            <span className="site-text-secondry title-style-2">Projects Completed</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                                        <div className="wt-icon-box-wraper center">
                                            <h2 className="counter site-text-primary"><CountUp end={1435} duration={5} /></h2>
                                            <span className="site-text-secondry title-style-2">Work Employed</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                                        <div className="wt-icon-box-wraper center">
                                            <h2 className="counter site-text-primary"><CountUp end={750} duration={5} /></h2>
                                            <span className="site-text-secondry title-style-2">Work facilities</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                                        <div className="wt-icon-box-wraper center">
                                            <h2 className="counter site-text-primary"><CountUp end={26} duration={5} /></h2>
                                            <span className="site-text-secondry title-style-2">Winning Awards</span>
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

export default Statistics3;