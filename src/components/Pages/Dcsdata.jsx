import React from 'react';
import Header from './../Parts/Header';
import Footer from './../Parts/Footer';
import Banner from './../Segments/Banner';
import Projects23 from './../Segments/Projects23';

var bnrimg = require('./../../images/banner/8.jpg');

class Dcsdata extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    {/* INNER PAGE BANNER */}
                    <Banner title="DCS, Data Acquisation" pagename="DCS, Data Acquisation" bgimage={bnrimg.default}/>
                    {/* INNER PAGE BANNER END */}
                    <Projects23 />
                </div>
                <Footer />
            </>
        );
    };
};

export default Dcsdata;