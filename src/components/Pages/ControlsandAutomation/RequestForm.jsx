import React from "react";
// import GoogleMaps from "simple-react-google-maps"
import Header2 from "./../../Parts/Header2";
import Footer from "./../../Parts/Footer";
import Banner from "./../../Segments/Banner";
import { useLocation } from 'react-router-dom'

var bnrimg = require("./../../../images/banner/5.jpg");
var bnr1 = require("./../../../images/background/bg-7.jpg");
var bgimg = require("./../../../images/background/bg-map2.png");


const RequestForm = (props) => {
    
    const location = useLocation()
    console.log(location.state);
  

    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="Contact Us"
            pagename="Contact Us"
            bgimage={bnrimg.default}
          />
          {/* INNER PAGE BANNER END */}
          {/* SECTION CONTENTG START */}
          {/* CONTACT FORM */}
          <div
            className="section-full  p-t80 p-b50 bg-cover"
            style={{ backgroundImage: "url(" + bnr1.default + ")" }}
          >
            <div className="section-content">
              <div className="container">
                <div className="contact-one">
                  {/* CONTACT FORM*/}
                  <div className="row  d-flex justify-content-center flex-wrap">
                    <div className="col-lg-6 col-md-6 m-b30">
                      <form
                        className="cons-contact-form"
                        method="post"
                        action="#"
                      >
                        {/* TITLE START */}
                        <div className="section-head left wt-small-separator-outer">
                          <div className="wt-small-separator site-text-primary">
                            <div className="sep-leaf-left" />
                            <div>Contact Form</div>
                            <div className="sep-leaf-right" />
                          </div>
                          <h2>Get In Touch</h2>
                        </div>
                        {/* TITLE END */}
                        <div className="row">
                          <div className="col-lg-12 col-md-12">
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
                          <div className="col-lg-12 col-md-12">
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
                          <div className="col-lg-12 col-md-12">
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
                          <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                              <input
                                name="subject"
                                type="text"
                                className="form-control"
                                required
                                value={location.state.item}
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
                      </form>
                    </div>
                    <div className="col-lg-6 col-md-6 m-b30">
                      <div className="contact-info">
                        <div className="contact-info-inner">
                          {/* TITLE START*/}
                          <div className="section-head left wt-small-separator-outer">
                            <div className="wt-small-separator site-text-primary">
                              <div className="sep-leaf-left" />
                              <div>Contact info</div>
                              <div className="sep-leaf-right" />
                            </div>
                            <h2>Our Full Info</h2>
                          </div>
                          {/* TITLE END*/}
                          <div
                            className="contact-info-section"
                            style={{
                              backgroundImage: "url(" + bgimg.default + ")",
                            }}
                          >
                            <div className="wt-icon-box-wraper left m-b30">
                              <div className="icon-content">
                                <h3 className="m-t0 site-text-primary">
                                  Phone number
                                </h3>
                                <p>(+291) 0987 654 321</p>
                              </div>
                            </div>
                            <div className="wt-icon-box-wraper left m-b30">
                              <div className="icon-content">
                                <h3 className="m-t0 site-text-primary">
                                  Email address
                                </h3>
                                <p>thewebmax@gmail.com</p>
                              </div>
                            </div>
                            <div className="wt-icon-box-wraper left m-b30">
                              <div className="icon-content">
                                <h3 className="m-t0 site-text-primary">
                                  Address info
                                </h3>
                                <p>
                                  1363-1385 Sunset Blvd Los Angeles, CA 90026,
                                  USA
                                </p>
                              </div>
                            </div>
                            <div className="wt-icon-box-wraper left">
                              <div className="icon-content">
                                <h3 className="m-t0 site-text-primary">
                                  Opening Hours
                                </h3>
                                <ul className="list-unstyled m-b0">
                                  <li>Mon-Fri: 9 am – 6 pm</li>
                                  <li>Saturday: 9 am – 4 pm</li>
                                  <li>Sunday: Closed</li>
                                </ul>
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
          {/* GOOGLE MAP */}
          <div className="section-full bg-white p-tb80">
            <div className="section-content">
              <div className="container">
                <div className="gmap-outline">
                  {/* <GoogleMaps
                                        apiKey={"AIzaSyAfY1DRbspf6E3jYUso-PeI_tdfRXA59i0"}
                                        style={{ height: "400px", width: "100%" }}
                                        zoom={12}
                                        center={{ lat: 34.073280, lng: -118.251410 }}
                                        markers={{ lat: 34.073280, lng: -118.251410 }} //optional
                                    /> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }


export default RequestForm;
