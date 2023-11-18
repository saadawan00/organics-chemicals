import React from "react";
import { NavLink } from "react-router-dom";

class ServicesSidebar extends React.Component {
  render() {
    return (
      <>
        <div className="col-lg-4 col-md-12 rightSidebar">
          <div className="all_services">
            <ul>
              <li>
                <NavLink to={"/services-1"}>All Services</NavLink>
              </li>
              <li>
                <NavLink to={"/services-oilgas"}>Power Plants</NavLink>
              </li>
              <li>
                <NavLink to={"/services-chemical"}>Textile Industry</NavLink>
              </li>
              <li>
                <NavLink to={"/services-mechanical"}>Sugar Industry</NavLink>
              </li>
              <li>
                <NavLink to={"/services-civil"}>Cement Industry</NavLink>
              </li>
              <li>
                <NavLink to={"/services-powerenergy"}>
                  Fertiliser Industry
                </NavLink>
              </li>{" "}
              <li>
                <NavLink to={"/services-automotive"}>
                  Pulp and Paper Industry
                </NavLink>
              </li>
              <li>
                <NavLink to={"/services-agricultural"}>
                  {" "}
                  Food and Beverage Industry
                </NavLink>
              </li>
              <li>
                <NavLink to={"/services-water"}>
                  Water Treatment Chemicals
                </NavLink>
              </li>
            </ul>
          </div>
          {/* <div className="service-side-btn m-b30 site-bg-secondry p-a20 text-white">
            <h2 className="wt-title">Brochures</h2>
            <p>
              View our 2020 financial prospectus brochure for an easy to read
              guide on all of the services offer.
            </p>
            <div className="wt-icon-box-wraper left ">
              <NavLink to={"#"} className="btn-block  p-a15 m-tb10">
                <span className="text-black m-r10">
                  <i className="fa fa-file-pdf-o" />
                </span>
                <strong className="text-uppercase text-black">
                  Download .PDF
                </strong>
              </NavLink>
            </div>
            <div className="wt-icon-box-wraper left">
              <NavLink to={"#"} className="btn-block  p-a15 m-tb10">
                <span className="text-black m-r10">
                  <i className="fa fa-file-word-o" />
                </span>
                <strong className="text-uppercase text-black">
                  {" "}
                  Download .DOC
                </strong>
              </NavLink>
            </div>
            <div className="wt-icon-box-wraper left">
              <NavLink to={"#"} className="btn-block p-a15 m-t10">
                <span className="text-black m-r10">
                  <i className="fa fa-file-powerpoint-o" />
                </span>
                <strong className="text-uppercase text-black">
                  Download .PPT
                </strong>
              </NavLink>
            </div>
          </div> */}
        </div>
      </>
    );
  }
}

export default ServicesSidebar;
