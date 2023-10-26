import React from "react";
import Header2 from "./../../Parts/Header2"
import Footer from "./../../Parts/Footer";
import Banner from "./../../Segments/Banner";
import Clients from './Clients'
import ClientsTitle from "./ClientsTitle";

var bnrimg = require("./../../../images/banner/8.jpg");

class ClientsContainer extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <div className="page-content">
          {/* INNER PAGE BANNER */}
          <Banner
            title="Clients"
            pagename="Clients"
            bgimage={bnrimg.default}
          />
          <ClientsTitle />
          {/* INNER PAGE BANNER END */}
          <Clients />
        </div>
        <Footer />
      </>
    );
  }
}

export default ClientsContainer;
