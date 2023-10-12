import React from "react";
import Header2 from "../Parts/Header2";
import Footer from "../Parts/Footer";
import Banner from "./../Segments/Banner";
import ServiceDetails5 from "./../Segments/ServiceDetails5";

var bnrimg = require("./../../images/banner/2.jpg");

class ServicesMechanical extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="Service Detail"
            pagename="Service Detail"
            bgimage={bnrimg.default}
          />
          {/* INNER PAGE BANNER END */}
          <ServiceDetails5 />
        </div>
        <Footer />
      </>
    );
  }
}

export default ServicesMechanical;
