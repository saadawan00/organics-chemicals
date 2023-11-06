
import React from 'react';
import Header from '../../Parts/Header';
import Footer from '../../Parts/Footer';
import Banner from '../../Segments/Banner';
import Projects32 from './../ControlsandAutomation/Projects32';
import { InstrumentationSlider } from '../../Parts/BrandsImagesSlider/InstrumentationSlider';

var bnrimg = require('./../../../images/instrumentssliderimages/backgroundimage1.jpg');

class MoreProducts extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    {/* INNER PAGE BANNER */}
                    <Banner title="More" pagename="More Products" bgimage={bnrimg}/>
                    {/* INNER PAGE BANNER END */}
                    <InstrumentationSlider />

                    <Projects32 />
                </div>
                <Footer />
            </>
        );
    };
};

export default MoreProducts;