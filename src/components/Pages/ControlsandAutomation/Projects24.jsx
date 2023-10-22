import React from 'react';
import { NavLink } from 'react-router-dom';

import { sidebarItems } from './index';
import Sidebar from '../../Segments/Sidebar';

const projects = [
    {
        image: require('./../../../images/product_images/V Belts, Coupling & Bearings/Ball Bearings.jpg'),
        title: 'Ball Bearings',
    },
    {
        image: require('./../../../images/product_images/V Belts, Coupling & Bearings/Conveyor Belt.jpg'),
        title: 'Conveyor Belt',
    },

    {
        image: require('./../../../images/product_images/V Belts, Coupling & Bearings/Cylinderical Roller Bearing.jpg'),
        title: 'Cylinderical Roller',
    },
    {
        image: require('./../../../images/product_images/V Belts, Coupling & Bearings/Disc & Fluid Coupling.jpg'),
        title: 'Fluid Coupling',
    },
    {
        image: require('./../../../images/product_images/V Belts, Coupling & Bearings/Gear & Rigid Coupling.jpg'),
        title: 'Rigid Coupling',
    },
    {
        image: require('./../../../images/product_images/V Belts, Coupling & Bearings/Sleeve Bearing.jpg'),
        title: 'Sleeve Bearing',
    },
    {
        image: require('./../../../images/product_images/V Belts, Coupling & Bearings/Thrust Bearings.jpg'),
        title: 'Thrust Bearings',
    },

    {
        image: require('./../../../images/product_images/V Belts, Coupling & Bearings/Timing Belts.jpg'),
        title: 'Timing Belts',
    },
    {
        image: require('./../../../images/product_images/V Belts, Coupling & Bearings/Torsionally Soft, Stiff Coupling.jpg'),
        title: 'Stiff Coupling',
        description: 'Will Be Provided By Ali Zia CEO',
    },
    {
        image: require('./../../../images/product_images/V Belts, Coupling & Bearings/V Belts.jpg'),
        title: 'V Belts',
        description: 'Will Be Provided By Ali Zia CEO',
    },
   
   
];

class Projects24 extends React.Component {
    
    render() {
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
          
                          <div className="masonry-wrap mfp-gallery row clearfix d-flex justify-content-center flex-wrap">
                            {projects.map((item, index) => (
                              <div
                                key={index}
                                className={`${item.filter} masonry-item col-lg-4 col-md-6 col-sm-6 m-b30`}
                              >
                                <div className="project-img-effect-1">
                                  <img
                                    src={item.image}
                                    alt=""
                                    style={{
                                      padding: '42px',
                                      background: 'white',
                                    }}
                                  />
                                  <div className="wt-info">
                                    <h3 className="wt-tilte m-b10 m-t0">{item.title}</h3>
                                    <p>{item.description}</p>
          
                                    <button
                                      style={{
                                        backgroundColor: '#1c63b8',
                                        border: '1px',
                                        borderRadius: '5px',
                                        color: 'white',
                                        padding: '15px 32px',
                                        textAlign: 'center',
                                        textDecoration: 'none',
                                        display: 'inline-block',
                                        fontSize: '16px',
                                        margin: '4px 2px',
                                        cursor: 'pointer',
                                        transitionduration: '0.4s',
                                      }}
                                    >
                                      <NavLink
                                        to={{
                                          pathname: '/requestqoute',
                                          state: { item: item.title },
                                        }}
                                        className="site-button-link"
                                        style={{ color: 'white' }}
                                      >
                                        Request For Price
                                      </NavLink>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))}
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

export default Projects24;