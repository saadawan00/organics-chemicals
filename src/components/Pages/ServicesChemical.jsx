import React from "react";
import Header2 from "../Parts/Header2";
import Footer from "../Parts/Footer";
import Banner from "./../Segments/Banner";
import ServiceDetails3 from "./../Segments/ServiceDetails3";

var bnrimg = require("./../../images/background/bg-5.png");

class ServicesChemical extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="Textile Industry"
            pagename="Textile Industry"
            bgimage={bnrimg}
          />
          {/* INNER PAGE BANNER END */}
          <ServiceDetails3 />
        </div>
        <Footer />
      </>
    );
  }
}

export default ServicesChemical;
