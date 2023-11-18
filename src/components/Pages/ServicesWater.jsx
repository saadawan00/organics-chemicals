import React from "react";
import Header2 from "../Parts/Header2";
import Footer from "../Parts/Footer";
import Banner from "./../Segments/Banner";
import ServiceDetails8 from "./../Segments/ServiceDetails8";

var bnrimg = require("./../../images/background/bg-5.png");

class ServicesWater extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="Water Treatment"
            pagename="Water Treatment"
            bgimage={bnrimg}
          />
          {/* INNER PAGE BANNER END */}
          <ServiceDetails8 />
        </div>
        <Footer />
      </>
    );
  }
}

export default ServicesWater;
