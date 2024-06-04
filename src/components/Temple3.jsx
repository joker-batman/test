import React from 'react';
import Section from "./Section";
import Heading from "./Heading";
import templeImage from "../assets/benefits/temple3.avif";
import { curve } from '../assets';

const Temple3 = () => (
  <Section id="temple3">
            <h1 className="text-center h1 mb-6">
            <span className="inline-block relative">
              LAKSHMI NARASIMHA SWAMI TEMPLE{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
      </h1>
    <div className="pt-10 container text-center">
      <img className='pb-10' src={templeImage} alt="Temple" />
      <p className="mt-4 h5">
        <div>Idhi around Feb lo vellinam</div>
        <div>Asalu entha enjoy chesinam tinku eeroju.</div>
        <div>Niku gurthu undadhu le nen chepta. First iddaram uppal lo kalsinam.</div>
        <div>And the most important thing entha baga ready ainavu ante wow wow wow. Anav kadha even kondharu adiginaru marriage ki velthunava ani.</div>
        <div>Then yadagirigutta vellinam and akkada darshanam complete cheskoni pulihora thinnam (food important) and thintu em chesinamo gurthu undhi ga. Even oka chinna papa ninnu <b>AUNTY</b> anadhi</div>
        <div>Asalu entha hyper unde motham nuvu. Adhi edho try chesinam and okati success aindhi and the other one fail ananu but expect chesinatu rale response.</div>
        <div>Finally avi complete cheskoni return ainam and it was a day well spent.</div>
        <div className='h2'><b><h1>LOVE YOU TINKU</h1></b></div>
      </p>
    </div>
  </Section>
);

export default Temple3;
