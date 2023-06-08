import React from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const Countries = () => {
  return (
    <div className="w-full">
      <div className="px-80 py-20 flex items-center justify-between">
        <div>
          <div className="bg-love h-[30rem] w-[30rem] relative rounded-full flex">
            <div className="bg-gray w-80 h-44 rounded-xl border-2 border-main border-opacity-40 flex flex-col items-center justify-center absolute bottom-2 -left-6 overflow-hidden z-10">
              <div>
                <img
                  src="rodrigo.jpg"
                  alt="rodrigo"
                  className="w-16 h-16 rounded-full object-cover right-2 ring-main"
                />
              </div>
              <div className="w-full flex items-center justify-center text-main text-sm font-medium ">
                <h1>Lameck Allan</h1>
              </div>
              <div className="w-full flex flex-col items-center justify-center">
                <div className="w-8/12 bg-teal-50 h-4 my-1" />
                <div className="w-8/12 bg-teal-50 h-4 my-1" />
              </div>
              <div className="w-full px-10 mt-2 flex items-center justify-between text-red-400 uppercase">
                <h1>Usd</h1>
                <h1>120,000</h1>
              </div>
            </div>
            <img
              src="matteo.png"
              alt="mateo"
              className="h-[36rem] object-contain absolute -right-14"
            />
          </div>
        </div>
        <div>
          <h1 className="py-3 text-2xl font-lora font-semibold text-tertiary">
            Free and instant transfers <br />
            over 10+ Countries all over
            <br /> the world.
          </h1>
          <div>
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-center gap-x-3 my-7"
              >
                <div className="h-10 w-10 rounded-full bg-main bg-opacity-30 text-main flex items-center justify-center">
                  <IoCheckmarkCircleSharp size={30} />
                </div>
                <h1 className="max-w-md text-sm font-medium text-main">
                  Get interbank interbank exchange rate whenever you exchange
                  major currency
                </h1>
              </div>
            ))}
          </div>
          <div>
            <button className="px-6 py-3 text-main bg-secondary rounded-full font-medium text-sm">
              Get More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countries;
