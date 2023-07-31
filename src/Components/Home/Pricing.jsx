const Pricing = () => {
  return (
    <div className="w-full bg-lessergray">
      <div className="w-full px-8 md:px-32 lg:px-40 flex flex-col md:lg:flex md:lg:flex-row md:lg:items-center md:lg:justify-between py-12 md:lg:py-20">
        <div className="lg:w-1/2 w-full">
          <h1 className="py-3 text-2xl font-lora font-semibold text-tertiary">
            We are flexible with your
            <br /> pricing levels
          </h1>
          <p className="py-3 text-tertiary text-sm w-full md:lg:max-w-2xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit, voluptatibus aut. Voluptatum, officia voluptates
            vitae temporibus laudantium eveniet veniam repellendus! Non quo
            reprehenderit accusantium! Maxime adipisci itaque saepe temporibus
            fugiat.
          </p>
          <div className="py-3">
            <button className="px-4 py-3 text-sm font-medium text-tertiary rounded-full bg-secondary">
              Learn More
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 w-full lg:pl-24">
          <div className="shadow h-32 md:lg:w-96 bg-gray rounded-md my-2">
            <hr className="w-1 h-full bg-orange-500 rounded-l-md" />
          </div>
          <div className="shadow h-32 md:lg:w-96 bg-gray rounded-md my-2">
            <hr className="w-1 h-full bg-yellow-500 rounded-l-md" />
          </div>
          <div className="shadow h-32 md:lg:w-96 bg-gray rounded-md my-2">
            <hr className="w-1 h-full bg-teal-500 rounded-l-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
