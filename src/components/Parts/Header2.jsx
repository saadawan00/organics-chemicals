import React from "react";
import Navigation from "../Parts/Navigation";
import { NavLink } from "react-router-dom";
import logo1 from "./../../images/organics.png";

var bnr = require("./../../images/background/bg-7.jpg");
var bnr2 = require("./../../images/background/bg-map2.png");

class Header2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { logo: require("./../../images/organics.png") };
  }

  state = { isSearchActive: false, isQuoteActive: false };

  handleSearchToggle = () => {
    this.setState({ isSearchActive: !this.state.isSearchActive });
  };

  handleQuoteToggle = () => {
    this.setState({ isQuoteActive: !this.state.isQuoteActive });
  };

  componentDidMount() {
    const handleScroll = () => {
      const offset = window.scrollY;

      const stickyheader = document.querySelector(".sticky-header ");

      if (offset >= 100) {
        stickyheader.classList.add("is-fixed");
        stickyheader.classList.add("color-fill");
      } else {
        stickyheader.classList.remove("is-fixed");
        stickyheader.classList.remove("color-fill");
      }
    };

    window.addEventListener("scroll", handleScroll);

    window.updateTopMostParent = (logopath) => {
      this.setState({ logo: logopath });
    };
  }

  render() {
    const isSearchActive = this.state.isSearchActive;
    const isQuoteActive = this.state.isQuoteActive;

    return (
      <>
        <header className="site-header header-style-2 mobile-sider-drawer-menu">
          <div className="top-bar site-bg-secondry">
            <div
              style={{
                width: "100%",
                margin: "0 1% 0 3%",
              }}
            >
              <div className="d-flex justify-content-between">
                <div className="wt-topbar-left d-flex flex-wrap align-content-start">
                  <ul className="wt-topbar-info e-p-bx text-white">
                    <li>
                      <span> Chemicals, Equipment & Engineering</span>
                      <span>| &nbsp;Your Complete Business Solution</span>
                    </li>
                  </ul>
                </div>
                <div className="wt-topbar-right d-flex flex-wrap align-content-center">
                  <ul className="wt-topbar-info-2 e-p-bx text-white">
                    <li>
                      <img
                        src={require("./1.png")}
                        style={{
                          width: "25px",
                          height: "25px",
                        }}
                      />{" "}
                      &nbsp; +1 773 870 1288
                    </li>
                    <li>
                      <img
                        src={require("./pakistan.png")}
                        style={{
                          width: "25px",
                          height: "25px",
                        }}
                      />{" "}
                      &nbsp; +92-423-541-0051-53
                    </li>
                    <li>
                      <i className="fa fa-envelope" />
                      info@organics.com.co
                    </li>
                  </ul>
                  <ul className="social-icons">
                    <li>
                      <a
                        href={
                          "https://www.google.com/maps/place/ORGANICS/@31.4986581,74.2734893,17z/data=!3m1!4b1!4m6!3m5!1s0x391903b0030320cf:0x5148bfd97758a9c5!8m2!3d31.4986536!4d74.2760642!16s%2Fg%2F11cs6b6mdx?entry=ttu"
                        }
                        className="fa fa-google"
                        target="_blank"
                      />
                    </li>

                    <li>
                      <a
                        href={"https://www.facebook.com/Organics.solutions"}
                        target="_blank"
                        className="fa fa-facebook"
                      />
                    </li>
                    <li>
                      <a
                        href={
                          "https://www.linkedin.com/company/organicspakllc/"
                        }
                        target="_blank"
                        className="fa fa-linkedin"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="sticky-header main-bar-wraper  navbar-expand-lg">
            <div className="main-bar">
              <div
                className=" clearfix"
                style={{ maxWidth: "100%", padding: "0 4% 0 4%" }}
              >
                <div className="logo-header">
                  <div className="logo-header-inner logo-header-one">
                    <NavLink to={"./"}>
                      <img src={logo1} alt="Organics" />
                    </NavLink>
                  </div>
                </div>
                {/* NAV Toggle Button */}
                <button
                  id="mobile-side-drawer"
                  data-target=".header-nav"
                  data-toggle="collapse"
                  type="button"
                  className="navbar-toggler collapsed"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar icon-bar-first" />
                  <span className="icon-bar icon-bar-two" />
                  <span className="icon-bar icon-bar-three" />{" "}
                </button>
                <div
                  className="extra-nav header-2-nav"
                  style={{ marginTop: "2%" }}
                >
                  <div>
                    <div className="header-search">
                      <NavLink
                        to={"#"}
                        className={
                          isSearchActive
                            ? "header-search-icon close"
                            : "header-search-icon"
                        }
                        onClick={this.handleSearchToggle}
                      >
                        <i className="fa fa-search" />
                      </NavLink>{" "}
                    </div>
                    <div className="header-nav-request">
                      <NavLink
                        to={"#"}
                        className="contact-slide-show"
                        onClick={this.handleQuoteToggle}
                      >
                        Request a Quote <i className="fa fa-angle-right" />
                      </NavLink>{" "}
                    </div>
                  </div>
                </div>
                {/* MAIN Vav */}
                <Navigation />
                {/* SITE Search */}
                <div
                  id="search-toggle-block"
                  style={{ display: isSearchActive ? "block" : "none" }}
                >
                  <div id="search">
                    <form
                      role="search"
                      id="searchform"
                      action="/search"
                      method="get"
                      className="radius-xl"
                    >
                      <div className="input-group">
                        <input
                          className="form-control"
                          defaultValue=""
                          name="q"
                          type="search"
                          placeholder="Type to search"
                        />
                        <span className="input-group-append">
                          <button type="button" className="search-btn">
                            <i className="fa fa-search" />
                          </button>
                        </span>{" "}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div
          className="contact-slide-hide bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url(" + bnr.default + ")",
            right: isQuoteActive ? "0%" : "-100%",
          }}
        >
          <div className="contact-nav">
            <NavLink
              to={"#"}
              className="contact_close"
              onClick={this.handleQuoteToggle}
            >
              ×
            </NavLink>
            <div className="contact-nav-form">
              <div
                className="contact-nav-info bg-white p-a30 bg-center bg-no-repeat"
                style={{ backgroundImage: "url(" + bnr2.default + ")" }}
              >
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="contact-nav-media-section">
                      <div className="contact-nav-media">
                        <img
                          src={require("./../../images/self-pic.png").default}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8">
                    <form
                      className="cons-contact-form"
                      method="post"
                      action="#"
                    >
                      <div className="m-b30">
                        {/* TITLE START */}
                        <h2 className="m-b30">Get In Touch</h2>
                        {/* TITLE END */}
                        <div className="row">
                          <div className="col-md-6 col-sm-6">
                            <div className="form-group">
                              <input
                                name="username"
                                type="text"
                                required
                                className="form-control"
                                placeholder="Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-6">
                            <div className="form-group">
                              <input
                                name="email"
                                type="text"
                                className="form-control"
                                required
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-6">
                            <div className="form-group">
                              <input
                                name="phone"
                                type="text"
                                className="form-control"
                                required
                                placeholder="Phone"
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-6">
                            <div className="form-group">
                              <input
                                name="subject"
                                type="text"
                                className="form-control"
                                required
                                placeholder="Subject"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                name="message"
                                className="form-control"
                                rows={4}
                                placeholder="Message"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <button
                              type="button"
                              className="site-button site-btn-effect"
                            >
                              Submit Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="contact-nav-inner text-black">
                      {/* TITLE START */}
                      <h2 className="m-b30">Contact Info</h2>
                      {/* TITLE END */}
                      <div className="row">
                        <div className="col-lg-4 col-md-12">
                          <div className="wt-icon-box-wraper left icon-shake-outer">
                            <div className="icon-content">
                              <h4 className="m-t0">Phone number</h4>
                              <p>(456) 789 10 12</p>
                              <p>(456) 789 10 15</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                          <div className="wt-icon-box-wraper left icon-shake-outer">
                            <div className="icon-content">
                              <h4 className="m-t0">Email address</h4>
                              <p>demo@gmail.com</p>
                              <p>indusinfo@gmail.com</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                          <div className="wt-icon-box-wraper left icon-shake-outer">
                            <div className="icon-content">
                              <h4 className="m-t0">Address info</h4>
                              <p>1363-1385 Sunset Blvd Los Angeles</p>
                            </div>
                          </div>
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
}

export default Header2;
