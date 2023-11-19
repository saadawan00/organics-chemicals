import React from 'react';
import { NavLink } from 'react-router-dom';
import Switcher from '../Segments/Switcher';

var bgimage = require('./../../images/background/footer-bg.png');

class Footer extends React.Component {
    constructor(props) {
        super(props);
        
        var homepage4 = /\/home-transport/i;
        var homepage5 = /\/home-agriculture/i;
        
        if(homepage4.test(window.location.href)){
            this.currentstate = { logo: require('./../../images/logo-2-light.png').default };
        }else if(homepage5.test(window.location.href)){
            this.currentstate = { logo: require('./../../images/logo-4-light.png').default };
        }else{
            this.currentstate = { logo: require('./../../images/logo-light.png').default };
        }
        
    }

    updateFooterLogo = (updatedlogo) => { this.currentstate.logo = updatedlogo.default; }

    render() {
        return (
            <>
                <footer className="site-footer footer-large footer-dark text-white footer-style1">
                    {/* FOOTER BLOCKES START */}
                    <div className="footer-top bg-no-repeat bg-bottom-right" style={{ backgroundImage: 'url('+bgimage.default+')' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 col-md-12 col-sm-12">
                                    <div className="footer-h-left">
                                        <div className="widget widget_about">
                                            <div className="logo-footer clearfix">
                                                <NavLink to={"./"}><img src={this.currentstate.logo} alt="" /></NavLink>
                                            </div>
                                            <p>Over 15 year experience and knowledge international standards technologicaly changes our industrial systems, we are dedicated to provides the best solutions to our valued customers there are many variation solution we makes long-term investments goal in global companies in different sectors, mainly in USA and other countries</p>
                                        </div>
                                        <div className="widget recent-posts-entry">
                                            <ul className="widget_address">
                                                <li><i className="fa fa-map-marker" />San Francisco City Hall, San Francisco, CA</li>
                                                <li><i className="fa fa-envelope" />contact123@gmail.com</li>
                                                <li> <i className="fa fa-phone" />(654) 321-7654 </li>
                                            </ul>
                                        </div>
                                        <ul className="social-icons  wt-social-links footer-social-icon">
                                            <li><NavLink to={"#"} className="fa fa-google" /></li>
                                            <li><NavLink to={"#"} className="fa fa-rss" /></li>
                                            <li><NavLink to={"#"} className="fa fa-facebook" /></li>
                                            <li><NavLink to={"#"} className="fa fa-twitter" /></li>
                                            <li><NavLink to={"#"} className="fa fa-linkedin" /></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-12 col-sm-12">
                                    <div className="row footer-h-right">
                                        <div className="col-lg-5 col-md-4">
                                            <div className="widget widget_services">
                                                <h3 className="widget-title">Useful links</h3>
                                                <ul>
                                                    <li><NavLink to={"/about-1"}>About 1</NavLink></li>
                                                    <li><NavLink to={"/pricing-plan"}>Pricing Plan</NavLink></li>
                                                    <li><NavLink to={"/faq"}>FAQ</NavLink></li>
                                                    <li><NavLink to={"/team-single"}>Our Team</NavLink></li>
                                                    <li><NavLink to={"/services-1"}>Services</NavLink></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-8">
                                            <div className="widget widget_services">
                                                <h3 className="widget-title">Our Services</h3>
                                                <ul>
                                                    <li><NavLink to={"/services-oilgas"}>Oil &amp; Gas Factory</NavLink><NavLink to={"/services-chemical"}>Chemical Research</NavLink></li>
                                                    <li><NavLink to={"/services-chemical"}>Chemical Research</NavLink><NavLink to={"/services-agricultural"}>Agricultural</NavLink></li>
                                                    <li><NavLink to={"/services-mechanical"}>Mechanical</NavLink><NavLink to={"/services-agricultural"}>Agricultural</NavLink></li>
                                                    <li><NavLink to={"/services-automotive"}>Manufacturing</NavLink><NavLink to={"/services-civil"}>Civil Engineering</NavLink></li>
                                                    <li><NavLink to={"/services-mechanical"}>Mechanical</NavLink><NavLink to={"/services-automotive"}>Automotive</NavLink></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget widget_newsletter">
                                        <h3 className="widget-title">Newsletter</h3>
                                        <p>Subscribe to our newsletter to receive latest news on our services.</p>
                                        <div className="newsletter-input">
                                            <div className="input-group">
                                                <input id="email" type="text" className="form-control" name="email" placeholder="Enter your email" />
                                                <div className="input-group-append">
                                                    <button type="button" className="input-group-text nl-search-btn text-black site-bg-primary title-style-2">Subscribe</button>
                                                </div>
                                            </div>
                                        </div>
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
                                    <li><NavLink to={"#"}>Privacy Policy</NavLink></li>
                                    <li><NavLink to={"/contactus"}>Contact Us</NavLink></li>
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

export default Footer;