

import React from 'react';
import Header from './../Parts/Header';
import Footer from './../Parts/Footer';
import Banner from './../Segments/Banner';
import Projects31 from './../Segments/Projects31';

var bnrimg = require('./../../images/banner/8.jpg');

class Compressorparts extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    {/* INNER PAGE BANNER */}
                    <Banner title="Generator & Compressors" pagename="Compressor Parts and Accessories" bgimage={bnrimg.default}/>
                    {/* INNER PAGE BANNER END */}
                    <Projects31 />
                </div>
                <Footer />
            </>
        );
    };
};

export default Compressorparts;