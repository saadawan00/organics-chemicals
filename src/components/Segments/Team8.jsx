import React from 'react';
import { NavLink } from 'react-router-dom';

const teamMembers = [
    {
        image: require('./../../images/team/pic1.jpg'),
        membername: 'Staephan Humbert',
        position: 'Photographer'
    },
    {
        image: require('./../../images/team/pic2.jpg'),
        membername: 'Leo Simon',
        position: 'Creative Director'
    },
    {
        image: require('./../../images/team/pic3.jpg'),
        membername: 'John Casey',
        position: 'Photographer'
    }
]

class Team8 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-white team-bg-section-outer">
                    <div className="container">
                        <div className="section-content">
                            {/* TITLE START*/}
                            <div className="section-head center wt-small-separator-outer text-center">
                                <div className="wt-small-separator site-text-primary">
                                    <div className="sep-leaf-left" />
                                    <div>Our Experts</div>
                                    <div className="sep-leaf-right" />
                                </div>
                                <h2>We will serve you with the best of our capacity by expert team</h2>
                            </div>
                            {/* TITLE END*/}
                            <div className="section-content">
                                <div className="row justify-content-center">
                                    {teamMembers.map((item, index) => (
                                        <div key={index} className="col-lg-4 col-md-6 col-sm-12 m-b30">
                                            <div className="wt-team-10">
                                                <div className="wt-media">
                                                    <img src={item.image.default} alt="" />
                                                </div>
                                                <div className="wt-info">
                                                    <div className="team-detail p-t30">
                                                        <span className="title-style-2 team-position site-text-primary">{item.position}</span>
                                                        <h3 className="m-t0 team-name"><NavLink to={"/team-single"} className="site-text-secondry">{item.membername}</NavLink></h3>
                                                    </div>
                                                    <div className="team-social-center">
                                                        <ul className="team-social-bar">
                                                            <li><NavLink to={"#"}><i className="fa fa-facebook-f" /></NavLink></li>
                                                            <li><NavLink to={"#"}><i className="fa fa-twitter" /></NavLink></li>
                                                            <li><NavLink to={"#"}><i className="fa fa-linkedin" /></NavLink></li>
                                                            <li><NavLink to={"#"}><i className="fa fa-instagram" /></NavLink></li>
                                                            <li><NavLink to={"#"}><i className="fa fa-tumblr" /></NavLink></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Team8;