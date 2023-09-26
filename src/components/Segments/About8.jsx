import React from 'react';
import { NavLink } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/css/modal-video.min.css';

var bnr1 = require('./../../images/home-11/ipad-bg.png');

class About8 extends React.Component {
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
                <div className="section-full p-t90 p-b50 bg-no-repeat bg-bottom-left bg-white" style={{ backgroundImage: 'url(images/background/building-bg.png)' }}>
                    <div className="about-section-11">
                        <div className="container">
                            <div className="section-content">
                                <div className="row justify-content-center d-flex">
                                    <div className="col-lg-6 col-md-12 m-b30">
                                        <div className="about-section-11-right">
                                            {/* TITLE START*/}
                                            <div className="section-head left wt-small-separator-outer">
                                                <div className="wt-small-separator site-text-primary">
                                                    <div>About Us</div>
                                                </div>
                                                <h2>We've been building our experience</h2>
                                            </div>
                                            {/* TITLE END*/}
                                            <div className="about-one">
                                                <p>You can dream, create, design and build the most wonderful place in the world. But it requires
                                                people. Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua. lorem ipsum dolor sit amet consectetur.
                  </p>
                                            </div>
                                            <ul className="description-list p-b20">
                                                <li><i className="fa fa-angle-right" />Quality Control System , 100% Satisfaction Guarantee</li>
                                                <li><i className="fa fa-angle-right" />Highly Professional Staff, Accurate Testing Processes</li>
                                                <li><i className="fa fa-angle-right" />Expertise &amp; Innovation from a truly global company</li>
                                            </ul>
                                            <NavLink to={"/about-1"} className="site-button site-btn-effect">More About</NavLink>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 m-b30 about-max-12-position">
                                        <div className="about-max-12">
                                            <span className="ipad-pencil"><img src={require('./../../images/home-11/background/ipad-pencil.png').default} alt="" className="ipad-pencil-jump" /></span>
                                            <div className="ser-ipad-warp">
                                                <span className="ser-ipad-cam" />
                                                <div className="ser-ipad-pic" style={{ backgroundImage: "url(" + bnr1.default + ")" }}>
                                                    <div className="ser-ipad-overlay" />
                                                    <NavLink to={"#"} className="play-now-video" onClick={this.openModal}>
                                                <i className="icon fa fa-play" />
                                                <span className="ripple" />
                                            </NavLink>
                                                </div>
                                                <span className="ser-ipad-btn" />
                                            </div>
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

export default About8;