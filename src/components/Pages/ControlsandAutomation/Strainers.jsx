import React from "react";
import Header2 from "./../Parts/Header2";
import Footer from "./../Parts/Footer";
import Banner from "./../Segments/Banner";
import Projects37 from "./../Segments/Projects37";

var bnrimg = require("./../../images/banner/8.jpg");

class Strainers extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner title="More" pagename="Strainers" bgimage={bnrimg.default} />
          {/* INNER PAGE BANNER END */}
          <Projects37 />
        </div>
        <Footer />
      </>
    );
  }
}

export default Strainers;
