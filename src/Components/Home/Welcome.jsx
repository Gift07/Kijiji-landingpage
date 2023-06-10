import React from "react";

const Welcome = () => {
  return (
    <div className="w-screen h-screen pt-16 bg-main overflow-x-hidden">
      <div className="w-full px-80 pt-24 flex items-center justify-between">
        <div>
          <h1 className="text-5xl text-teal-50 font-lora py-3">
            Best Way to understand <br /> Your online bank
          </h1>
          <p className="max-w-xl py-3 text-teal-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            excepturi autem incidunt error ab, nam, blanditiis ad beatae modi ex
            impedit eum delectus rerum recusandae veritatis animi dolorum,
            explicabo fugiat.
          </p>
          <div className="py-3">
            <button className="px-5 py-3 rounded-full bg-secondary text-main text-sm font-medium">
              Learn More
            </button>
          </div>
        </div>
        <div>
          <img src="matteo.png" alt="matteo" className="w-96 object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
