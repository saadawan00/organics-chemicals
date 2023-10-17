import React from 'react';
import { NavLink } from 'react-router-dom';


const projects = [
    {
        image: require('./../../../images/product_images/Burners/Burner1/Combustible Gas Detection.jpg'),
        title: 'Gas Detection',
        description: 'Will Be Provided By Ali Zia CEO',
  
    },
    {
        image: require('./../../../images/product_images/Burners/Burner1/Flame Safeguard & Combustion Controls.jpg'),
        title: 'Combustion Controls',
        description: 'Will Be Provided By Ali Zia CEO',
     
    },

    {
        image: require('./../../../images/product_images/Burners/Burner1/Flue Gas Analyzers.jpg'),
        title: 'Gas Analyzers',
        description: 'Will Be Provided By Ali Zia CEO',
    
    },
    {
        image: require('./../../../images/product_images/Burners/Burner1/Gas Leak Detectors.jpg'),
        title: 'Leak Detectors',
        description: 'Will Be Provided By Ali Zia CEO',
   
    },
    {
        image: require('./../../../images/product_images/Burners/Burner1/Industrial Surveillance Equipment.jpg'),
        title: 'Surveillance Equipment',
        description: 'Will Be Provided By Ali Zia CEO',
        
    },
    {
        image: require('./../../../images/product_images/Burners/Burner1/Optic Flame Detection.jpg'),
        title: 'Flame Detection',
        description: 'Will Be Provided By Ali Zia CEO',
        
    },
    {
        image: require('./../../../images/product_images/Burners/Burner1/Smoke Detection.jpg'),
        title: 'Smoke Detection',
        description: 'Will Be Provided By Ali Zia CEO',
        
    },
    {
        image: require('./../../../images/product_images/Burners/Burner1/Toxic Gas Detection.jpg'),
        title: 'Toxic Gas',
        description: 'Will Be Provided By Ali Zia CEO',
        
    },
   
   
];

class Projects25 extends React.Component {
    
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

export default Projects25;