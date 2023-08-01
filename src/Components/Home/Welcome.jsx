import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Welcome = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);
  return (
    <div className="w-screen h-screen pt-16 bg-main overflow-x-hidden">
      <div className="w-full px-8 md:px-24 lg:px-40 pt-8 md:pt-20 lg:pt-24 flex flex-col-reverse lg:flex-row md:lg:flex md:lg:items-center md:lg:justify-between">
        <div>
          <h1
            data-aos="fade-up"
            data-aos-duration="800"
            className="hidden md:lg:flex lg:text-5xl text-teal-50 font-lora py-3 "
          >
            Send Money direct to mobile <br />
            wallets in East Africa
          </h1>
          {/* for mobile phones */}
          <h1
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="md:lg:hidden flex text-3xl text-teal-50 font-lora py-3 "
          >
            Send Money direct to mobile wallets in East Africa
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="max-w-2xl py-3 text-teal-50 font-lato"
          >
            Kijiji pay allows you to receive instant and secure transfers direct
            to your mobile wallets.from Us ,Canada and UK.
          </p>
          <div className="py-3 flex items-center gap-x-3">
            <div>
              <img
                src="appstore.svg"
                alt="playstore"
                className="h-12 cursor-pointer"
              />
            </div>
            <div>
              <img
                src="playstore.svg"
                alt="playstore"
                className="h-12 cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="">
          <img
            src="PROJEC.png"
            alt="matteo"
            className="w-full lg:w-96 h-96 lg:h-[30rem] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
