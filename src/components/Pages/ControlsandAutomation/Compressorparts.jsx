import React from "react";
import Header2 from "./../../Parts/Header2"
import Footer from "./../../Parts/Footer";
import Banner from "./../../Segments/Banner";
import Projects31 from "./../ControlsandAutomation/Projects31";

var bnrimg = require("./../../../images/banner/8.jpg");

class Compressorparts extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="Generator & Compressors"
            pagename="Compressor Parts and Accessories"
            bgimage={bnrimg.default}
          />
          {/* INNER PAGE BANNER END */}
          <Projects31 />
        </div>
        <Footer />
      </>
    );
  }
}

export default Compressorparts;
