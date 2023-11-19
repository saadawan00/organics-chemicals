import React from "react";
import Header2 from "./../../Parts/Header2"
import Footer from "./../../Parts/Footer2";
import Banner from "./../../Segments/Banner";
import Projects23 from "./../ControlsandAutomation/Projects23";
import { InstrumentationSlider } from "../../Parts/BrandsImagesSlider/InstrumentationSlider";

var bnrimg = require('./../../../images/instrumentssliderimages/backgroundimage2.jpeg');

class Dcsdata extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="DCS, Data Acquisation"
            pagename="DCS, Data Acquisation"
            bgimage={bnrimg}
          />
          {/* INNER PAGE BANNER END */}
          <InstrumentationSlider />

          <Projects23 />
        </div>
        <Footer showBanner={true} />
      </>
    );
  }
}

export default Dcsdata;
