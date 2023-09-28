import React from "react";
import { NavLink } from "react-router-dom";

class Navigation extends React.Component {
  componentDidMount() {
    function loadScript(src) {
      return new Promise(function (resolve, reject) {
        var script = document.createElement("script");
        script.src = src;
        script.addEventListener("load", function () {
          resolve();
        });
        script.addEventListener("error", function (e) {
          reject(e);
        });
        document.body.appendChild(script);
        document.body.removeChild(script);
      });
    }

    loadScript("./assets/js/custom.js");
  }

  render() {
    return (
      <>
        <div className="nav-animation header-nav navbar-collapse collapse d-flex justify-content-center">
          <ul className=" nav navbar-nav">
            <li>
              <NavLink to={"./"}>Home</NavLink>
            </li>

            <li>
              <NavLink to={""}>Industrial Chemicals</NavLink>
              <ul className="sub-menu">
                <li>
                  <NavLink to={"/services-1"}>Chemicals 2</NavLink>
                </li>
                <li>
                  <NavLink to={"/services-2"}>Services Two</NavLink>
                </li>
                <li>
                  <NavLink to={"/services-agricultural"}>
                    Agricultural Automation
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/services-automotive"}>
                    Automotive Manufacturing
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/services-chemical"}>Chemical Research</NavLink>
                </li>
                <li>
                  <NavLink to={"/services-civil"}>Civil Engineering</NavLink>
                </li>
                <li>
                  <NavLink to={"/services-mechanical"}>
                    Mechanical Engineering
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/services-oilgas"}>
                    Oil &amp; Gas Engineering
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/services-powerenergy"}>
                    Power &amp; Energy Sector
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to={""}>Lab Scientific</NavLink>
              <ul className="sub-menu">
                <li>
                  <NavLink to={"/project-grid"}>Project Grid</NavLink>
                </li>
                <li>
                  <NavLink to={"/project-masonry"}>Project Masonry</NavLink>
                </li>
                <li>
                  <NavLink to={"/project-carousel"}>Project Carousel</NavLink>
                </li>
                <li>
                  <NavLink to={"/project-detail"}>Project Detail</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to={""}>Controls & Automation</NavLink>
              <ul className="sub-menu">
                <li>
                  <NavLink to={"/shop"}>Shop</NavLink>
                </li>
                <li>
                  <NavLink to={"/shop-detail"}>Shop Detail</NavLink>
                </li>
                <li>
                  <NavLink to={"/shopping-cart"}>Shopping Cart</NavLink>
                </li>
                <li>
                  <NavLink to={"/checkout"}>Checkut</NavLink>
                </li>
                <li>
                  <NavLink to={"/wishlist"}>Wishlist</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to={""}>Clients</NavLink>
              <ul className="sub-menu">
                <li>
                  <NavLink to={"/blog-grid"}>Blog Grid</NavLink>
                </li>
                <li>
                  <NavLink to={"/blog-list"}>Blog List</NavLink>
                </li>
                <li>
                  <NavLink to={"/blog-post"}>Blog Post</NavLink>
                </li>
              </ul>
            </li>
            {/* <li>
              <NavLink to={""}>Pages</NavLink>
              <ul className="sub-menu">
                <li>
                  <NavLink to={"/pricing-plan"}>Pricing Plan</NavLink>
                </li>
                <li>
                  <NavLink to={"/icon-font"}>Icon Font</NavLink>
                </li>
                <li>
                  <NavLink to={"/team"}>Team</NavLink>
                </li>
                <li>
                  <NavLink to={"/team-single"}>Team Single</NavLink>
                </li>
                <li>
                  <NavLink to={"/faq"}>FAQ</NavLink>
                </li>
                <li>
                  <NavLink to={"/error403"}>Error 403</NavLink>
                </li>
                <li>
                  <NavLink to={"/error404"}>Error 404</NavLink>
                </li>
                <li>
                  <NavLink to={"/error405"}>Error 405</NavLink>
                </li>
              </ul>
            </li> */}
            <li>
              <NavLink to={""}>About</NavLink>
              <ul className="sub-menu">
                <li>
                  <NavLink to={"/about-1"}>About 1</NavLink>
                </li>
                <li>
                  <NavLink to={"/about-2"}>About 2</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to={"/contactus"}>Contact us</NavLink>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Navigation;
