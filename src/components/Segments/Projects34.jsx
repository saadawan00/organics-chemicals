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
        image: require('./../../images/product_images/Actuators, Positioners, Valve Monitors/Industrial Surveillance Equipment.jpg'),
        title: 'Pressure & Temperature Control',
        description: 'Will Be Provided By Ali Zia CEO',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/product_images/Actuators, Positioners, Valve Monitors/Optic Flame Detection.jpg'),
        title: 'Pressure & Temperature Control',
        description: 'Will Be Provided By Ali Zia CEO',
        filter: 'cat-2'
    },

    {
        image: require('./../../images/product_images/Actuators, Positioners, Valve Monitors/Toxic Gas Detection.jpg'),
        title: 'Pressure & Temperature Control',
        description: 'Will Be Provided By Ali Zia CEO',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/product_images/Actuators, Positioners, Valve Monitors/Gas Leak Detectors.jpg'),
        title: 'Pressure & Temperature Panel Meter',
        description: 'Will Be Provided By Ali Zia CEO',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/product_images/Actuators, Positioners, Valve Monitors/Flue Gas Analyzers.jpg'),
        title: 'Pressure & Temperature Transmitters',
        description: 'Will Be Provided By Ali Zia CEO',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/product_images/Actuators, Positioners, Valve Monitors/Flame Safeguard & Combustion Controls.jpg'),
        title: 'Pressure & Temperature Switches',
        description: 'Will Be Provided By Ali Zia CEO',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/product_images/Actuators, Positioners, Valve Monitors/Combustible Gas Detection.jpg'),
        title: 'Pressure & Temperature Transducers',
        description: 'Will Be Provided By Ali Zia CEO',
        filter: 'cat-2'
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
                                            <NavLink to={"/project-detail"} className="site-button-link">Request For Price</NavLink>
                                        </div>
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