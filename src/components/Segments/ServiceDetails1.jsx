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
                      <h2 className="wt-title">Food and Beverage Industry</h2>
                    </div>
                    {/* TITLE END */}
                    <div className="wt-box services-etc m-b30">
                      <p>
                      The food and beverage industry utilizes a wide range of chemicals for various purposes, including
food processing, preservation, flavoring, and packaging. Here are speciality chemicals we provide:
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
                              <h5> Ascorbic Acid (Vitamin C):</h5>
                              <span>
                              Used as an antioxidant and preservative.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Sodium Benzoate: </h5>
                              <span>
                              A preservative used to inhibit the growth of bacteria, yeasts, and molds
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5> Potassium Sorbate:</h5>
                              <span>A preservative used to prevent the growth of yeast, molds, and some bacteria.</span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Sulfur Dioxide: </h5>
                              <span>
                              Used as a preservative and antioxidant, often in dried fruits and wine.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Nitrites and Nitrates:  </h5>
                              <span>
                              Used in cured meats to preserve color and inhibit bacterial growth.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Monosodium Glutamate (MSG):</h5>
                              <span>
                              A flavor enhancer used in savory food products.
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
                      <h4>Sweeteners and Flavorings:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5> High Fructose Corn Syrup (HFCS):</h5>
                              <span>
                              A sweetener commonly used in processed foods and beverages.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>
                              Artificial Sweeteners:
                              </h5>
                              <span>
                              Examples include aspartame, saccharin, sucralose, and acesulfame potassium.
                              </span>
                            </li>

                            <li style={{ marginBottom: "12px" }}>
                              <h5>Vanillin:</h5>
                              <span>
                              A synthetic flavor compound used to impart a vanilla flavor.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Ethyl Maltol:</h5>
                              <span>
                              A flavor enhancer with a sweet, caramel-like taste.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Food Acids and pH Regulators:</h5>
                              {/* <span>
                              A flavor enhancer with a sweet, caramel-like taste.
                              </span> */}
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Citric Acid: </h5>
                              <span>
                              Used as a flavoring agent, pH regulator, and preservative.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Lactic Acid:</h5>
                              <span>
                              Used as a flavoring agent, pH regulator, and preservative.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Phosphoric Acid: </h5>
                              <span>
                              Used in carbonated beverages to give them a tart taste and adjust acidity.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Tartaric Acid:</h5>
                              <span>
                              Used as an acidulant and flavor enhancer, often in wines and fruit jellies.
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
                      <h4>Antioxidants:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5> Butylated Hydroxyanisole (BHA) and Butylated Hydroxytoluene (BHT): </h5>
                              <span>
                              Antioxidants used to prevent
food spoilage and rancidity.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Tocopherols (Vitamin E): </h5>
                              <span>
                              Natural antioxidants used to extend the shelf life of fats and oils.
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
                      <h4>Food Colorings:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Tartrazine (Yellow 5):</h5>
                              <span>
                              A yellow food coloring.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Carmine (Cochineal Extract):  </h5>
                              <span>
                              A red food coloring derived from insects.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Caramel Color: </h5>
                              <span>
                              Used to give foods and beverages a brown color.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Food Emulsifiers and Stabilizers: </h5>
                              {/* <span>
                              Used to give foods and beverages a brown color.
                              </span> */}
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Lecithin: </h5>
                              <span>
                              A natural emulsifier used in various food products.
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Xanthan Gum:  </h5>
                              <span>
                              A thickening and stabilizing agent used in sauces, dressings, and bakery products
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Guar Gum:</h5>
                              <span>
                              A thickening agent and stabilizer used in ice creams, sauces, and beverages.
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
                      <h4>Packaging and Food Safety:</h4>
                      <div className="row" style={{ marginLeft: "25px" }}>
                        <div>
                          <ul className="list-angle-right">
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Bisphenol A (BPA): </h5>
                              <span>
                              A chemical used in the production of certain plastics and resins for food packaging
                              </span>
                            </li>
                            <li style={{ marginBottom: "12px" }}>
                              <h5>Diethylhexyl Phthalate (DEHP):</h5>
                              <span>
                              A plasticizer sometimes used in food packaging materials.
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
