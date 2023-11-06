import React from "react";

import Picture1 from './../../../images/instrumentssliderimages/1.jpg'
import Picture2 from './../../../images/instrumentssliderimages/2.jpg'
import Picture3 from './../../../images/instrumentssliderimages/3.jpg'
import Picture4 from './../../../images/instrumentssliderimages/4.jpg'
import Picture5 from './../../../images/instrumentssliderimages/5.jpg'
import Picture6 from './../../../images/instrumentssliderimages/6.jpg'
import Picture7 from './../../../images/instrumentssliderimages/7.jpg'
import Picture8 from './../../../images/instrumentssliderimages/8.jpg'
import Picture9 from './../../../images/instrumentssliderimages/9.jpg'
import Picture10 from './../../../images/instrumentssliderimages/10.jpg'
import Picture11 from './../../../images/instrumentssliderimages/11.jpg'
import Picture12 from './../../../images/instrumentssliderimages/12.jpg'
import Picture13 from './../../../images/instrumentssliderimages/13.jpg'
import Picture14 from './../../../images/instrumentssliderimages/14.jpg'


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
        Picture14
       
       
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
      
    </div>
    );
};