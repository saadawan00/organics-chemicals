import React from 'react';
import { NavLink } from 'react-router-dom';

const plans = [
    {
        image: require('./../../images/solar-icon/2.png'),
        title: 'Basic Plan',
        price: '29',
        features: [{feature:'Free Service'},{feature:'Open Circuit'},{feature:'Power Watts'},{feature:'Output tolerance'},{feature:'Maximum Power Voltage'}],
    },
    {
        image: require('./../../images/solar-icon/3.png'),
        title: 'Standard Plan',
        price: '49',
        features: [{feature:'Free Service'},{feature:'Open Circuit'},{feature:'Power Watts'},{feature:'Output tolerance'},{feature:'Maximum Power Voltage'}],
    },
    {
        image: require('./../../images/solar-icon/4.png'),
        title: 'Advanced Plan',
        price: '99',
        features: [{feature:'Free Service'},{feature:'Open Circuit'},{feature:'Power Watts'},{feature:'Output tolerance'},{feature:'Maximum Power Voltage'}],
    },
]

class Plans2 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-gray">
                    <div className="container">
                        <div className="section-content">
                            <div className="section-content">
                                <div className="pricingtable-row p-lr15 no-col-gap">
                                    <div className="row d-flex justify-content-center">
                                        {plans.map((item, index) => (
                                            <div key={index} className="col-lg-4 col-md-6 col-sm-12 m-b30">
                                                <div className="pricingtable-wrapper bg-white pt-with-icon">
                                                    <div className={(index === 1 ? `pricingtable-inner pricingtable-highlight` : `pricingtable-inner`)}>
                                                        <div className="pt-pic-outer"><div className="pt-pic"><img src={item.image.default} alt="" /></div></div>
                                                        <div className="pricing-table-top-section">
                                                            <div className="pricingtable-price">
                                                                <h2 className="pricingtable-bx"><sup className="pricingtable-sign">$</sup>{item.price}</h2>
                                                            </div>
                                                            <div className="pricingtable-title">
                                                                <h2 className="title-style-2">{item.title}</h2>
                                                            </div>
                                                        </div>
                                                        <ul className="pricingtable-features">
                                                        {item.features.map((childitem, childindex) => (
                                                            <li key={childindex}>{childitem.feature}</li>
                                                            ))}
                                                        </ul>
                                                        <div className="pricingtable-footer">
                                                        <NavLink to={"#"} className={(index === 1 ? `site-button-secondry site-btn-effect` : `site-button site-btn-effect`)}>Select</NavLink>
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
                </div>
            </>
        );
    }
};

export default Plans2;