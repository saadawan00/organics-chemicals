import React from "react";
import Header2 from "./../../Parts/Header2"
import Footer from "./../../Parts/Footer";
import Banner from "./../../Segments/Banner";
import Projects35 from "./../ControlsandAutomation/Projects35";
import { InstrumentationSlider } from "../../Parts/BrandsImagesSlider/InstrumentationSlider";

var bnrimg = require('./../../../images/instrumentssliderimages/backgroundimage1.jpg');

class Expansionjoints extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="More"
            pagename="Expansion Joints"
            bgimage={bnrimg}
          />
          {/* INNER PAGE BANNER END */}
          <InstrumentationSlider />

          <Projects35 />
        </div>
        <Footer />
      </>
    );
  }
}

export default Expansionjoints;
