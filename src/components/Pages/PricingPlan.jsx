import React from "react";
import { NavLink } from "react-router-dom";
import Header2 from "./../Parts/Header2";
import Footer from "./../Parts/Footer";
import Banner from "./../Segments/Banner";

const plans = [
  {
    heading: "Installation",
    title: "Basic Plan",
    price: "29",
    description:
      "Tempo sit amet ipsum dolor, consecter adipisi cing elit, lorem do incididu eiusmod tempor dolor ",
  },
  {
    heading: "Installation",
    title: "Standard Plan",
    price: "49",
    description:
      "Tempo sit amet ipsum dolor, consecter adipisi cing elit, lorem do incididu eiusmod tempor dolor ",
  },
  {
    heading: "Installation",
    title: "Advanced Plan",
    price: "99",
    description:
      "Tempo sit amet ipsum dolor, consecter adipisi cing elit, lorem do incididu eiusmod tempor dolor ",
  },
];

var bnrimg = require("./../../images/banner/2.jpg");

class PricingPlan extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="Our Prices"
            pagename="Our Prices"
            bgimage={bnrimg.default}
          />
          {/* INNER PAGE BANNER END */}
          {/* OUR PLAN US START */}
          <div className="section-full p-t80 p-b50">
            <div className="container">
              {/* TITLE START*/}
              <div className="section-head center wt-small-separator-outer text-center">
                <div className="wt-small-separator site-text-primary">
                  <div className="sep-leaf-left" />
                  <div>The Best Industry services</div>
                  <div className="sep-leaf-right" />
                </div>
                <h2>
                  High Performance Services For Multiple Insdustries And
                  Technologies!
                </h2>
              </div>
              {/* TITLE END*/}
              <div className="section-content">
                <div className="pricingtable-row p-lr15 no-col-gap">
                  <div className="row d-flex justify-content-center">
                    {plans.map((item, index) => (
                      <div
                        key={index}
                        className="col-lg-4 col-md-6 col-sm-12 m-b30"
                      >
                        <div className="pricingtable-wrapper bg-gray">
                          <div
                            className={
                              index === 1
                                ? `pricingtable-inner pricingtable-highlight`
                                : `pricingtable-inner`
                            }
                          >
                            <div className="pricing-table-top-section">
                              <div className="pricingtable-price">
                                <span className="pricingtable-type">
                                  {item.heading}
                                </span>
                                <h2 className="pricingtable-bx">
                                  <sup className="pricingtable-sign">$</sup>
                                  {item.price}
                                </h2>
                              </div>
                              <div className="pricingtable-title">
                                <h2 className="title-style-2">{item.title}</h2>
                              </div>
                            </div>
                            <ul className="pricingtable-features">
                              <li>{item.description}</li>
                            </ul>
                            <div className="pricingtable-footer">
                              <NavLink
                                to={"#"}
                                className={
                                  index === 1
                                    ? `site-button-secondry site-btn-effect`
                                    : `site-button site-btn-effect`
                                }
                              >
                                Select
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* OUR PLAN US SECTION END */}
        </div>

        <Footer />
      </>
    );
  }
}

export default PricingPlan;
