import React from 'react';
import Section from "./Section";
import waterImage from "../assets/waterImage.jpg";
import { curve } from '../assets';

const Surprise = () => (
  <Section id="surprise">
    <h1 className="text-center h1 mb-6">
            Naduvu poi  {` `}
            <span className="inline-block relative">
              WATER{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
            {` `}thagu
      </h1>
      <div className="container text-center" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img className='pb-10 justify-center' src={waterImage} alt="Drink Water"  />
      <p className="pl-5 mt-4 text-lg">Thondara poi water thagu inka chala undhi</p>
    </div>
  </Section>
);

export default Surprise;
