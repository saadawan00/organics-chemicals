import React from 'react';
import Header from './../Parts/Header';
import Footer from './../Parts/Footer';
import Banner from './../Segments/Banner';
import Projects20 from './../Segments/Projects20';

var bnrimg = require('./../../images/banner/8.jpg');

class Pressureandtemp extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    {/* INNER PAGE BANNER */}
                    <Banner title="Controls and Automation" pagename="Level and Flow Control" bgimage={bnrimg.default}/>
                    {/* INNER PAGE BANNER END */}
                    <Projects20 />
                </div>
                <Footer />
            </>
        );
    };
};

export default Pressureandtemp;