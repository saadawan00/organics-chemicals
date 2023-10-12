import React from 'react';
import { NavLink } from 'react-router-dom';
const filters = [
    { label: "Chemical", filter: ".cat-1" },
    { label: "Construction", filter: ".cat-2" },
    { label: "Industrial", filter: ".cat-3" },
    { label: "Oil & Gas", filter: ".cat-4" },
    { label: "Agriculture", filter: ".cat-5" }
];

const projects = [
    {
        image: require('./../../images/product_images/Actuators, Positioners, Valve Monitors 2/Gearboxes and Accessories.jpg'),
        title: 'Gearboxes and Accessories',
        description: 'Will Be Provided By Ali Zia CEO',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/product_images/Actuators, Positioners, Valve Monitors 2/Linear & Rotary Valve Monitors.jpg'),
        title: 'Linear & Rotary Valve',
        description: 'Will Be Provided By Ali Zia CEO',
        filter: 'cat-2'
    },

    {
        image: require('./../../images/product_images/Actuators, Positioners, Valve Monitors 2/Multiport Flow Sectors.jpg'),
        title: 'Multiport Flow Sectors',
        description: 'Will Be Provided By Ali Zia CEO',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/product_images/Actuators, Positioners, Valve Monitors 2/Precision Control Instruments.jpg'),
        title: 'Precision Control',
        description: 'Will Be Provided By Ali Zia CEO',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/product_images/Actuators, Positioners, Valve Monitors 2/Valve Actuators.jpg'),
        title: 'Valve Actuators',
        description: 'Will Be Provided By Ali Zia CEO',
        filter: 'cat-2'
    },
    
   
   
];

class Projects21 extends React.Component {
    
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
                                        <img src={item.image} alt="" style={{
                                            padding: '42px',
                                            background: 'white'
                                        }}/>
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
                                            <NavLink to={"/project-detail"} className="site-button-link" style={{color:"white"}}>Request For Price</NavLink>
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

export default Projects21;