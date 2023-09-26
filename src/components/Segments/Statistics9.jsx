import React from 'react';
import { NavLink } from 'react-router-dom';
import CountUp from 'react-countup';
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/css/modal-video.min.css';

var bnr1 = require('./../../images/ui-9/background/bg-1.jpg');
var bnr2 = require('./../../images/background/bg-map.png');

class Statistics9 extends React.Component {
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
                <div className="section-full p-t80 overlay-wraper bg-top-center bg-center" style={{ backgroundImage: "url(" + bnr1.default + ")" }}>
                    <div className="overlay-main bg-black opacity-01" />
                    <div className="container">
                        {/* TITLE START*/}
                        <div className="section-head center wt-small-separator-outer text-center text-white">
                            <div className="wt-small-separator site-text-white">
                                <div className="sep-leaf-left" />
                                <div>About Quality</div>
                                <div className="sep-leaf-right" />
                            </div>
                            <h2>We're about Quality and Trust.</h2>
                        </div>
                        {/* TITLE END*/}
                    </div>
                    <div className="section-content quality-section-outer bg-gray-light" style={{ backgroundImage: "url(" + bnr2.default + ")" }}>
                        <div className="container">
                            <div className="quality-section-content">
                                <div className="counter-outer">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-3 col-md-6 col-sm-6 m-b30 ">
                                            <div className="wt-icon-box-wraper center bg-gray-light p-a20">
                                                <h2 className="counter site-text-primary m-b0"><CountUp end={35} duration={5} /></h2>
                                                <span className="site-text-secondry title-style-2">Projects Completed</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                                            <div className="wt-icon-box-wraper center bg-gray-light p-a20">
                                                <h2 className="counter site-text-primary  m-b0"><CountUp end={1435} duration={5} /></h2>
                                                <span className="site-text-secondry title-style-2">Work Employed</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                                            <div className="wt-icon-box-wraper center bg-gray-light p-a20">
                                                <h2 className="counter site-text-primary  m-b0"><CountUp end={750} duration={5} /></h2>
                                                <span className="site-text-secondry title-style-2">Work facilities</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                                            <div className="wt-icon-box-wraper center bg-gray-light p-a20">
                                                <h2 className="counter site-text-primary  m-b0"><CountUp end={26} duration={5} /></h2>
                                                <span className="site-text-secondry title-style-2">Winning Awards</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="quality-video-section">
                                <span>Many of our Self registered employees are requested an main preferred temporary staff when all service</span>
                                <div className="quality-video">
                                <NavLink to={"#"} className="play-now" onClick={this.openModal}>
                                    <i className="icon fa fa-play" />
                                    <span className="ripple" />
                                </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='c1XNqw2gSbU' onClose={() => this.setState({ isOpen: false })} />
            </>
        );
    }
};

export default Statistics9;