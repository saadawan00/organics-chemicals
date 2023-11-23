import React from "react";
import Header2 from "./../Parts/Header2";
import Footer2 from "./../Parts/Footer2";
import Slider2 from "./../Segments/Slider2";
import Services2 from "./../Segments/Services2";
import Projects2 from "./../Segments/Projects2";
import About2 from "./../Segments/About2";
import Statistics2 from "./../Segments/Statistics2";
import ClientsLogo2 from "./../Segments/ClientsLogo2";
import Testimonials2 from "./../Segments/Testimonials2";
import Team2 from "./../Segments/Team2";
import SelfIntro1 from "./../Segments/SelfIntro1";
import Blog2 from "./../Segments/Blog2";
import About1up from "../Segments/About1up";

class Home2 extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          <Slider2 />
          <Services2 />
          <Projects2 />
          <About1up />
          <Statistics2 />
          <ClientsLogo2 />
          <Testimonials2 />
          {/* <Team2 /> */}
          {/* <br /> */}
          {/* <SelfIntro1 /> */}
          {/* <Blog2 /> */}
        </div>
        <Footer2 />
      </>
    );
  }
}

export default Home2;
