import React from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const Vision = () => {
  return (
    <div className="w-full bg-gray">
      <div className="w-full px-80 flex py-20">
        <div className="w-full flex items-center justify-between">
          <div className="bg-love h-[34rem] w-[34rem] rounded-full flex relative justify-center overflow-hidden">
            <div className="absolute top-2 right-10">
              <div className="flex items-center justify-center gap-x-2">
                <img
                  src="rodrigo.jpg"
                  alt="rodrigo"
                  className="h-10 w-10 object-cover ring-2 ring-main rounded-full"
                />
                <h1 className="font-medium text-sm text-teal-600">
                  Good Morning
                </h1>
              </div>
            </div>
            <img
              src="miguel.png"
              alt="miguel"
              className="absolute bottom-1 h-[32rem] object-cover"
            />
          </div>
          <div className="max-w-2xl">
            <h1 className="text-red-500 font-medium text-sm py-2">
              Move your money with us
            </h1>
            <h1 className="py-2 text-2xl font-lora font-semibold text-tertiary">
              We're Helping sending money <br />
              abroad
            </h1>
            <p className="py-2 text-tertiary text-sm max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              praesentium culpa iusto repellat aut minima ab est totam ipsa
              quae. Officiis quisquam culpa totam explicabo! Blanditiis dicta
              repellat sapiente? Placeat.
            </p>
            <div className="max-w-md flex">
              <div className="w-full grid grid-cols-2 ">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-x-3 py-3 font-medium text-tertiary"
                  >
                    <IoCheckmarkCircleSharp size={20} />
                    <h1>Secure Payment</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
