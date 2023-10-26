import React from "react";
import Header2 from "../../Parts/Header2";
import Footer from "../../Parts/Footer";
import Banner from "./../../Segments/Banner";
import Sidebar from "./../../Segments/Sidebar";
import { sidebarItems } from '.';
import { NavLink } from "react-router-dom";

var bnrimg = require("./../../../images/banner/2.jpg");

const CorrosionCouponsCard = ({ label, imageName }) => {
  return (
    <div key={imageName} className="col-lg-3 col-xs-3 p-60 p-r2 p-t10 p-b30">
      <div className="wt-icon-card shadow d-flex align-items-center flex-column border p-b10 p-t10 p-r4 p-l4 hover-opacity-dim pointer hover-border-blue">
        <img width={80} src={require(`./../../../images/lab-scientific/corrosion-coupons/${imageName}.jpg`)} alt="" />
        <p className="p-t20 text-center" style={{ height: 50, fontSize: 14 }}>{label}</p>
        <div style={{ position: "absolute", top: 80 }}>
          <NavLink
            to={"#"}
            className="contact-slide-show get-quote-sm-btn m-t10 "
            style={{ opacity: 0 }}
          >
            Get Quote
          </NavLink>
        </div>
      </div>
    </div>
  )
};

export class CorrosionCoupons extends React.Component {
  render() {
    const picturesData = [
      { label: "Admiralty Brass", imageName: "Admiralty Brass" },
      { label: "Aluminium", imageName: "Aluminium" },
      { label: "Carbon Steel C1018", imageName: "Carbon Steel C1018" },
      { label: "Carnon Steel", imageName: "Carnon Steel" },
      { label: "Copper & Nickel", imageName: "Copper & Nickel" },
      { label: "Copper Coupon", imageName: "Copper Coupon" },
      { label: "Corrosion Coupon Analysis", imageName: "Corrosion Coupon Analysis" },
      { label: "Glavanized Steel", imageName: "Glavanized Steel" },
      { label: "Lead", imageName: "Lead" },
      { label: "Passivated Carbon", imageName: "Passivated Carbon" },
      { label: "Picture124", imageName: "Picture124" },
      { label: "SS 316 316L", imageName: "SS 316 316L" },
      { label: "Stainless Steel 304,304L", imageName: "Stainless Steel 304,304L" },
    ];
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="Corrosion Coupons"
            pagename="Corrosion Coupons"
            bgimage={bnrimg.default}
          />
          {/* INNER PAGE BANNER END */}
          <>
            <div className="section-full small-device p-t80 p-b50 bg-white">
              <div className="section-content">
                <div className="container">
                  <div className="row">
                    <Sidebar navBarItems={sidebarItems} />
                    <div className="col-lg-8 col-md-12">
                      <div className="section-content">
                        {/* TITLE START */}
                        <div className="text-left">
                          <h2 className="wt-title">Corrosion Coupons</h2>
                        </div>
                        <div className="container">
                          <div className="row">
                            {picturesData.map((item, idx) => (
                              <CorrosionCouponsCard key={idx} {...item} />
                            ))}
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
        <Footer />
      </>
    );
  }
}

export default CorrosionCoupons;
