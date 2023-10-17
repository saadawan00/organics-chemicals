import React from 'react';
import { NavLink } from 'react-router-dom';


const projects = [
    {
        image: require('./../../../images/product_images/V Belts, Coupling & Bearings/Ball Bearings.jpg'),
        title: 'Ball Bearings',
        description: 'Will Be Provided By Ali Zia CEO',
    },
    {
        image: require('./../../../images/product_images/V Belts, Coupling & Bearings/Conveyor Belt.jpg'),
        title: 'Conveyor Belt',
        description: 'Will Be Provided By Ali Zia CEO',
    },

    {
        image: require('./../../../images/product_images/V Belts, Coupling & Bearings/Cylinderical Roller Bearing.jpg'),
        title: 'Cylinderical Roller',
        description: 'Will Be Provided By Ali Zia CEO',
    },
    {
        image: require('./../../../images/product_images/V Belts, Coupling & Bearings/Disc & Fluid Coupling.jpg'),
        title: 'Fluid Coupling',
        description: 'Will Be Provided By Ali Zia CEO',
    },
    {
        image: require('./../../../images/product_images/V Belts, Coupling & Bearings/Gear & Rigid Coupling.jpg'),
        title: 'Rigid Coupling',
        description: 'Will Be Provided By Ali Zia CEO',
    },
    {
        image: require('./../../../images/product_images/V Belts, Coupling & Bearings/Sleeve Bearing.jpg'),
        title: 'Sleeve Bearing',
        description: 'Will Be Provided By Ali Zia CEO',
    },
    {
        image: require('./../../../images/product_images/V Belts, Coupling & Bearings/Thrust Bearings.jpg'),
        title: 'Thrust Bearings',
        description: 'Will Be Provided By Ali Zia CEO',
    },

    {
        image: require('./../../../images/product_images/V Belts, Coupling & Bearings/Timing Belts.jpg'),
        title: 'Timing Belts',
        description: 'Will Be Provided By Ali Zia CEO',
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
                                    <div className="project-img-effect-1" style={{}}>
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

export default Projects24;