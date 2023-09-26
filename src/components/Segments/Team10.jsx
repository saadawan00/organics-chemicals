import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const teamMembers = [
    {
        image: require('./../../images/home-11/team/pic1.jpg'),
        membername: 'Ronald Long',
        position: 'Contractor'
    },
    {
        image: require('./../../images/home-11/team/pic2.jpg'),
        membername: 'Ashley Sanchez',
        position: 'Contractor'
    },
    {
        image: require('./../../images/home-11/team/pic3.jpg'),
        membername: 'Juliana Bryant',
        position: 'Contractor'
    },
    {
        image: require('./../../images/home-11/team/pic4.jpg'),
        membername: 'Shirley Gibson',
        position: 'Contractor'
    }
]

class Team10 extends React.Component {
    render() {
        const options = {
            loop:true,
			nav:true,
			dots: false,				
			margin:30,
			autoplay:false,
			navText: ['<i>Prev</i>', '<i>Next</i>'],
			responsive:{
				0:{
					items:1,
				},
				480:{
					items:1,
				},			
				767:{
					items:2,
				},
				1000:{
					items:2
				}
			}
        };
        return (
            <>
                <div className="section-full p-t90 p-b50 bg-white">
                    <div className="container">
                        <div className="section-content">
                            <div className="row justify-content-center d-flex">
                                <div className="col-xl-8 col-lg-7 col-md-12 m-b30">
                                    <div className="team-carousel-wraper">
                                        <OwlCarousel className="owl-carousel team-carousel owl-btn-bottom-left" {...options}>
                                            {teamMembers.map((item, index) => (
                                                <div key={index} className="item">
                                                    <div className="wt-team-2">
                                                        <div className="wt-media">
                                                            <img src={item.image.default} alt="" />
                                                            <div className="team-social-center">
                                                                <ul className="team-social-icon">
                                                                    <li><NavLink to={"#"}><i className="fa fa-facebook-f" /></NavLink></li>
                                                                    <li><NavLink to={"#"}><i className="fa fa-twitter" /></NavLink></li>
                                                                    <li><NavLink to={"#"}><i className="fa fa-linkedin" /></NavLink></li>
                                                                    <li><NavLink to={"#"}><i className="fa fa-pinterest" /></NavLink></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="wt-info">
                                                            <div className="team-detail  text-center">
                                                                <h3 className="m-t0 m-b15"><NavLink to={"/team-single"}>{item.membername}</NavLink></h3>
                                                                <p>{item.position}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </OwlCarousel>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-5 col-md-12 m-b30">
                                    {/* TITLE START*/}
                                    <div className="section-head left wt-small-separator-outer">
                                        <div className="wt-small-separator site-text-primary">
                                            <div>Our Best Team</div>
                                        </div>
                                        <h2 className="wt-title">We have a group of talented and trained members all the time.</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                                            diam nonummy nibh euismod tinciunt consectetuer adipiscing
                                            elit, sed diam nonummy</p>
                                        <NavLink to={"/team-single"} className="site-button site-btn-effect">View All</NavLink>
                                    </div>
                                    {/* TITLE END*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Team10;