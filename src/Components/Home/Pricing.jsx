const Pricing = () => {
  return (
    <div className="w-full bg-lessergray text-gray-600">
      <div className="w-full px-8 md:px-32 lg:px-40 flex flex-col md:lg:flex md:lg:flex-row md:lg:items-center md:lg:justify-between py-12 md:lg:py-20">
        <div
          data-aos="zoom-in"
          data-aos-duration="500"
          className="lg:w-1/2 w-full"
        >
          <h1 className="py-3 text-2xl font-lora font-semibold text-tertiary">
            We are flexible with your
            <br /> pricing levels
          </h1>
          <p className="py-3 text-tertiary text-sm w-full md:lg:max-w-2xl">
            At kijiji pay, we firmly believe that financial services should be
            accessible to everyone, regardless of their financial background.
            With this philosophy in mind, we have crafted a pricing structure
            that caters to all kinds of users, from individuals sending
            remittances to their families abroad to businesses conducting
            international transactions.
          </p>
          <div className="py-3">
            <button className="px-4 py-3 text-sm font-medium text-tertiary rounded-full bg-secondary">
              Learn More
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 w-full lg:pl-24">
          <div
            data-aos="fade-up-left"
            data-aos-duration="500"
            className="shadow h-32 md:lg:w-96 bg-gray rounded-md my-2 flex gap-x-2"
          >
            <hr className="w-2 h-full bg-orange-500 rounded-l-md" />
            <div className="">
              <h1 className="pb-2 text-main font-medium">Cost-Effectiveness</h1>
              <p className="text-xs max-w-[95%]">
                By offering personalized pricing levels, we strive to strike the
                perfect balance between affordability and quality service. This
                means that you can transfer funds without worrying about
                excessive fees eating into your hard-earned money.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up-left"
            data-aos-duration="600"
            className="shadow h-32 md:lg:w-96 bg-gray rounded-md my-2  flex gap-x-2"
          >
            <hr className="w-2 h-full bg-yellow-500 rounded-l-md" />
            <div className="">
              <h1 className="pb-2 text-main font-medium">Personalization</h1>
              <p className="text-xs max-w-[95%]">
                {`
                We recognize that different users have different requirements
                when it comes to money transfers. Whether you are a frequent
                sender or an occasional user, our flexible pricing options adapt
                to your specific needs. Rest assured that you will never pay for
                services you don't need`}
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up-left"
            data-aos-duration="700"
            className="shadow h-32 md:lg:w-96 bg-gray rounded-md my-2 flex gap-x-2"
          >
            <hr className="w-1 h-full bg-teal-500 rounded-l-md" />
            <div className="">
              <h1 className="pb-2 text-main font-medium">Priority Support</h1>
              <p className="text-xs max-w-[95%]">
                {`
              Regardless of the pricing level you choose,
               our commitment to exceptional customer support 
               remains unwavering. We value each and every user,
                and our dedicated support team is available to assist 
                you with any questions or concerns you may have.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
