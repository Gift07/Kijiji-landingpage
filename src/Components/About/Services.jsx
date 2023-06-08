import React, { useState } from "react";

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const ActivateService = (id) => {
    setActiveService(id);
  };
  return (
    <div className="w-full px-80">
      <div className="py-20">
        <div>
          <div className="flex gap-x-3">
            <hr className="w-1 h-8 my-3 bg-orange-500" />
            <h1 className="font-lora font-medium text-2xl text-main py-3">
              Our Services
            </h1>
          </div>
          <p className="text-sm font-medium text-main py-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            quos possimus amet maxime repudiandae laboriosam aperiam ad, aut
            error voluptatum, quaerat illum vel aspernatur vitae, incidunt
            adipisci tempore temporibus molestias?
          </p>
        </div>
        {/* list of services */}
        <div className="flex items-center gap-x-6 py-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              onMouseEnter={() => ActivateService(i + 1)}
              onMouseLeave={() => ActivateService(0)}
              className={`w-80 h-96 border border-main rounded-lg border-opacity-30 ${
                activeService == i + 1 &&
                "scale-110 shadow-md duration-300 ease-in-out transition-all"
              }`}
            >
              Hello
            </div>
          ))}
        </div>
        <div className="w-full flex items-center justify-center py-4">
          <button className="px-10 py-2 bg-secondary text-main rounded-md hover:bg-opacity-70 duration-1000">
            See all Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
