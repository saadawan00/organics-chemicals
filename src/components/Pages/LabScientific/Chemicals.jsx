import React from "react";
import Header2 from "../../Parts/Header2";
import Footer from "../../Parts/Footer";
import Banner from "./../../Segments/Banner";
import Sidebar from "./../../Segments/Sidebar";
import { sidebarItems } from '.';

var bnrimg = require("./../../../images/banner/2.jpg");

export class Chemicals extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="Chemicals"
            pagename="Chemicals"
            bgimage={bnrimg.default}
          />
          {/* INNER PAGE BANNER END */}
          <>
            <div className="section-full small-device p-t80 p-b50 bg-white">
              <div className="section-content">
                <div className="container">
                  <div className="row">
                    <Sidebar navBarItems={sidebarItems} />
                    <div className="col-lg-8 col-md-12">
                      <div className="section-content">
                        {/* TITLE START */}
                        <div className="text-left">
                          <h2 className="wt-title">Agricultural Automation</h2>
                        </div>
                        {/* TITLE END */}
                        <div className="wt-box services-etc m-b30">
                          <p>
                            Engineering is concerned with the development,
                            improvement, and implementation of inte grated systems
                            of people, money, knowledge, information, equipment,
                            energy, materials, analysis and synthesis, as well as
                            the mathematical, physical and social sciences together
                            with the principles and methods of engineering design to
                            specify, predict, and evaluate the results to be
                            obtained from such systems or processes.
                          </p>
                          <div className="wt-media m-b30">
                            <img
                              src={
                                require("./../../../images/services/large/pic9.jpg")
                                  .default
                              }
                              alt=""
                            />
                          </div>
                          <div className="wt-info">
                            <p>
                              Concerned with the development, improvement, and
                              implementation of integrated system of people, money,
                              knowledge, information, equipment, energy, materials,
                              analysis and syn thesis, as well as the mathematical,
                              physical and social sciences together with the
                              principle and methods of engineering design to
                              specify, predict, and evaluate the results to be
                              obtained from such systems or processes.
                            </p>
                            <blockquote className="m-a0 bg-gray p-a30">
                              <i className="fa fa-quote-left font-20" />
                              <p>
                                Raising a heavy fur muff that covered the whole of
                                her lower arm towards the viewer gregor then turned
                                to look out
                              </p>
                              <div className="p-t15 text-uppercase">
                                <strong>William Jomurray</strong>
                                <span>Envato Author</span>
                              </div>
                            </blockquote>
                          </div>
                        </div>
                        <div className="service-provide">
                          <h2>System Benefits</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam. Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit
                            amet, consectetur adipisicing elit.{" "}
                          </p>
                          <div className="row">
                            <div className="col-md-6">
                              <ul className="list-angle-right">
                                <li>
                                  Pitifully thin compared with the size of the rest
                                  of him.
                                </li>
                                <li>
                                  Raising a heavy muff that covered the whole. muff
                                  that covered the whole of her lower arm
                                  consectetur.
                                </li>
                                <li>
                                  Muff that covered the whole of her lower arm
                                  consectetur adipisicing elit
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-6">
                              <div className="wt-media m-b30">
                                <img
                                  src={
                                    require("./../../../images/gallery/pic3.jpg")
                                      .default
                                  }
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h2>Research</h2>
                          <div className="wt-accordion acc-bg-gray" id="accordion5">
                            <div className="panel wt-panel">
                              <div className="acod-head acc-actives">
                                <h4 className="acod-title">
                                  <a
                                    data-toggle="collapse"
                                    href="#collapseOne5"
                                    data-parent="#accordion5"
                                  >
                                    What problems we face?
                                    <span className="indicator">
                                      <i className="fa fa-plus" />
                                    </span>
                                  </a>
                                </h4>
                              </div>
                              <div
                                id="collapseOne5"
                                className="acod-body collapse show bg-gray"
                              >
                                <div className="acod-content p-a15">
                                  There are many variations of passages of Lorem
                                  Ipsum available, but the majority have suffered
                                  alteration in some form, injected humour, or
                                  randomised words which don't look even slightly
                                  believablThere are many variations of passages.
                                </div>
                              </div>
                            </div>
                            <div className="panel wt-panel">
                              <div className="acod-head">
                                <h4 className="acod-title">
                                  <a
                                    data-toggle="collapse"
                                    href="#collapseTwo5"
                                    className="collapsed"
                                    data-parent="#accordion5"
                                  >
                                    Was our solution best?
                                    <span className="indicator">
                                      <i className="fa fa-plus" />
                                    </span>
                                  </a>
                                </h4>
                              </div>
                              <div
                                id="collapseTwo5"
                                className="acod-body collapse bg-gray"
                              >
                                <div className="acod-content p-a15">
                                  Graphic design lorem Ipsum is simply dummy text of
                                  the printing and type setting industry. Lorem
                                  Ipsum has been the industry's standard dummy text
                                  ever since the when an unknown printer took.
                                </div>
                              </div>
                            </div>
                            <div className="panel wt-panel">
                              <div className="acod-head">
                                <h4 className="acod-title">
                                  <a
                                    data-toggle="collapse"
                                    href="#collapseThree5"
                                    className="collapsed"
                                    data-parent="#accordion5"
                                  >
                                    Was our client satisfy?
                                    <span className="indicator">
                                      <i className="fa fa-plus" />
                                    </span>
                                  </a>
                                </h4>
                              </div>
                              <div
                                id="collapseThree5"
                                className="acod-body collapse bg-gray"
                              >
                                <div className="acod-content p-a15">
                                  Developement lorem Ipsum is simply dummy text of
                                  the printing and type has been the industry's
                                  standard dummy text ever since the when an unknown
                                  printer took a galley of type and scrambled it to
                                  make.
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
        </div>
        <Footer />
      </>
    );
  }
}

export default Chemicals;
