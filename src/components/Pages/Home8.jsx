import React from 'react';
import Header4 from './../Parts/Header4';
import Footer3 from './../Parts/Footer3';
import Slider8 from './../Segments/Slider8';
import About5 from './../Segments/About5';
import Services8 from './../Segments/Services8';
import WhatWeDo4 from './../Segments/WhatWeDo4';
import Statistics8 from './../Segments/Statistics8';
import Projects8 from './../Segments/Projects8';
import Testimonials7 from './../Segments/Testimonials7';
import Team2 from './../Segments/Team2';
import Blog8 from './../Segments/Blog8';
import ClientsLogo2 from './../Segments/ClientsLogo2';

class Home8 extends React.Component {
    render() {
        return (
            <>
                <Header4 />
                    <div className="page-content">
                        <Slider8 />
                        <About5 />
                        <Services8 />
                        <WhatWeDo4 />
                        <Statistics8 />
                        <Projects8 />
                        <Testimonials7 />
                        <Team2 />
                        <Blog8 />
                        <ClientsLogo2 />
                    </div>
                <Footer3 />
            </>
        );
    };
};

export default Home8;