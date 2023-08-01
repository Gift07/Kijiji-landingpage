const Welcome = () => {
  return (
    <div className="w-screen lg:h-[60vh] lg:pt-16 pt-8  md:pt-12  bg-main overflow-x-hidden">
      <div className="w-full px-8 md:px-32 lg:px-40 flex relative">
        <div className="pt-24 z-10">
          <h1 className="text-5xl fontmedium font-lora text-white py-3">
            About Us
          </h1>
          <p className="py-3 text-teal-50 z-10">
            At Kijiji pay, we believe in empowering you with the convenience and
            security of modern financial technology. Our mission is to
            revolutionize the way you transfer money, making it fast, simple,
            and stress-free. With our cutting-edge mobile app, you can now send
            and receive money effortlessly, anytime and from United States &
            Canada to East Africa.
          </p>
          <div className="py-3">
            <button className="px-5 py-3 text-main text-sm font-medium rounded-full bg-secondary">
              Learn More
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 md:lg:bottom-0 right-4 md:lg:right-64">
          <div className="h-28 w-28 md:lg:h-36 md:lg:w-36 rounded-full bg-orange-500" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
