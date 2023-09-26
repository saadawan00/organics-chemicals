import React from 'react';
import Header4 from './../Parts/Header4';
import Footer from './../Parts/Footer';
import Slider4 from './../Segments/Slider4';
import WhatWeDo2 from './../Segments/WhatWeDo2';
import Services3 from './../Segments/Services3';
import Statistics4 from './../Segments/Statistics4';
import Video2 from './../Segments/Video2';
import Testimonials1 from './../Segments/Testimonials1';
import Team1 from './../Segments/Team1';
import Blog4 from './../Segments/Blog4';
import Projects4 from './../Segments/Projects4';
import ClientsLogo1 from './../Segments/ClientsLogo1';

class Home4 extends React.Component {
    render() {
        return (
            <>
                <Header4 />
                    <div className="page-content">
                        <Slider4 />
                        <WhatWeDo2 />
                        <Services3 />
                        <Statistics4 />
                        <Video2 />
                        <Testimonials1 />
                        <Team1 />
                        <Blog4 />
                        <Projects4 />
                        <ClientsLogo1 />
                    </div>
                <Footer />
            </>
        );
    };
};

export default Home4;