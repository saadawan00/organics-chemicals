import React, { useState } from "react";
import Header2 from "../../Parts/Header2";
import Footer from "../../Parts/Footer";
import Banner from "./../../Segments/Banner";
import Sidebar from "./../../Segments/Sidebar";
import { sidebarItems } from '.';
import { NavLink } from "react-router-dom";

var bnrimg = require("./../../../images/banner/2.jpg");

const InstrumentCard = ({ label, imageName }) => {
  const [hover, setHover] = useState(false);
  return (
    <div key={imageName} className="col-lg-4 col-xs-4 p-60 p-r4 p-t10 p-b30">
      <div
        className="d-flex align-items-center flex-column border p-b10 p-t10 hover-opacity-dim pointer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img src={require(`./../../../images/lab-scientific/instruments/${imageName}.jpg`)} alt="" />
        <p className="p-t20 text-center">{label}</p>
        <div style={{ position: "absolute", top: 100 }}>
          <NavLink
            to={"#"}
            className="contact-slide-show site-button m-t10"
            style={{ opacity: 0 }}
          >
            Request a Quote
          </NavLink>
        </div>
      </div>
    </div>
  )
};

export class Instruments extends React.Component {
  render() {
    const picturesData = [
      { label: "Analytical Balances", imageName: "analytical-balances" },
      { label: "Autoclave", imageName: "autoclave" },
      { label: "Bench Scales", imageName: "bench-scales" },
      { label: "Calibration Weights", imageName: "calibration-weights" },
      { label: "Centrifuges", imageName: "centrifuges" },
      { label: "clamps", imageName: "clamps" },
      { label: "Desiccators", imageName: "desiccators" },
      { label: "Digital Microscope", imageName: "digital-microscope" },
      { label: "Dry Block Heaters", imageName: "dry-block-heaters" },
      { label: "Dry Block Heaters Accessories", imageName: "dry-block-heater-accessories" },
      { label: "Glove Boxes", imageName: "glove-boxes" },
      { label: "Heating Mantles", imageName: "heating-mantles" },
      { label: "Hotplate Stirrers", imageName: "hotplate-stirrers" },
      { label: "Incubators", imageName: "incubators" },
      { label: "indicators", imageName: "indicators" },
      { label: "Magnetic Stirrers", imageName: "magnetic-stirrers" },
      { label: "Melting Point", imageName: "melting-point" },
      { label: "Microscope Camera", imageName: "microscope-camera" },
      { label: "Microscope Filters", imageName: "microscope-filters" },
      { label: "Moisture Analyzers", imageName: "moisture-analyzers" },
      { label: "SDI Kits", imageName: "sdi-kits" },
      { label: "Suction System", imageName: "suction-system" },
      { label: "Test Chambers", imageName: "test-chambers" },
      { label: "Vacuum Pumps", imageName: "vacuum-pumps" },
      { label: "Visual Measurements", imageName: "visual-measurements" },
      { label: "Vortex Mixers", imageName: "vortex-mixers" },
      { label: "Water Analysis Accessories", imageName: "water-analysis-accessories" },
      { label: "Water Analysis Meter Electrode", imageName: "water-analysis-meter-electrode" },
    ];
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="Instruments"
            pagename="Instruments"
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
                          <h2 className="wt-title">Instruments</h2>
                        </div>
                        <div className="container">
                          <div className="row">
                            {picturesData.map((item, idx) => (
                              <InstrumentCard key={idx} {...item} />
                            ))}
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

export default Instruments;
