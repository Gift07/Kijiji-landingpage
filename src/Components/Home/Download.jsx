const Download = () => {
  return (
    <div className="w-full bg-main">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex items-center flex-col lg:flex-row">
          <div className="lg:w-1/2 w-full bg-black">
            <img
              src="android.png"
              alt="androidimage"
              className="w-full h-[30rem] object-contain"
            />
          </div>
          <div className="lg:w-1/2 w-full pb-4 lg:pb-0 flex flex-col lg:pl-24 pl-8">
            <h1 className="py-3 text-lg font-Lato text-white">
              Download our App on playstore today by clicking on the button
              below
            </h1>
            <div>
              <img src="playstore.svg" alt="appstoreapp" className="h-10" />
            </div>
          </div>
        </div>
        <div className="w-full flex items-center flex-col-reverse lg:flex-row">
          <div className="lg:w-1/2 w-full flex flex-col lg:pl-40 pl-8">
            <h1 className="py-3 text-lg font-Lato text-white">
              Download our App on appstore today by clicking on the button below
            </h1>
            <div>
              <img src="appstore.svg" alt="appstoreapp" className="h-10" />
            </div>
          </div>
          <div className="lg:w-1/2 w-full bg-white">
            <img
              src="apple.png"
              alt="androidimage"
              className="w-full h-[30rem] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
