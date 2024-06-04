import React from 'react';
import Section from "./Section";
import Heading from "./Heading";
import thankyouImage from "../assets/pandathanks.webp";
import { curve } from '../assets';

const ThankYou = () => (
  <Section id="thankyou">
    <h1 className="pb-5 text-center h1 mb-6">
            Chala grateful unna  {` `}
            <span className="inline-block relative">
              THANK YOU SO MUCH{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
      </h1>
      <Heading title="Consider this one of the final Gifts in BTech" />
    <div className="pt-5 container text-center" style={{ justifyContent: "center", alignItems: "center" }}>
      <img className='pb-10 justify-center' src={thankyouImage} alt="Thanks"  />
      <p className="mt-4 text-lg ">
        <div>Yeah chala chepi unta and ikkada kuda ninnu edo okti ani unta but tinku enni sarlu chepina saripodhu that grateful to have you in my life</div>
        <div>Cheptu unta ga words lo express cheyalenu ani, but still I think bane chesi unta.</div>
        <div>Entha chinna pilla laga chestam tinku and chala overwhelmed feel avuthuna nenu</div>
        <div>Remember you will always be my chinna papa and chinna dayyam</div>
        <div>Ninnu entha irritate chesina at the end of the day I Love you thalli</div>
      </p>
    </div>
    <div className="pt-5 container text-center" style={{ justifyContent: "center", alignItems: "center" }}>
      <p className='h4'> 
        <div>
          <h1>Finally I hope you achieve everything you dream of and intlo vallaki thanks ani chepu ilannti oka rare piece ni thayaru chesinanduku</h1>
        </div>
      </p>
      <h1 className='pt-5 h1'><b>LOVE YOU TINKULUUUU</b></h1>
    </div>
  </Section>
);

export default ThankYou;
