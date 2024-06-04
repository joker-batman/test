import React from 'react';
import Section from "./Section";
import Heading from "./Heading";
import templeImage from "../assets/benefits/temple1.jpg";
import { curve } from '../assets';

const Temple1 = () => (
  <Section id="temple1">
        <h1 className="text-center h1 mb-6">
            <span className="inline-block relative">
              PEDDAMMA THALLI TEMPLE{" "}
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
      <p className="pl-5 mt-4 h5">
        <div>Naku asalu exact ga gurthu ledhu epudu vellinam ani so please emankoku.And so brief ga experience describe chesta.</div>
        <div>Nenu morning mee side ochina and then manam metro lo temple ki vellinam. Yeah first time kadha tinku manam atla velladam so naku antha idea lekunde nuv etla untav bayata ani. </div>
        <div>Nijanga telsa shock aina full. Eme ma tinku na ani. College lo ela untadhi bayata full active untav asalu.</div>
        <div>If I remember correctlly nuvu yellow and green type dress veskunav. Asusual ga, manchigane ready aithav le nuvu.</div>
        <div>Then temple ki vellinam and darshanam cheskunam, okasari saripodhu annatu oka 3 to 4 times chepichinav. Then akkada prasadham thiskunam and thini bayatiki ochesinam.</div>
        <div>Then Mini TTD ki poinam and adhi next.</div>
        </p>
    </div>
  </Section>
);

export default Temple1;
