import React from "react";
import Header2 from "./../Parts/Header2";
import Footer from "./../Parts/Footer";
import Banner from "./../Segments/Banner";
import Projects30 from "./../Segments/Projects30";

var bnrimg = require("./../../images/banner/8.jpg");

class Dieselgeneratorparts extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="Generator & Compressors"
            pagename="Diesel Generator Parts"
            bgimage={bnrimg.default}
          />
          {/* INNER PAGE BANNER END */}
          <Projects30 />
        </div>
        <Footer />
      </>
    );
  }
}

export default Dieselgeneratorparts;
