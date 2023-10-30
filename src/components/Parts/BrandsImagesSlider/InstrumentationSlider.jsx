import React from "react";

import Picture1 from './../../../images/instrumentssliderimages/acme.png'
import Picture2 from './../../../images/instrumentssliderimages/fibox.png'
import Picture3 from './../../../images/instrumentssliderimages/allied.png'
import Picture4 from './../../../images/instrumentssliderimages/apg-slide.png'
import Picture5 from './../../../images/instrumentssliderimages/aso.png'
import Picture6 from './../../../images/instrumentssliderimages/beijer.png'
import Picture7 from './../../../images/instrumentssliderimages/brother.png'
import Picture8 from './../../../images/instrumentssliderimages/contaclip.png'
import Picture9 from './../../../images/instrumentssliderimages/datalogic.png'
import Picture10 from './../../../images/instrumentssliderimages/ilme.png'
import Picture11 from './../../../images/instrumentssliderimages/ixon.png'
import Picture12 from './../../../images/instrumentssliderimages/knipex.png'
import Picture13 from './../../../images/instrumentssliderimages/lapp.png'
import Picture14 from './../../../images/instrumentssliderimages/lenze.png'
import Picture15 from './../../../images/instrumentssliderimages/lovato.png'
import Picture16 from './../../../images/instrumentssliderimages/ls-electric.png'
import Picture17 from './../../../images/instrumentssliderimages/madison.png'
import Picture18 from './../../../images/instrumentssliderimages/mencom.png'
import Picture19 from './../../../images/instrumentssliderimages/micro-detectors.png'
import Picture20 from './../../../images/instrumentssliderimages/murr-elektronik.png'
import Picture21 from './../../../images/instrumentssliderimages/novus.png'


import bestPriceIcon from './../../../images/icons/best-price.png';
import timelyDelieveryIcon from './../../../images/icons/shipping-timed.png';
import techSupportIcon from './../../../images/icons/tech-support.png';
import { ImagesSlider } from './../ImagesSlider/ImagesSlider';

export const InstrumentationSlider = () => {
    const images = [
        Picture1,
        Picture2,
        Picture3,
        Picture4,
        Picture5,
        Picture6,
        Picture7,
        Picture8,
        Picture9,
        Picture10,
        Picture11,
        Picture12,
        Picture13,
        Picture14,
        Picture15,
        Picture16,
        Picture17,
        Picture18,
        Picture19,
        Picture20,
        Picture21,
       
      ].map((image) => ({
        id: crypto.randomUUID(),
        image
      }));

    return (
      <div className="m-t30">
      <div className="flex-center m-b30">
        <p className="font-22 m-b0 m-r20">Large variety of strong brands</p>
        <img width={50} src={require('./../../../images/in-stock.png')} alt="" />
      </div>
      <ImagesSlider images={images} speed={25000} />
      <div className="section-content bg-gray m-t30">
        <div className="container">
          <div className="row">
            <div className="col-4 bg-gray p-t40 p-b40">
              <div className="flex-center">
                <img src={bestPriceIcon} width={25} className="m-r15 m-b5" /> 
                <h4 className="m-0 text-center">
                  Competitive Prices
                </h4>
              </div>
            </div>
            <div className="col-4 bg-gray p-t40 p-b40">
              <div className="flex-center">
                <img src={timelyDelieveryIcon} width={25} className="m-r15 m-b5" /> 
                <h4 className="m-0 text-center">Timely Delivery</h4>
              </div>
            </div>
            <div className="col-4 bg-gray p-t40 p-b40">
              <div className="flex-center">
                <img src={techSupportIcon} width={25} className="m-r15 m-b5" /> 
                <h4 className="m-0 text-center">Free Technical Support</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};