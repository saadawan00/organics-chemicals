import React from 'react';
import Header9 from './../Parts/Header9';
import Footer3 from './../Parts/Footer3';
import Slider9 from './../Segments/Slider9';
import About6 from './../Segments/About6';
import Services9 from './../Segments/Services9';
import Statistics9 from './../Segments/Statistics9';
import Team8 from './../Segments/Team8';
import Projects9 from './../Segments/Projects9';
import Blog9 from './../Segments/Blog9';
import ClientsLogo2 from './../Segments/ClientsLogo2';

class Home9 extends React.Component {
    render() {
        return (
            <>
                <Header9 />
                    <div className="page-content">
                        <Slider9 />
                        <About6 />
                        <Services9 />
                        <Statistics9 />
                        <Team8 />
                        <Projects9 />
                        <Blog9 />
                        <ClientsLogo2 />
                    </div>
                <Footer3 />
            </>
        );
    };
};

export default Home9;