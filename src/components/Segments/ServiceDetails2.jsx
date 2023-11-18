import React from "react";
import ServicesSidebar from "./../Segments/ServicesSidebar";

class ServiceDetails2 extends React.Component {
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
                      <h2 className="wt-title">Pulp and Paper Industry</h2>
                    </div>
                    {/* TITLE END */}
                    <div className="wt-box services-etc m-b30">
                      <p>
                      The pulp and paper industry utilizes various chemicals in the manufacturing process to extract fibers
from wood, bleach the pulp, and enhance the properties of paper products. Here are chemicals
commonly for thpaper industry:
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
                      <h4>Pulping Chemicals</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5> Sodium Hydroxide (Caustic Soda):</h5>
                              <span>
                              Used in the alkaline pulping process (kraft process) to break down
lignin and separate fibers from wood.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Sodium Sulfate (Na2SO4):</h5>
                              <span>
                              Used as a cooking aid and to adjust the ionic strength during the pulping
process.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5> Sodium Bisulfite (NaHSO3):</h5>
                              <span>Used in the sulfite pulping process to remove lignin from wood fibers.</span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Sodium Chlorate (NaClO3): </h5>
                              <span>
                              Used as an oxidizing agent in the production of chlorine dioxide for pulp
bleaching.
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
                      <h4>Bleaching Agents:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5> Chlorine Dioxide (ClO2): </h5>
                              <span>
                              A powerful bleaching agent used to brighten and whiten pulp fibers.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>
                              Sodium Hypochlorite (NaClO):
                              </h5>
                              <span>
                              Used as a bleaching agent, primarily in the elemental chlorine-free
(ECF) bleaching process.
                              </span>
                            </li>

                            <li style={{ marginBottom: "12px" }}>
                              <h5>Hydrogen Peroxide (H2O2): </h5>
                              <span>
                              Used as an environmentally friendly alternative for bleaching pulp
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
                      <h4>Alkalis and Acids:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5> Calcium Hydroxide (Lime): </h5>
                              <span>
                              Used to adjust pH and neutralize acidity during the pulping and bleaching
processes.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Sulfuric Acid (H2SO4): </h5>
                              <span>
                              Used for pH adjustment, acid hydrolysis, and to neutralize alkaline solutions.
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
                      <h4>Retention Aids:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Cationic Polymers:</h5>
                              <span>
                              Such as polyacrylamides, polyamines, or polyethyleneimines, used to improve the
retention of fines, fillers, and fibers in the papermaking process.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Microparticles: </h5>
                              <span>
                              Small-sized particles, such as colloidal silica or bentonite, used as retention aids.
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
                      <h4>Sizing Agents:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Rosin:</h5>
                              <span>
                              Derived from tree resin, used to improve the water-resistance and printability of paper.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Alkyl Ketene Dimers (AKD): </h5>
                              <span>
                              Synthetic sizing agents used for water repellency in paper products.
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
                      <h4>Coating Chemicals:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Clay:</h5>
                              <span>
                              Used as a coating pigment to enhance the smoothness and printing properties of paper.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Titanium Dioxide:</h5>
                              <span>
                              A white pigment used in paper coatings for opacity and brightness.
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
                      <h4>Fillers and Additives:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Calcium Carbonate:</h5>
                              <span>
                              Used as a filler to improve brightness, opacity, and printability of paper.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Starch:</h5>
                              <span>
                              Used as a surface sizing agent and adhesive in paper production.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Dyes and Pigments:</h5>
                              <span>
                              Used to provide color and decorative effects to paper products.
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

export default ServiceDetails2;
