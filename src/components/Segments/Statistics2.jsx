import React from "react";
import { NavLink } from "react-router-dom";
import CountUp from "react-countup";
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/css/modal-video.min.css";

var bnr1 = require("./../../images/background/bg-128-o.jpg");

class Statistics2 extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <>
        <div
          className="section-full video2-counter-section p-t80 p-b40  overlay-wraper bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${bnr1})` }}
        >
          <div className="overlay-main bg-black opacity-01" />
          <div className="container">
            {/* TITLE START*/}
            <div className="section-head center wt-small-separator-outer text-center text-white">
              <div className="wt-small-separator site-text-primary">
                <div className="sep-leaf-left" />
                <div style={{ fontSize: "58px" }}>Why Us?</div>
                <div className="sep-leaf-right" />
              </div>
              <h2 style={{ marginTop: "15px", color: "#1c63b8" }}>
                Unlocking Industrial Solution With Organics
              </h2>
            </div>
            {/* TITLE END*/}
            <div className="counter2-section-outer-top">
              <div className="row justify-content-center">
                <div
                  className="col-lg-4 bg-white text-center m-4 col-md-10 m-b30 "
                  style={{
                    borderRadius: "35px",
                    border: "3px solid",
                    borderColor: "#004597",
                     transition: "border-color 0.3s ease",
                     WebkitTransition: "border-color 0.3s ease",
                  }}
                >
                  <h3 className="wt-tilte mt-3 site-text-secondry">
                    Flexible Payment Terms
                  </h3>
                </div>
                <div
                  className="col-lg-4 bg-white text-center m-4 col-md-10 m-b30 "
                  style={{
                    borderRadius: "35px",
                    border: "3px solid",
                    borderColor: "#004597",
                  }}
                >
                  <h3 className="wt-tilte mt-3 site-text-secondry">
                    Timely Delivery
                  </h3>
                </div>
                <div
                  className="col-lg-4 bg-white text-center m-4 col-md-10 m-b30 "
                  style={{
                    borderRadius: "35px",
                    border: "3px solid",
                    borderColor: "#004597",
                  }}
                >
                  <h3 className="wt-tilte mt-3 site-text-secondry">
                    Competitive Pricing
                  </h3>
                </div>
                <div
                  className="col-lg-4 bg-white text-center m-4 col-md-10 m-b30 "
                  style={{
                    borderRadius: "35px",
                    border: "3px solid",
                    borderColor: "#004597",
                  }}
                >
                  <h3 className="wt-tilte mt-3 site-text-secondry">
                    Customer Centric
                  </h3>
                </div>
                <div
                  className="col-lg-4 bg-white text-center m-4 col-md-10 m-b30 "
                  style={{
                    borderRadius: "35px",
                    border: "3px solid",
                    borderColor: "#004597",
                  }}
                >
                  <h3 className="wt-tilte mt-3 site-text-secondry">
                    Global Reach, Local Care
                  </h3>
                </div>
                <div
                  className="col-lg-4 bg-white text-center m-4 col-md-10 m-b30 "
                  style={{
                    borderRadius: "35px",
                    border: "3px solid",
                    borderColor: "#004597",
                  }}
                >
                  <h3 className="wt-tilte mt-3 site-text-secondry">
                    Uncompromising Quality
                  </h3>
                </div>
                <div
                  className="col-lg-4 bg-white text-center m-4 col-md-10 m-b30 "
                  style={{
                    borderRadius: "35px",
                    border: "3px solid",
                    borderColor: "#004597",
                  }}
                >
                  <h3 className="wt-tilte mt-3 site-text-secondry">
                    Relaibility Redfined
                  </h3>
                </div>
                <div
                  className="col-lg-4 bg-white text-center m-4 col-md-10 m-b30 "
                  style={{
                    borderRadius: "35px",
                    border: "3px solid",
                    borderColor: "#004597",
                  }}
                >
                  <h3 className="wt-tilte mt-3 site-text-secondry">
                    Innovative Solutions
                  </h3>
                </div>
                {/* <div className="col-lg-7 col-md-12 m-b30">
                  <div className="video-section2-outer mfp-gallery">
                    <div className="video-section">
                      <NavLink
                        to={"#"}
                        className="play-now"
                        onClick={this.openModal}
                      >
                        <i className="icon fa fa-play" />
                        <span className="ripple"></span>
                      </NavLink>
                    </div>
                  </div>
                  <div className="video-section-blockquote">
                    <i className="fa fa-quote-left" />
                    <span className="q-author-detail site-text-white title-style-2">
                      Many of Our SELF registered employees are requested an
                      main preferred temporary staff when all service
                    </span>
                    <div className="q-author-name site-text-primary title-style-2">
                      Farnandoz Biki, CEO
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="counter2-section-outer-bottom">
              <div className="counter-outer">
                <div className="row justify-content-center">
                  <div className="col-lg-3 col-md-6 col-sm-6 m-b30 ">
                    <div className="wt-icon-box-wraper center">
                      <h2 className="counter site-text-primary">
                        <CountUp end={4000} duration={5} />
                      </h2>
                      <span className="site-text-black title-style-2">
                        Projects Completed
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                    <div className="wt-icon-box-wraper center">
                      <h2 className="counter site-text-primary">
                        <CountUp end={15000} duration={5} />
                      </h2>
                      <span className="site-text-black title-style-2">
                        B2B Products
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                    <div className="wt-icon-box-wraper center">
                      <h2 className="counter site-text-primary">
                        <CountUp end={400} duration={5} />
                      </h2>
                      <span className="site-text-black title-style-2">
                        Happy Clients
                      </span>
                    </div>
                  </div>
                  {/* <div className="col-lg-3 col-md-6 col-sm-6 m-b30">
                    <div className="wt-icon-box-wraper center">
                      <h2 className="counter site-text-primary">
                        <CountUp end={26} duration={5} />
                      </h2>
                      <span className="site-text-white title-style-2">
                        Winning Awards
                      </span>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="fgExvIUYg5w"
          onClose={() => this.setState({ isOpen: false })}
        />
      </>
    );
  }
}

export default Statistics2;
