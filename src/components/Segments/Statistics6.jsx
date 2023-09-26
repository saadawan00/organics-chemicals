import React from 'react';
import { NavLink } from 'react-router-dom';
import CountUp from 'react-countup';
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/css/modal-video.min.css';

var bnr1 = require('./../../images/solar-icon/bg/bg-1.jpg');

class Statistics6 extends React.Component {
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
                <div className="section-full video2-counter-section p-t80 p-b40  overlay-wraper bg-cover bg-no-repeat bg-parallax" data-stellar-background-ratio="0.5" style={{ backgroundImage: "url(" + bnr1.default + ")" }}>
                    <div className="overlay-main bg-white opacity-03" />
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
                        <div className="counter2-section-outer-top">
                            <div className="row justify-content-center">
                                <div className="col-lg-6 col-md-12 m-b30">
                                    <div className="video-section2-outer mfp-gallery">
                                        <div className="video-section">
                                            <NavLink to={"#"} className="play-now" onClick={this.openModal}>
                                                <i className="icon fa fa-play" />
                                                <span className="ripple" />
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="counter2-section-outer-bottom">
                            <div className="counter-outer">
                                <div className="row justify-content-center">
                                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30 ">
                                        <div className="wt-icon-box-wraper center">
                                            <h2 className="counter site-text-primary"><CountUp end={35} duration={5} /></h2>
                                            <span className="title-style-2">Projects Completed</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                                        <div className="wt-icon-box-wraper center">
                                            <h2 className="counter site-text-primary"><CountUp end={1435} duration={5} /></h2>
                                            <span className="title-style-2">Work Employed</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                                        <div className="wt-icon-box-wraper center">
                                            <h2 className="counter site-text-primary"><CountUp end={750} duration={5} /></h2>
                                            <span className="title-style-2">Work facilities</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                                        <div className="wt-icon-box-wraper center">
                                            <h2 className="counter site-text-primary"><CountUp end={26} duration={5} /></h2>
                                            <span className="title-style-2">Winning Awards</span>
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

export default Statistics6;