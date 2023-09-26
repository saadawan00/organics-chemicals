import React from 'react';
import { NavLink } from 'react-router-dom';

var bnr1 = require('./../../images/background/bg-1.jpg');

class Team6 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-white team-bg-section-outer bg-no-repeat bg-center" style={{ backgroundImage: 'url(images/background/bg-map.png)' }}>
                    <div className="container">
                        <div className="section-content">
                            {/* TITLE START*/}
                            <div className="section-head center wt-small-separator-outer text-center">
                                <div className="wt-small-separator site-text-primary">
                                    <div className="sep-leaf-left" />
                                    <div>Our Experts</div>
                                    <div className="sep-leaf-right" />
                                </div>
                                <h2>We will serve you with the best of our capacity by expert team</h2>
                            </div>
                            {/* TITLE END*/}
                            <div className="section-content">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6 col-sm-12 m-b30">
                                        <div className="wt-team-1">
                                            <div className="wt-media">
                                                <img src="images/team/pic1.jpg" alt />
                                                <div className="team-social-center">
                                                    <ul className="team-social-bar">
                                                        <li><a href="javascript:void(0);"><i className="fa fa-facebook" /></a></li>
                                                        <li><a href="javascript:void(0);"><i className="fa fa-twitter" /></a></li>
                                                        <li><a href="javascript:void(0);"><i className="fa fa-instagram" /></a></li>
                                                        <li><a href="javascript:void(0);"><i className="fa fa-linkedin" /></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="wt-info p-a30  p-b0">
                                                <div className="team-detail  text-center">
                                                    <h3 className="m-t0 team-name"><a href="team-single.html" className=" site-text-secondry">Malcolm Franzcrip</a></h3>
                                                    <span className="title-style-2 team-position site-text-primary">Contractor</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 m-b30">
                                        <div className="wt-team-1">
                                            <div className="wt-media">
                                                <img src="images/team/pic2.jpg" alt />
                                                <div className="team-social-center">
                                                    <ul className="team-social-bar">
                                                        <li><a href="javascript:void(0);"><i className="fa fa-facebook" /></a></li>
                                                        <li><a href="javascript:void(0);"><i className="fa fa-twitter" /></a></li>
                                                        <li><a href="javascript:void(0);"><i className="fa fa-instagram" /></a></li>
                                                        <li><a href="javascript:void(0);"><i className="fa fa-linkedin" /></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="wt-info p-a30  p-b0">
                                                <div className="team-detail  text-center">
                                                    <h3 className="m-t0 team-name"><a href="team-single.html" className=" site-text-secondry">Froster Collings</a></h3>
                                                    <span className="title-style-2 team-position site-text-primary">Contractor</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 m-b30">
                                        <div className="wt-team-1">
                                            <div className="wt-media">
                                                <img src="images/team/pic3.jpg" alt />
                                                <div className="team-social-center">
                                                    <ul className="team-social-bar">
                                                        <li><a href="javascript:void(0);"><i className="fa fa-facebook" /></a></li>
                                                        <li><a href="javascript:void(0);"><i className="fa fa-twitter" /></a></li>
                                                        <li><a href="javascript:void(0);"><i className="fa fa-instagram" /></a></li>
                                                        <li><a href="javascript:void(0);"><i className="fa fa-linkedin" /></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="wt-info p-a30 p-b0">
                                                <div className="team-detail  text-center">
                                                    <h3 className="m-t0 team-name"><a href="team-single.html" className=" site-text-secondry">Melena Marshall</a></h3>
                                                    <span className="title-style-2 team-position site-text-primary">Contractor</span>
                                                </div>
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

export default Team6;