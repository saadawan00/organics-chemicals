import React from 'react';
import { NavLink } from 'react-router-dom';

class About7 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-no-repeat bg-center bg-white">
                    <div className="about-section-three">
                        <div className="container">
                            <div className="section-content">
                                <div className="row justify-content-center d-flex">
                                    <div className="col-lg-6 col-md-12 m-b30">
                                        <div className="about-max-three">
                                            <div className="about-max-three-media"><img src={require('./../../images/ui-10/intro-pic.jpg').default} alt=""/></div>
                                            <div className="about-three">
                                                <div className="about-year">
                                                    <div className="about-year-info">
                                                        <span className="icon-md p-t10">
                                                            <i className="flaticon-industry" />
                                                        </span>
                                                        <h3 className="wt-tilte">Running Business Since 1995</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 m-b30">
                                        <div className="about-section-three-right">
                                            {/* TITLE START*/}
                                            <div className="left wt-small-separator-outer">
                                                <div className="wt-small-separator site-text-primary">
                                                    <div className="sep-leaf-left" />
                                                    <div>About Industroz</div>
                                                    <div className="sep-leaf-right" />
                                                </div>
                                                <h2>We Provide top industrial Services.</h2>
                                            </div>
                                            {/* TITLE END*/}
                                            {/* Accordian */}
                                            <div className="wt-accordion acc-bg-gray m-b50 about-section-three-acc" id="accordion">
                                                <div className="panel wt-panel">
                                                    <div className="acod-head acc-actives" id="headingOne">
                                                        <h5 className="acod-title">
                                                            <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                Quality Control System, 100% Guarantee
                          <span className="indicator"><i className="fa" /></span>
                                                            </a>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                        <div className="acod-content p-tb15">
                                                            We Are Proudly Providing Services Since 1995
                                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed.
                      </div>
                                                    </div>
                                                </div>
                                                <div className="panel wt-panel">
                                                    <div className="acod-head" id="headingTwo">
                                                        <h5 className="mb-0">
                                                            <a className="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                Highly Modified Equipment
                          <span className="indicator"><i className="fa" /></span>
                                                            </a>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                                        <div className="acod-content p-tb15">
                                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                      </div>
                                                    </div>
                                                </div>
                                                <div className="panel wt-panel">
                                                    <div className="acod-head" id="headingThree">
                                                        <h5 className="mb-0">
                                                            <a className="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                Environmental Sensitivity
                          <span className="indicator"><i className="fa" /></span>
                                                            </a>
                                                        </h5>
                                                    </div>
                                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                                        <div className="acod-content p-tb15">
                                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                      </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ab-three-info d-flex justify-content-between">
                                                <div className="welcom-btn-position m-t20"><NavLink to={"/about-1"} className="site-button site-btn-effect">More About</NavLink></div>
                                                <img src={require('./../../images/ui-10/sign.png').default} alt="" />
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default About7;