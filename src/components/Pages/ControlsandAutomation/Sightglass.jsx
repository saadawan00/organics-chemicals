import React from "react";
import Header2 from "../../Parts/Header2";
import Footer from "../../Parts/Footer";
import Banner from "../../Segments/Banner";
import Projects36 from "./../Segments/Projects36";
import { InstrumentationSlider } from "../../Parts/BrandsImagesSlider/InstrumentationSlider";

var bnrimg = require("./../../images/banner/8.jpg");

class Sightglass extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="More"
            pagename="Sight Glass"
            bgimage={bnrimg.default}
          />
          {/* INNER PAGE BANNER END */}
          <InstrumentationSlider />

          <Projects36 />
        </div>
        <Footer />
      </>
    );
  }
}

export default Sightglass;
