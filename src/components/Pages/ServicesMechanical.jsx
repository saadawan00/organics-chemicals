import React from "react";
import Header2 from "../Parts/Header2";
import Footer from "../Parts/Footer";
import Banner from "./../Segments/Banner";
import ServiceDetails5 from "./../Segments/ServiceDetails5";

var bnrimg = require("./../../images/background/bg-5.png");

class ServicesMechanical extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="Sugar Industry"
            pagename="Sugar Industry"
            bgimage={bnrimg}
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
