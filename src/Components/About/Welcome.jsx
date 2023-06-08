import React from "react";

const Welcome = () => {
  return (
    <div className="w-screen h-[60vh] pt-16 bg-gradient-to-r from-main to-tertiary overflow-x-hidden">
      <div className="w-full px-80 flex relative">
        <div className="pt-20 z-10">
          <h1 className="text-5xl fontmedium font-lora text-white py-3">
            About Us
          </h1>
          <p className="py-3 text-teal-50 z-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            magni enim molestias exercitationem ullam porro fuga libero dicta
            reiciendis doloremque, perspiciatis aliquam! Quia non minus sequi
            magni nam harum! In. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Incidunt voluptatibus quam sint mollitia molestias
            praesentium ratione quae dolore expedita ipsa repellendus facere,
            doloremque, quos, odio commodi dolor optio laborum omnis?
          </p>
          <div className="py-3">
            <button className="px-5 py-3 text-main text-sm font-medium rounded-full bg-secondary">
              Learn More
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 right-64">
          <div className="h-36 w-36 rounded-full bg-orange-500" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
