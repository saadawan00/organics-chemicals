import React from 'react';
import { NavLink } from 'react-router-dom';

const services = [
    {
        image: require('./../../images/home-11/ac-gallery/cooling/1.jpg'),
        title: 'Duct Services',
        filter: 'cooling-list',
        filternumber: 'filter1'
    },
    {
        image: require('./../../images/home-11/ac-gallery/cooling/2.jpg'),
        title: 'Maintenance',
        filter: 'cooling-list',
        filternumber: 'filter1'
    },
    {
        image: require('./../../images/home-11/ac-gallery/cooling/3.jpg'),
        title: 'Air Conditioning',
        filter: 'cooling-list',
        filternumber: 'filter1'
    },
    {
        image: require('./../../images/home-11/ac-gallery/cooling/4.jpg'),
        title: 'Air Conditioner Repair',
        filter: 'cooling-list',
        filternumber: 'filter1'
    },
    {
        image: require('./../../images/home-11/ac-gallery/cooling/5.jpg'),
        title: 'Thermostats Installation',
        filter: 'cooling-list',
        filternumber: 'filter1'
    },
    {
        image: require('./../../images/home-11/ac-gallery/heating/1.jpg'),
        title: 'Heat Pumps',
        filter: 'heating-list',
        filternumber: 'filter2'
    },
    {
        image: require('./../../images/home-11/ac-gallery/heating/2.jpg'),
        title: 'Heating Installation',
        filter: 'heating-list',
        filternumber: 'filter2'
    },
    {
        image: require('./../../images/home-11/ac-gallery/heating/3.jpg'),
        title: 'Heating Repair',
        filter: 'heating-list',
        filternumber: 'filter2'
    },
    {
        image: require('./../../images/home-11/ac-gallery/heating/4.jpg'),
        title: 'Furnaces',
        filter: 'heating-list',
        filternumber: 'filter2'
    },
    {
        image: require('./../../images/home-11/ac-gallery/heating/5.jpg'),
        title: 'Ductwork Installation',
        filter: 'heating-list',
        filternumber: 'filter2'
    }
]

class Services12 extends React.Component {
   
    render() {
        
        return (
            <>
                <div className="section-full p-t80 p-b50 service-gallery-style12-wrapper">
                    <div className="services-gallery-block-outer">
                        <div className="container">
                            {/* TITLE START*/}
                            <div className="section-head left wt-small-separator-outer">
                                <div className="wt-small-separator site-text-primary">
                                    <div>Main Services</div>
                                </div>
                                <h2 className="wt-title">Air Care provides a full range of heating and air conditioning services with special offers.</h2>
                            </div>
                            {/* TITLE END*/}
                        </div>
                        <div className="container">
                            <div className="services-tabs swiper-container swiper-filter">
                                <ul className="sr-btn-filter-wrap">
                                    <li className="sr-btn-filter">
                                    <NavLink to={"#"} data-filter=".filter1">
                                            <img src={require('./../../images/home-11/air-cooling.png').default} alt=""/>
                                            <span className="wt-tilte cool-text">Cooling</span>
                                        </NavLink>
                                    </li>
                                    <li className="sr-btn-filter btn-active sr-btn-circle"><NavLink to={"#"} data-filter="" className="swiper-active">All</NavLink></li>
                                    <li className="sr-btn-filter">
                                    <NavLink to={"#"} data-filter=".filter2">
                                            <img src={require('./../../images/home-11/air-heat.png').default} alt="" />
                                            <span className="wt-tilte heat-text">Heating</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="container-fluid services-tabs-content">
                            <div className="swiper-container swiper-product">
                                <div className="swiper-wrapper">
                                {services.map((item, index) => (
                                    <div key={index} className={`${item.filternumber} swiper-slide`}>
                                        <div className={`${item.filter}`}>
                                            <div className="service-box-style12">
                                                <div className="service-media">
                                                    <img src={item.image.default} alt="" />
                                                </div>
                                                <div className="service-content">
                                                    <h3 className="service-title-large"><NavLink to={"/services-mechanical"}>{item.title}</NavLink></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                </div>
                                {/* Navigation buttons */}
                                <div className="swiper-button-prev" />
                                <div className="swiper-button-next" />
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
};

export default Services12;