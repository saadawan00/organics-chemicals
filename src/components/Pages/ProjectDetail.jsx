import React from "react";
import Header2 from "./../Parts/Header2";
import Footer from "./../Parts/Footer";
import Banner from "./../Segments/Banner";
import Projects17 from "./../Segments/Projects17";
import ProjectDetails from "./../Segments/ProjectDetails";

var bnrimg = require("./../../images/banner/8.jpg");

class ProjectDetail extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="Project Detail"
            pagename="Project Detail"
            bgimage={bnrimg.default}
          />
          {/* INNER PAGE BANNER END */}
          <Projects17 />
          <ProjectDetails />
        </div>
        <Footer />
      </>
    );
  }
}

export default ProjectDetail;
