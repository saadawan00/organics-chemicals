
import React from 'react';
import Header from './../Parts/Header';
import Footer from './../Parts/Footer';
import Banner from './../Segments/Banner';
import Projects22 from './../Segments/Projects22';

var bnrimg = require('./../../images/banner/8.jpg');

class Pressuresafetyvalves extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    {/* INNER PAGE BANNER */}
                    <Banner title="Pressure Safety,Valves & Regulators" pagename="Pressure Safety,Valves & Regulators" bgimage={bnrimg.default}/>
                    {/* INNER PAGE BANNER END */}
                    <Projects22 />
                </div>
                <Footer />
            </>
        );
    };
};

export default Pressuresafetyvalves;