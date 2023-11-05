import React from "react";

import Picture1 from './../../../images/instrumentssliderimages/1.png'
import Picture2 from './../../../images/instrumentssliderimages/2.png'
import Picture3 from './../../../images/instrumentssliderimages/3.png'
import Picture4 from './../../../images/instrumentssliderimages/4.png'
import Picture5 from './../../../images/instrumentssliderimages/5.png'
import Picture6 from './../../../images/instrumentssliderimages/6.png'
import Picture7 from './../../../images/instrumentssliderimages/7.png'
import Picture8 from './../../../images/instrumentssliderimages/8.png'
import Picture9 from './../../../images/instrumentssliderimages/9.png'
import Picture10 from './../../../images/instrumentssliderimages/10.png'


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