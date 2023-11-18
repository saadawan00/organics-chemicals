import React from "react";
import ServicesSidebar from "./../Segments/ServicesSidebar";

class ServiceDetails8 extends React.Component {
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
                      <h2 className="wt-title">Water Treatment Chemicals</h2>
                    </div>
                    {/* TITLE END */}
                    <div className="wt-box services-etc m-b30">
                      <p>
                      Water treatment involves the use of various chemicals to purify and treat water, making it safe for
consumption or suitable for specific industrial purposes. Here is a list of chemicals in water
treatment:     </p>
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
                      <h4>Coagulants</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Aluminum Sulfate (Alum): </h5>
                              <span>
                              Used to destabilize suspended particles and create larger flocs for easier
removal during sedimentation and filtration processes.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Polyaluminum Chloride (PAC):</h5>
                              <span>
                              A coagulant used as an alternative to alum, particularly in cases where
high turbidity or color is present.
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
                      <h4>Flocculants:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5> Polyelectrolytes: </h5>
                              <span>
                              High-molecular-weight polymers used to promote the aggregation of particles into
larger flocs for improved sedimentation and filtration.
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
                      <h4>Disinfectants:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5> Chlorine:</h5>
                              <span>
                              A commonly used disinfectant that can be applied in the form of chlorine gas, sodium
hypochlorite, or calcium hypochlorite to kill or inactivate pathogens.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Chlorine Dioxide: </h5>
                              <span>
                              An oxidizing disinfectant effective against a wide range of microorganisms and often
used for taste and odor control.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Chloramines:</h5>
                              <span>
                              Formed by combining chlorine with ammonia, chloramines provide a longer-lasting
disinfection residual compared to free chlorine.
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
                      <h4>pH Adjusters:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Sodium Hydroxide (Caustic Soda):</h5>
                              <span>
                              Used to raise the pH of acidic water.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Sulfuric Acid (H2SO4): </h5>
                              <span>
                              Used to lower the pH of alkaline water.
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
                      <h4>Antiscalants:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Phosphonates:</h5>
                              <span>
                              Chemicals that inhibit the formation of mineral scales, such as calcium carbonate,
calcium sulfate, and silica, in water systems.
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
                      <h4>pH Buffers:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Sodium Bicarbonate: </h5>
                              <span>
                              Used to stabilize and adjust the pH of water.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>pH Indicators:</h5>
                              <span>
                              pH papers or pH meters are commonly used to measure and monitor the pH level of water.
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
                      <h4>Oxidizing Agents:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Potassium Permanganate:</h5>
                              <span>
                              Used for oxidizing iron, manganese, and hydrogen sulfide in water
treatment.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Hydrogen Peroxide:</h5>
                              <span>
                              An oxidizing agent used for disinfection, removal of organic matter, and
controlling taste and odor issues.
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
                      <h4>Activated Carbon:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Granular Activated Carbon (GAC):</h5>
                              <span>
                              Used for the removal of organic compounds, chlorine, and other
contaminants through adsorption.
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
                      <h4>Ion Exchange Resins:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Cation Exchange Resins:</h5>
                              <span>
                              Used to remove positively charged ions such as calcium, magnesium, and
heavy metals from water.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Anion Exchange Resins:</h5>
                              <span>
                              Used to remove negatively charged ions such as nitrates, sulfates, and arsenic
from water.
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
                      <h4>Corrosion Inhibitors:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Polyphosphates: </h5>
                              <span>
                              Used to control corrosion and scale formation in water distribution systems.
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
                      <h4>Algaecides and Biocides:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Copper Sulfate:</h5>
                              <span>
                              Used to control algae growth in water bodies and reservoirs.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Chlorine-based biocides:</h5>
                              <span>
                              Used to control bacterial and microbial growth in water systems
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

export default ServiceDetails8;
