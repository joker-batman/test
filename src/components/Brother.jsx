import React from 'react';
import Section from "./Section";
import Heading from "./Heading";
import { curve } from '../assets';
import rakhi from "../assets/Rakhi.png"

const Brother = () => (
  <Section id="brother">
    <h1 className="text-center h1 mb-6">
              MY DEAR DEAR {` `}
            <span className="inline-block relative">
              CHELLI{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
      </h1>
      <Heading title="Annaya ana respect epudaina ichinava" />
    <div className="container text-center" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img className='pb-10 justify-center' src={rakhi} alt="Rakhi"  />
    </div>
    <div className="pt-5 container text-center">
      <p className="pl-5 mt-4 text-lg">
        <div>
          <h1 className='text-4xl font-bold text-center'><b>A muhurtham lo rakhi katinavo Tinku</b></h1>
        </div>
        <div className='pt-5'>Ipudu lucky evaru nuva lekapothe nena</div>
        <div>Ofc nenu lucky le nuvu kattinadhuku.</div>
        <div>Aina enni sarlu vadthav nanna adhi urikane kattina Rakhi ani.</div>
        <div><b><h1>LOVE YOU TINKU</h1></b></div>
        </p>
    </div>
  </Section>
);

export default Brother;
