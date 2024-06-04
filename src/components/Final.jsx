import { final } from "../constants";
import { Link } from 'react-router-dom'; 
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";


const Final = () => {
  return (
    <Section id="temples">
      <div className="container relative z-2">
         <p className="text-center body-1 max-w-3xl mx-auto mb-6 text-n-1 lg:mb-8">
           <b> Finally niku gratitude chupinche time iga.</b>
          </p>
          <div className="flex flex-wrap justify-center gap-10 mb-10">
          {final.map((item) => (
          <Link to={item.link} key={item.id} className="block"> 
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Click here
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          </Link>
          ))}
          
        </div>
        
      </div>
    </Section>
  );
};

export default Final;