import React from "react";
import Header2 from "./../Parts/Header2";
import Footer from "./../Parts/Footer";
import Banner from "./../Segments/Banner";
import Services13 from "./../Segments/Services13";
import Plans3 from "./../Segments/Plans3";
import Testimonials11 from "./../Segments/Testimonials11";
import Video2 from "./../Segments/Video2";

var bnrimg = require("./../../images/background/bn-99.jpeg");

class Services1 extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="Industrial Chemical"
            pagename="Industrial Chemical"
            bgimage={bnrimg}
          />
          {/* INNER PAGE BANNER END */}
          <Services13 />
          {/* <Plans3 />
          <Testimonials11 />
          <Video2 /> */}
        </div>
        <Footer />
      </>
    );
  }
}

export default Services1;
