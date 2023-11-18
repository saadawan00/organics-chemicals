import React from "react";
import Header2 from "../Parts/Header2";
import Footer from "../Parts/Footer";
import Banner from "./../Segments/Banner";
import ServiceDetails4 from "./../Segments/ServiceDetails4";

var bnrimg = require("./../../images/background/bg-5.png");

class ServicesCivil extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="Cement Industry"
            pagename="Cement Industry"
            bgimage={bnrimg}
          />
          {/* INNER PAGE BANNER END */}
          <ServiceDetails4 />
        </div>
        <Footer />
      </>
    );
  }
}

export default ServicesCivil;
