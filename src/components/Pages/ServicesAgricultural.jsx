import React from 'react';
import Header from '../Parts/Header';
import Footer from '../Parts/Footer';
import Banner from './../Segments/Banner';
import ServiceDetails1 from './../Segments/ServiceDetails1';

var bnrimg = require('./../../images/banner/2.jpg');

class ServicesAgricultural extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    {/* INNER PAGE BANNER */}
                    <Banner title="Service Detail" pagename="Service Detail" bgimage={bnrimg.default}/>
                    {/* INNER PAGE BANNER END */}
                    <ServiceDetails1 />
                </div>
                <Footer />
            </>
        );
    };
};

export default ServicesAgricultural;