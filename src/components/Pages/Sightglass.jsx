






import React from 'react';
import Header from './../Parts/Header';
import Footer from './../Parts/Footer';
import Banner from './../Segments/Banner';
import Projects36 from './../Segments/Projects36';

var bnrimg = require('./../../images/banner/8.jpg');

class Sightglass extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    {/* INNER PAGE BANNER */}
                    <Banner title="More" pagename="Sight Glass" bgimage={bnrimg.default}/>
                    {/* INNER PAGE BANNER END */}
                    <Projects36 />
                </div>
                <Footer />
            </>
        );
    };
};

export default Sightglass;