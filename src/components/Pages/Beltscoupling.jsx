
import React from 'react';
import Header from './../Parts/Header';
import Footer from './../Parts/Footer';
import Banner from './../Segments/Banner';
import Projects24 from './../Segments/Projects24';

var bnrimg = require('./../../images/banner/8.jpg');

class Beltscoupling extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    {/* INNER PAGE BANNER */}
                    <Banner title="V Belts,Coupling & Bearings" pagename="V Belts,Coupling & Bearings" bgimage={bnrimg.default}/>
                    {/* INNER PAGE BANNER END */}
                    <Projects24 />
                </div>
                <Footer />
            </>
        );
    };
};

export default Beltscoupling;