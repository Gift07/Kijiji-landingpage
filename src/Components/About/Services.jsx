import { useState } from "react";

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const ActivateService = (id) => {
    setActiveService(id);
  };
  const services = [
    {
      title: "Send Money",
      details:
        "Seamlessly transfer money to your family, friends, or business associates with just a few taps on your mobile device. Our streamlined process ensures quick and hassle-free transactions",
      image: "money.jpg",
    },
    {
      title: "Receive Money",
      details:
        "Receive funds from anywhere in the world with ease. Whether it's from a loved one supporting you or a client paying for your services, we make sure you get your money promptly.",
      image: "money.jpg",
    },
    {
      title: "International Transfers:",
      details:
        "Need to send money abroad? Our international transfer service lets you securely and swiftly send money to over [number] countries, with competitive exchange rates and low fees",
      image: "money.jpg",
    },
    {
      title: "Transaction History",
      details:
        " Access a detailed transaction history to keep track of your financial activities. Review and monitor past transfers for a clear overview of your financial interactions.",
      image: "money.jpg",
    },
  ];

  return (
    <div className="w-full px-8 md:px-32 lg:px-40">
      <div className="py-20">
        <div>
          <div className="flex gap-x-3">
            <hr className="w-1 h-8 my-3 bg-orange-500" />
            <h1 className="font-lora font-medium text-2xl text-main py-3">
              Our Services
            </h1>
          </div>
          <p className="text-sm font-medium text-main py-3">
            Here is the list of services that we can offer you
          </p>
        </div>
        {/* list of services */}
        <div className="flex flex-col lg:flex-row items-center gap-x-6 py-4">
          {services.map((item, i) => (
            <div
              key={item.title}
              onMouseEnter={() => ActivateService(i + 1)}
              onMouseLeave={() => ActivateService(0)}
              className={`w-80 h-96 border border-main rounded-lg border-opacity-30 my-2 lg:my-0 ${
                activeService == i + 1 &&
                "scale-110 shadow-md duration-300 ease-in-out transition-all"
              }`}
            >
              <img src={item.image} className="w-full rounded-t-lg h-2/3" />
              <div className="px-2 pt-2">
                <h1 className="uppercase text-main">{item.title}</h1>
                <p className="text-sm font-Lato">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex items-center justify-center py-4">
          <button className="px-10 py-2 bg-secondary text-main rounded-md hover:bg-opacity-70 duration-1000">
            See all Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
