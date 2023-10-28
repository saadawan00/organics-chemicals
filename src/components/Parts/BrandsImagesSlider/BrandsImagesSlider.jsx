import React from "react";

import Picture1 from './../../../images/brands/Picture1.jpg'
import Picture2 from './../../../images/brands/Picture2.jpg'
import Picture3 from './../../../images/brands/Picture3.jpg'
import Picture4 from './../../../images/brands/Picture4.jpg'
import Picture5 from './../../../images/brands/Picture5.jpg'
import Picture6 from './../../../images/brands/Picture6.jpg'
import Picture7 from './../../../images/brands/Picture7.jpg'
import Picture8 from './../../../images/brands/Picture8.jpg'
import Picture9 from './../../../images/brands/Picture9.jpg'
import Picture10 from './../../../images/brands/Picture10.jpg'
import Picture11 from './../../../images/brands/Picture11.jpg'
import Picture12 from './../../../images/brands/Picture12.jpg'
import Picture13 from './../../../images/brands/Picture13.jpg'
import Picture14 from './../../../images/brands/Picture14.jpg'
import Picture15 from './../../../images/brands/Picture15.jpg'
import Picture16 from './../../../images/brands/Picture16.jpg'

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
      ].map((image) => ({
        id: crypto.randomUUID(),
        image
      }));

    return (
        <div className="m-t30">
          <p className="text-center font-22 m-b30">Large variety of stong brands in stock</p>
          <ImagesSlider images={images} speed={25000} />
        </div>
    );
};