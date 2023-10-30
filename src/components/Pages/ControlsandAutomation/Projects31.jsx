import React from 'react';
import { NavLink } from 'react-router-dom';

import { sidebarItems } from './index';
import Sidebar from '../../Segments/Sidebar';



const ChemicalsCard = ({ label, imageName }) => {
  return (
    <div key={imageName} className="col-lg-3 col-xs-3 p-60 p-r2 p-t10 p-b30">
      <div className="wt-icon-card shadow d-flex align-items-center flex-column border p-b10 p-t10 p-r4 p-l4 hover-opacity-dim pointer hover-border-blue">
        <img width={80} src={require(`./../../../images/product_images/Compressor Part & Accessories/${imageName}`)} alt="" />
        <p className="p-t20 text-center" style={{ height: 50, fontSize: 14 }}>{label}</p>
        <div style={{ position: "absolute", top: 80 }}>
          <NavLink
            to={{
              pathname: "/requestqoute",
              state: { item:label },
            }}
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

class Projects31 extends React.Component {
  

   
  render() {
    const picturesData = [
      { label: "Gauge and Valves", imageName: "Gauge and Valves.jpeg" },
      { label: "Piston and Bearing", imageName: "Piston and Bearing Kit.jpeg" },
      { label: "Seperator Element", imageName: "Seperator Element.jpg" },
      { label: "Shaft Seal Kit", imageName: "Shaft Seal Kit.jpg" },

    ];
        return (
          <>
  {/* Header Component (if any) */}

  <div className="page-content">
    {/* INNER PAGE BANNER (if any) */}
    {/* INNER PAGE BANNER END (if any) */}

    <div className="section-full small-device p-t80 p-b50 bg-white">
      <div className="section-content">
        <div className="container">
          <div className="row">
            {/* Sidebar Component */}
            <Sidebar navBarItems={sidebarItems} />

            <div className="col-lg-8 col-md-12">
              <div className="section-content">
                {/* TITLE START (if any) */}
                {/* TITLE END (if any) */}

                <div className="container">
                          <div className="row">
                            {picturesData.map((item, idx) => (
                              <ChemicalsCard key={idx} {...item} />
                            ))}
                        </div>
                        </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="section-full p-t80 p-b50 bg-white">
    <div className="container">
      {/* PAGINATION START (if any) */}
      {/* PAGINATION END (if any) */}
      {/* GALLERY CONTENT START (if any) */}
      {/* GALLERY CONTENT END (if any) */}
    </div>
  </div>
</>
            
        );
                                      }
};

export default Projects31;