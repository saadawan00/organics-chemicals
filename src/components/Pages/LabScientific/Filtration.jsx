import React from "react";
import Header2 from "../../Parts/Header2";
import Footer from "../../Parts/Footer";
import Banner from "./../../Segments/Banner";
import Sidebar from "./../../Segments/Sidebar";
import { sidebarItems } from '.';
import { NavLink } from "react-router-dom";

var bnrimg = require("./../../../images/banner/2.jpg");

const FiltrationCard = ({ label, imageName }) => {
  return (
    <div key={imageName} className="col-lg-3 col-xs-3 p-60 p-r2 p-t10 p-b30">
      <div className="wt-icon-card shadow d-flex align-items-center flex-column border p-b10 p-t10 p-r4 p-l4 hover-opacity-dim pointer hover-border-blue">
        <img width={80} src={require(`./../../../images/lab-scientific/filtration/${imageName}.jpg`)} alt="" />
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

export class Filtration extends React.Component {
  render() {
    const picturesData = [
      { label: "Bottle Top Filters", imageName: "Bottle Top Filters" },
      { label: "Capsule Filters", imageName: "Capsule Filters" },
      { label: "Cellulose", imageName: "Cellulose" },
      { label: "Circle Filters", imageName: "Circle Filters" },
      { label: "Extraction Thimble", imageName: "Extraction Thimble" },
      { label: "Filter Disk", imageName: "Filter Disk" },
      { label: "Flat Sheet Memberanes", imageName: "Flat Sheet Memberanes" },
      { label: "Glass Microfiber", imageName: "Glass Microfiber" },
      { label: "Inline Filter", imageName: "Inline Filter" },
      { label: "Inline Holders", imageName: "Inline Holders" },
      { label: "MCE Membrane", imageName: "MCE Membrane" },
      { label: "PP Membranes", imageName: "PP Membranes" },
      { label: "Specialty Filter", imageName: "Specialty Filter" },
      { label: "Stirred Cells", imageName: "Stirred Cells" },
      { label: "Syringe Filters", imageName: "Syringe Filters" },
      { label: "Vacuum Kits", imageName: "Vacuum Kits" },
    ];
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="Filtration"
            pagename="Filtration"
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
                          <h2 className="wt-title">Filtration</h2>
                        </div>
                        <div className="container">
                          <div className="row">
                            {picturesData.map((item, idx) => (
                              <FiltrationCard key={idx} {...item} />
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

export default Filtration;
