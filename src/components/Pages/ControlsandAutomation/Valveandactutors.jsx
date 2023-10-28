import React from "react";
import Header2 from "./../Parts/Header2";
import Footer from "./../Parts/Footer";
import Banner from "./../Segments/Banner";
import Projects32 from "./../Segments/Projects32";
import { InstrumentationSlider } from "../../Parts/BrandsImagesSlider/InstrumentationSlider";

var bnrimg = require("./../../images/banner/8.jpg");

class Valveandactutors extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="More"
            pagename="Valves and Actuators"
            bgimage={bnrimg.default}
          />
          {/* INNER PAGE BANNER END */}
          <InstrumentationSlider />

          <Projects32 />
        </div>
        <Footer />
      </>
    );
  }
}

export default Valveandactutors;
