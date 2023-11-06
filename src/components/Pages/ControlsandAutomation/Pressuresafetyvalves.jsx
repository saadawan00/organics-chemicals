import React from "react";
import Header2 from "./../../Parts/Header2"
import Footer from "./../../Parts/Footer";
import Banner from "./../../Segments/Banner";
import Projects22 from "./../ControlsandAutomation/Projects22";
import { InstrumentationSlider } from "../../Parts/BrandsImagesSlider/InstrumentationSlider";

var bnrimg = require('./../../../images/instrumentssliderimages/backgroundimage1.jpg');

class Pressuresafetyvalves extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="Pressure Safety,Valves & Regulators"
            pagename="Pressure Safety,Valves & Regulators"
            bgimage={bnrimg}
          />
          {/* INNER PAGE BANNER END */}
          <InstrumentationSlider />

          <Projects22 />
        </div>
        <Footer />
      </>
    );
  }
}

export default Pressuresafetyvalves;
