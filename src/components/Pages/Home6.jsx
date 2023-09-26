import React from 'react';
import Header6 from './../Parts/Header6';
import Footer2 from './../Parts/Footer2';
import Slider6 from './../Segments/Slider6';
import Products1 from './../Segments/Products1';
import Projects6 from './../Segments/Projects6';
import About4 from './../Segments/About4';
import Services6 from './../Segments/Services6';
import Statistics6 from './../Segments/Statistics6';
import Blog6 from './../Segments/Blog6';
import ClientsLogo6 from './../Segments/ClientsLogo6';
import Plans2 from './../Segments/Plans2';

class Home6 extends React.Component {
    render() {
        return (
            <>
                <Header6 />
                    <div className="page-content">
                        <Slider6 />
                        <Products1 />
                        <Projects6 />
                        <About4 />
                        <Services6 />
                        <Statistics6 />
                        <Blog6 />
                        <ClientsLogo6 />
                        <Plans2 />
                    </div>
                <Footer2 />
            </>
        );
    };
};

export default Home6;