import React from "react";
import Header2 from "./../../Parts/Header2"
import Footer from "./../../Parts/Footer";
import Banner from "./../../Segments/Banner";
import Projects14 from "./../ControlsandAutomation/Projects14";
import { InstrumentationSlider } from "../../Parts/BrandsImagesSlider/InstrumentationSlider";

var bnrimg = require('./../../../images/instrumentssliderimages/backgroundimage1.jpg');


class ProjectMasonry extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="Project masonry"
            pagename="Project masonry"
            bgimage={bnrimg}
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

export default ProjectMasonry;
