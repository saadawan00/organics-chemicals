import React from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar from '../../Segments/Sidebar';
import { sidebarItems } from './index';



const projects = [
    {
        image: require('./../../../images/product_images/Level & Flow/Differential & Hydrostatic Pressure Transmitters.jpg'),
        title: 'Pressure Transmitters',
      
    },
    {
        image: require('./../../../images/product_images/Level & Flow/Flowmeters.jpg'),
        title: 'Flowmeters',
        
    },

    {
        image: require('./../../../images/product_images/Level & Flow/Level & Flow Switches and Gauges.jpg'),
        title: 'Flow Switches ',
        
    },
    {
        image: require('./../../../images/product_images/Level & Flow/Magnetic Level Gazge & Sight Glass.jpg'),
        title: ' Level Gazge ',
     
    },
    {
        image: require('./../../../images/product_images/Level & Flow/Rotary & Ultrasonic Transmitters.jpg'),
        title: 'Ultrasonic Transmitters',
       
    },
    {
        image: require('./../../../images/product_images/Level & Flow/Thermal Mass Flow Meter.jpg'),
        title: 'Thermal Mass',
       
    },
    {
        image: require('./../../../images/product_images/Level & Flow/pH, Conductivity Sensors.jpg'),
        title: 'Conductivity Sensors',
       
    },
   
   
];

class Projects20 extends React.Component {
    
    render() {
        return (
            <>
          <>
       
        <div className="page-content">
          {/* INNER PAGE BANNER */}
        
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
                        
                        <div className="masonry-wrap mfp-gallery  row clearfix d-flex justify-content-center flex-wrap">
                            {projects.map((item, index) => (
                                <div key={index} className={`${item.filter} masonry-item col-lg-4 col-md-6 col-sm-6 m-b30`}>
                                    <div className="project-img-effect-1">
                                        <img src={item.image} alt="" style={{
                                            padding: '42px',
                                            background: 'white'
                                        }} />
                                        <div className="wt-info">
                                            <h3 className="wt-tilte m-b10 m-t0">{item.title}</h3>
                                            <p>{item.description}</p>
                                            
                                            <button style={{ backgroundColor: "#1c63b8", /* Blue */
  border: '1px',
  borderRadius: "5px",
  color: "white",
  padding: "15px 32px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  margin: "4px 2px",
  cursor: "pointer",
  transitionduration: "0.4s"}}>
                                                <NavLink 
                                                 to={{
                                                  pathname: "/requestqoute",
                                                  state: { item:item.title },
                                                }}
                                               
                                                 className="site-button-link" style={{color:"white"}}>Request For Price</NavLink>

                                        </button>                                        </div>
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
          </>
        </div>
      </>
                <div className="section-full p-t80 p-b50 bg-white">
                    <div className="container">
                        {/* PAGINATION START */}
                        <div className="filter-wrap work-grid p-b30 text-center">
                            
                        </div>
                        {/* PAGINATION END */}
                        {/* GALLERY CONTENT START */}
                       
                        {/* GALLERY CONTENT END */}
                    </div>
                </div>
              
            </>
            
        );
    }
};

export default Projects20;