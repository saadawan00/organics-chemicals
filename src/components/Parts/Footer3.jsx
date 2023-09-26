import React from 'react';
import { NavLink } from 'react-router-dom';
import Switcher from '../Segments/Switcher';

class Footer3 extends React.Component {
    constructor(props) {
        super(props);
        var homepage9 = /\/home-industries9/i;
        var homepage10 = /\/home-factory10/i;
        var homepage12 = /\/home-conditioning-repair12/i;

        if (homepage9.test(window.location.href) || homepage10.test(window.location.href)) {
            this.currentstate = { logo: require('./../../images/logo-2-light.png').default };
        } else  if(homepage12.test(window.location.href)){
            this.currentstate = { logo: require('./../../images/logo-9-light.png').default };
        }else{
            this.currentstate = { logo: require('./../../images/logo-1-light.png').default };
        }
    }

    updateFooterLogo = (updatedlogo) => { this.currentstate.logo = updatedlogo.default; }

    render() {

        return (
            <>
                <footer className="site-footer footer-large footer-dark text-white footer-style3">
                    {/* FOOTER BLOCKES START */}
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="widget widget_about">
                                        <div className="logo-footer clearfix">
                                        <NavLink to={"./"}><img src={this.currentstate.logo} alt="" /></NavLink>
                                        </div>
                                        <p>industroz Industry has very good strength in innovative technology and tools with over 35 years of experience.</p>
                                    </div>
                                    <div className="widget recent-posts-entry">
                                        <ul className="widget_address">
                                            <li><i className="fa fa-map-marker" />San Francisco City Hall, San Francisco, CA</li>
                                            <li><i className="fa fa-envelope" />contact123@gmail.com</li>
                                            <li> <i className="fa fa-phone" />(654) 321-7654 </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="widget widget_services">
                                        <h3 className="widget-title">Projects</h3>
                                        <ul>
                                            <li><NavLink to={"/project-detail"}>Regulatory Compliance</NavLink></li>
                                            <li><NavLink to={"/project-detail"}>Office Partition Walls</NavLink></li>
                                            <li><NavLink to={"/project-detail"}>Highway Energy Station</NavLink></li>
                                            <li><NavLink to={"/project-detail"}>Villy Manufacturing</NavLink></li>
                                            <li><NavLink to={"/project-detail"}>Compliance Seminar</NavLink></li>
                                            <li><NavLink to={"/project-detail"}>Role of the Importer</NavLink></li>
                                            <li><NavLink to={"/project-detail"}>Colour Sensing</NavLink></li>
                                            <li><NavLink to={"/project-detail"}>Fire Extinguishing</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="widget widget_services">
                                        <h3 className="widget-title">Our Services</h3>
                                        <ul>
                                            <li><NavLink to={"/services-oilgas"}>Oil &amp; Gas Factory</NavLink></li>
                                            <li><NavLink to={"/services-chemical"}>Chemical Research</NavLink></li>
                                            <li><NavLink to={"/services-mechanical"}>Mechanical</NavLink></li>
                                            <li><NavLink to={"/services-automotive"}>Manufacturing</NavLink></li>
                                            <li><NavLink to={"/services-automotive"}>Auto Engineering</NavLink></li>
                                            <li><NavLink to={"/services-mechanical"}>Metal Industry </NavLink></li>
                                            <li><NavLink to={"/services-civil"}>Agricultural Processing</NavLink></li>
                                            <li><NavLink to={"/services-automotive"}>Material Engineering </NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="widget widget_newsletter">
                                        <h3 className="widget-title">Newsletter</h3>
                                        <p>Subscribe to our newsletter to receive latest news on our services.</p>
                                        <div className="newsletter-input">
                                            <input id="email" type="text" className="form-control" name="email" placeholder="Enter your email" />
                                            <button type="button" className="nl-search-btn site-bg-primary title-style-2">Sign Up</button>
                                        </div>
                                        <p>We don’t do mail to spam &amp; your mail id is confidential.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* FOOTER COPYRIGHT */}
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="wt-footer-bot-left d-flex justify-content-between">
                                <span className="copyrights-text">Copyright © 2021 <span className="site-text-primary">Thewebmax</span></span>
                                <ul className="copyrights-nav">
                                <li><NavLink to={"#"}>Terms  &amp; Condition</NavLink></li>
                                    <li><NavLink to={"#"}>&nbsp;&nbsp;Privacy Policy</NavLink></li>
                                    <li><NavLink to={"/contactus"}>&nbsp;&nbsp;Contact Us</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>

                <Switcher updateFooterLogo={this.updateFooterLogo.bind(this)} />

            </>
        );
    };
};

export default Footer3;