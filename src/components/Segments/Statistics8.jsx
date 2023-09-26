import React from 'react';
import { NavLink } from 'react-router-dom';
import CountUp from 'react-countup';
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/css/modal-video.min.css';

class Statistics8 extends React.Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }
    render() {
        return (
            <>
                <div className="section-full video3-counter-section p-t80 bg-gray-light">
                    <div className="container">
                        {/* TITLE START*/}
                        <div className="section-head center wt-small-separator-outer text-center">
                            <div className="wt-small-separator site-text-primary">
                                <div className="sep-leaf-left" />
                                <div>All Solutions</div>
                                <div className="sep-leaf-right" />
                            </div>
                            <h2>Get A Solution For All Industries</h2>
                        </div>
                        {/* TITLE END*/}
                        <div className="counter3-section-outer-top">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-5  col-sm-6 col-6">
                                    <div className="video3-left-section">
                                        <div className="wt-media"><img src={require('./../../images/new-index/self-pic.png').default} alt=""/></div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-12">
                                    <div className="video-section-new-outer mfp-gallery">
                                        <div className="video-section">
                                            <img src={require('./../../images/new-index/video-1.jpg').default} alt=""/>
                                            <NavLink to={"#"} className="play-now" onClick={this.openModal}>
                                    <i className="icon fa fa-play" />
                                    <span className="ripple" />
                                </NavLink>
                                        </div>
                                        <div className="video-new-info site-bg-secondry">
                                            <span className="site-text-primary">Founded in 1995</span>
                                            <h3 className="wt-tilte">The Best Solution For all industries</h3>
                                        </div>
                                    </div>
                                    <div className="counter3-outer">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-4 col-md-6 col-sm-6 m-b30 ">
                                                <div className="wt-icon-box-wraper center">
                                                    <h2 className="counter site-text-primary"><CountUp end={35} duration={5} /></h2>
                                                    <span className="site-text-secondry title-style-2">Projects Completed</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                                <div className="wt-icon-box-wraper center">
                                                    <h2 className="counter site-text-primary"><CountUp end={1435} duration={5} /></h2>
                                                    <span className="site-text-secondry title-style-2">Work Employed</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                                <div className="wt-icon-box-wraper center">
                                                    <h2 className="counter site-text-primary"><CountUp end={750} duration={5} /></h2>
                                                    <span className="site-text-secondry title-style-2">Work facilities</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='fgExvIUYg5w' onClose={() => this.setState({ isOpen: false })} />
            </>
        );
    }
};

export default Statistics8;