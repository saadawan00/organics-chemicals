import React from "react";
import { NavLink } from "react-router-dom";

class About2 extends React.Component {
  render() {
    return (
      <>
        <div className="section-full welcome-section-outer">
          <div className="welcome-section-top bg-white p-t80 p-b50">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 col-md-12 m-b30">
                  <div className="welcom-to-section">
                    {/* TITLE START*/}
                    <div className="left wt-small-separator-outer">
                      <div className="wt-small-separator site-text-primary">
                        <div className="sep-leaf-left" />
                        <div>Welcome to Organics</div>
                        <div className="sep-leaf-right" />
                      </div>
                    </div>
                    <h2>
                      Our unwavering mission is to empower diverse industries
                      with top quality
                    </h2>
                    {/* TITLE END*/}
                    <ul className="site-list-style-one">
                      <li>Industrial Chemicals</li>
                      <li>Lab Scientific Products</li>
                      <li>Industrial Instruments</li>
                      <li>Engineering Services</li>
                    </ul>
                    <p>
                      Our journey began in 2008 when we set out to make a
                      significant impact in the realm of industrial solutions.
                      Our roots run deep in the heart of the industrial
                      landscape. Over the years, we've steadfastly grown and
                      expanded our reach to serve a global audience.
                    </p>
                    <div className="welcom-to-section-bottom d-flex justify-content-between">
                      <div className="welcom-btn-position">
                        <NavLink
                          to={"/about-1"}
                          className="site-button-secondry site-btn-effect"
                        >
                          More About
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 m-b30">
                  <div className="img-colarge2">
                    <div className="colarge-2 slide-right">
                      <img
                        src={require("./../../images/colarge/s2.jpg").default}
                        alt=""
                      />
                    </div>
                    <div className="colarge-2-1">
                      <img
                        src={require("./../../images/colarge/s1.jpg").default}
                        alt=""
                      />
                    </div>
                    <div className="since-year-outer2">
                      <div className="since-year2">
                        <span>Since</span>
                        <strong>2008</strong>
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

export default About2;
