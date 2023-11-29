import React from "react";
import ServicesSidebar from "./../Segments/ServicesSidebar";

class ServiceDetails4 extends React.Component {
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
                      <h2 className="wt-title">Cement Industry</h2>
                    </div>
                    {/* TITLE END */}
                    <div className="wt-box services-etc m-b30">
                      <p>
                        The cement industry utilizes various chemicals
                        throughout the cement manufacturing process to enhance
                        the properties of cement, improve its performance, and
                        ensure its quality. Here are chemicals we provide for
                        the cement industry:
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
                      <h4>Cement Grinding Aids:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Triethanolamine (TEA): </h5>
                              <span>
                                Used as a grinding aid to improve the efficiency
                                of cement grinding and reduce energy
                                consumption.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Glycol-based Grinding Aids: </h5>
                              <span>
                                Such as ethylene glycol (EG) or propylene glycol
                                (PG), used to reduce the surface tension and
                                facilitate particle dispersion during grinding.
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
                      <h4>Concrete Admixtures:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Superplasticizers:</h5>
                              <span>
                                Chemicals like polycarboxylate ether (PCE) or
                                sulfonated naphthalene formaldehyde (SNF) used
                                to improve the workability and flowability of
                                concrete, reduce water content, and enhance the
                                strength and durability of hardened concrete.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5> Retarding Agents: </h5>
                              <span>
                                Such as lignosulfonates or tartaric acid, used
                                to slow down the setting time of concrete,
                                allowing for longer workability.
                              </span>
                            </li>

                            <li style={{ marginBottom: "12px" }}>
                              <h5>Accelerating Agents: </h5>
                              <span>
                                Chemicals like calcium chloride or
                                triethanolamine, used to speed up the setting
                                time of concrete in cold weather conditions.
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
                      <h4>Cement Additives:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Fly Ash: </h5>
                              <span>
                                A byproduct of coal combustion, used as a
                                supplementary cementitious material to enhance
                                concrete properties and reduce environmental
                                impact.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Silica Fume: </h5>
                              <span>
                                A byproduct of silicon and ferrosilicon alloy
                                production, used as a pozzolanic material to
                                improve the strength and durability of concrete.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Blast Furnace Slag: </h5>
                              <span>
                                A byproduct of iron and steel production, used
                                as a supplementary cementitious material to
                                enhance concrete properties.
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
                      <h4>Cement Curing Compounds:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Curing Agents: </h5>
                              <span>
                                Compounds like calcium nitrate or water-based
                                curing compounds used to prevent moisture loss
                                during the curing process, promoting proper
                                hydration and strength development of cement.
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
                      <h4>Environmental Control:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Dust Suppressants: </h5>
                              <span>
                                Chemicals like calcium chloride or
                                lignosulfonates used to minimize dust emissions
                                during cement production and transportation.
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

                    {/* <div>
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

export default ServiceDetails4;
