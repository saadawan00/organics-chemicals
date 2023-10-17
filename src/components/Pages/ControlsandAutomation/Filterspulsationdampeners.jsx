import React from "react";
import Header2 from "./../../Parts/Header2"
import Footer from "./../../Parts/Footer";
import Banner from "./../../Segments/Banner";
import Projects27 from "./../ControlsandAutomation/Projects27";

var bnrimg = require("./../../../images/banner/8.jpg");

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
            bgimage={bnrimg.default}
          />
          {/* INNER PAGE BANNER END */}
          <Projects27 />
        </div>
        <Footer />
      </>
    );
  }
}

export default Filterspulsationdampeners;
