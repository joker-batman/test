import React from 'react';
import Section from "./Section";
import Heading from "./Heading";
import templeImage from "../assets/benefits/temple2.webp";
import { curve } from '../assets';

const Temple2 = () => (
  <Section id="temple2">
            <h1 className="text-center h1 mb-6">
            <span className="inline-block relative">
              MINI TTD{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
      </h1>
    <div className="pt-5 container text-center">
      <img className='pb-10' src={templeImage} alt="Temple" />
      <p className="mt-4 h5">
        <div>Yeah to be precise idhi short unde comparatively.</div>
        <div>Aroju akkada edo pooja ki set chestunde vallu. Manam vellinam darshanam cheskunam and done anthe.</div>
        <div>Epudaina photos diginama tinku asalu. sare ikkada kanisam temple and surroundings kuda dinchale.</div>
        <div>Fine,Fine</div>
        <div>Next interesting part unde auto book chesinav and then gurthu undha jubliee hills motham judge chesinam. Houses, Cars everything. Chala bagunde ah experience.</div>
        <div>Then manam return lo mee inti dagara Haldirams lo lunch chesinam.</div>
        <div>And apudu first time ochina mee intiki and mee plants chupinchi surroundings gurinchi kuda chepinav.</div>
        <div>Mee ilaka lo DON nuvu</div>
      </p>
    </div>
  </Section>
);

export default Temple2;
