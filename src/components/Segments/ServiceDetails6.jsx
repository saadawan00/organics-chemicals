import React from "react";
import ServicesSidebar from "./../Segments/ServicesSidebar";

class ServiceDetails6 extends React.Component {
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
                      <h2 className="wt-title">Power Plants</h2>
                    </div>
                    {/* TITLE END */}
                    <div className="wt-box services-etc m-b30">
                      <p>
                        We have years of experience in supplying quality
                        chemicals to different power plants across Pakistan. We
                        provide chemicals for:
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
                      <h4>Cooling Systems</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5> Corrosion Inhibitors:</h5>
                              <span>
                                Chemicals like orthophosphates, amines, and
                                molybdates are used to prevent corrosion in
                                cooling water systems.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5> Biocides:</h5>
                              <span>
                                Biocides such as chlorine, bromine, or
                                non-oxidizing biocides are used to control
                                microbial growth and prevent biofouling in
                                cooling towers.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5> Boiler Systems:</h5>
                              <span>N/A</span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Oxygen Scavengers:</h5>
                              <span>
                                Chemicals like sodium sulfite, hydrazine, or
                                catalyzed sodium bisulfite are used to remove
                                dissolved oxygen and prevent corrosion in boiler
                                systems.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Scale Inhibitors:</h5>
                              <span>
                                Chemicals like phosphates, polymers, or
                                chelating agents are used to control scale
                                formation on boiler surfaces.
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
                      <h4>Emissions Control:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5> Flue Gas Desulfurization (FGD) Systems: </h5>
                              <span>
                                Chemicals like lime (calcium oxide), limestone
                                (calcium carbonate), or sodium-based sorbents
                                are used to remove sulfur dioxide (SO2) from
                                flue gas emissions.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>
                                {" "}
                                Selective Catalytic Reduction (SCR) Systems:{" "}
                              </h5>
                              <span>
                                Ammonia (NH3) or urea is used as a reducing
                                agent in SCR systems to convert nitrogen oxides
                                (NOx) into nitrogen (N2) and water (H2O).
                              </span>
                            </li>

                            <li style={{ marginBottom: "12px" }}>
                              <h5>Particulate Matter Control: </h5>
                              <span>
                                Electrostatic precipitators (ESPs) or fabric
                                filters use chemicals like powdered activated
                                carbon (PAC) or calcium-based sorbents to
                                capture and remove particulate matter from flue
                                gas emissions.
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
                      <h4>Water Treatment:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5> Demineralization: </h5>
                              <span>
                                Chemicals such as strong acid cation exchange
                                resins and strong base anion exchange resins are
                                used for water demineralization in power plants.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>pH Adjustment:</h5>
                              <span>
                                Chemicals like sulfuric acid (H2SO4) or caustic
                                soda (NaOH) are used to adjust the pH levels of
                                water used in various processes.
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
                      <h4>Lubricants and Sealants:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Lubricating Oils:</h5>
                              <span>
                                Various types of lubricating oils, such as
                                mineral oils or synthetic oils, are used for
                                lubrication of rotating equipment in power
                                plants.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Gasket Sealants: </h5>
                              <span>
                                Chemicals like silicone-based sealants or gasket
                                adhesives are used to ensure effective sealing
                                in power plant equipment.
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

export default ServiceDetails6;
