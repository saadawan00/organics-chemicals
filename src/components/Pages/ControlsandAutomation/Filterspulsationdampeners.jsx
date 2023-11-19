import React from "react";
import Header2 from "./../../Parts/Header2"
import Footer from "./../../Parts/Footer2";
import Banner from "./../../Segments/Banner";
import Projects27 from "./../ControlsandAutomation/Projects27";
import { InstrumentationSlider } from "../../Parts/BrandsImagesSlider/InstrumentationSlider";

var bnrimg = require('./../../../images/instrumentssliderimages/backgroundimage1.jpg');

class Filterspulsationdampeners extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="Filters & Pulsation Dampeners"
            pagename="Filters & Pulsation Dampeners"
            bgimage={bnrimg}
          />
          {/* INNER PAGE BANNER END */}
          <InstrumentationSlider />

          <Projects27 />
        </div>
        <Footer showBanner={true} />
      </>
    );
  }
}

export default Filterspulsationdampeners;
