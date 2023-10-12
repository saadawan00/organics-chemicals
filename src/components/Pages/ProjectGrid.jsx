import React from "react";
import Header2 from "./../Parts/Header2";
import Footer from "./../Parts/Footer";
import Banner from "./../Segments/Banner";
import Projects13 from "./../Segments/Projects13";

var bnrimg = require("./../../images/banner/5.jpg");

class ProjectGrid extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="Project Grid"
            pagename="Project Grid"
            bgimage={bnrimg.default}
          />
          {/* INNER PAGE BANNER END */}
          <Projects13 />
        </div>
        <Footer />
      </>
    );
  }
}

export default ProjectGrid;
