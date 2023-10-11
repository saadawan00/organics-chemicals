




import React from 'react';
import Header from './../Parts/Header';
import Footer from './../Parts/Footer';
import Banner from './../Segments/Banner';
import Projects34 from './../Segments/Projects34';

var bnrimg = require('./../../images/banner/8.jpg');

class Wellheadsystem extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    {/* INNER PAGE BANNER */}
                    <Banner title="More" pagename="Wellhead Systems" bgimage={bnrimg.default}/>
                    {/* INNER PAGE BANNER END */}
                    <Projects34 />
                </div>
                <Footer />
            </>
        );
    };
};

export default Wellheadsystem;