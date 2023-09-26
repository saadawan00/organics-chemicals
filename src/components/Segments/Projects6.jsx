import React from 'react';
import { NavLink } from 'react-router-dom';

const filters = [
    { label: "Solar", filter: ".cat-1" },
    { label: "Ecosystem", filter: ".cat-2" },
    { label: "Organic", filter: ".cat-3" },
    { label: "Biology", filter: ".cat-4" },
    { label: "Recycling", filter: ".cat-5" }
];

const projects = [
    {
        image: require('./../../images/solar-icon/gallery/pic1.jpg'),
        title: 'Solar Thermal Systems',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/solar-icon/gallery/pic2.jpg'),
        title: 'Residential Solutions',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/solar-icon/gallery/pic3.jpg'),
        title: 'Commercial solutions',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/solar-icon/gallery/pic4.jpg'),
        title: 'Residential EV Chargers',
        filter: 'cat-4'
    },
    {
        image: require('./../../images/solar-icon/gallery/pic5.jpg'),
        title: 'Residential Solutions',
        filter: 'cat-5'
    },
    {
        image: require('./../../images/solar-icon/gallery/pic6.jpg'),
        title: 'Solar Thermal Systems',
        filter: 'cat-4'
    }
];

var bnr1 = require('./../../images/solar-icon/bg/1.png');

class Projects6 extends React.Component {
    
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50  bg-no-repeat bg-bottom-right" style={{ backgroundImage: 'url(' + bnr1.default + ')', backgroundColor: '#dff6fc' }}>
                    <div className="container">
                        {/* TITLE START*/}
                        <div className="section-head center wt-small-separator-outer text-center">
                            <div className="wt-small-separator site-text-primary">
                                <div className="sep-leaf-left" />
                                <div>Explore Recent Work</div>
                                <div className="sep-leaf-right" />
                            </div>
                            <h2>We've Done Lot's Projects Let's Check Some Here</h2>
                        </div>
                        {/* TITLE END*/}
                        {/* PAGINATION START */}
                        <div className="filter-wrap work-grid p-b30 text-center">
                            <ul className="masonry-filter link-style ">
                                <li className="active"><NavLink to={"#"} data-filter="*">All Cases</NavLink></li>
                                {filters.map((item, index) => (
                                    <li key={index}><NavLink to={"#"} data-filter={item.filter}>{item.label}</NavLink></li>
                                ))}
                            </ul>
                        </div>
                        {/* PAGINATION END */}
                        {/* GALLERY CONTENT START */}
                        <div className="masonry-wrap mfp-gallery  row clearfix d-flex justify-content-center flex-wrap">
                            {projects.map((item, index) => (
                                <div key={index} className={`${item.filter} masonry-item col-lg-4 col-md-6 col-sm-6 m-b30`}>
                                    <div className="project-img-effect-1">
                                        <img src={item.image.default} alt="" />
                                        <div className="wt-info">
                                            <h3 className="wt-tilte m-b0 m-t0"><NavLink to={"/project-detail"}>{item.title}</NavLink></h3>
                                        </div>
                                        <a href={item.image.default} className="mfp-link"><i className="fa fa-search-plus" /></a>
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

export default Projects6;