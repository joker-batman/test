import React from 'react';
import Section from "./Section";
import Heading from "./Heading";
import { curve } from '../assets';
import pandalove from "../assets/pandalove.avif"

const Panda = () => (
  <Section id="panda">
    <h1 className="text-center h1 mb-6">
              TINKU's  {` `}
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
      </h1>
      <Heading title="Panda loves you so much" />
    <div className="container text-center" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img className='pb-10 justify-center' src={pandalove} alt="PandaLove"  />
    </div>
    <div className="pt-5 container text-center">
      <p className="pl-5 mt-4 text-lg">
        <div>
          <h1 className='text-4xl font-bold text-center'><b>Ma tinku and Ma chintu ankuntam iddaram.</b></h1>
        </div>
        <div className='pt-5'> Starting lo nuvu itla ante endhuk antundhi anipinchedi</div>
        <div>Ipudu alvatu aipoi epudaina ankapothe emaindhi anipisthadi.</div>
        </p>
    </div>
  </Section>
);

export default Panda;
