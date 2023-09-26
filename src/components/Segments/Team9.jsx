import React from 'react';
import { NavLink } from 'react-router-dom';

const teamMembers = [
    {
        image: require('./../../images/ui-10/our-team1/1.jpg'),
        membername: 'Taminm Alows',
        position: 'Architect'
    },
    {
        image: require('./../../images/ui-10/our-team1/2.jpg'),
        membername: 'Michael Evens',
        position: 'Architect'
    },
    {
        image: require('./../../images/ui-10/our-team1/3.jpg'),
        membername: 'Pamela Smith',
        position: 'Architect'
    },
    {
        image: require('./../../images/ui-10/our-team1/4.jpg'),
        membername: 'Taminm Alows',
        position: 'Architect'
    }
]

class Team9 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-white arc2-team-wrapper">
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
                                        <div key={index} className="col-lg-3 col-md-6 col-sm-6 m-b30">
                                            <div className="wt-team-arc2 wt-team-arc2-no-border">
                                                <div className="wt-media">
                                                    <img src={item.image.default} alt="" />
                                                    <div className="team-social-center">
                                                        <ul className="team-social-icon">
                                                            <li><NavLink to={"#"} className="fa fa-google"></NavLink></li>
                                                            <li><NavLink to={"#"} className="fa fa-facebook"></NavLink></li>
                                                            <li><NavLink to={"#"} className="fa fa-twitter"></NavLink></li>
                                                            <li><NavLink to={"#"} className="fa fa-linkedin"><i className="fa fa-tumblr" /></NavLink></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="wt-info bg-gray-light p-a20">
                                                    <div className="team-detail  text-center">
                                                        <h4 className="m-t0">{item.membername}</h4>
                                                        <p>{item.position}</p>
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

export default Team9;