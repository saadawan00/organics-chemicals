import React from "react";
import Header2 from "./../../Parts/Header2"
import Footer from "./../../Parts/Footer";
import Banner from "./../../Segments/Banner";
import Projects21 from "./../ControlsandAutomation/Projects21";
import {InstrumentationSlider} from "../../Parts/BrandsImagesSlider/InstrumentationSlider";
import { BrandsImagesSlider } from "../../Parts/BrandsImagesSlider/BrandsImagesSlider";

var bnrimg = require('./../../../images/bg-slider.jpeg');

class Actuatorspositioner extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="Actuators Positioners"
            pagename="Actuators Positioners"
            bgimage={bnrimg}
          />
          {/* INNER PAGE BANNER END */}
          <InstrumentationSlider />

          <Projects21 />
        </div>
        <Footer />
      </>
    );
  }
}

export default Actuatorspositioner;
