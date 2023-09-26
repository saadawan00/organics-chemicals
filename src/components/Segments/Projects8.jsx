import React from 'react';
import { NavLink } from 'react-router-dom';

const filters = [
    { label: "Oil & Gas", filter: ".cat-1" },
    { label: "Chemical", filter: ".cat-2" },
    { label: "Agriculture", filter: ".cat-3" }
];

const projects = [
    {
        image: require('./../../images/project/square/1.jpg'),
        title: 'Manufacturing',
        category: 'Mechanical Engineering',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/project/square/2.jpg'),
        title: 'Oil &amp; Gas',
        category: 'Al Zour Refinery',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/project/square/3.jpg'),
        title: 'Construction',
        category: 'Fehmarn Belt Fixed Link',
        filter: 'cat-3'
    },
    {
        image: require('./../../images/project/square/4.jpg'),
        title: 'Chemical',
        category: 'Citrus Battery',
        filter: 'cat-1'
    },
    {
        image: require('./../../images/project/square/5.jpg'),
        title: 'Industrial',
        category: 'Space Technology',
        filter: 'cat-2'
    },
    {
        image: require('./../../images/project/square/6.jpg'),
        title: 'Agriculture',
        category: 'Soil and Water Testing',
        filter: 'cat-3'
    }
];

class Projects8 extends React.Component {
    
    render() {
        
        return (
            <>
                <div className="section-full p-t80 p-b80 p-lr30 project-style-new site-bg-gray">
                    <div className="container">
                        <div className="wt-separator-two-part">
                            <div className="row wt-separator-two-part-row">
                                <div className="col-xl-6 col-lg-12 col-md-12 wt-separator-two-part-left">
                                    {/* TITLE START*/}
                                    <div className="section-head left wt-small-separator-outer">
                                        <div className="wt-small-separator site-text-primary">
                                            <div className="sep-leaf-left" />
                                            <div>Explore Recent Work</div>
                                            <div className="sep-leaf-right" />
                                        </div>
                                        <h2>We've Done Lot's Projects Let's Check Some Here</h2>
                                    </div>
                                    {/* TITLE END*/}
                                </div>
                                <div className="col-xl-6 col-lg-12 col-md-12 wt-separator-two-part-right text-right">
                                    <ul className="btn-filter-wrap">
                                        <li className="btn-filter btn-active" data-filter="*">All Cases</li>
                                        {filters.map((item, index) => (
                                            <li className="btn-filter" key={index} data-filter={item.filter}>{item.label}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* IMAGE CAROUSEL START */}
                    <div className="section-content">
                        <div className="owl-carousel owl-carousel-filter  owl-btn-vertical-center">
                            {projects.map((item, index) => (
                                <div key={index} className={`${item.filter} item`}>
                                    <div className="wt-img-effect project-new-1">
                                        <img src={item.image.default} alt="" />
                                        <div className="project-new-content">
                                            <span className="project-new-category">{item.category}</span>
                                            <h3 className="wt-title"><NavLink to={"/project-detail"} className="site-text-secondry">{item.title}</NavLink></h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Projects8;