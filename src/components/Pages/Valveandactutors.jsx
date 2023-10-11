


import React from 'react';
import Header from './../Parts/Header';
import Footer from './../Parts/Footer';
import Banner from './../Segments/Banner';
import Projects32 from './../Segments/Projects32';

var bnrimg = require('./../../images/banner/8.jpg');

class Valveandactutors extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    {/* INNER PAGE BANNER */}
                    <Banner title="More" pagename="Valves and Actuators" bgimage={bnrimg.default}/>
                    {/* INNER PAGE BANNER END */}
                    <Projects32 />
                </div>
                <Footer />
            </>
        );
    };
};

export default Valveandactutors;