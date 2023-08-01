const Welcome = () => {
  return (
    <div className="w-screen h-[60vh] pt-8 md:lg:pt-16 bg-main overflow-x-hidden">
      <div className="w-full h-full px-8 md:px-32 lg:px-40 flex flex-col relative">
        <div className="pt-24 z-10">
          <h1
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-4xl fontmedium font-lora text-white py-3"
          >
            Discover More abount Business <br />
            Opportunities from kijiji
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="py-3 text-teal-50 z-10 font-Lato text-xs md:lg:text-base"
          >
            {`
            At Kijiji, we believe that opportunities are not just found; they
            are created. Our platform serves as a vibrant marketplace where you
            can connect with a diverse community of sellers, buyers, and
            partners who are eager to explore new horizons with you. With
            "Discover More about Business Opportunities from Kijiji," we invite
            you to embark on a journey of growth, innovation, and prosperity`}
          </p>
        </div>
        <div className="w-full py-4 absolute bottom-0 overflow-x-hidden">
          <div className="w-full flex items-center gap-x-2 lg:md:gap-x-4">
            <input
              className="bg-tertiary w-[60%] text-gray py-3 pl-2 text-sm rounded-full outline-none"
              placeholder="search"
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
