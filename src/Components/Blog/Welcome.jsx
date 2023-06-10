import React from "react";

const Welcome = () => {
  return (
    <div className="w-screen h-[60vh] pt-16 bg-main overflow-x-hidden">
      <div className="w-full h-full px-80 flex flex-col relative">
        <div className="pt-24 z-10">
          <h1 className="text-5xl fontmedium font-lora text-white py-3">
            Discover More abount Business <br />
            Opportunities from kijiji
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
        </div>
        <div className="w-full py-4 absolute bottom-0">
          <div className="flex items-center gap-x-4">
            <input
              className="bg-tertiary text-gray py-3 px-4 text-sm rounded-full outline-none"
              placeholder="search for articles"
            />
            <button className="px-5 py-3 text-main text-sm font-medium rounded-full bg-secondary">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
