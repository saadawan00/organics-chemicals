import React from "react";
import { NavLink } from "react-router-dom";
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/css/modal-video.min.css";

class Slider2 extends React.Component {
  componentDidMount() {
    function loadScript(src) {
      return new Promise(function (resolve, reject) {
        var script = document.createElement("script");
        script.src = src;
        script.addEventListener("load", function () {
          resolve();
        });
        script.addEventListener("error", function (e) {
          reject(e);
        });
        document.body.appendChild(script);
        document.body.removeChild(script);
      });
    }

    loadScript("./assets/js/rev-script-2.js");
  }
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <>
        <div className="slider-outer">
          <div
            id="welcome_wrapper"
            className="rev_slider_wrapper fullscreen-container"
            data-alias="goodnews-header"
            data-source="gallery"
            style={{ background: "#eeeeee", padding: 0 }}
          >
            <div
              id="welcome_two"
              className="rev_slider fullscreenbanner"
              style={{ display: "none" }}
              data-version="5.4.3.1"
            >
              <ul>
                {/* SLIDE 1 */}
                <li
                  data-index="rs-901"
                  data-transition="fade"
                  data-slotamount="default"
                  data-hideafterloop={0}
                  data-hideslideonmobile="off"
                  data-easein="default"
                  data-easeout="default"
                  data-masterspeed="default"
                  data-thumb="images/main-slider/slider2/slide3.jpg"
                  data-rotate={0}
                  data-fstransition="fade"
                  data-fsmasterspeed={300}
                  data-fsslotamount={7}
                  data-saveperformance="off"
                  data-title="Slide Title"
                  data-param1="Additional Text"
                  data-param2
                  data-param3
                  data-param4
                  data-param5
                  data-param6
                  data-param7
                  data-param8
                  data-param9
                  data-param10
                  data-description
                >
                  {/* MAIN IMAGE */}

