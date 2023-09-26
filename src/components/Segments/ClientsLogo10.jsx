import React from 'react';

const logos = [
    { image: require('./../../images/home-11/client-logo/w1.png') },
    { image: require('./../../images/home-11/client-logo/w2.png') },
    { image: require('./../../images/home-11/client-logo/w3.png') },
    { image: require('./../../images/home-11/client-logo/w4.png') },
    { image: require('./../../images/home-11/client-logo/w5.png') },
    { image: require('./../../images/home-11/client-logo/w6.png') },
    { image: require('./../../images/home-11/client-logo/w1.png') },
    { image: require('./../../images/home-11/client-logo/w2.png') }
]

class ClientsLogo10 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full bg-gray p-t90 p-b50">
                    <div className="container">
                        <div className="section-content client-logo2 ">
                            <div className="row justify-content-center">
                                {logos.map((item, index) => (
                                    <div className="col-lg-3 col-md-4 col-sm-4 col-6" key={index}>
                                    <span className={(index === 0) ? "wt-img-effect client-logo2-media active" : "wt-img-effect client-logo2-media"}>
                                            <img src={item.image.default} alt="" />
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default ClientsLogo10;