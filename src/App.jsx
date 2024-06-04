import React from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benifits";
import Collaboration from "./components/Collaboration";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Final from "./components/Final";
import Temple1 from "./components/Temple1";
import Temple2 from "./components/Temple2";
import Temple3 from "./components/Temple3";
import Panda from "./components/Panda";
import Brother from "./components/Brother";
import Supporter from "./components/Supporter";
import Critic from "./components/Critic";
import Zoopark from "./components/Zoopark";
import Charminar from "./components/Charminar";
import ThankYou from "./components/Thankyou"; 
import Sorry from "./components/Sorry"; 
import { Routes, Route } from "react-router-dom";

const MainContent = () => (
  <>
    <Header />
    <Hero />
    <Benefits />
    <Collaboration />
    <Services />
    <Pricing />
    <Roadmap />
    <Final />
  </>
);

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/collaboration" element={<Collaboration />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/temple1" element={<Temple1 />} />
          <Route path="/temple2" element={<Temple2 />} />
          <Route path="/temple3" element={<Temple3 />} />
          <Route path="/panda" element={<Panda />} />
          <Route path="/brother" element={<Brother />} />
          <Route path="/supporter" element={<Supporter />} />
          <Route path="/critic" element={<Critic />} />
          <Route path="/zoopark" element={<Zoopark />} />
          <Route path="/charminar" element={<Charminar />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/sorry" element={<Sorry />} />
        </Routes>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
