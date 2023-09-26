import React from 'react';
import Header5 from './../Parts/Header5';
import Footer from './../Parts/Footer';
import Slider5 from './../Segments/Slider5';
import Services4 from './../Segments/Services4';
import Statistics5 from './../Segments/Statistics5';
import Projects5 from './../Segments/Projects5';
import Testimonials5 from './../Segments/Testimonials5';
import Team5 from './../Segments/Team5';
import SelfIntro2 from './../Segments/SelfIntro2';
import Blog5 from './../Segments/Blog5';
import ClientsLogo5 from './../Segments/ClientsLogo5';

class Home5 extends React.Component {
    render() {
        return (
            <>
                <Header5 />
                    <div className="page-content">
                        <Slider5 />
                        <Services4 />
                        <Statistics5 />
                        <Projects5 />
                        <Testimonials5 />
                        <Team5 />
                        <SelfIntro2 />
                        <Blog5 />
                        <ClientsLogo5 />
                    </div>
                <Footer />
            </>
        );
    };
};

export default Home5;