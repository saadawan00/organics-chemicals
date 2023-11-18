import React from 'react';
import { NavLink } from 'react-router-dom';

const services = [
    {
        count: '01',
        url: '/services-1',
        title1: 'Industrial',
        title2: 'Chemicals',
        flaticon: 'flaticon-industry',
        description: 'Organics provides an extensive range of speciality, organic & inorganic chemicals to cater the unique requirements of various industries & associates.',
    },
    {
        count: '02',
        url: '/chemicals',
        title1: 'Lab Scientific',
        title2: 'Products',
        flaticon: 'flaticon-conveyor',
        description: 'We are a trusted supplier of high quality laboratory products. Our commitment to excellence has made us a prefered scientific partner for our valued customers.',
    },
    {
        count: '03',
        url: '/actuatorspositioner',
        title1: 'Industrial',
        title2: 'Instrumentation',
        flaticon: 'flaticon-robotic-arm',
        description: 'We are proud to introduce industrial instruments as part of our offerings. Our commitment to providing you with the holistic range of solutions to cater your needs more comprehensively.',
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
                                                        <NavLink to={item.url} className="site-button-link">Read More</NavLink>
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