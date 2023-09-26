import React from 'react';
import Header4 from './../Parts/Header4';
import Footer from './../Parts/Footer';
import Slider7 from './../Segments/Slider7';
import Products2 from './../Segments/Products2';
import WhatWeDo3 from './../Segments/WhatWeDo3';
import Services7 from './../Segments/Services7';
import Projects7 from './../Segments/Projects7';
import Video3 from './../Segments/Video3';
import Testimonials6 from './../Segments/Testimonials6';
import Team2 from './../Segments/Team2';
import Statistics7 from './../Segments/Statistics7';
import Blog7 from './../Segments/Blog7';
import ClientsLogo1 from './../Segments/ClientsLogo1';

class Home7 extends React.Component {
    render() {
        return (
            <>
                <Header4 />
                    <div className="page-content">
                        <Slider7 />
                        <Services7 />
                        <WhatWeDo3 />
                        <Products2 />
                        <Projects7 />
                        <Video3 />
                        <Testimonials6 />
                        <Team2 />
                        <Statistics7 />
                        <Blog7 />
                        <ClientsLogo1 />
                    </div>
                <Footer />
            </>
        );
    };
};

export default Home7;