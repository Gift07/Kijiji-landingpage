import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Vision = () => {
  const data_items = [
    "secure payments",
    "low rates",
    "instant transfers",
    "multi purpose",
  ];
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);
  return (
    <div className="w-full bg-gray">
      <div className="w-full md:px-28 lg:px-40 flex py-20 flex-col lg:flex-row">
        <div className="lg:w-1/2 w-full flex flex-col md:lg:flex-row md:lg:items-center md:lg:justify-between">
          <div data-aos="zoom-in-right" className="relative px-[12.5px]">
            <div className="absolute -top-2 right-8 md:lg:top-2 md:lg:right-10 z-10">
              <div className="flex items-center justify-center gap-x-2">
                <img
                  src="rodrigo.jpg"
                  alt="rodrigo"
                  className="h-8 w-8 md:lg:h-10 md:lg:w-10 object-cover ring-2 ring-main rounded-full"
                />
                <h1 className="font-medium text-sm text-teal-600">
                  Good Morning
                </h1>
              </div>
            </div>
            {/* words introduction */}
            <div className="absolute right-2 top-10  md:lg:-right-12 lg:md:top-24 z-10">
              <h1 className="text-lg md:lg:text-2xl font-lora text-main font-medium py-1 md:lg:py-3">
                Alexa
              </h1>
              <p className="text-main text-xs lg:text-sm font-medium">
                Talk to our multilingual
                <br /> support team
              </p>
            </div>
            {/* Tanzanian Flag */}
            <div className="absolute left-2 md:lg:left-0 top-16 z-10">
              <div className="h-10 md:lg:h-12 bg-gray bg-opacity-30 backdrop-blur-md w-36 md:lg:w-44 rounded-full shadow-md border border-tertiary flex items-center px-2 gap-x-2">
                <div>
                  <img
                    src="tzflag.png"
                    alt="flag1"
                    className="h-8 w-8 md:lg:h-10 md:lg:w-10 rounded-full object-cover"
                  />
                </div>
                <div className="h-full w-[110px] py-1">
                  <div className="flex items-center justify-between">
                    <h1 className="uppercase text-xs md:lg:text-sm font-medium font-lora text-main">
                      Tzs
                    </h1>
                    <h1 className="uppercase text-xs md:lg:text-sm font-medium font-lora text-main">
                      20M
                    </h1>
                  </div>
                  <div className="h-[.5px] w-full bg-main bg-opacity-30" />
                  <h1 className="text-xs font-light text-main">
                    instant transfer
                  </h1>
                </div>
              </div>
            </div>
            {/* american flag */}
            <div className="absolute left-2 md:lg:left-0 bottom-20 bmd:lg:ottom-24 z-10">
              <div className="h-10 md:lg:h-12 bg-gray bg-opacity-30 backdrop-blur-md w-36 md:lg:w-44 rounded-full shadow-md border border-tertiary flex items-center px-2 gap-x-2">
                <div>
                  <img
                    src="usflag.jpg"
                    alt="flag1"
                    className="h-8 w-8 md:lg:h-10 md:lg:w-10 rounded-full object-cover"
                  />
                </div>
                <div className="h-full w-[110px] py-1">
                  <div className="flex items-center justify-between">
                    <h1 className="uppercase text-xs md:lg:text-sm font-medium font-lora text-main">
                      USD
                    </h1>
                    <h1 className="uppercase text-xs md:lg:text-sm font-medium font-lora text-main">
                      20K
                    </h1>
                  </div>
                  <div className="h-[.5px] w-full bg-main bg-opacity-30" />
                  <h1 className="text-xs font-light text-main">
                    instant transfer
                  </h1>
                </div>
              </div>
            </div>
            {/* euro flag */}
            <div className="absolute right-2 md:lg:right-0 bottom-12 md:lg:bottom-32 z-10">
              <div className="h-10 md:lg:h-12 bg-gray bg-opacity-30 backdrop-blur-md w-36 md:lg:w-44 rounded-full shadow-md border border-tertiary flex items-center px-2 gap-x-2">
                <div>
                  <img
                    src="euflag.png"
                    alt="flag1"
                    className="h-8 w-8 md:lg:h-10 md:lg:w-10 rounded-full object-cover"
                  />
                </div>
                <div className="h-full w-[110px] py-1">
                  <div className="flex items-center justify-between">
                    <h1 className="uppercase text-xs md:lg:text-sm font-medium font-lora text-main">
                      Eur
                    </h1>
                    <h1 className="uppercase text-xs md:lg:text-sm font-medium font-lora text-main">
                      20k
                    </h1>
                  </div>
                  <div className="h-[.5px] w-full bg-main bg-opacity-30" />
                  <h1 className="text-xs font-light text-main">
                    instant transfer
                  </h1>
                </div>
              </div>
            </div>
            <div
              className={`bg-love w-[calc(100%-25px)] h-[24rem]  md:lg:h-[34rem] md:lg:w-[34rem]  rounded-full flex relative  justify-center overflow-hidden`}
            >
              <img
                src="miguel.png"
                alt="miguel"
                className="absolute bottom-1 h-[90%] md:lg:h-[24rem] object-cover"
              />
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="500"
          className="lg:w-1/2 w-full max-w-2xl flex flex-col justify-center lg:pl-24 px-8 md:lg:px-0"
        >
          <h1 className="text-red-500 font-medium text-sm py-2">
            Move your money with us
          </h1>
          <h1 className="hidden lg:flex py-2 text-2xl font-lora font-semibold text-tertiary">
            We are Helping sending money <br />
            abroad
          </h1>
          <h1 className="py-2 lg:hidden flex text-2xl font-lora font-semibold text-tertiary">
            We are Helping sending money abroad
          </h1>
          <p className="py-2 text-tertiary text-sm max-w-lg">
            With kijiji pay you can send money instant to abd from United
            States, Canada and Europe to East African countries
          </p>
          <div className="max-w-md flex gap-x-3">
            <div className="w-full grid grid-cols-2 ">
              {data_items.map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-x-3 py-3 font-medium text-tertiary"
                >
                  <IoCheckmarkCircleSharp size={20} />
                  <h1 className="text-sm whitespace-nowrap">{i}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
