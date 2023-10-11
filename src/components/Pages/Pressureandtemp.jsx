import React from 'react';
import Header from './../Parts/Header';
import Footer from './../Parts/Footer';
import Banner from './../Segments/Banner';
import Projects14 from './../Segments/Projects14';

var bnrimg = require('./../../images/banner/8.jpg');

class Pressureandtemp extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    {/* INNER PAGE BANNER */}
                    <Banner title="Controls and Automation" pagename="Pressure & Temperature Measurement Control" bgimage={bnrimg.default}/>
                    {/* INNER PAGE BANNER END */}
                    <Projects14 />
                </div>
                <Footer />
            </>
        );
    };
};

export default Pressureandtemp;