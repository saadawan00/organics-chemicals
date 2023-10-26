import React, { useState } from "react";
import Header2 from "../../Parts/Header2";
import Footer from "../../Parts/Footer";
import Banner from "./../../Segments/Banner";
import Sidebar from "./../../Segments/Sidebar";
import { sidebarItems } from '.';
import { NavLink } from "react-router-dom";

var bnrimg = require("./../../../images/banner/2.jpg");

const ConsumablesCard = ({ label, imageName }) => {
  return (
    <div key={imageName} className="col-lg-3 col-xs-3 p-60 p-r2 p-t10 p-b30">
      <div className="wt-icon-card shadow d-flex align-items-center flex-column border p-b10 p-t10 p-r4 p-l4 hover-opacity-dim pointer hover-border-blue">
        <img width={80} src={require(`./../../../images/lab-scientific/consumables/${imageName}.jpg`)} alt="" />
        <p className="p-t20 text-center" style={{ height: 50, fontSize: 14 }}>{label}</p>
        <div style={{ position: "absolute", top: 80 }}>
          <NavLink
            to={"#"}
            className="contact-slide-show get-quote-sm-btn m-t10 "
            style={{ opacity: 0 }}
          >
            Get Quote
          </NavLink>
        </div>
      </div>
    </div>
  )
};

export class Consumables extends React.Component {
  render() {
    const picturesData = [
      { label: "Clamps", imageName: "Clamps" },
      { label: "Compound Microscope", imageName: "Compound Microscope" },
      { label: "Condensers", imageName: "Condensers" },
      { label: "Crucibles", imageName: "Crucibles" },
      { label: "Cuvettes, Cells", imageName: "Cuvettes, Cells" },
      { label: "Desiccator Plates", imageName: "Desiccator Plates" },
      { label: "Dispensers", imageName: "Dispensers" },
      { label: "Evaporating Dishes", imageName: "Evaporating Dishes" },
      { label: "Funnels", imageName: "Funnels" },
      { label: "Impeller Assemblies", imageName: "Impeller Assemblies" },
      { label: "Lab Supplies", imageName: "Lab Supplies" },
      { label: "Labels", imageName: "Labels" },
      { label: "Lens", imageName: "Lens" },
      { label: "Liquid Handling", imageName: "Liquid Handling" },
      { label: "Organizers", imageName: "Organizers" },
      { label: "Parafilm", imageName: "Parafilm" },
      { label: "PCR Tube", imageName: "PCR Tube" },
      { label: "pH Measure", imageName: "pH Measure" },
      { label: "Pipet Racks", imageName: "Pipet Racks" },
      { label: "Prism", imageName: "Prism" },
      { label: "Rods", imageName: "Rods" },
      { label: "Rotar and Cap", imageName: "Rotar and Cap" },
      { label: "Sample Handling", imageName: "Sample Handling" },
      { label: "Scoops", imageName: "Scoops" },
      { label: "Slides", imageName: "Slides" },
      { label: "Soxhlet Extractor", imageName: "Soxhlet Extractor" },
      { label: "Tapes", imageName: "Tapes" },
      { label: "Weighing Dishes", imageName: "Weighing Dishes" },
    ];
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="Consumables"
            pagename="Consumables"
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
                          <h2 className="wt-title">Consumables</h2>
                        </div>
                        <div className="container">
                          <div className="row">
                            {picturesData.map((item, idx) => (
                              <ConsumablesCard key={idx} {...item} />
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

export default Consumables;
