import React from 'react';
import Header from '../Parts/Header';
import Footer from '../Parts/Footer';
import Banner from './../Segments/Banner';
import ServiceDetails4 from './../Segments/ServiceDetails4';

var bnrimg = require('./../../images/banner/2.jpg');

class ServicesCivil extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    {/* INNER PAGE BANNER */}
                    <Banner title="Service Detail" pagename="Service Detail" bgimage={bnrimg.default}/>
                    {/* INNER PAGE BANNER END */}
                    <ServiceDetails4 />
                </div>
                <Footer />
            </>
        );
    };
};

export default ServicesCivil;