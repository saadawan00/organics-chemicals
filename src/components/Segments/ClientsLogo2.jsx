import React from "react";
import { NavLink } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const logos = [
  { image: require("./../../images/client-logo/w1.png") },
  { image: require("./../../images/client-logo/w2.png") },
  { image: require("./../../images/client-logo/w3.jpg") },
  { image: require("./../../images/client-logo/w4.png") },
  { image: require("./../../images/client-logo/w5.png") },
  { image: require("./../../images/client-logo/w6.png") },
  { image: require("./../../images/client-logo/w7.png") },
  { image: require("./../../images/client-logo/w8.png") },
  { image: require("./../../images/client-logo/w9.jpg") },
  { image: require("./../../images/client-logo/w10.png") },
  { image: require("./../../images/client-logo/w11.png") },
  { image: require("./../../images/client-logo/w12.png") },
  { image: require("./../../images/client-logo/w13.png") },
  { image: require("./../../images/client-logo/w14.png") },
  { image: require("./../../images/client-logo/w15.png") },
  { image: require("./../../images/client-logo/w16.png") },
  { image: require("./../../images/client-logo/w17.png") },
  { image: require("./../../images/client-logo/w18.png") },
  { image: require("./../../images/client-logo/w19.png") },
  { image: require("./../../images/client-logo/w20.png") },
  { image: require("./../../images/client-logo/w21.jpg") },
  { image: require("./../../images/client-logo/w22.png") },
  { image: require("./../../images/client-logo/w23.png") },
  { image: require("./../../images/client-logo/w24.png") },
  { image: require("./../../images/client-logo/w25.png") },
  { image: require("./../../images/client-logo/w26.jpg") },
];

class ClientsLogo2 extends React.Component {
  render() {
    const options = {
      loop: true,
      nav: false,
      dots: false,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 1000,
      autoplayHoverPause: false,
      //   autoplaySpeed: 1,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      responsive: {
        0: {
          items: 2,
        },
        480: {
          items: 3,
        },
        767: {
          items: 4,
        },
        1000: {
          items: 4,
        },
      },
    };
    return (
      <>
        <div className="section-full bg-white">
          <div className="container">
            <div className="section-content">
              {/* TESTIMONIAL 4 START ON BACKGROUND */}
              <div className="section-content">
             
                <div className="section-content p-tb30 owl-btn-vertical-center">
                <div className="section-head center wt-small-separator-outer text-center text-white">
              <div className="wt-small-separator site-text-primary">
                <div className="sep-leaf-left" />
                <div style={{ fontSize: "50px" }}>Companies We Serve</div>
                <div className="sep-leaf-right" />
              </div>
              <h2 style={{ marginTop: "15px", color: "black", fontSize: "32px" }}>
                Discovered the bussiness and orgnizations that make our valued clientele
              </h2>
            </div>
                  <OwlCarousel
                    className="owl-carousel home-client-carousel-2"
                    {...options}
                  >
                    {logos.map((item, index) => (
                      <div className="item" key={index}>
                        <div className="ow-client-logo">
                          <div
                            className="client-logo client-logo-media"
                            style={{ height: "155px", border: 'none' }}
                          >
                            <NavLink to={"#"}>
                              <img
                                src={item.image}
                                alt=""
                                data-lazyload={item.image}
                              />
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    ))}
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ClientsLogo2;
