import React from 'react';
import Section from "./Section";
import Heading from "./Heading";
import { curve } from '../assets';
import letter from "../assets/Letter.jpg";

const Supporter = () => (
  <Section id="supporter">
    <h1 className="text-center h1 mb-6">
              EPUDU AVASARAM UNNA  {` `}
            <span className="inline-block relative">
              CHINTU{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
            IS HERE
      </h1>
      <Heading title="Dont worry etu ponu" />
    <div className="container text-center" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img className='pb-10 justify-center' src={letter} alt="Letter" style={{ maxWidth: "50%", maxHeight: "50%", width: "auto", height: "auto" }}/>
    </div>
    <div className="pt-5 container text-center">
      <p className="pl-5 mt-4 text-lg">
        <div>
          <h1 className='text-4xl font-bold text-center'><b>Aha intha manchiga ichinaka evadu oddu ankuntaru ninnu</b></h1>
        </div>
        <div className='pt-5'>Epudu aina support ki unta</div>
        <div>Always grateful for you too.</div>
        </p>
    </div>
  </Section>
);

export default Supporter;
