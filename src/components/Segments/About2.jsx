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
                    <h3>
                    We have 10+ years of experience helping our clients meet their engineering, design, project and portfolio management, capital planning, and environmental health & safety needs.
                    </h3>
                    {/* TITLE END*/}
                    
                    <p>
                    To learn more...</p>
                    <div className="welcom-to-section-bottom d-flex justify-content-between">
                      <div className="welcom-btn-position">
                        <NavLink
                          to={"/about-1"}
                          className="site-button-secondry site-btn-effect"
                        >
                          Contact Us
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-12 m-b30"
                  style={{ margin: "auto", left: "5%" }}
                >
                  <div className="img-colarge2">
                    <div className=" slide-right">
                      <img
                        src={require("./../../images/organics.png")}
                        alt=""
                      />
                      <div className="since-year2 ">
                        <span>
                          Since <strong>2008</strong>
                        </span>
                        {/* <strong>2008</strong> */}
                      </div>
                    </div>
                    <div className="vertical-image">
                      {/* <img
                        src={require("./../../images/organics.png")}
                        alt=""
                      /> */}
                    </div>
                    {/* <div className="since-year-outer2">
                      <div className="since-year2 ">
                        <span>Since</span>
                        <strong>2008</strong>
                      </div>
                    </div> */}
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
