


import React from 'react';
import Header from './../Parts/Header';
import Footer from './../Parts/Footer';
import Banner from './../Segments/Banner';
import Projects28 from './../Segments/Projects28';

var bnrimg = require('./../../images/banner/8.jpg');

class Heatexchangeequipment extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    {/* INNER PAGE BANNER */}
                    <Banner title="Heat Exchange Equipment" pagename="Heat Exchange Equipment" bgimage={bnrimg.default}/>
                    {/* INNER PAGE BANNER END */}
                    <Projects28 />
                </div>
                <Footer />
            </>
        );
    };
};

export default Heatexchangeequipment;