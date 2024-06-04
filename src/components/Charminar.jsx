import React from 'react';
import Section from "./Section";
import Heading from "./Heading";
import { curve } from '../assets';
import charminar1 from "../assets/Charminar1.jpg";
import earrings from "../assets/Earrings.jpg";

const Charminar = () => (
  <Section id="charminar">
      <h1 className="text-center h1 mb-6">
          <span className="inline-block relative">
              CHARMINAR{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
          </span>
      </h1>
      <Heading title="Emaina Thiskuntava tinku" />
      <p className="h4 pl-5 pb-10 mt-4 text-center ">It was a perfect end to this day </p>
    <div className="pt-5 container text-center" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img className='pb-10 justify-center' src={charminar1} alt="charminar1" style={{ maxWidth: "30%", maxHeight: "30%", width: "auto", height: "auto" }} />
      <p className="pl-5 mt-4 text-lg">
        <div>Mee Backyard</div>
        <div>Evaru emanakunte motham charminar ni kontav nuvu. Em opika thalli shopping lo asalu hatsoff!</div>
        </p>
    </div>
    <div className="pt-5 container text-center" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img className='pb-10 justify-center' src={earrings} alt="Earrings" style={{ maxWidth: "30%", maxHeight: "30%", width: "auto", height: "auto" }} />
      <p className="pl-5 mt-4 text-lg">
        <div>Nee favourite type of jewellery (Earrings)</div>
        <div>Entha sataisthe thiskunav Tinku ivi. Ikkadidaka ochi ma tinku ki emaina konivapothe entha darunam adhi. Papam osthadi</div>
        </p>
    </div>
    <div className="pt-5 container text-center">
      <p className="pl-5 mt-4 text-lg">
        <div>
          <h1 className='text-4xl font-bold text-center'><b>So ipudu dhini conclude cheadam</b></h1>
        </div>
        <div className='pt-5'>Ikkadiki ochinaka ardham aindhi naku nuv already plan chesinav that ma Mummy ki Bangles thiskkunta ani</div>
        <div>Ikkadiki ochinaka nuv ventane velli one of your favourite dessert thinav -- Shahtoot Malai -- Bagunde tinku nijangane.</div>
        <div>Then once nuv mummy ki bangles thiskunav and nuvu earrings thiskune varaku urkole nenu.</div>
        <div>Then akkada shopping conclude chesi malli mee inti side vellinam</div>
        <div>And ikkada Pani Puri thini we concluded the day.</div>
        <div><b><h1 className='pt-5 h2'>LOVE YOU TINKU</h1></b></div>
        </p>
    </div>
  </Section>
);

export default Charminar;
