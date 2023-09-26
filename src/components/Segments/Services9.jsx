import React from 'react';
import { NavLink } from 'react-router-dom';

const services = [
    {
        count: '01',
        flaticon: 'flaticon-oil',
        title: 'Oil & Gas Engineering',
        description: 'You can dream, create, design, and build the most wonderful place in the world. But it requires people.'
    },
    {
        count: '02',
        flaticon: 'flaticon-conveyor',
        title: 'Mechanical Engineering',
        description: 'You can dream, create, design, and build the most wonderful place in the world. But it requires people.'
    },
    {
        count: '03',
        flaticon: 'flaticon-robotic-arm',
        title: 'Automotive Manufacturing',
        description: 'You can dream, create, design, and build the most wonderful place in the world. But it requires people.'
    },
    {
        count: '04',
        flaticon: 'flaticon-helmet',
        title: 'Civil Engineering',
        description: 'You can dream, create, design, and build the most wonderful place in the world. But it requires people.'
    },
    {
        count: '05',
        flaticon: 'flaticon-industry',
        title: 'Chemical Research',
        description: 'You can dream, create, design, and build the most wonderful place in the world. But it requires people.'
    },
    {
        count: '06',
        flaticon: 'flaticon-scythe',
        title: 'Agricultural Automation',
        description: 'You can dream, create, design, and build the most wonderful place in the world. But it requires people.'
    }
]

class Services9 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-gray-light">
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
                            <div className="row justify-content-center">
                            {services.map((item, index) => (
                                    <div key={index} className="col-lg-4 col-md-6 m-b30">
                                    <div className="wt-box service-box-1-new bg-white card1">
                                        <div className="wt-icon-box-wraper-new">
                                            <div className="icon-xl inline-icon">
                                                <span className="icon-cell site-text-primary"><i className={item.flaticon} /></span>
                                            </div>
                                            <div className="wt-icon-number-new"><span>{item.count}</span></div>
                                        </div>
                                        <div className="service-box-title-new title-style-2 site-text-secondry">
                                            <h3 className="s-title-one">{item.title}</h3>
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
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Services9;