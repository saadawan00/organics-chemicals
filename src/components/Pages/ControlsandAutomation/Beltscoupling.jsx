import React from "react";
import Header2 from "./../../Parts/Header2"
import Footer from "./../../Parts/Footer2";
import Banner from "./../../Segments/Banner";
import Projects24 from "./../ControlsandAutomation/Projects24";
import { InstrumentationSlider } from "../../Parts/BrandsImagesSlider/InstrumentationSlider";

var bnrimg = require('./../../../images/instrumentssliderimages/backgroundimage2.jpeg');

class Beltscoupling extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="V Belts,Coupling & Bearings"
            pagename="V Belts,Coupling & Bearings"
            bgimage={bnrimg}
          />
          {/* INNER PAGE BANNER END */}
          <InstrumentationSlider />

          <Projects24 />
        </div>
        <Footer showBanner={true} />
      </>
    );
  }
}

export default Beltscoupling;
