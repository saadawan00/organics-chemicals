import React from "react";
import Header2 from "./../Parts/Header2";
import Footer from "./../Parts/Footer";
import Banner from "./../Segments/Banner";
import Projects21 from "./../Segments/Projects21";

var bnrimg = require("./../../images/banner/8.jpg");

class Actuatorspositioner extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="Actuators,Positioner & Valve Monitors"
            pagename="Actuators,Positioner & Valve Monitors"
            bgimage={bnrimg.default}
          />
          {/* INNER PAGE BANNER END */}
          <Projects21 />
        </div>
        <Footer />
      </>
    );
  }
}

export default Actuatorspositioner;
