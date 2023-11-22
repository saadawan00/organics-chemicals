import React from "react";

const services = [
  {
    title1: "Cooling Water ",
    title2:"Treatment"
  },
  {
   
    title1: "Closed Circuit Cooling",
    title2:"Treatment"
    },
  {
   
    title1: "Boiler Feed Water",
    title2:"Treatment"
    },
  {
    title1: "Reverse Osmosis Plant ",
    title2:"Treatment"
   },
  {
    title1: "Condensate Water Treatment",
    title2:"Treatment"
   },
  {
    title1: "Canal & Waster Water",
    title2:"Treatment"
   },
];
const specialitiesArray = [
  {
    title1: "Monitoring Thermal",
    title2:"Pollution Control"
  },
  {
   
    title1: "Chemical Cleaning",
    title2:"Services"
    },
  {
   
    title1: "High Pressure Water",
    title2:"Jetting"
    },
  {
    title1: "Heat Exchanger",
    title2:"Maintenance Services"
   },
  {
    title1: "Waste",
    title2:"Handling"
   },
  {
    title1: "Fuel Oil Treatment",
    title2:"Techniques"
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
                  <div>Areas of Expertise</div>
                  <div className="sep-leaf-right" />
                </div>
                <h5>
                Our multidisciplinary approach to engineering services covers a wider range of areas
                </h5>
              </div>
              {/* TITLE END*/}
              <div className="row d-flex justify-content-center"
              
              >
                {services.map((item, index) => (
                  <div
                    key={index}
                    className="col-lg-4 col-md-6 col-sm-12 m-b50"
                    
                  >
                    <div className="service-border-box">
                      <div className="wt-box service-box-1 bg-white">
                        <div className="service-box-title title-style-2 site-text-secondry">
                          <span className="s-title-one">{item.title1}</span>
                          <span className="s-title-one">{item.title2}</span>

                        </div>
                       
                       
                        
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="container">
            <div className="section-content">
              {/* TITLE START*/}
              <div className="section-head center wt-small-separator-outer text-center">
                <div className="wt-small-separator site-text-primary">
                  <div className="sep-leaf-left" />
                  <div>Specialities</div>
                  <div className="sep-leaf-right" />
                </div>
              
              </div>
              {/* TITLE END*/}
              <div className="row d-flex justify-content-center"
              
              >
                {specialitiesArray.map((item, index) => (
                  <div
                    key={index}
                    className="col-lg-4 col-md-6 col-sm-12 m-b50"
                    
                  >
                    <div className="service-border-box">
                      <div className="wt-box service-box-1 bg-white">
                        <div className="service-box-title title-style-2 site-text-secondry">
                          <span className="s-title-one">{item.title1}</span>
                          <span className="s-title-one">{item.title2}</span>

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
