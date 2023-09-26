import React from 'react';
import { NavLink } from 'react-router-dom';

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
    }
]

class Services2 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full small-device p-b40 top-half-section-outer">
                    <div className="container">
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content clearfix">
                            <div className="top-half-section">
                                <div className="row d-flex justify-content-center">
                                    {services.map((item, index) => (
                                        <div key={index} className="col-lg-4 col-md-6 m-b50">
                                            <div className="service-border-box">
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

export default Services2;