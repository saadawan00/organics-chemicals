import React from "react";
import Header2 from "./../Parts/Header2";
import Footer from "./../Parts/Footer";
import Banner from "./../Segments/Banner";
import ShopProducts from "./../Segments/ShopProducts";
import PageSidebar from "./../Segments/PageSidebar";
import FeaturedProducts from "./../Segments/FeaturedProducts";

var bnrimg = require("./../../images/banner/5.jpg");

class Shop extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner title="Shop" pagename="Shop" bgimage={bnrimg.default} />
          {/* INNER PAGE BANNER END */}
          {/* SECTION CONTENT START */}
          <div className="section-full p-t80 p-b50">
            <div className="container">
              <div className="section-content">
                <div className="row d-flex justify-content-center">
                  <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 m-b30">
                    <ShopProducts />
                  </div>
                  {/* SIDE BAR START */}
                  <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 rightSidebar  m-b30">
                    <PageSidebar />
                  </div>
                  {/* SIDE BAR END */}
                </div>
              </div>
            </div>
          </div>
          {/* SECTION CONTENT END */}
          {/* SECTION CONTENT START */}
          <FeaturedProducts />
          {/* SECTION CONTENT END */}
        </div>
        <Footer />
      </>
    );
  }
}

export default Shop;
