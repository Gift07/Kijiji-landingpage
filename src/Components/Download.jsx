const Download = () => {
  return (
    <div className="w-11/12 md:w-7/12 lg:w-5/12 h-44 rounded-xl bg-main flex flex-col items-center justify-center">
      <div className="pt-3 pb-5">
        <h1 className="text-gray text-center text-2xl font-lora font-bold">
          Download Kijiji App
        </h1>
      </div>
      <div className="w-full flex items-center justify-center gap-x-6">
        <div>
          <img src="appstore.svg" className="h-8" alt="appstore" />
        </div>
        <div>
          <img src="playstore.svg" className="h-8" alt="playstore" />
        </div>
      </div>
    </div>
  );
};

export default Download;
