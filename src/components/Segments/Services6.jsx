import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const services = [
    {
        count: '01',
        title: 'Enviroment Analitic',
        description: 'Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit.'
    },
    {
        count: '02',
        title: 'Preparing Documentation',
        description: 'Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit.'
    },
    {
        count: '03',
        title: 'Equipment Installation',
        description: 'Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit.'
    },
    {
        count: '04',
        title: 'Technical Support',
        description: 'Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit.'
    },
    {
        count: '05',
        title: 'Payment Method',
        description: 'Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit.'
    },
    {
        count: '06',
        title: 'Enviroment Analitic',
        description: 'Progressively maintain extensive infomediaries via extensible nich. Capitalize on low hanging fruit.'
    },
]

class Services6 extends React.Component {
    render() {
        const options = {
            loop: true,
            autoplay: false,
            nav: true,
            dots: false,
            margin: 10,
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
                    items: 4,
                },
                1400: {
                    items: 4
                }
            }
        };
        return (
            <>
                <div className="section-full p-t80 p-b80 overlay-wraper  bg-gray full-container-margin">
                    <div className="section-content">
                        <div className="container">
                            {/* TITLE START*/}
                            <div className="section-head center wt-small-separator-outer text-center">
                                <div className="wt-small-separator site-text-primary">
                                    <div className="sep-leaf-left" />
                                    <div>Steps of cooperation</div>
                                    <div className="sep-leaf-right" />
                                </div>
                                <h2>How We work</h2>
                            </div>
                            {/* TITLE END*/}
                        </div>
                        <div className="container-fluid">
                            <div className="how-we-work-section">
                                <OwlCarousel className="owl-carousel how-we-work owl-btn-vertical-center" {...options}>
                                    {services.map((item, index) => (
                                        <div key={index} className="item">
                                            <div className="how-we-work-box">
                                                <div className="wt-box how-we-work-box-1 bg-white">
                                                    <div className="box-icon-box-wraper">
                                                        <div className="box-icon-number site-text-primary"><span>{item.count}</span></div>
                                                    </div>
                                                    <div className="how-we-work-title title-style-2 site-text-secondry">
                                                        <span className="s-title-one">{item.title}</span>
                                                    </div>
                                                    <div className="how-we-work-content">
                                                        <p>{item.description}</p>
                                                        <NavLink to={"/services-powerenergy"} className="site-button-link">Read More</NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Services6;