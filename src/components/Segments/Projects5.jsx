import React from 'react';
import { NavLink } from 'react-router-dom';

const projects = [
    {
        title: 'Modren Garden',
        image: require('./../../images/project_3/pic1.jpg'),
        description: 'Progressively maintain extensive infomediaries via extensible nich.',
    },
    {
        title: 'Wooden Decks',
        image: require('./../../images/project_3/pic2.jpg'),
        description: 'Progressively maintain extensive infomediaries via extensible nich.',
    },
    {
        title: 'Leaf Cutting',
        image: require('./../../images/project_3/pic3.jpg'),
        description: 'Progressively maintain extensive infomediaries via extensible nich.',
    },
    {
        title: 'Lawn Mower',
        image: require('./../../images/project_3/pic4.jpg'),
        description: 'Progressively maintain extensive infomediaries via extensible nich.',
    },
    {
        title: 'Parking Cleaning',
        image: require('./../../images/project_3/pic5.jpg'),
        description: 'Progressively maintain extensive infomediaries via extensible nich.',
    },
    {
        title: 'Design Planting',
        image: require('./../../images/project_3/pic6.jpg'),
        description: 'Progressively maintain extensive infomediaries via extensible nich.',
    }
]

class Projects5 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b40">
                    <div className="container">
                        <div className="section-content">
                            <div className="wt-separator-two-part">
                                <div className="row wt-separator-two-part-row">
                                    <div className="col-lg-8 col-md-7 wt-separator-two-part-left">
                                        {/* TITLE START*/}
                                        <div className="section-head left wt-small-separator-outer">
                                            <div className="wt-small-separator site-text-primary">
                                                <div className="sep-leaf-left" />
                                                <div>Our Projects</div>
                                                <div className="sep-leaf-right" />
                                            </div>
                                            <h2>Our Latest Works</h2>
                                        </div>
                                        {/* TITLE END*/}
                                    </div>
                                    <div className="col-lg-4 col-md-5 wt-separator-two-part-right text-right">
                                        <NavLink to={"/project-grid"} className="site-button site-btn-effect">More Detail</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center">
                                {projects.map((item, index) => (
                                    <div key={index} className="col-lg-4 col-md-6 col-sm-12 m-b50">
                                        <div className="wt-box service-box-2 bg-white">
                                            <div className="service-box-2-media m-b20">
                                                <img src={item.image.default} alt="" />
                                            </div>
                                            <div className="service-box-title title-style-2 site-text-secondry">
                                                <span className="s-title-one">{item.title}</span>
                                                <span className="s-title-two" />
                                            </div>
                                            <div className="service-box2-content">
                                                <p>{item.description}</p>
                                                <NavLink to="/project-detail" className="site-button-link">Read More</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Projects5;