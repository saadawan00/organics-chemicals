import React from "react";
import Header2 from "./../../Parts/Header2"
import Footer from "./../../Parts/Footer";
import Banner from "./../../Segments/Banner";
import Projects14 from "./../ControlsandAutomation/Projects14";
import { InstrumentationSlider } from "../../Parts/BrandsImagesSlider/InstrumentationSlider";

var bnrimg = require("./../../../images/banner/8.jpg");

class Pressureandtemp extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="Controls and Automation"
            pagename="Pressure & Temperature Measurement Control"
            bgimage={bnrimg.default}
          />
          {/* INNER PAGE BANNER END */}
          <InstrumentationSlider />

          <Projects14 />
        </div>
        <Footer />
      </>
    );
  }
}

export default Pressureandtemp;
