import React from "react";
import { FaUserFriends } from "react-icons/fa";
import Download from "../Download";

const Choose = () => {
  return (
    <div className="bg-love w-full">
      <div className="px-80 pt-20">
        <div className="flex gap-x-3">
          <hr className="w-1 h-8 my-3 bg-orange-500" />
          <h1 className="font-lora font-medium text-2xl text-main py-3">
            Why Choose Us
          </h1>
        </div>
        <div className="flex items-center gap-x-4 py-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div className="w-80 h-80 bg-gray shadow-md rounded-lg bg-opacity-30 flex flex-col items-center justify-center">
              <div className="w-full flex items-center justify-center py-3">
                <div className="bg-main bg-opacity-30 rounded-xl p-4 text-main">
                  <FaUserFriends size={45} />
                </div>
              </div>
              <div>
                <h1 className="font-lora font-bold text-xl text-main text-center">
                  User Friendly
                </h1>
                <p className="text-center px-1 text-sm py-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi quas molestiae aut sint, modi adipisci quae porro
                  optio cumque fugiat suscipit provident, eveniet qui totam
                  mollitia, a maiores! Nemo, nisi!
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ddownload */}
      <div className="w-full flex items-center justify-center pb-20 pt-4">
        <Download />
      </div>
    </div>
  );
};

export default Choose;
