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
              <NavLink to={"./"} style={{ fontSize: "130%" }}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to={""} style={{ fontSize: "130%" }}>
                Industrial Chemicals
              </NavLink>
              <ul className="sub-menu">
                <li>
                  <NavLink to={"/services-1"} style={{ fontSize: "100%" }}>
                    All services
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink to={"/services-2"}>
                    Food and Beverage Industry
                  </NavLink>
                </li> */}
                <li>
                  <NavLink
                    to={"/services-agricultural"}
                    style={{ fontSize: "100%" }}
                  >
                    Power Plants
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to={"/services-agricultural"}
                    style={{ fontSize: "100%" }}
                  >
                    Textile Industry
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to={"/services-chemical"}
                    style={{ fontSize: "100%" }}
                  >
                    Sugar Industry
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/services-civil"} style={{ fontSize: "100%" }}>
                    Cement Industry
                  </NavLink>
                </li>

                <li>
                  <NavLink to={"/services-oilgas"} style={{ fontSize: "100%" }}>
                    Fertiliser Industry
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/services-automotive"}
                    style={{ fontSize: "100%" }}
                  >
                    Pulp and Paper Industry
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/services-agricultural"}
                    style={{ fontSize: "100%" }}
                  >
                    {" "}
                    Food and Beverage Industry
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/services-mechanical"}
                    style={{ fontSize: "100%" }}
                  >
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
              <NavLink to={""} style={{ fontSize: "130%" }}>
                Lab Scientific
              </NavLink>
              <ul className="sub-menu">
                <li>
                  <NavLink to={"/chemicals"} style={{ fontSize: "100%" }}>
                    Chemicals
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/glassware"} style={{ fontSize: "100%" }}>
                    Glassware
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/instruments"} style={{ fontSize: "100%" }}>
                    Instruments
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/plasticware"} style={{ fontSize: "100%" }}>
                    Plasticware
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/consumables"} style={{ fontSize: "100%" }}>
                    Consumables
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/filtration"} style={{ fontSize: "100%" }}>
                    Filtration
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/buffer-volumetric"}
                    style={{ fontSize: "100%" }}
                  >
                    Buffer & Volumetric
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/corrosian-coupons"}
                    style={{ fontSize: "100%" }}
                  >
                    Corrosion Coupons
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/chromatography"} style={{ fontSize: "100%" }}>
                    Chromatography
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to={""} style={{ fontSize: "130%" }}>
                Instrumentation
              </NavLink>

              <ul className="sub-menu">
                <li>
                  <NavLink
                    to={"/actuatorspositioner"}
                    style={{ fontSize: "100%" }}
                  >
                    Actuators Positioners
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/beltscoupling"} style={{ fontSize: "100%" }}>
                    Bearings V Belts & Coupling
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dcsdata"} style={{ fontSize: "100%" }}>
                    DCS, Data Acquisation
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/filterspulsationdampeners"}
                    style={{ fontSize: "100%" }}
                  >
                    Filters & Pulsation Dampeners
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/gasketandpacking"}
                    style={{ fontSize: "100%" }}
                  >
                    Gasket & Packing
                  </NavLink>
                </li>
                <li>
                  <NavLink to={""} style={{ fontSize: "100%" }}>
                    Gas & Flame Detection
                  </NavLink>
                  <ul className="sub-menu">
                    <li>
                      <NavLink
                        to={"/burnercontroligniters"}
                        style={{ fontSize: "100%" }}
                      >
                        Burner Controls, Igniters
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/burners"} style={{ fontSize: "100%" }}>
                        Burners
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to={""} style={{ fontSize: "100%" }}>
                    Generator & Compressors
                  </NavLink>
                  <ul className="sub-menu">
                    <li>
                      <NavLink
                        to={"/dieselgeneratorparts"}
                        style={{ fontSize: "100%" }}
                      >
                        Diesel Generator Parts
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/compressorparts"}
                        style={{ fontSize: "100%" }}
                      >
                        Compressor Parts & Accessories
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink
                    to={"/heatexchangeequipment"}
                    style={{ fontSize: "100%" }}
                  >
                    Heat Exchange Equipment
                  </NavLink>
                </li>
                <li>
                  <NavLink to={""} style={{ fontSize: "100%" }}>
                    Measurement Controls
                  </NavLink>
                  <ul className="sub-menu">
                    <li>
                      <NavLink
                        to={"/pressureandtemp"}
                        style={{ fontSize: "100%" }}
                      >
                        Pressure & Temperature
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/levelandflow"}
                        style={{ fontSize: "100%" }}
                      >
                        Level & Flow
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li>
                  <NavLink to={"/moreproducts"} style={{ fontSize: "100%" }}>
                    More
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to={""} style={{ fontSize: "130%" }}>
                Services
              </NavLink>
              <ul className="sub-menu">
                <li>
                  <NavLink to={"/about-1"} style={{ fontSize: "100%" }}>
                    About 1
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/about-2"} style={{ fontSize: "100%" }}>
                    About 2
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to={"/clients"} style={{ fontSize: "130%" }}>
                Clients
              </NavLink>
            </li>

            <li>
              <NavLink to={"/contactus"} style={{ fontSize: "130%" }}>
                Contact us
              </NavLink>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Navigation;
