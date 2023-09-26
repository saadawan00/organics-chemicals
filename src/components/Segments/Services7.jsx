import React from 'react';
import { NavLink } from 'react-router-dom';

const services = [
    {
        title1: 'Thermal',
        title2: 'Power',
        count: '01',
        image: require('./../../images/oil-gas/icon/5.png'),
        description: 'We are providing different services in this sector.',
    },
    {
        title1: 'Oil',
        title2: 'Platform',
        count: '02',
        image: require('./../../images/oil-gas/icon/1.png'),
        description: 'We are providing different services in this sector.',
    },
    {
        title1: 'Gas',
        title2: 'Flaring',
        count: '03',
        image: require('./../../images/oil-gas/icon/2.png'),
        description: 'We are providing different services in this sector.',
    },
    {
        title1: 'Oil',
        title2: 'Pump',
        count: '04',
        image: require('./../../images/oil-gas/icon/3.png'),
        description: 'We are providing different services in this sector.',
    },
    {
        title1: 'Oil',
        title2: 'Factory',
        count: '05',
        image: require('./../../images/oil-gas/icon/6.png'),
        description: 'We are providing different services in this sector.',
    },
    {
        title1: 'Oil',
        title2: 'Refinaery',
        count: '06',
        image: require('./../../images/oil-gas/icon/4.png'),
        description: 'We are providing different services in this sector.',
    }
]

class Services7 extends React.Component {
    render() {
        return (
            <>
                <div className="box-style1-outer">
                    <div className="row d-flex justify-content-center no-gutters">
                        {services.map((item, index) => (
                            <div key={index} className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                                <div className="box-style1">
                                    <div className="wt-box ">
                                        <div className="box-style1-title title-style-2">
                                            <span className="o-title-one">{item.title1}</span>
                                            <span className="o-title-two">{item.title2}</span>
                                        </div>
                                        <div className="box-style1-content">
                                            <p>{item.description}</p>
                                            <NavLink to={"/services-oilgas"} className="site-button-link">Read More</NavLink>
                                        </div>
                                        <div className="wt-icon-box-wraper">
                                            <div className="wt-icon-box-md bg-gray">
                                                <span className="icon-cell site-text-primary"><img src={item.image.default} alt="" /></span>
                                            </div>
                                            <div className="wt-icon-number"><span>{item.count}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
};

export default Services7;