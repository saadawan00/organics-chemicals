import React from "react";
import { NavLink } from "react-router-dom";

const services = [
  {
    count: "01",
    flaticon: "flaticon-oil",
    url:'/services-oilgas',
    title1: "Power",
    title2: "Plants",
    description:
      "We have years of experience in supplying quality chemicals to different power plants across Pakistan.",
  },
  {
    count: "02",
    flaticon: "flaticon-conveyor",
    url: '/services-agricultural',
    title1: "Food &",
    title2: "Beverage",
    description:
      "The food and beverage industry utilizes a wide range of chemicals for various purposes, including food processing, preservation, flavoring, and packaging.",
  },
  {
    count: "03",
    flaticon: "flaticon-robotic-arm",
    url: '/services-chemical',
    title1: "Textile",
    title2: "Industry",
    description:
      "The textile industry utilizes various chemicals throughout the textile production process, including fiber production, dyeing, printing, finishing, and fabric treatment. ",
  },
  {
    count: "04",
    flaticon: "flaticon-industry",
    url: '/services-automotive',
    title1: "Pulp &",
    title2: "Paper Industry",
    description:
      "The pulp and paper industry utilizes various chemicals in the manufacturing process to extract fibers from wood, bleach the pulp, and enhance the properties of paper products. ",
  },
  {
    count: "05",
    flaticon: "flaticon-scythe",
    url: '/services-mechanical',
    title1: "Sugar",
    title2: "Industry",
    description:
      "The sugar industry utilizes various chemicals in different stages of sugar production, from extraction to refining and preservation. ",
  },
  {
    count: "06",
    flaticon: "flaticon-helmet",
    url: '/services-civil',
    title1: "Cement",
    title2: "Industry",
    description:
      "The cement industry utilizes various chemicals throughout the cement manufacturing process to enhance the properties of cement, improve its performance, and ensure its quality.",
  },
  {
    count: "07",
    flaticon: "flaticon-helmet",
    url: '/services-water',
    title1: "Water",
    title2: "Treatment",
    description:
      "Water treatment involves the use of various chemicals to purify and treat water, making it safe for consumption or suitable for specific industrial purposes. ",
  },
  {
    count: "08",
    flaticon: "flaticon-helmet",
    url: '/services-powerenergy',
    title1: "Fertiliser",
    title2: "Industry",
    description:
      "The fertilizer industry utilizes various chemicals to enhance soil fertility and promote plant growth. We are proud to serve fertiliser industry buy supplying quality chemicals since a decade.",
  },
];

var bnr1 = require("./../../images/background/bg-7.jpg");

class Services13 extends React.Component {
  render() {
    return (
      <>
        <div
          className="section-full p-t80 p-b40 bg-no-repeat bg-bottom-right bg-cover"
          style={{ backgroundImage: "url(" + bnr1.default + ")" }}
        >
          <div className="container">
            <div className="section-content">
              {/* TITLE START*/}
              <div className="section-head center wt-small-separator-outer text-center">
                <div className="wt-small-separator site-text-primary">
                  <div className="sep-leaf-left" />
                  <div>The Best Industry services</div>
                  <div className="sep-leaf-right" />
                </div>
                <h5>
                Our Chemicals division offers a diverse range of products, including Specialty Chemicals, Industrial
Chemicals and Performance Chemical for all industries.
                </h5>
              </div>
              {/* TITLE END*/}
              <div className="row d-flex justify-content-center"
              
              >
                {services.map((item, index) => (
                  <div
                    key={index}
                    className="col-lg-4 col-md-6 col-sm-12 m-b50"
                    style={{minHeight: '462px'}}
                  >
                    <div className="service-border-box">
                      <div className="wt-box service-box-1 bg-white">
                        <div className="service-box-title title-style-2 site-text-secondry">
                          <span className="s-title-one">{item.title1}</span>
                          <span className="s-title-two">{item.title2}</span>
                        </div>
                        <div className="service-box-content">
                          <p>{item.description}</p>
                          <NavLink
                            to={item.url}
                            className="site-button-link"
                          >
                            Read More
                          </NavLink>
                        </div>
                        <div className="wt-icon-box-wraper">
                          <div className="wt-icon-box-md site-bg-primary">
                            <span className="icon-cell text-white">
                              <i className={item.flaticon} />
                            </span>
                          </div>
                          <div className="wt-icon-number">
                            <span>{item.count}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Services13;
