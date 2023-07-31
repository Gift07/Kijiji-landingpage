import { IoCheckmarkCircleSharp } from "react-icons/io5";

const Countries = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="lg:w-1/2 w-full  py-10 flex items-center justify-center">
        {" "}
        <img
          src="Tablet.png"
          alt="matteo"
          className="w-full lg:w-96 h-96 lg:h-[30rem] object-cover"
        />
      </div>
      <div className="lg:w-1/2 w-full lg:pl-24 py-20">
        <div className="px-8 lg:md:px-0">
          <h1 className="py-3 text-2xl font-lora font-semibold text-tertiary">
            Free and instant transfers <br />
            over 10+ Countries all over
            <br /> the world.
          </h1>
          <div className="">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex gap-x-3 my-7">
                <div className="h-8 w-8 lg:md:h-10 md:lg:w-10 rounded-full bg-main bg-opacity-30 text-main flex items-center justify-center text-2xl lg:md:text-3xl">
                  <IoCheckmarkCircleSharp />
                </div>
                <h1 className="w-full lg:md:max-w-md text-xs md:lg:text-sm font-medium text-main">
                  Get interbank interbank exchange rate whenever you exchange
                  major currency
                </h1>
              </div>
            ))}
          </div>
          <div>
            <button className="px-6 py-3 text-main bg-secondary rounded-full font-medium text-sm">
              Get More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countries;
