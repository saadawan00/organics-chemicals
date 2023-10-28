import React from "react";

import Picture1 from './../../../images/brands/Picture1.png'
import Picture2 from './../../../images/brands/Picture2.png'
import Picture3 from './../../../images/brands/Picture3.png'
import Picture4 from './../../../images/brands/Picture4.png'
import Picture5 from './../../../images/brands/Picture5.png'
import Picture6 from './../../../images/brands/Picture6.jpg'
import Picture7 from './../../../images/brands/Picture7.png'
import Picture8 from './../../../images/brands/Picture8.jpg'
import Picture9 from './../../../images/brands/Picture9.png'
import Picture10 from './../../../images/brands/Picture10.png'
import Picture11 from './../../../images/brands/Picture11.png'
import Picture12 from './../../../images/brands/Picture12.png'
import Picture13 from './../../../images/brands/Picture13.jpg'
import Picture14 from './../../../images/brands/Picture14.png'
import Picture15 from './../../../images/brands/Picture15.png'
import Picture16 from './../../../images/brands/Picture16.png'
import Picture17 from './../../../images/brands/Picture17.png'
import Picture18 from './../../../images/brands/Picture18.jpg'
import Picture19 from './../../../images/brands/Picture19.png'
import Picture20 from './../../../images/brands/Picture20.png'
import Picture21 from './../../../images/brands/Picture21.png'
import Picture22 from './../../../images/brands/Picture22.png'
import Picture23 from './../../../images/brands/Picture23.png'
import Picture24 from './../../../images/brands/Picture24.jpg'
import Picture25 from './../../../images/brands/Picture25.png'

import bestPriceIcon from './../../../images/icons/best-price.png';
import timelyDelieveryIcon from './../../../images/icons/shipping-timed.png';
import techSupportIcon from './../../../images/icons/tech-support.png';

import { ImagesSlider } from './../ImagesSlider/ImagesSlider';

export const BrandsImagesSlider = () => {
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
        Picture22,
        Picture23,
        Picture24,
        Picture25,
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