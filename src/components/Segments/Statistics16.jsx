import React from 'react';
import { NavLink } from 'react-router-dom';
import CountUp from 'react-countup';
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/css/modal-video.min.css';

var bnr1 = require('./../../images/background/bg-2.jpg');

class Statistics16 extends React.Component {
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
                <div className="section-full video2-counter-section p-t80 p-b40  overlay-wraper bg-cover bg-no-repeat" style={{ backgroundImage: "url(" + bnr1.default + ")" }}>
                    <div className="overlay-main site-bg-secondry opacity-09" />
                    <div className="container">
                        {/* TITLE START*/}
                        <div className="section-head center wt-small-separator-outer text-center text-white">
                            <div className="wt-small-separator site-text-primary">
                                <div className="sep-leaf-left" />
                                <div>All Solutions</div>
                                <div className="sep-leaf-right" />
                            </div>
                            <h2>Get A Solution For All Industries</h2>
                        </div>
                        {/* TITLE END*/}
                        <div className="counter2-section-outer-top">
                            <div className="counter-outer">
                                <div className="row justify-content-center">
                                    <div className="col-lg-3 col-md-6 m-b30 ">
                                        <div className="wt-icon-box-wraper center">
                                            <h2 className="counter site-text-primary"><CountUp end={4000} duration={5} /></h2>
                                            <span className="site-text-white title-style-2">Projects Completed</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 m-b30">
                                        <div className="wt-icon-box-wraper center">
                                            <h2 className="counter site-text-primary"><CountUp end={15000} duration={5} /></h2>
                                            <span className="site-text-white title-style-2">B2B Products</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 m-b30">
                                        <div className="wt-icon-box-wraper center">
                                            <h2 className="counter site-text-primary"><CountUp end={400} duration={5} /></h2>
                                            <span className="site-text-white title-style-2">Happy Clients</span>
                                        </div>
                                    </div>
                                    
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

export default Statistics16;