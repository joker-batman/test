import React from 'react';
import Section from "./Section";
import sorryImage from "../assets/pandasorry.jpg";
import { curve } from '../assets';

const Sorry = () => (
  <Section id="sorry">
        <h1 className="text-center h1 mb-6">
            I am really  {` `}
            <span className="inline-block relative">
              SORRY{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
        </h1>
    <div className="container text-center" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img className='pb-10 justify-center' src={sorryImage} alt="Sorry"  />
      <p className="pl-5 mt-4 text-lg">
        <div>Cute pic kavalane add chesina</div>
        <div>Sare on a serious note, Nenu ninnu emaina hurt chesi unte I am truly <b>SORRY</b>.</div>
        <div>And I am so grateful that em chesina ma chintu, ma annaya ne kadha ani chepi malli normal aithav</div>
        <div><h1><b>LOVE YOU SOOO MUCH</b></h1></div>
      </p>
    </div>
  </Section>
);

export default Sorry;
