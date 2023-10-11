



import React from 'react';
import Header from './../Parts/Header';
import Footer from './../Parts/Footer';
import Banner from './../Segments/Banner';
import Projects33 from './../Segments/Projects33';

var bnrimg = require('./../../images/banner/8.jpg');

class Oilcountry extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    {/* INNER PAGE BANNER */}
                    <Banner title="More" pagename="Oil Country Tubular Goods" bgimage={bnrimg.default}/>
                    {/* INNER PAGE BANNER END */}
                    <Projects33 />
                </div>
                <Footer />
            </>
        );
    };
};

export default Oilcountry;