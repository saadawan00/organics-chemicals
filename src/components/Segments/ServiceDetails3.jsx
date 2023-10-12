import React from "react";
import ServicesSidebar from "./../Segments/ServicesSidebar";

class ServiceDetails3 extends React.Component {
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
                      <h2 className="wt-title">Textile Industry</h2>
                    </div>
                    {/* TITLE END */}
                    <div className="wt-box services-etc m-b30">
                      <p>
                        The textile industry utilizes various chemicals
                        throughout the textile production process, including
                        fiber production, dyeing, printing, finishing, and
                        fabric treatment. Here are chemicals we supply in the
                        textile industry:
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
                      <h4>Fiber Production:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5> Sodium Hydroxide (Caustic Soda):</h5>
                              <span>
                                Used in the production of cellulosic fibers like
                                cotton and rayon.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5> Sulfuric Acid: </h5>
                              <span>
                                Used in the production of synthetic fibers like
                                polyester and nylon.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Dimethylformamide (DMF): </h5>
                              <span>
                                A solvent used in the production of acrylic
                                fibers.
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
                      <h4>Dyeing and Printing:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5> Reactive Dyes: </h5>
                              <span>
                                Dyes that chemically react with the textile
                                fibers, creating a strong bond.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Disperse Dyes: </h5>
                              <span>
                                Used for dyeing synthetic fibers such as
                                polyester.
                              </span>
                            </li>

                            <li style={{ marginBottom: "12px" }}>
                              <h5>Acid Dyes: </h5>
                              <span>
                                Used for dyeing protein fibers such as wool and
                                silk.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Direct Dyes: </h5>
                              <span>
                                A class of dyes that can be applied directly to
                                the textile without the need for a mordant.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Pigments: </h5>
                              <span>
                                Solid particles used for printing or coloring
                                fabrics.
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
                      <h4>Finishing and Fabric Treatment:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5> Formaldehyde: </h5>
                              <span>
                                Used as a cross-linking agent for wrinkle
                                resistance and durability in finished textiles.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Flame Retardants: </h5>
                              <span>
                                Chemicals applied to textiles to reduce their
                                flammability.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Softeners: </h5>
                              <span>
                                Chemicals used to enhance the softness and feel
                                of fabrics.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Water Repellents: </h5>
                              <span>
                                Chemicals used to make fabrics resistant to
                                water absorption.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5> Optical Brighteners: </h5>
                              <span>
                                Chemicals that absorb ultraviolet light and emit
                                visible light, making fabrics appear brighter.
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
                      <h4>Bleaching and Whitening:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Hydrogen Peroxide:</h5>
                              <span>
                                Used as a bleaching agent to remove color from
                                textiles.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Sodium Hypochlorite: </h5>
                              <span>
                                Commonly known as bleach, used for whitening and
                                disinfection.
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
                      <h4>Textile Printing:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Sodium Alginate: </h5>
                              <span>
                                A thickener used in textile printing for
                                creating a thick and stable dye paste.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Sodium Metabisulfite: </h5>
                              <span>
                                Used as a reducing agent in discharge printing
                                to remove color.
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
                      <h4>Cleaning and Wet Processing:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Surfactants: </h5>
                              <span>
                                Chemicals that aid in the removal of dirt, oils,
                                and stains during washing and wet processing.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5> Enzymes: </h5>
                              <span>
                                Used as biocatalysts to improve the removal of
                                stains and improve fabric feel.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5> Optical Brighteners: </h5>
                              <span>
                                Used to enhance the brightness and whiteness of
                                textiles during washing.
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

export default ServiceDetails3;
