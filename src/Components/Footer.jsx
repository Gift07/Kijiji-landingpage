import React from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";

const Footer = () => {
  return (
    <div className="w-full bg-main text-teal-50">
      <div className="w-full px-8 md:px-32 lg:px-40 py-10 lg:md:py-20">
        <div className="w-full flex flex-col md:lg:flex md:lg:flex-row md:lg:justify-between">
          <div className="flex flex-col md:lg:flex md:lg:flex-row lg:md:items-center lg:gap-x-24">
            <div>
              <h1 className="py-3 font-medium font-lora">Support</h1>
              <ul className="font-extralight text-sm">
                <li className="my-2">Learn</li>
                <li className="my-2">Practice</li>
                <li className="my-2">Customer</li>
                <li className="my-2">For Sales</li>
                <li className="my-2">For EnterPrise</li>
                <li className="my-2">Services</li>
              </ul>
            </div>
            {/* new items */}
            <div>
              <h1 className="py-3 font-medium font-lora">Resources</h1>
              <ul className="font-extralight text-sm">
                <li className="my-2">Learn</li>
                <li className="my-2">Practice</li>
                <li className="my-2">Customer</li>
                <li className="my-2">For Sales</li>
                <li className="my-2">For EnterPrise</li>
                <li className="my-2">Services</li>
              </ul>
            </div>
            {/* Third item */}
            <div>
              <h1 className="py-3 font-medium font-lora">Help & Support</h1>
              <ul className="font-extralight text-sm">
                <li className="my-2">Learn</li>
                <li className="my-2">Practice</li>
                <li className="my-2">Customer</li>
                <li className="my-2">For Sales</li>
                <li className="my-2">For EnterPrise</li>
                <li className="my-2">Services</li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <h1 className="py-3 font-medium font-lora">
                Subscribe to Our News Letter
              </h1>
              <p className="font-light py-2 max-w-md text-xs lg:md:text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Placeat fugiat facere similique, nam rem a unde.
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <input
                className="bg-tertiary w-5/6 lg:md:w-auto px-4 py-2 text-sm text-teal-100 rounded-full outline-none"
                placeholder="Subscribe"
              />
              <button className="px-4 py-2 rounded-full text-main text-sm font-medium bg-secondary">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen bg-opacity-25 h-[.5px] bg-gray" />
      <div className="py-3 px-8 md:px-32 lg:px-40 flex items-center justify-between">
        <div>
          <h1 className="font-[200] text-xs lg:md:text-sm italic">
            All rights reserved kijiji pay @{new Date().getFullYear()}
          </h1>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="bg-secondary bg-opacity-20 text-secondary rounded-full h-6 w-6 text-sm lg:md:h-8 lg:md:w-8 flex items-center justify-center">
            <IoLogoLinkedin />
          </div>
          <div className="bg-secondary bg-opacity-20 text-secondary rounded-full  h-6 w-6 text-sm lg:md:h-8 lg:md:w-8 flex items-center justify-center">
            <IoLogoInstagram />
          </div>
          <div className="bg-secondary bg-opacity-20 text-secondary rounded-full  h-6 w-6 text-sm lg:md:h-8 lg:md:w-8 flex items-center justify-center">
            <IoLogoTwitter />
          </div>
          <div className="bg-secondary bg-opacity-20 text-secondary rounded-full  h-6 w-6 text-sm lg:md:h-8 lg:md:w-8 flex items-center justify-center">
            <IoLogoFacebook />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
