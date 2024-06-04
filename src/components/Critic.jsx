import React from 'react';
import Section from "./Section";
import Heading from "./Heading";
import { curve } from '../assets';
import pandaangry from "../assets/pandaangry.webp";

const Critic = () => (
  <Section id="critic">
    <h1 className="text-center h1 mb-6">
              Always  {` `}
            <span className="inline-block relative">
              Sataishtha{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
      </h1>
      <Heading title="Nee bar ni epudu improve chestune unta" />
    <div className="container text-center" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img className='pb-10 justify-center' src={pandaangry} alt="AngryPanda"  />
    </div>
    <div className="pt-5 container text-center">
      <p className="pl-5 mt-4 text-lg">
        <div>
          <h1 className='text-4xl font-bold text-center'><b>Nuv emaina cheppu tinku pedda Dayyam nuvu</b></h1>
        </div>
        <div className='pt-5'>Nijanga entha sataisthav tinku.</div>
        <div>Gurthu unchuko nuv edhi entha baga chesina support chesta and dani max perfect aye laga chusta</div>
        <div>No one should point there fingers.</div>
        <div>Nenu Thappa</div>
        <div><b><h1>LOVE YOU TINKU</h1></b></div>
        </p>
    </div>
  </Section>
);

export default Critic;
