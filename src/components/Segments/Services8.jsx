import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const services = [
    {
        count: '01',
        flaticon: 'flaticon-oil',
        title: 'Oil & Gas Engineering',
        description: 'Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit.'
    },
    {
        count: '02',
        flaticon: 'flaticon-conveyor',
        title: 'Mechanical Engineering',
        description: 'Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit.'
    },
    {
        count: '03',
        flaticon: 'flaticon-robotic-arm',
        title: 'Automotive Manufacturing',
        description: 'Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit.'
    },
    {
        count: '04',
        flaticon: 'flaticon-helmet',
        title: 'Civil Engineering',
        description: 'Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit.'
    },
    {
        count: '05',
        flaticon: 'flaticon-industry',
        title: 'Chemical Research',
        description: 'Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit.'
    }
]

class Services8 extends React.Component {
    render() {
        const options = {
            loop: true,
            autoplay: true,
            nav: true,
            dots: false,
            margin: 30,
            navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                640: {
                    items: 1,
                },
                767: {
                    items: 2,
                },
                991: {
                    items: 2,
                },
                1366: {
                    items: 2,
                },
                1400: {
                    items: 3
                }
            }
        };
        return (
            <>
                <div className="section-full p-t80 p-b80 bg-gray-light">
                    <div className="container">
                        {/* TITLE START*/}
                        <div className="section-head center wt-small-separator-outer text-center">
                            <div className="wt-small-separator site-text-primary">
                                <div className="sep-leaf-left" />
                                <div>The Best Industry Services</div>
                                <div className="sep-leaf-right" />
                            </div>
                            <h2>High Performance Services For Multiple Insdustries!</h2>
                        </div>
                        {/* TITLE END*/}
                        <div className="section-content">
                            <OwlCarousel className="owl-carousel services-style-new owl-btn-vertical-center" {...options}>
                                {services.map((item, index) => (
                                    <div key={index} className="item">
                                        <div className="wt-box service-box-1-new bg-white">
                                            <div className="wt-icon-box-wraper-new">
                                                <div className="icon-xl inline-icon">
                                                    <span className="icon-cell site-text-primary"><i className={item.flaticon} /></span>
                                                </div>
                                                <div className="wt-icon-number-new"><span>{item.count}</span></div>
                                            </div>
                                            <div className="service-box-title-new title-style-2 site-text-secondry">
                                                <span className="s-title-one">{item.title}</span>
                                            </div>
                                            <div className="service-box-content-new">
                                                <p>{item.description}</p>
                                            </div>
                                            <div className="service-box-new-link">
                                                <NavLink to={"/services-mechanical"} className="site-button-link">Read More</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Services8;