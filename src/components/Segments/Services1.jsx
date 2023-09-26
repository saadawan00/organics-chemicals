import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const services = [
    {
        count: '01',
        title1: 'Oil &amp;',
        title2: 'Gas Engineering',
        flaticon: 'flaticon-industry',
        description: 'Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit.',
    },
    {
        count: '02',
        title1: 'Mechanical',
        title2: 'Engineering',
        flaticon: 'flaticon-conveyor',
        description: 'Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit.',
    },
    {
        count: '03',
        title1: 'Automotive',
        title2: 'Manufacturing',
        flaticon: 'flaticon-robotic-arm',
        description: 'Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit.',
    },
    {
        count: '04',
        title1: 'Chemical',
        title2: 'Research',
        flaticon: 'flaticon-oil',
        description: 'Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit.',
    },
    {
        count: '05',
        title1: 'Agricultural',
        title2: 'Automation',
        flaticon: 'flaticon-scythe',
        description: 'Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit.',
    },
    {
        count: '06',
        title1: 'Civil',
        title2: 'Engineering',
        flaticon: 'flaticon-helmet',
        description: 'Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit.',
    },

]

var bnr1 = require('./../../images/background/bg-3.jpg');

class Services1 extends React.Component {
    render() {

        const options = {
            loop:true,
            autoplay:true,
            nav:true,
            dots: false,	
            margin:10,
            navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
            responsive:{
                0:{
                    items:1,
                },
                640:{
                    items:1,
                },			
                767:{
                    items:2,
                 },				
                991:{
                    items:2,
                },
                1366:{
                    items:2,
                },			
                1400:{
                    items:3
                }		
            }
        };
        
        return (
            <>
                <div className="section-full p-t80 p-b70 overlay-wraper bg-no-repeat bg-bottom-left bg-cover services-main-section" style={{ backgroundImage: "url(" + bnr1.default + ")" }}>
                    <div className="overlay-main site-bg-secondry opacity-08" />
                    <div className="section-content services-section-content">
                        <div className="row">
                            <div className="col-xl-6 col-lg-12 col-md-12">
                                <div className="services-section-content-left">
                                    {/* TITLE START*/}
                                    <div className="left wt-small-separator-outer text-white">
                                        <div className="wt-small-separator site-text-primary">
                                            <div className="sep-leaf-left" />
                                            <div>The Best Industry services</div>
                                            <div className="sep-leaf-right" />
                                        </div>
                                        <h2>High Performance Services For Multiple Insdustries And Technologies!</h2>
                                        <p>Progressively maintain extensive infomediaries via extensible and niches. Capitalize on low hanging fruit to identify a ballpark value added is activity to beta test. Override the igital divide additional click throughs from fruit to identify a ballpark value added.</p>
              <NavLink to="/contactus" className="site-button site-btn-effect">Contact Us</NavLink>
                                    </div>
                                    {/* TITLE END*/}
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-12">
                                <div className="services-section-content-right">
                                    <OwlCarousel className="owl-carousel services-slider owl-btn-vertical-center" {...options}>

                                        {services.map((item, index) => (
                                            <div key={index} className="item">
                                            <div className="wt-box service-box-1 bg-white">
                                                <div className="service-box-title title-style-2 site-text-secondry">
                                                    <span className="s-title-one">{item.title1}</span>
                                                    <span className="s-title-two">{item.title2}</span>
                                                </div>
                                                <div className="service-box-content">
                                                    <p>{item.description}</p>
                                                    <NavLink to="/about-1" className="site-button-link">Read More</NavLink>
                                                </div>
                                                <div className="wt-icon-box-wraper">
                                                    <div className="wt-icon-box-md site-bg-primary">
                                                        <span className="icon-cell text-white"><i className={item.flaticon} /></span>
                                                    </div>
                                                    <div className="wt-icon-number"><span>{item.count}</span></div>
                                                </div>
                                            </div>
                                            </div>
                                        ))}
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Services1;