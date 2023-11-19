import React from "react";
import { NavLink } from "react-router-dom";
import IndustrialInstrumentsPDF from './../../assets/media/pdf/Industrial Instruments Organics.pdf';

class Sidebar extends React.Component {
  render() {
    const { navBarItems } = this.props;

    return (
      <div className="col-lg-4 col-md-12 rightSidebar">
        <div className="all_services">
          <ul>
            {navBarItems.map(({ label, route }, idx) => (
              <li key={idx}>
                <NavLink to={route}>{label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="service-side-btn m-b30 site-bg-secondry p-a20 text-white">
            <div className="wt-icon-box-wraper left">
              <NavLink to={"#"} className="btn-block contact-slide-show p-a15 m-tb10">
                <span className="text-black m-r10">
                  <i className="fa fa-file-word-o" />
                </span>
                <strong className="text-uppercase text-black">
                  {" "}
                  Quick Inquiry
                </strong>
              </NavLink>
            </div>
            <div className="wt-icon-box-wraper left ">
              <NavLink to={"#"} onClick={() => window.open(IndustrialInstrumentsPDF)} className="btn-block  p-a15 m-tb10">
                <span className="text-black m-r10">
                  <i className="fa fa-file-pdf-o" />
                </span>
                <strong className="text-uppercase text-black">
                  Download .PDF
                </strong>
              </NavLink>
            </div>
          </div>
      </div>
    );
  }
}

export default Sidebar;
