import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoIosAppstore } from "react-icons/io";

const Download = () => {
  return (
    <div className="w-5/12 h-44 rounded-xl bg-main flex flex-col items-center justify-center">
      <div className="pt-3 pb-5">
        <h1 className="text-gray text-center text-2xl font-lora font-bold">
          Download Kijiji App
        </h1>
      </div>
      <div className="w-full flex items-center justify-center gap-x-6">
        <div className="px-5 py-2 text-sm text-main bg-secondary rounded-lg flex items-center justify-center gap-x-2">
          <IoIosAppstore size={24} />
          Get it on App store
        </div>
        <div className="px-5 py-2 text-sm text-main bg-secondary rounded-lg flex items-center justify-center gap-x-2">
          <IoLogoGooglePlaystore size={21} />
          Get it on Play store
        </div>
      </div>
    </div>
  );
};

export default Download;
