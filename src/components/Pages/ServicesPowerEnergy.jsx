import React from "react";
import Header2 from "../Parts/Header2";
import Footer from "../Parts/Footer";
import Banner from "./../Segments/Banner";
import ServiceDetails7 from "./../Segments/ServiceDetails7";

var bnrimg = require("./../../images/background/bn-99.jpeg");

class ServicesPowerEnergy extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="Fertiliser Industry"
            pagename="Fertiliser Industry"
            bgimage={bnrimg}
          />
          {/* INNER PAGE BANNER END */}
          <ServiceDetails7 />
        </div>
        <Footer />
      </>
    );
  }
}

export default ServicesPowerEnergy;
