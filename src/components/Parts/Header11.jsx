import React from "react";
import Navigation from "../Parts/Navigation";
import { NavLink } from "react-router-dom";

class Header11 extends React.Component {
  constructor(props) {
    super(props);
    var homepage11 = /\/home-construction11/i;
    var homepage12 = /\/home-conditioning-repair12/i;

    if (homepage11.test(window.location.href)) {
      this.state = { logo: require("./../../images/logo-dark.png") };
    } else if (homepage12.test(window.location.href)) {
      this.state = { logo: require("./../../images/logo-9.png") };
    }
  }

  state = { isSearchActive: false, isCartActive: false };

  handleSearchToggle = () => {
    this.setState({ isSearchActive: !this.state.isSearchActive });
  };

  handleCartToggle = () => {
    this.setState({ isCartActive: !this.state.isCartActive });
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
    const isCartActive = this.state.isCartActive;

    return (
      <>
        <header className="site-header header-style-11  mobile-sider-drawer-menu">
          <div className="header-style-11-content">
            <div className="header-middle-wraper">
              <div className="container">
                <div className="header-middle d-flex justify-content-between align-items-center">
                  <div className="logo-header">
                    <div className="logo-header-inner logo-header-one">
                      <NavLink to={"./"}>
                        <img src={this.state.logo.default} alt="Industro" />
                      </NavLink>{" "}
                    </div>
                  </div>
                  <div className="header-info-wraper">
                    <div className="header-info">
                      <ul>
                        <li>
                          <div className="wt-icon-box-wraper  left">
                            <div className="wt-icon-box-xs site-bg-primary radius">
                              <span className="icon-cell site-text-white">
                                <i className="fa fa-map-marker" />
                              </span>{" "}
                            </div>
                            <div className="icon-content">
                              <p>Maxvilla , Tx USA</p>
                              <h4 className="wt-tilte">121 King Street</h4>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="wt-icon-box-wraper  left">
                            <div className="wt-icon-box-xs site-bg-primary radius">
                              <span className="icon-cell site-text-white">
                                <i className="fa fa-envelope" />
                              </span>{" "}
                            </div>
                            <div className="icon-content">
                              <p>Send Us Email</p>
                              <h4 className="wt-tilte">support@max.com</h4>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="wt-icon-box-wraper left">
                            <div className="wt-icon-box-xs site-bg-primary radius">
                              <span className="icon-cell site-text-white">
                                <i className="fa fa-phone" />
                              </span>{" "}
                            </div>
                            <div className="icon-content">
                              <p>Get Quick Support</p>
                              <h4 className="wt-tilte">246-899-4600</h4>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-bottom">
              <div className="sticky-header main-bar-wraper  navbar-expand-lg">
                <div className="main-bar header-bottom">
                  <div className="container-block clearfix">
                    <div className="navigation-bar">
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
                      {/* MAIN Vav */}
                      <Navigation />
                      {/* Header2 Right Section*/}
                      <div className="extra-nav header-1-nav">
                        <div className="extra-cell one">
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
                            </NavLink>
                          </div>
                        </div>
                        <div className="extra-cell two">
                          <NavLink
                            to={"#"}
                            className="wt-cart cart-btn"
                            onClick={this.handleCartToggle}
                            title="Your Cart"
                          >
                            <span className="link-inner">
                              <span className="woo-cart-total"> </span>
                              <span className="woo-cart-count">
                                <i className="fa fa-shopping-bag" />
                                <span className="shopping-bag wcmenucart-count ">
                                  2
                                </span>{" "}
                              </span>{" "}
                            </span>
                          </NavLink>

                          <div
                            className="cart-dropdown-item-wraper clearfix"
                            style={{ display: isCartActive ? "block" : "none" }}
                          >
                            <div className="nav-cart-content">
                              <div className="nav-cart-items p-a15">
                                <div className="nav-cart-item clearfix">
                                  <div className="nav-cart-item-image">
                                    <NavLink to={"#"}>
                                      <img
                                        src={
                                          require("./../../images/home-11/cart/pic-1.jpg")
                                            .default
                                        }
                                        alt="p-1"
                                      />
                                    </NavLink>{" "}
                                  </div>
                                  <div className="nav-cart-item-desc">
                                    <span className="nav-cart-item-price">
                                      <strong>2</strong> x $19.99
                                    </span>
                                    <NavLink to={"#"}>Heavy helmet</NavLink>
                                    <NavLink
                                      to={"#"}
                                      className="nav-cart-item-quantity radius-sm"
                                    >
                                      x
                                    </NavLink>{" "}
                                  </div>
                                </div>
                                <div className="nav-cart-item clearfix">
                                  <div className="nav-cart-item-image">
                                    <NavLink to={"#"}>
                                      <img
                                        src={
                                          require("./../../images/home-11/cart/pic-1.jpg")
                                            .default
                                        }
                                        alt="p-2"
                                      />
                                    </NavLink>{" "}
                                  </div>
                                  <div className="nav-cart-item-desc">
                                    <span className="nav-cart-item-price">
                                      <strong>1</strong> x $24.99
                                    </span>
                                    <NavLink to={"#"}>Power drill</NavLink>
                                    <NavLink
                                      to={"#"}
                                      className="nav-cart-item-quantity radius-sm"
                                    >
                                      x
                                    </NavLink>{" "}
                                  </div>
                                </div>
                              </div>
                              <div className="nav-cart-title p-tb10 p-lr15 d-flex">
                                <h4 className="m-a0">Subtotal:</h4>
                                <h5 className="m-a0">$67.97</h5>
                              </div>
                              <div className="nav-cart-action p-a15 d-flex justify-content-start">
                                <button className="site-button" type="button">
                                  View Cart
                                </button>
                                <button
                                  className="site-button-secondry"
                                  type="button"
                                >
                                  Checkout{" "}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* SITE Search */}
                <div id="search-two" className={isSearchActive ? "open" : ""}>
                  <span className="close" onClick={this.handleSearchToggle} />
                  <form
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
                          <i className="fa fa-paper-plane" />
                        </button>
                      </span>{" "}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header11;
