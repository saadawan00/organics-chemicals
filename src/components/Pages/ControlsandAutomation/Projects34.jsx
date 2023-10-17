import React from 'react';
import { NavLink } from 'react-router-dom';


const projects = [
    {
        image: require('./../../../images/product_images/Actuators, Positioners, Valve Monitors/Industrial Surveillance Equipment.jpg'),
        title: 'Pressure & Temperature Control',
        description: 'Will Be Provided By Ali Zia CEO',
        
    },
    {
        image: require('./../../../images/product_images/Actuators, Positioners, Valve Monitors/Optic Flame Detection.jpg'),
        title: 'Pressure & Temperature Control',
        description: 'Will Be Provided By Ali Zia CEO',
        
    },

    {
        image: require('./../../../images/product_images/Actuators, Positioners, Valve Monitors/Toxic Gas Detection.jpg'),
        title: 'Pressure & Temperature Control',
        description: 'Will Be Provided By Ali Zia CEO',
        
    },
    {
        image: require('./../../../images/product_images/Actuators, Positioners, Valve Monitors/Gas Leak Detectors.jpg'),
        title: 'Pressure & Temperature Panel Meter',
        description: 'Will Be Provided By Ali Zia CEO',
        
    },
    {
        image: require('./../../../images/product_images/Actuators, Positioners, Valve Monitors/Flue Gas Analyzers.jpg'),
        title: 'Pressure & Temperature Transmitters',
        description: 'Will Be Provided By Ali Zia CEO',
        
    },
    {
        image: require('./../../../images/product_images/Actuators, Positioners, Valve Monitors/Flame Safeguard & Combustion Controls.jpg'),
        title: 'Pressure & Temperature Switches',
        description: 'Will Be Provided By Ali Zia CEO',
        
    },
    {
        image: require('./../../../images/product_images/Actuators, Positioners, Valve Monitors/Combustible Gas Detection.jpg'),
        title: 'Pressure & Temperature Transducers',
        description: 'Will Be Provided By Ali Zia CEO',
        
    },
   
   
];

class Projects34 extends React.Component {
    
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-white">
                    <div className="container">
                        {/* PAGINATION START */}
                        <div className="filter-wrap work-grid p-b30 text-center">
                            
                        </div>
                        {/* PAGINATION END */}
                        {/* GALLERY CONTENT START */}
                        <div className="masonry-wrap mfp-gallery  row clearfix d-flex justify-content-center flex-wrap">
                            {projects.map((item, index) => (
                                <div key={index} className={`${item.filter} masonry-item col-lg-4 col-md-6 col-sm-6 m-b30`}>
                                    <div className="project-img-effect-1">
                                        <img src={item.image} alt="" />
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
                                            <NavLink     to={{
                                                  pathname: "/requestqoute",
                                                  state: { item:item.title },
                                                }} className="site-button-link" style={{color:"white"}}>Request For Price</NavLink>
                                            </button>                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* GALLERY CONTENT END */}
                    </div>
                </div>
            </>
        );
    }
};

export default Projects34;