                  <img
                    src={require("./../../images/main-slider/slider2/slide3.jpg")}
                    alt=""
                    data-lazyload={require("./../../images/main-slider/slider2/slide3.jpg")}
                    data-bgposition="center center"
                    data-bgfit="cover"
                    data-bgparallax={4}
                    className="rev-slidebg "
                    data-no-retina
                  />
                  {/* LAYERS */}
                  {/* LAYER NR. 1 [ for overlay ] */}
                  <div
                    className="tp-caption tp-shape tp-shapewrapper "
                    id="slide-902-layer-0"
                    data-x="['center','center','center','center']"
                    data-hoffset="['0','0','0','0']"
                    data-y="['middle','middle','middle','middle']"
                    data-voffset="['0','0','0','0']"
                    data-width="full"
                    data-height="full"
                    data-whitespace="nowrap"
                    data-type="shape"
                    data-basealign="slide"
                    data-responsive_offset="off"
                    data-responsive="off"
                    data-frames='[
                        {"from":"opacity:0;","speed":1000,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},
                        {"delay":"wait","speed":1000,"to":"opacity:0;","ease":"Power4.easeOut"}
                        ]'
                    data-textalign="['left','left','left','left']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: 1,
                      backgroundColor: "rgba(0, 0, 0, 0.1)",
                      borderColor: "rgba(0, 0, 0, 0)",
                      borderWidth: 0,
                    }}
                  ></div>
                  {/* LAYER NR. 2 [ Black Box ] */}
                  <div
                    className="tp-caption   tp-resizeme site-text-primary"
                    id="slide-902-layer-2"
                    data-x="['left','left','left','left']"
                    data-hoffset="['100','120','34','30']"
                    data-y="['top','top','top','top']"
                    data-voffset="['80','180','180','180']"
                    data-fontsize="['48','48','48','34']"
                    data-lineheight="['48','48','48','48']"
                    data-width="['700','700','96%','96%']"
                    data-height="['none','none','none','none']"
                    data-whitespace="['normal','normal','normal','normal']"
                    data-type="text"
                    data-responsive_offset="on"
                    data-frames='[
                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":500,"ease":"Power4.easeOut"},
                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                        ]'
                    data-textalign="['left','left','left','left']"
                    data-paddingtop="[10,10,10,4]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[10,10,10,4]"
                    data-paddingleft="[30,30,30,20]"
                    style={{
                      zIndex: 13,
                      whiteSpace: "normal",
                      fontWeight: 300,
                      fontFamily: '"Teko", sans-serif',
                      borderLeft: "8px solid #00173c",
                    }}
                  >
                    From Anywhere to Everywhere
                  </div>
                  {/* LAYER NR. 3 [ for title ] */}
                  <div
                    className="tp-caption   tp-resizeme"
                    id="slide-902-layer-3"
                    data-x="['left','left','left','left']"
                    data-hoffset="[100','120','30','30']"
                    data-y="['top','top','top','top']"
                    data-voffset="['180','280','280','260']"
                    data-fontsize="['120','72','72','38']"
                    data-lineheight="['100','66','48','38']"
                    data-width="['700','700','96%','96%']"
                    data-height="['none','none','none','none']"
                    data-whitespace="['normal','normal','normal','normal']"
                    data-type="text"
                    data-responsive_offset="on"
                    data-frames='[
                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1000,"ease":"Power4.easeOut"},
                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                        ]'
                    data-textalign="['left','left','left','left']"
                    data-paddingtop="[5,5,5,5]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: 13,
                      whiteSpace: "normal",
                      fontWeight: 300,
                      color: "#00173c",
                      borderWidth: 0,
                      fontFamily: '"Teko", sans-serif',
                      textTransform: "uppercase",
                    }}
                  >
                    Bringing the world to your doorstep
                  </div>
                  {/* LAYER NR. 4 [ for paragraph] */}
                  <div
                    className="tp-caption  tp-resizeme"
                    id="slide-902-layer-4"
                    data-x="['left','left','left','left']"
                    data-hoffset="['100','120','30','30']"
                    data-y="['middle','middle','middle','middle']"
                    data-voffset="['70','40','40','-10']"
                    data-fontsize="['20','20','20','16']"
                    data-lineheight="['30','30','30','22']"
                    data-width="['750','750','96%','96%']"
                    data-height="['none','none','none','none']"
                    data-whitespace="['normal','normal','normal','normal']"
                    data-type="text"
                    data-responsive_offset="on"
                    data-frames='[
                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeOut"},
                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                        ]'
                    data-textalign="['left','left','left','left']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: 13,
                      fontWeight: 500,
                      color: "#00173c",
                      borderWidth: 0,
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    Our unique proposition is our ability to source products
                    from anywhere around the world and deliver them right to
                    your door step...
                  </div>
                  {/* LAYER NR. 5 [ for see all service botton ] */}
                  <div
                    className="tp-caption tp-resizeme"
                    id="slide-902-layer-5"
                    data-x="['left','left','left','left']"
                    data-hoffset="['100','120','30','30']"
                    data-y="['middle','middle','middle','middle']"
                    data-voffset="['160','130','130','80']"
                    data-lineheight="['none','none','none','none']"
                    data-width="['200','200','200','200']"
                    data-height="['none','none','none','none']"
                    data-whitespace="['normal','normal','normal','normal']"
                    data-type="text"
                    data-responsive_offset="on"
                    data-frames='[
                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},
                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                        ]'
                    data-textalign="['left','left','left','left']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{ zIndex: 13, textTransform: "uppercase" }}
                  >
                    <NavLink
                      to={"/contactus"}
                      className="site-button site-btn-effect"
                    >
                      Contact Us
                    </NavLink>
                  </div>
                  {/* LAYER NR. 6 [ VIDEO ICON ] */}
                  {/* <div
                    className="tp-caption"
                    id="slide-902-layer-6"
                    data-x="['left','left','left','left']"
                    data-hoffset="['320','350','250','250']"
                    data-y="['middle','middle','middle','middle']"
                    data-voffset="['160','130','130','80']"
                    data-lineheight="['0','0','0','0']"
                    data-width="['100','100','100','100']"
                    data-height="['none','none','none','none']"
                    data-whitespace="['normal','normal','normal','normal']"
                    data-type="text"
                    data-responsive_offset="on"
                    data-frames='[
                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},
                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                        ]'
                    data-textalign="['center','center','center','center']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{ zIndex: 13 }}
                  >
                    <NavLink
                      to={"#"}
                      className="play-now"
                      onClick={this.openModal}
                    >
                      <i className="icon fa fa-play" />
                      <span className="ripple" />
                    </NavLink>
                  </div> */}
                  {/* LAYER NR. 7 [ ABOUT US ] */}
                  {/* <div
                    className="tp-caption"
                    id="slide-902-layer-7"
                    data-x="['left','left','left','left']"
                    data-hoffset="['420','500','350','0']"
                    data-y="['middle','middle','middle','middle']"
                    data-voffset="['160','130','130','130']"
                    data-lineheight="['none','none','none','none']"
                    data-width="['100','100','100','100']"
                    data-height="['none','none','none','none']"
                    data-whitespace="['normal','normal','normal','normal']"
                    data-type="text"
                    data-responsive_offset="on"
                    data-frames='[
                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},
                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                        ]'
                    data-textalign="['right','right','right','right']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{ zIndex: 13 }}
                  >
                    <NavLink to={"/about-1"} className="site-button-link">
                      About Us
                    </NavLink>
                  </div> */}
                </li>

                {/* SLIDE 2 */}

                <li
                  data-index="rs-903"
                  data-transition="fade"
                  data-slotamount="default"
                  data-hideafterloop={0}
                  data-hideslideonmobile="off"
                  data-easein="default"
                  data-easeout="default"
                  data-masterspeed="default"
                  data-thumb="images/main-slider/slider2/slide1.jpg"
                  data-rotate={0}
                  data-fstransition="fade"
                  data-fsmasterspeed={300}
                  data-fsslotamount={7}
                  data-saveperformance="off"
                  data-title="Slide Title"
                  data-param1="Additional Text"
                  data-param2
                  data-param3
                  data-param4
                  data-param5
                  data-param6
                  data-param7
                  data-param8
                  data-param9
                  data-param10
                  data-description
                >
                  {/* MAIN IMAGE */}
                  <img
                    src={require("./../../images/main-slider/slider2/slide1.jpg")}
                    alt=""
                    data-lazyload={require("./../../images/main-slider/slider2/slide1.jpg")}
                    data-bgposition="center center"
                    data-bgfit="cover"
                    data-bgparallax={4}
                    // className="rev-slidebg"
                    data-no-retina
                  />
                  {/* LAYERS */}
                  {/* LAYER NR. 1 [ for overlay ] */}
                  <div
                    className="tp-caption tp-shape tp-shapewrapper "
                    id="slide-901-layer-0"
                    data-x="['center','center','center','center']"
                    data-hoffset="['0','0','0','0']"
                    data-y="['middle','middle','middle','middle']"
                    data-voffset="['0','0','0','0']"
                    data-width="full"
                    data-height="full"
                    data-whitespace="nowrap"
                    data-type="shape"
                    data-basealign="slide"
                    data-responsive_offset="off"
                    data-responsive="off"
                    data-frames='[
                        {"from":"opacity:0;","speed":1000,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},
                        {"delay":"wait","speed":1000,"to":"opacity:0;","ease":"Power4.easeOut"}
                        ]'
                    data-textalign="['left','left','left','left']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: 1,
                      backgroundColor: "rgba(0, 0, 0, 0.1)",
                      borderColor: "rgba(0, 0, 0, 0)",
                      borderWidth: 0,
                    }}
                  ></div>
                  {/* LAYER NR. 2 [ Black Box ] */}
                  <div
                    className="tp-caption   tp-resizeme site-text-primary"
                    id="slide-901-layer-2"
                    data-x="['left','left','left','left']"
                    data-hoffset="['100','120','34','30']"
                    data-y="['top','top','top','top']"
                    data-voffset="['80','180','180','180']"
                    data-fontsize="['48','48','48','34']"
                    data-lineheight="['48','48','48','48']"
                    data-width="['700','700','96%','96%']"
                    data-height="['none','none','none','none']"
                    data-whitespace="['normal','normal','normal','normal']"
                    data-type="text"
                    data-responsive_offset="on"
                    data-frames='[
                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":500,"ease":"Power4.easeOut"},
                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                        ]'
                    data-textalign="['left','left','left','left']"
                    data-paddingtop="[10,10,10,4]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[10,10,10,4]"
                    data-paddingleft="[30,30,30,20]"
                    style={{
                      zIndex: 13,
                      whiteSpace: "normal",
                      fontWeight: 300,
                      fontFamily: '"Teko", sans-serif',
                      borderLeft: "8px solid #00173c",
                    }}
                  >
                    Your Source for Industrial Intelligence
                  </div>
                  {/* LAYER NR. 3 [ for title ] */}
                  <div
                    className="tp-caption   tp-resizeme"
                    id="slide-901-layer-3"
                    data-x="['left','left','left','left']"
                    data-hoffset="[100','120','30','30']"
                    data-y="['top','top','top','top']"
                    data-voffset="['180','280','280','260']"
                    data-fontsize="['120','72','72','38']"
                    data-lineheight="['100','66','48','38']"
                    data-width="['900','900','100%','100%']"
                    data-height="['none','none','none','none']"
                    data-whitespace="['normal','normal','normal','normal']"
                    data-type="text"
                    data-responsive_offset="on"
                    data-frames='[
                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1000,"ease":"Power4.easeOut"},
                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                        ]'
                    data-textalign="['left','left','left','left']"
                    data-paddingtop="[5,5,5,5]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: 13,
                      whiteSpace: "normal",
                      fontWeight: 100,
                      color: "#00173c",
                      borderWidth: 0,
                      fontFamily: '"Teko", sans-serif',
                      textTransform: "uppercase",
                    }}
                  >
                    Chemicals,
                    <br /> Instruments & Expertise
                  </div>
                  {/* LAYER NR. 4 [ for paragraph] */}
                  {/* <div
                    className=" tp-caption tp-resizeme mt-6"
                    id="slide-901-layer-4"
                    data-x="['left','left','left','left']"
                    data-hoffset="['100','120','30','30']"
                    data-y="['middle','middle','middle','middle']"
                    data-voffset="['70','40','40','-10']"
                    data-fontsize="['20','20','20','16']"
                    data-lineheight="['30','30','30','22']"
                    data-width="['800','800','97%','97%']"
                    data-height="['none','none','none','none']"
                    data-whitespace="['normal','normal','normal','normal']"
                    data-type="text"
                    data-responsive_offset="on"
                    data-frames='[
                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeOut"},
                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                        ]'
                    data-textalign="['left','left','left','left']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: 13,
                      fontWeight: 500,
                      color: "black",
                      borderWidth: 0,
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    {" "}
                    Organics provides an extensive range of speciality, organic
                    & inorganic chemicals to cater various industries...{" "}
                  </div> */}
                  {/* LAYER NR. 5 [ for see all service botton ] */}
                  <div
                    className="tp-caption tp-resizeme"
                    id="slide-901-layer-5"
                    data-x="['left','left','left','left']"
                    data-hoffset="['100','120','30','30']"
                    data-y="['430','430','430','430']"
                    data-voffset="['160','130','130','80']"
                    data-lineheight="['none','none','none','none']"
                    data-width="['200','200','200','200']"
                    data-height="['none','none','none','none']"
                    data-whitespace="['normal','normal','normal','normal']"
                    data-type="text"
                    data-responsive_offset="on"
                    data-frames='[ 
                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},
                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                        ]'
                    data-textalign="['left','left','left','left']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: 13,
                      textTransform: "uppercase",
                    }}
                  >
                    <NavLink
                      to={"/contactus"}
                      className="site-button site-btn-effect"
                    >
                      Contact Us
                    </NavLink>
                  </div>
                  {/* LAYER NR. 6 [ VIDEO ICON ] */}
                  {/* <div
                    className="tp-caption"
                    id="slide-901-layer-6"
                    data-x="['left','left','left','left']"
                    data-hoffset="['320','350','250','250']"
                    data-y="['middle','middle','middle','middle']"
                    data-voffset="['160','130','130','80']"
                    data-lineheight="['0','0','0','0']"
                    data-width="['100','100','100','100']"
                    data-height="['none','none','none','none']"
                    data-whitespace="['normal','normal','normal','normal']"
                    data-type="text"
                    data-responsive_offset="on"
                    data-frames='[ 
                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},
                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                        ]'
                    data-textalign="['center','center','center','center']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{ zIndex: 13 }}
                  >
                    <NavLink
                      to={"#"}
                      className="play-now"
                      onClick={this.openModal}
                    >
                      <i className="icon fa fa-play" />
                      <span className="ripple" />
                    </NavLink>
                  </div> */}
                  {/* LAYER NR. 7 [ ABOUT US ] */}
                  {/* <div
                    className="tp-caption"
                    id="slide-901-layer-7"
                    data-x="['left','left','left','left']"
                    data-hoffset="['420','500','350','0']"
                    data-y="['middle','middle','middle','middle']"
                    data-voffset="['160','130','130','130']"
                    data-lineheight="['none','none','none','none']"
                    data-width="['100','100','100','100']"
                    data-height="['none','none','none','none']"
                    data-whitespace="['normal','normal','normal','normal']"
                    data-type="text"
                    data-responsive_offset="on"
                    data-frames='[ 
                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},
                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                        ]'
                    data-textalign="['right','right','right','right']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{ zIndex: 13 }}
                  >
                    <NavLink to={"/about-1"} className="site-button-link">
                      About Us
                    </NavLink>
                  </div> */}
                </li>
                {/* SLIDE 3 */}
                <li
                  data-index="rs-902"
                  data-transition="fade"
                  data-slotamount="default"
                  data-hideafterloop={0}
                  data-hideslideonmobile="off"
                  data-easein="default"
                  data-easeout="default"
                  data-masterspeed="default"
                  data-thumb="images/main-slider/slider2/slide2.jpg"
                  data-rotate={0}
                  data-fstransition="fade"
                  data-fsmasterspeed={300}
                  data-fsslotamount={7}
                  data-saveperformance="off"
                  data-title="Slide Title"
                  data-param1="Additional Text"
                  data-param2
                  data-param3
                  data-param4
                  data-param5
                  data-param6
                  data-param7
                  data-param8
                  data-param9
                  data-param10
                  data-description
                >
                  {/* MAIN IMAGE */}
                  {/* <div className=""> */}
                  <img
                    src={require("./../../images/main-slider/slider2/slide2.jpg")}
                    alt=""
                    data-lazyload={require("./../../images/main-slider/slider2/slide2.jpg")}
                    data-bgposition="center center"
                    data-bgfit="cover"
                    data-bgparallax={4}
                    className="rev-slidebg opacity-07"
                    data-no-retina
                  />
                  {/* </div> */}
                  {/* LAYERS */}
                  {/* LAYER NR. 1 [ for overlay ] */}
                  <div
                    className="tp-caption tp-shape tp-shapewrapper "
                    id="slide-902-layer-0"
                    data-x="['center','center','center','center']"
                    data-hoffset="['0','0','0','0']"
                    data-y="['middle','middle','middle','middle']"
                    data-voffset="['0','0','0','0']"
                    data-width="full"
                    data-height="full"
                    data-whitespace="nowrap"
                    data-type="shape"
                    data-basealign="slide"
                    data-responsive_offset="off"
                    data-responsive="off"
                    data-frames='[
                        {"from":"opacity:0;","speed":1000,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},
                        {"delay":"wait","speed":1000,"to":"opacity:0;","ease":"Power4.easeOut"}
                        ]'
                    data-textalign="['left','left','left','left']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: 1,
                      backgroundColor: "rgba(0, 0, 0, 0.1)",
                      borderColor: "rgba(0, 0, 0, 0)",
                      borderWidth: 0,
                    }}
                  ></div>
                  {/* LAYER NR. 2 [ Black Box ] */}
                  <div
                    className="tp-caption   tp-resizeme site-text-primary"
                    id="slide-902-layer-2"
                    data-x="['left','left','left','left']"
                    data-hoffset="['100','120','34','30']"
                    data-y="['top','top','top','top']"
                    data-voffset="['80','180','180','180']"
                    data-fontsize="['48','48','48','34']"
                    data-lineheight="['48','48','48','48']"
                    data-width="['700','700','96%','96%']"
                    data-height="['none','none','none','none']"
                    data-whitespace="['normal','normal','normal','normal']"
                    data-type="text"
                    data-responsive_offset="on"
                    data-frames='[
                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":500,"ease":"Power4.easeOut"},
                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                        ]'
                    data-textalign="['left','left','left','left']"
                    data-paddingtop="[10,10,10,4]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[10,10,10,4]"
                    data-paddingleft="[30,30,30,20]"
                    style={{
                      zIndex: 13,
                      whiteSpace: "normal",
                      fontWeight: 300,
                      fontFamily: '"Teko", sans-serif',
                      borderLeft: "8px solid #00173c",
                      color: "#15294a",
                    }}
                  >
                    Where Quality Meets Innovation
                  </div>
                  {/* LAYER NR. 3 [ for title ] */}
                  <div
                    className="tp-caption   tp-resizeme"
                    id="slide-902-layer-3"
                    data-x="['left','left','left','left']"
                    data-hoffset="[100','120','30','30']"
                    data-y="['top','top','top','top']"
                    data-voffset="['180','280','280','260']"
                    data-fontsize="['120','72','72','38']"
                    data-lineheight="['100','66','48','38']"
                    data-width="['700','700','96%','96%']"
                    data-height="['none','none','none','none']"
                    data-whitespace="['normal','normal','normal','normal']"
                    data-type="text"
                    data-responsive_offset="on"
                    data-frames='[
                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1000,"ease":"Power4.easeOut"},
                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                        ]'
                    data-textalign="['left','left','left','left']"
                    data-paddingtop="[5,5,5,5]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: 13,
                      whiteSpace: "normal",
                      fontWeight: 300,
                      //   color: "#00173c",
                      color: "white",
                      borderWidth: 0,
                      fontFamily: '"Teko", sans-serif',
                      textTransform: "uppercase",
                    }}
                  >
                    Lab Scientific Product Specialist
                  </div>
                  {/* LAYER NR. 4 [ for paragraph] */}
                  <div
                    className="tp-caption  tp-resizeme"
                    id="slide-902-layer-4"
                    data-x="['left','left','left','left']"
                    data-hoffset="['100','120','30','30']"
                    data-y="['middle','middle','middle','middle']"
                    data-voffset="['70','40','40','-10']"
                    data-fontsize="['20','20','20','16']"
                    data-lineheight="['30','30','30','22']"
                    data-width="['700','700','95%','95%']"
                    data-height="['none','none','none','none']"
                    data-whitespace="['normal','normal','normal','normal']"
                    data-type="text"
                    data-responsive_offset="on"
                    data-frames='[
                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeOut"},
                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                        ]'
                    data-textalign="['left','left','left','left']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{
                      zIndex: 13,
                      fontWeight: 500,
                      color: "#00173c",
                      borderWidth: 0,
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    <span style={{ color: "#ffffff" }}>We offer a wide</span>{" "}
                    <span style={{ color: "#000000" }}>
                      {" "}
                      range of chemicals, reagents, consumables, &nbsp;
                      equipment & instruments...
                    </span>
                  </div>
                  {/* LAYER NR. 5 [ for see all service botton ] */}
                  <div
                    className="tp-caption tp-resizeme"
                    id="slide-902-layer-5"
                    data-x="['left','left','left','left']"
                    data-hoffset="['100','120','30','30']"
                    data-y="['middle','middle','middle','middle']"
                    data-voffset="['160','130','130','80']"
                    data-lineheight="['none','none','none','none']"
                    data-width="['200','200','200','200']"
                    data-height="['none','none','none','none']"
                    data-whitespace="['normal','normal','normal','normal']"
                    data-type="text"
                    data-responsive_offset="on"
                    data-frames='[
                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},
                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                        ]'
                    data-textalign="['left','left','left','left']"
                    data-paddingtop="[0,0,0,0]"
                    data-paddingright="[0,0,0,0]"
                    data-paddingbottom="[0,0,0,0]"
                    data-paddingleft="[0,0,0,0]"
                    style={{ zIndex: 13, textTransform: "uppercase" }}
                  >
                    <NavLink
                      to={"/contactus"}
                      className="site-button site-btn-effect"
                    >
                      Contact Us
                    </NavLink>
                  </div>
                </li>
              </ul>
              <div
                className="tp-bannertimer tp-bottom"
                style={{ visibility: "hidden !important" }}
              />
            </div>
          </div>
        </div>
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="fgExvIUYg5w"
          onClose={() => this.setState({ isOpen: false })}
        />
      </>
    );
  }
}

export default Slider2;
