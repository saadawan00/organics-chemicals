import React from "react";
import Header2 from "./../../Parts/Header2"
import Footer from "./../../Parts/Footer";
import Banner from "./../../Segments/Banner";
import Projects25 from "./../ControlsandAutomation/Projects25";

var bnrimg = require("./../../../images/banner/8.jpg");

class Burnercontroligniters extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="Gas & Flame Detection"
            pagename="Burner Controls, Igniters"
            bgimage={bnrimg.default}
          />
          {/* INNER PAGE BANNER END */}
          <Projects25 />
        </div>
        <Footer />
      </>
    );
  }
}

export default Burnercontroligniters;