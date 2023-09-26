import React from 'react';
import Header11 from './../Parts/Header11';
import Footer3 from './../Parts/Footer3';
import Slider12 from './../Segments/Slider12';
import About9 from './../Segments/About9';
import SelfIntro4 from './../Segments/SelfIntro4';
import Services12 from './../Segments/Services12';
import CallUs2 from './../Segments/CallUs2';
import ContactUs1 from './../Segments/ContactUs1';
import Testimonials10 from './../Segments/Testimonials10';
import Blog12 from './../Segments/Blog12';

class Home12 extends React.Component {
    render() {
        return (
            <>
                <Header11 />
                    <div className="page-content">
                        <Slider12 />    
                        <About9 />
                        <SelfIntro4 />
                        <Services12 />
                        <CallUs2 />
                        <ContactUs1 />
                        <Testimonials10 />
                        <Blog12 />
                    </div>
                <Footer3 />
            </>
        );
    };
};

export default Home12;