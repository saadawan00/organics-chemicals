import React from "react";
import Header2 from "./../../Parts/Header2"
import Footer from "./../../Parts/Footer";
import Banner from "./../../Segments/Banner";
import Projects29 from "./../ControlsandAutomation/Projects29";
import { InstrumentationSlider } from "../../Parts/BrandsImagesSlider/InstrumentationSlider";

var bnrimg = require('./../../../images/instrumentssliderimages/backgroundimage1.jpg');

class Gasketandpacking extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="Gasket & Packing"
            pagename="Gasket and Packing"
            bgimage={bnrimg}
          />
          {/* INNER PAGE BANNER END */}
          <InstrumentationSlider />

          <Projects29 />
        </div>
        <Footer />
      </>
    );
  }
}

export default Gasketandpacking;
