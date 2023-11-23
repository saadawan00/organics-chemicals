import React from "react";
import Header2 from "./../Parts/Header2";
import Footer from "./../Parts/Footer";
import Banner from "./../Segments/Banner";
import About2 from "./../Segments/About2";
import Services13 from "./../Segments/Services13";
import ClientsLogo1 from "./../Segments/ClientsLogo1";
import Statistics16 from "../Segments/Statistics16";

var bnrimg = require("./../../images/banner/3.jpg");

class About1 extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          <Banner
            title="About Us"
            pagename="About 1"
            bgimage={bnrimg.default}
          />
          <About2 />
          <Services13 />
          <Statistics16 />

          <ClientsLogo1 />
        </div>
        <Footer />
      </>
    );
  }
}

export default About1;
