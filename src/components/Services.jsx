import Section from "./Section";
import Heading from "./Heading";
import { service2, service3, check } from "../assets";
import { brainwaveServices } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";
import { Link } from 'react-router-dom';


const Services = () => {
  return (
    <Section id="best-day">
      <div className="container">
        <Heading
          title="One of the best Days."
          text="This day asalu entha bagunde tinku. Naku aithe super anipinchindi"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[20rem]">
            <div className="flex justify-center items-center h-screen p-2">   
              <p className="text-center">Eroju gurinchi entha plan chesinav nanna nuvu asalu. Intially manam em kadhu le manaki chala time undhi anni cover chestam ankunam but you know nenu undatle ani telsi yeah edo okati plan cheaylia ani decide ainam ee places ni.</p>
            </div>
            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Places</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                What we covered 
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>     
          </div>
                

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
          <Link to="/zoopark">
            <div className="p-4 relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service2}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-120">
                <h4 className="h4 mb-4">Zoo Park</h4>
                <p className="body-2 mb-[3rem] text-n-2">
                Asalu nitho spend cheina one of the finest times.Manchiga opika tho unde aroju nuvu.
                </p>
              </div>
            </div>
          </Link>
          <Link to="/charminar">
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Charminar</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Opika unte veldham anav and manaki chala energy unde aroju.
                </p>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />
              </div>
            </div>
          </Link>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;