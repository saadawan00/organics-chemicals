import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const projects = [
    {
        title: 'Metal Industry',
        image: require('./../../images/oil-gas/projects/pic1.jpg'),
        fullimage: require('./../../images/oil-gas/projects/pic1.jpg'),
    },
    {
        title: 'Alternative Energy',
        image: require('./../../images/oil-gas/projects/pic2.jpg'),
        fullimage: require('./../../images/oil-gas/projects/pic2.jpg'),
    },
    {
        title: 'Areb Oil Rigs',
        image: require('./../../images/oil-gas/projects/pic3.jpg'),
        fullimage: require('./../../images/oil-gas/projects/pic3.jpg'),
    },
    {
        title: 'Gothia Mining Factory',
        image: require('./../../images/oil-gas/projects/pic4.jpg'),
        fullimage: require('./../../images/oil-gas/projects/pic4.jpg'),
    },
    {
        title: 'Warehouse Industry',
        image: require('./../../images/oil-gas/projects/pic5.jpg'),
        fullimage: require('./../../images/oil-gas/projects/pic5.jpg'),
    },
    {
        title: 'Warehouse Industry',
        image: require('./../../images/oil-gas/projects/pic6.jpg'),
        fullimage: require('./../../images/oil-gas/projects/pic6.jpg'),
    },
]

var bnr1 = require('./../../images/oil-gas/bg/bg1.jpg');

class Projects7 extends React.Component {
    render() {
        const options = {
            loop:true,
		autoplay:true,
		nav:false,
		dots: true,	
		margin:30,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1,
			},
			640:{
				items:2,
			},			
			767:{
				items:2,
     		},				
			991:{
				items:3,
			},
			1024:{
				items:3,
			}
		}
        };
        return (
            <>
                <div className="section-full p-t80 p-b80 bg-cover overlay-wraper" style={{ backgroundImage: "url(" + bnr1.default + ")" }}>
                    <div className="overlay-main site-bg-secondry opacity-07" />
                    <div className="container">
                        {/*TITLE*/}
                        <div className="section-head center wt-small-separator-outer text-center text-white">
                            <div className="wt-small-separator site-text-primary">
                                <div className="sep-leaf-left" />
                                <div>Latest Projects</div>
                                <div className="sep-leaf-right" />
                            </div>
                            <h2>Our Projects </h2>
                        </div>
                        {/*TITLE*/}
                    </div>
                    <div className="section-content container-fluid">
                    <OwlCarousel className="owl-carousel gallery-slider2 owl-btn-vertical-center mfp-gallery" {...options}>
                            {projects.map((item, index) => (
                                <div key={index} className="item">
                                <div className="project-img-effect-1">
                                    <img src={item.image.default} alt="" />
                                    <div className="wt-info">
                                        <h3 className="wt-tilte m-tb0"><NavLink to={"/project-detail"}>{item.title}</NavLink></h3>
                                    </div>
                                    <a href={item.image.default} className="mfp-link"><i className="fa fa-search-plus" /></a>
                                </div>
                                </div>
                            ))}
                        </OwlCarousel>
                    </div>
                </div>
            </>
        );
    }
};

export default Projects7;