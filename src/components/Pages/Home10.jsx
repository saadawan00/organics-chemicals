import React from 'react';
import Header10 from './../Parts/Header10';
import Footer3 from './../Parts/Footer3';
import Slider10 from './../Segments/Slider10';
import CallUs1 from './../Segments/CallUs1';
import About7 from './../Segments/About7';
import Projects10 from './../Segments/Projects10';
import Services10 from './../Segments/Services10';
import Statistics10 from './../Segments/Statistics10';
import Team9 from './../Segments/Team9';
import Blog10 from './../Segments/Blog10';
import Testimonials8 from './../Segments/Testimonials8';

class Home10 extends React.Component {
    render() {
        return (
            <>
                <Header10 />
                    <div className="page-content">
                        <Slider10 />
                        <CallUs1 />
                        <About7 />
                        <Projects10 />
                        <Services10 />
                        <Statistics10 />
                        <Team9 />
                        <Blog10 />
                        <Testimonials8 />
                    </div>
                <Footer3 />
            </>
        );
    };
};

export default Home10;