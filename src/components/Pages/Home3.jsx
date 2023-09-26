import React from 'react';
import Header3 from './../Parts/Header3';
import Footer2 from './../Parts/Footer2';
import Slider3 from './../Segments/Slider3';
import Projects3 from './../Segments/Projects3';
import Achievements1 from './../Segments/Achievements1';
import Video1 from './../Segments/Video1';
import Plans1 from './../Segments/Plans1';
import About3 from './../Segments/About3';
import Statistics3 from './../Segments/Statistics3';
import Testimonials3 from './../Segments/Testimonials3';
import Blog3 from './../Segments/Blog3';
import Team3 from './../Segments/Team3';

class Home3 extends React.Component {
    render() {
        return (
            <>
                <Header3 />
                    <div className="page-content">
                        <Slider3 />
                        <Projects3 />
                        <Achievements1 />
                        <Video1 />
                        <Plans1 />
                        <About3 />
                        <Statistics3 />
                        <Testimonials3 />
                        <Blog3 />
                        <Team3 />
                    </div>
                <Footer2 />
            </>
        );
    };
};

export default Home3;