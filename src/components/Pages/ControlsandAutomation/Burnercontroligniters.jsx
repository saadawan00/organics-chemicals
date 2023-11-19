import React from "react";
import Header2 from "./../../Parts/Header2"
import Footer from "./../../Parts/Footer2";
import Banner from "./../../Segments/Banner";
import Projects25 from "./../ControlsandAutomation/Projects25";
import { InstrumentationSlider } from "../../Parts/BrandsImagesSlider/InstrumentationSlider";

var bnrimg = require('./../../../images/instrumentssliderimages/backgroundimage1.jpg');

class Burnercontroligniters extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="Gas & Flame Detection"
            pagename="Burner Controls, Igniters"
            bgimage={bnrimg}
          />
          {/* INNER PAGE BANNER END */}
          <InstrumentationSlider />

          <Projects25 />
        </div>
        <Footer showBanner={true} />
      </>
    );
  }
}

export default Burnercontroligniters;
