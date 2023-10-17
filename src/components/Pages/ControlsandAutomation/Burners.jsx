import React from "react";
import Header2 from "./../../Parts/Header2"
import Footer from "./../../Parts/Footer";
import Banner from "./../../Segments/Banner";
import Projects26 from "./../ControlsandAutomation/Projects26";

var bnrimg = require("./../../../images/banner/8.jpg");

class Burners extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="Gas & Flame Detection"
            pagename="Burners"
            bgimage={bnrimg.default}
          />
          {/* INNER PAGE BANNER END */}
          <Projects26 />
        </div>
        <Footer />
      </>
    );
  }
}

export default Burners;
