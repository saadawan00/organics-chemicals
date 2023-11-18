import React from "react";
import Header2 from "../Parts/Header2";
import Footer from "../Parts/Footer";
import Banner from "./../Segments/Banner";
import ServiceDetails2 from "./../Segments/ServiceDetails2";

var bnrimg = require("./../../images/background/bg-5.png");

class ServicesAutomotive extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="Pulp and Paper"
            pagename="Pulp and Paper"
            bgimage={bnrimg}
          />
          {/* INNER PAGE BANNER END */}
          <ServiceDetails2 />
        </div>
        <Footer />
      </>
    );
  }
}

export default ServicesAutomotive;
