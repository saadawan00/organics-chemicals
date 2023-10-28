import React from "react";
import Header2 from "./../Parts/Header2";
import Footer from "./../Parts/Footer";
import Banner from "./../Segments/Banner";
import Projects38 from "./../Segments/Projects38";
import { InstrumentationSlider } from "../../Parts/BrandsImagesSlider/InstrumentationSlider";

var bnrimg = require("./../../images/banner/8.jpg");

class Stemtraps extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner title="More" pagename="Stem Traps" bgimage={bnrimg.default} />
          {/* INNER PAGE BANNER END */}
          <InstrumentationSlider />

          <Projects38 />
        </div>
        <Footer />
      </>
    );
  }
}

export default Stemtraps;
