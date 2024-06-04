import React from 'react';
import Section from "./Section";
import { curve } from '../assets';
import peacock from "../assets/Peacock.jpg";
import tiger from "../assets/Tiger.jpg";
import lizard2 from "../assets/Lizard2.jpg";
import owl from "../assets/Owl.jpg";
import giraffe from "../assets/Giraffe.jpg";
import rhino from "../assets/Rhino.jpg";
import lion from "../assets/Lion.jpg";
import parrot from "../assets/Parrot.jpg";
import acquarium from "../assets/Acquarium.jpg";

const Zoopark = () => (
  <Section id="zoopark">
            <h1 className="text-center h1 mb-6">
            <span className="inline-block relative">
              ZOO TINKULU ZOO{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
      </h1>
      <p className="mt-15 mb-10 text-lg text-center">Entha beautiful unde tinku eeroju. Ofc nitho osthe entertainment ekkada thagakunda untadhi.</p>
    <div className="pt-5 container text-center" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img className='pb-10 justify-center' src={peacock} alt="Peacock" style={{ maxWidth: "30%", maxHeight: "30%", width: "auto", height: "auto" }} />
      <p className="pl-5 mt-4 text-lg">
        <div>Evaru beautiful ga untaru tinku peacock ah nuva ? </div>
        <div>Koncham ekkuva ainatu anipisthunda fine inka emani pogudutharu ninnu mari.</div>
        </p>
    </div>
    <div className="pt-5 container text-center" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img className='pb-10 justify-center' src={parrot} alt="Parrot" style={{ maxWidth: "30%", maxHeight: "30%", width: "auto", height: "auto" }} />
      <p className="pl-5 mt-4 text-lg">
        <div>Last life lo parrot ah tinku nuvu ? </div>
        <div>Nee nose inka parrot dhi similar ga untai. Cute!</div>
        </p>
    </div>
    <div className="pt-5 container text-center" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img className='pb-10 justify-center' src={giraffe} alt="Giraffe" style={{ maxWidth: "30%", maxHeight: "30%", width: "auto", height: "auto" }} />
      <p className="pl-5 mt-4 text-lg">
        <div>Em kadhu tinku badha padaku ee height vadhu le</div>
        <div>Mari competition dinitho oddu malli nee struggle chudalenu nenu. Chalu le 5'3 niku</div>
        </p>
    </div>
    <div className="pt-5 container text-center" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img className='pb-10 justify-center' src={tiger} alt="Tiger" style={{ maxWidth: "30%", maxHeight: "30%", width: "auto", height: "auto" }} />
      <p className="pl-5 mt-4 text-lg">
        <div>Tiger TINKU </div>
        <div>Edo papam nuv malli feel avuthav ani tiger antuna.</div>
        </p>
    </div>
    <div className="pt-5 container text-center" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img className='pb-10 justify-center' src={lizard2} alt="Lizard2" style={{ maxWidth: "30%", maxHeight: "30%", width: "auto", height: "auto" }} />
      <p className="pl-5 mt-4 text-lg">
        <div>Ago mee best friend. </div>
        <div>Tinku intha pedda balli ni chusi shock kale nenu endhuk ante already ninnu roju chusta ga</div>
        </p>
    </div>
    <div className="pt-5 container text-center" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img className='pb-10 justify-center' src={acquarium} alt="Acquarium" style={{ maxWidth: "30%", maxHeight: "30%", width: "auto", height: "auto" }} />
      <p className="pl-5 mt-4 text-lg">
        <div>Finally zoo ni acquarium tho finish chesinam </div>
        <div>Nuv mee intlo epudu pedthavo emo tinku thondara konu.</div>
        </p>
    </div>
    <div className="container text-center" style={{ display: "flex", justifyContent: "center" }}>
      <img className='pb-10 mr-4' src={rhino} alt="Rhino" style={{ maxWidth: "30%", maxHeight: "30%", width: "auto", height: "auto" }} />
      <img className='pb-10 mr-4' src={lion} alt="Lion" style={{ maxWidth: "30%", maxHeight: "30%", width: "auto", height: "auto" }} />
      <img className='pb-10 mr-4' src={owl} alt="Owl" style={{ maxWidth: "30%", maxHeight: "30%", width: "auto", height: "auto" }} />
    </div>
    <div  className="pt-5 container text-center">
      <p className="pl-5 mt-4 text-lg">
        Madhyala pic lo nenu
      </p>
    </div>
    <div className="pt-5 container text-center">
      <p className="h5 pl-5 mt-4 ">
        <div>
          <h1 className='text-4xl font-bold text-center'><b>So ipudu dhini conclude cheadam</b></h1>
        </div>
        <div className='pt-5'>Similar ga nenu mee palce ki ochina. Then manam bus lo Zoo ki poinam.</div>
        <div>And coming to your dress yellow dress and a white pullover ankuta</div>
        <div>Naku oka sec anipinchindi daily ninnu chusta ga malli zoo lo inka special em untai ani, but then ankuna that nuv mee friends ni chudataniki tiskelthunav ani sare ankuna iga.</div>
        <div>Gurthu unda heavy cold unde iddariki the day before ayna vellinnam.</div>
        <div>Really TINKU thanks! Time thiskoni mari chupinchinav maximum places.</div>
        <div>Alright! Zoo ki vellinam and pedda scientists laga maps lo ekkada unnam ani cuskuntu proceed ainam.</div>
        <div>Unique experience unde chala ante chala chusinam, Jokes and okarini okaru roast cheskovadam.</div>
        <div>This is the day telsa nuv naku ninnu tinku ani kuda pilustharu ani</div>
        <div>And from that day enni sarlu ani unta tinkuluuuuuuuu</div>
        <div>Then inka time undhi and niku opika unde so Charminar ki vellinam</div>
        </p>
    </div>
  </Section>
);

export default Zoopark;
