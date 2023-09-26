import React from 'react';
import Header11 from './../Parts/Header11';
import Footer3 from './../Parts/Footer3';
import Slider11 from './../Segments/Slider11';
import About8 from './../Segments/About8';
import SelfIntro3 from './../Segments/SelfIntro3';
import Services11 from './../Segments/Services11';
import Team10 from './../Segments/Team10';
import GetInTouch1 from './../Segments/GetInTouch1';
import ClientsLogo10 from './../Segments/ClientsLogo10';
import Projects11 from './../Segments/Projects11';
import Testimonials9 from './../Segments/Testimonials9';
import Blog11 from './../Segments/Blog11';

class Home11 extends React.Component {
    render() {
        return (
            <>
                <Header11 />
                    <div className="page-content">
                        <Slider11 />
                        <About8 />
                        <SelfIntro3 />
                        <Services11 />
                        <Team10 />
                        <GetInTouch1 />
                        <ClientsLogo10 />
                        <Projects11 />
                        <Testimonials9 />
                        <Blog11 />
                    </div>
                <Footer3 />
            </>
        );
    };
};

export default Home11;