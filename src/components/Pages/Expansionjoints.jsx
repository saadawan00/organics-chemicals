import React from "react";
import Header2 from "./../Parts/Header2";
import Footer from "./../Parts/Footer";
import Banner from "./../Segments/Banner";
import Projects35 from "./../Segments/Projects35";

var bnrimg = require("./../../images/banner/8.jpg");

class Expansionjoints extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="More"
            pagename="Expansion Joints"
            bgimage={bnrimg.default}
          />
          {/* INNER PAGE BANNER END */}
          <Projects35 />
        </div>
        <Footer />
      </>
    );
  }
}

export default Expansionjoints;
