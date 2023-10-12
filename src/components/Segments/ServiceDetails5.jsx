import React from "react";
import ServicesSidebar from "./../Segments/ServicesSidebar";

class ServiceDetails5 extends React.Component {
  render() {
    return (
      <>
        <div className="section-full small-device  p-t80 p-b50 bg-white">
          <div className="section-content">
            <div className="container">
              <div className="row">
                <ServicesSidebar />
                <div className="col-lg-8 col-md-12">
                  <div className="section-content">
                    {/* TITLE START */}
                    <div className="text-left">
                      <h2 className="wt-title">Sugar Industry</h2>
                    </div>
                    {/* TITLE END */}
                    <div className="wt-box services-etc m-b30">
                      <p>
                        The sugar industry utilizes various chemicals in
                        different stages of sugar production, from extraction to
                        refining and preservation.
                      </p>
                      {/* <div className="wt-media m-b30">
                        <img
                          src={
                            require("./../../images/services/large/pic1.jpg")
                              .default
                          }
                          alt=""
                        />
                      </div> */}
                      {/* <div className="wt-info">
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
                      </div> */}
                    </div>
                    <div className="service-provide">
                      <h4>Extraction of Sugar:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5> Lime (Calcium Oxide):</h5>
                              <span>
                                Used in the clarification process to neutralize
                                acidity, precipitate impurities, and improve the
                                settling of suspended solids.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5> Sulfur Dioxide (SO2):</h5>
                              <span>
                                Used in the extraction of sugar from sugarcane
                                juice as a bleaching and antimicrobial agent.
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <div className="wt-media m-b30">
                            <img
                              src={
                                require("./../../images/gallery/pic3.jpg")
                                  .default
                              }
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service-provide">
                      <h4>Sugar Refining and Purification:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5> Activated Carbon: </h5>
                              <span>
                                Used for decolorization and removal of
                                impurities in the sugar refining process.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5> Phosphoric Acid: </h5>
                              <span>
                                Used for pH adjustment and as an acidulant in
                                sugar refining.
                              </span>
                            </li>

                            <li style={{ marginBottom: "12px" }}>
                              <h5>Hydrosulfite (Sodium Dithionite):</h5>
                              <span>
                                Used as a reducing agent to remove colorants in
                                the sugar refining process.
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <div className="wt-media m-b30">
                            <img
                              src={
                                require("./../../images/gallery/pic3.jpg")
                                  .default
                              }
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service-provide">
                      <h4>Sugar Crystallization:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Seed Crystals: </h5>
                              <span>
                                Fine sugar crystals used as a starting point for
                                the growth of larger sugar crystals during
                                crystallization.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Anti-foaming Agents: </h5>
                              <span>
                                Chemicals added to prevent excessive foam
                                formation during sugar crystallization.
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <div className="wt-media m-b30">
                            <img
                              src={
                                require("./../../images/gallery/pic3.jpg")
                                  .default
                              }
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service-provide">
                      <h4>Antimicrobial and Preservatives:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Sulfur Dioxide (SO2): </h5>
                              <span>
                                Used as a preservative and antimicrobial agent
                                to inhibit microbial growth and extend the shelf
                                life of sugar products.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5> Sodium Benzoate: </h5>
                              <span>
                                A preservative used to inhibit microbial growth
                                in sugar-based products.
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <div className="wt-media m-b30">
                            <img
                              src={
                                require("./../../images/gallery/pic3.jpg")
                                  .default
                              }
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service-provide">
                      <h4>Cleaning and Sanitization:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5> Sodium Hydroxide (Caustic Soda): </h5>
                              <span>
                                Used for cleaning and sanitizing equipment in
                                the sugar industry.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Hydrogen Peroxide: </h5>
                              <span>
                                Used as a sanitizing agent to ensure hygiene in
                                sugar processing facilities.
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <div className="wt-media m-b30">
                            <img
                              src={
                                require("./../../images/gallery/pic3.jpg")
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
    );
  }
}

export default ServiceDetails5;
