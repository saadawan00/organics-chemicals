import React from 'react';

import { NavLink } from 'react-router-dom';
import Sidebar from "./../../Segments/Sidebar";
import { sidebarItems } from './index';
import IndustrialPDF from './../../../assets/media/pdf/Industrial Instruments Organics.pdf';

class SidebarLabScientific extends React.Component {
    render() {
        return (
            <div className="col-lg-4 col-md-12 rightSidebar">
                <Sidebar navBarItems={sidebarItems} />
                    <div className="faq-sidebar">
                        <div className="service-side-btn m-b30 site-bg-secondry p-a20 text-white">
                            <div className="wt-icon-box-wraper left ">
                                <NavLink to={"#"} className="contact-slide-show btn-block  p-a15 m-tb10">
                                    <span className="text-black m-r10">
                                        <i className="fa fa-file-word-o" />
                                    </span>
                                    <strong className="text-uppercase text-black">
                                        Quick Inquiry
                                    </strong>
                                </NavLink>
                            </div>
                            <div className="wt-icon-box-wraper left">
                                <NavLink to={"#"} onClick={() => window.open(IndustrialPDF)} className="btn-block  p-a15 m-tb10">
                                    <span className="text-black m-r10">
                                        <i className="fa fa-file-pdf-o" />
                                    </span>
                                    <strong className="text-uppercase text-black">
                                        {" "}
                                        Download .PDF
                                    </strong>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
};

export default SidebarLabScientific;