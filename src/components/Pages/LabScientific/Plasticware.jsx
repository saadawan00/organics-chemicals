import React from "react";
import Header2 from "../../Parts/Header2";
import Footer from "../../Parts/Footer";
import Banner from "./../../Segments/Banner";
import Sidebar from "./../../Segments/Sidebar";
import { sidebarItems } from '.';
import { NavLink } from "react-router-dom";
import { BrandsImagesSlider } from "./../../Parts/BrandsImagesSlider/BrandsImagesSlider";

var bnrimg = require("./../../../images/banner/2.jpg");

const PlasticwareCard = ({ label, imageName }) => {
  return (
    <div key={imageName} className="col-lg-3 col-xs-3 p-60 p-r2 p-t10 p-b30">
      <div className="wt-icon-card shadow d-flex align-items-center flex-column border p-b10 p-t10 p-r4 p-l4 hover-opacity-dim pointer hover-border-blue">
        <img width={80} src={require(`./../../../images/lab-scientific/plasticware/${imageName}.jpg`)} alt="" />
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

export class Plasticware extends React.Component {
  render() {
    const picturesData = [
      { label: "Accessories", imageName: "Accessories" },
      { label: "Analyzer Consumables", imageName: "Analyzer Consumables" },
      { label: "Autoclave Tape", imageName: "Autoclave Tape" },
      { label: "Bags", imageName: "Bags" },
      { label: "Beakers", imageName: "Beakers" },
      { label: "Bio Reaction Tubes", imageName: "Bio Reaction Tubes" },
      { label: "Bottles", imageName: "Bottles" },
      { label: "Caps", imageName: "Caps" },
      { label: "Centifuge Tubes", imageName: "Centifuge Tubes" },
      { label: "Cleaners", imageName: "Cleaners" },
      { label: "Containers", imageName: "Containers" },
      { label: "Cryogenic Storage", imageName: "Cryogenic Storage" },
      { label: "Cryogenic Vials & Accessories", imageName: "Cryogenic Vials & Accessories" },
      { label: "Culture Tubes", imageName: "Culture Tubes" },
      { label: "Cylinders", imageName: "Cylinders" },
      { label: "Dipping Baskets", imageName: "Dipping Baskets" },
      { label: "Droppers", imageName: "Droppers" },
      { label: "Drug Testing", imageName: "Drug Testing" },
      { label: "Drying Racks", imageName: "Drying Racks" },
      { label: "Flask", imageName: "Flask" },
      { label: "Forceps & Tweezers", imageName: "Forceps & Tweezers" },
      { label: "Large Volume Centrifuge Tubes", imageName: "Large Volume Centrifuge Tubes" },
      { label: "Measuring Jugs", imageName: "Measuring Jugs" },
      { label: "Microtitration Plates", imageName: "Microtitration Plates" },
      { label: "PCR Tubes", imageName: "PCR Tubes" },
      { label: "Pumps", imageName: "Pumps" },
      { label: "Reagent Reservoir", imageName: "Reagent Reservoir" },
      { label: "Stir Bars", imageName: "Stir Bars" },
    ];
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="Plasticware"
            pagename="Plasticware"
            bgimage={bnrimg.default}
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
                          <h2 className="wt-title">Plasticware</h2>
                        </div>
                        <div className="container">
                          <div className="row">
                            {picturesData.map((item, idx) => (
                              <PlasticwareCard key={idx} {...item} />
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

export default Plasticware;
