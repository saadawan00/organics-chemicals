import React from "react";
import Header2 from "./../../Parts/Header2"
import Footer from "./../../Parts/Footer";
import Banner from "./../../Segments/Banner";
import Projects28 from "./../ControlsandAutomation/Projects28";

var bnrimg = require("./../../../images/banner/8.jpg");

class Heatexchangeequipment extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="Heat Exchange Equipment"
            pagename="Heat Exchange Equipment"
            bgimage={bnrimg.default}
          />
          {/* INNER PAGE BANNER END */}
          <Projects28 />
        </div>
        <Footer />
      </>
    );
  }
}

export default Heatexchangeequipment;
