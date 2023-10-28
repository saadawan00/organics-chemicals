import React from "react";
import Header2 from "../../Parts/Header2";
import Footer from "../../Parts/Footer";
import Banner from "./../../Segments/Banner";
import Sidebar from "./../../Segments/Sidebar";
import { sidebarItems } from '.';
import { NavLink } from "react-router-dom";
import { BrandsImagesSlider } from "./../../Parts/BrandsImagesSlider/BrandsImagesSlider";

var bnrimg = require('./../../../images/bg-slider.jpeg');

const ChromatographyCard = ({ label, imageName }) => {
  return (
    <div key={imageName} className="col-lg-3 col-xs-3 p-60 p-r2 p-t10 p-b30">
      <div className="wt-icon-card shadow d-flex align-items-center flex-column border p-b10 p-t10 p-r4 p-l4 hover-opacity-dim pointer hover-border-blue">
        <img width={80} src={require(`./../../../images/lab-scientific/chromatography/${imageName}.jpg`)} alt="" />
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

export class Chromatography extends React.Component {
  render() {
    const picturesData = [
      { label: "Chromatographic Columns", imageName: "Chromatographic Columns" },
      { label: "Chromatographic Flash Reservoirs", imageName: "Chromatographic Flash Reservoirs" },
      { label: "Fitting and Acessories", imageName: "Fitting and Acessories" },
      { label: "Fitting and Acessories", imageName: "Fitting and Acessories" },
      { label: "HPLC Columns", imageName: "HPLC Columns" },
    ];
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="Chromatography"
            pagename="Chromatography"
            bgimage={bnrimg}
          />
          {/* INNER PAGE BANNER END */}
          <BrandsImagesSlider />
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
                          <h2 className="wt-title">Chromatography</h2>
                        </div>
                        <div className="container">
                          <div className="row">
                            {picturesData.map((item, idx) => (
                              <ChromatographyCard key={idx} {...item} />
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

export default Chromatography;
