import React from 'react';
import Header from './../Parts/Header';
import Footer from './../Parts/Footer';
import Slider1 from './../Segments/Slider1';
import About1 from './../Segments/About1';
import Services1 from './../Segments/Services1';
import WhatWeDo1 from './../Segments/WhatWeDo1';
import Statistics1 from './../Segments/Statistics1';
import Projects1 from './../Segments/Projects1';
import Team1 from './../Segments/Team1';
import Testimonials1 from './../Segments/Testimonials1';
import Blog1 from './../Segments/Blog1';
import ClientsLogo1 from './../Segments/ClientsLogo1';

class Home1 extends React.Component {
    render() {
        return (
            <>
                <Header />
                    <div className="page-content">
                        <Slider1 />
                        <About1 />
                        <Services1 />
                        <WhatWeDo1 />
                        <Statistics1 bgclass="bg-white" />
                        <Projects1 />
                        <Team1 />
                        <Testimonials1 />
                        <Blog1 />
                        <ClientsLogo1 />
                    </div>
                 <Footer />
            </>
        );
    };
};

export default Home1;