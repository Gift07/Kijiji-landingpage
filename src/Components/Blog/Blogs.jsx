import React from "react";
import { AiOutlineEye } from "react-icons/ai";

const Blogs = () => {
  return (
    <div className="w-full">
      <div className="px-80 flex items-center justify-center py-20">
        <div className="w-full grid grid-cols-3 items-center justify-center gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div className="w-96">
              <div>
                <img
                  src="rodrigo.jpg"
                  alt="rodrigo"
                  className="h-72 w-full object-cover rounded-lg"
                />
              </div>
              <div className="w-full">
                <h1 className="text-lg py-2 font-lora font-semibold text-main">
                  Buy and sell stocks at a very cheaper rate
                </h1>
                <p className="py-2 text-sm text-main">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt, dignissimos consectetur ea sint accusamus assumenda?
                  Quidem rem dolore,
                </p>
                <div className="w-full flex items-center justify-between text-sm py-2 text-main">
                  <h1>21/07/2023</h1>
                  <span className="flex items-center gap-x-1">
                    <AiOutlineEye />
                    300
                  </span>
                </div>
                <div className="w-full">
                  <button className="w-full h-8 flec items-center justify-center bg-secondary text-main text-sm rounded-full">
                    Read article
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
