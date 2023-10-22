import React from 'react';
import { NavLink } from 'react-router-dom';

import { sidebarItems } from './index';
import Sidebar from '../../Segments/Sidebar';

const projects = [
    {
        image: require('./../../../images/product_images/Pressure & Temperature/Pressure & Temperature Gauges.jpg'),
        title: 'Temperature Gauges',
      
    },
    {
        image: require('./../../../images/product_images/Pressure & Temperature/Pressure & Temperature Panel Meter.jpg'),
        title: 'Temperature Panel Meter',
       
    },

    {
        image: require('./../../../images/product_images/Pressure & Temperature/Pressure & Temperature Switches.jpg'),
        title: 'Temperature Switches',
        
    },
    {
        image: require('./../../../images/product_images/Pressure & Temperature/Pressure & Temperature Transducers.jpg'),
        title: 'Temperature Transducers',
       
    },
    {
        image: require('./../../../images/product_images/Pressure & Temperature/Pressure & Temperature Transmitters.jpg'),
        title: 'Temperature Transmitters',
      
    },
    {
        image: require('./../../../images/product_images/Pressure & Temperature/Thermowells and RTDs.jpg'),
        title: 'Thermowells and RTDs',
        
    },
   
   
];

class Projects22 extends React.Component {
    
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

export default Projects22;