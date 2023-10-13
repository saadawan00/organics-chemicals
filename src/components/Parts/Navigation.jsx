import React from "react";
import { NavLink } from "react-router-dom";

class Navigation extends React.Component {
  componentDidMount() {
    function loadScript(src) {
      return new Promise(function (resolve, reject) {
        var script = document.createElement("script");
        script.src = src;
        script.addEventListener("load", function () {
          resolve();
        });
        script.addEventListener("error", function (e) {
          reject(e);
        });
        document.body.appendChild(script);
        document.body.removeChild(script);
      });
    }

    loadScript("./assets/js/custom.js");
  }

  render() {
    return (
      <>
        <div className="nav-animation header-nav navbar-collapse collapse d-flex justify-content-center">
          <ul className=" nav navbar-nav">
            <li>
              <NavLink to={"./"}>Home</NavLink>
            </li>

            <li>
              <NavLink to={""}>Industrial Chemicals</NavLink>
              <ul className="sub-menu">
                <li>
                  <NavLink to={"/services-1"}>All services</NavLink>
                </li>
                {/* <li>
                  <NavLink to={"/services-2"}>
                    Food and Beverage Industry
                  </NavLink>
                </li> */}
                <li>
                  <NavLink to={"/services-agricultural"}>Power Plants</NavLink>
                </li>

                <li>
                  <NavLink to={"/services-agricultural"}>
                    Textile Industry
                  </NavLink>
                </li>

                <li>
                  <NavLink to={"/services-chemical"}>Sugar Industry</NavLink>
                </li>
                <li>
                  <NavLink to={"/services-civil"}>Cement Industry</NavLink>
                </li>

                <li>
                  <NavLink to={"/services-oilgas"}>Fertiliser Industry</NavLink>
                </li>
                <li>
                  <NavLink to={"/services-automotive"}>
                    Pulp and Paper Industry
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/services-agricultural"}>
                    {" "}
                    Food and Beverage Industry
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/services-mechanical"}>
                    Water Treatment Chemicals
                  </NavLink>
                </li>

                {/* <li>
                  <NavLink to={"/services-powerenergy"}>
                    Power &amp; Energy Sector
                  </NavLink>
                </li> */}
              </ul>
            </li>
            <li>
              <NavLink to={""}>Lab Scientific</NavLink>
              <ul className="sub-menu">
                <li>
                  <NavLink to={"/chemicals"}>Chemicals</NavLink>
                </li>
                <li>
                  <NavLink to={"/glassware"}>Glassware</NavLink>
                </li>
                <li>
                  <NavLink to={"/instruments"}>Instruments</NavLink>
                </li>
                <li>
                  <NavLink to={"/plasticware"}>Plasticware</NavLink>
                </li>
                <li>
                  <NavLink to={"/consumables"}>Consumables</NavLink>
                </li>
                <li>
                  <NavLink to={"/filtration"}>Filtration</NavLink>
                </li>
                <li>
                  <NavLink to={"/buffer-volumatric"}>Buffer & Volumatric</NavLink>
                </li>
                <li>
                  <NavLink to={"/corrosian-coupons"}>Corrosion Coupons</NavLink>
                </li>
                <li>
                  <NavLink to={"/chromatography"}>Chromatography</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to={""}>Controls & Automation</NavLink>

              <ul className="sub-menu">
                <li>
                  <NavLink to={""}>Measurement Controls</NavLink>
                  <ul className="sub-menu">
                    <li>
                      <NavLink to={"/pressureandtemp"}>
                        Pressure & Temperature
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/levelandflow"}>Level & Flow</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to={"/actuatorspositioner"}>
                    Actuators, Positioner & Valve Monitors
                  </NavLink>
                </li>
                
                <li>
                  <NavLink to={"/dcsdata"}>DCS, Data Acquisation</NavLink>
                </li>
                <li>
                  <NavLink to={"/beltscoupling"}>
                    V Belts, Coupling & Bearings
                  </NavLink>
                </li>
                <li>
                  <NavLink to={""}>Gas & Flame Detection</NavLink>
                  <ul className="sub-menu">
                    <li>
                      <NavLink to={"/burnercontroligniters"}>
                        Burner Controls, Igniters
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/burners"}>Burners</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to={"/filterspulsationdampeners"}>
                    Filters & Pulsation Dampeners
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/heatexchangeequipment"}>
                    Heat Exchange Equipment
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/gasketandpacking"}>Gasket & Packing</NavLink>
                </li>

                <li>
                  <NavLink to={""}>Generator & Compressors</NavLink>
                  <ul className="sub-menu">
                    <li>
                      <NavLink to={"/dieselgeneratorparts"}>
                        Diesel Generator Parts
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/compressorparts"}>
                        Compressor Parts & Accessories
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to={"/moreproducts"}>More</NavLink>
                
                </li>
              </ul>
            </li>
            <li>
              <NavLink to={""}>Clients</NavLink>
              <ul className="sub-menu">
                <li>
                  <NavLink to={"/blog-grid"}>Blog Grid</NavLink>
                </li>
                <li>
                  <NavLink to={"/blog-list"}>Blog List</NavLink>
                </li>
                <li>
                  <NavLink to={"/blog-post"}>Blog Post</NavLink>
                </li>
              </ul>
            </li>
            {/* <li>
              <NavLink to={""}>Pages</NavLink>
              <ul className="sub-menu">
                <li>
                  <NavLink to={"/pricing-plan"}>Pricing Plan</NavLink>
                </li>
                <li>
                  <NavLink to={"/icon-font"}>Icon Font</NavLink>
                </li>
                <li>
                  <NavLink to={"/team"}>Team</NavLink>
                </li>
                <li>
                  <NavLink to={"/team-single"}>Team Single</NavLink>
                </li>
                <li>
                  <NavLink to={"/faq"}>FAQ</NavLink>
                </li>
                <li>
                  <NavLink to={"/error403"}>Error 403</NavLink>
                </li>
                <li>
                  <NavLink to={"/error404"}>Error 404</NavLink>
                </li>
                <li>
                  <NavLink to={"/error405"}>Error 405</NavLink>
                </li>
              </ul>
            </li> */}
            <li>
              <NavLink to={""}>About</NavLink>
              <ul className="sub-menu">
                <li>
                  <NavLink to={"/about-1"}>About 1</NavLink>
                </li>
                <li>
                  <NavLink to={"/about-2"}>About 2</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to={"/contactus"}>Contact us</NavLink>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Navigation;
