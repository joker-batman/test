import Section from "./Section";
import { Link } from 'react-router-dom'; 
import { smallSphere, spacerab, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import Button from "./Button";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="nicknames">
      <div className="container relative z-2">
          <div className="flex justify-center mt-12 md:mt-15 xl:mt-5">
            <Button href="/surprise">Surprise</Button>
          </div>
        <div className="hidden pt-10 relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={spacerab}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading
          tag="Ma tinku ki space ante chala Istam. Andhuke ikkada okati add chesina."
          title="Now its time for your popular Nicknames"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
      </div>
    </Section>
  );
};

export default Pricing;