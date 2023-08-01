import { FaUserFriends } from "react-icons/fa";
import Download from "../Download";

const Choose = () => {
  // choose us
  const choose = [
    {
      title: "Ease of Use",
      details:
        "Say goodbye to lengthy and complicated money transfer processes. Our app is designed with a user-friendly interface, ensuring that even first-time users can navigate it effortlessly. Sending money to your loved ones has never been easier",
    },
    {
      title: "Lightning-Fast Transactions",
      details:
        "We understand the importance of swift transactions. With [App Name], you can transfer money instantly, allowing your friends and family to access funds when they need it the most",
    },
    {
      title: "Transparent and Competitive Rates:",
      details:
        "No more hidden fees or unexpected charges. We offer transparent and competitive rates for our services, ensuring you get the best value for your money.",
    },
    {
      title: "24/7 Customer Support",
      details:
        "Need assistance? Our dedicated support team is available round the clock to assist you with any questions or concerns you may have. Your satisfaction is our priority.",
    },
  ];
  return (
    <div className="bg-love w-full">
      <div className="px-8 md:px-32 lg:px-40 pt-20">
        <div className="flex gap-x-3">
          <hr className="w-1 h-8 my-3 bg-orange-500" />
          <h1 className="font-lora font-medium text-2xl text-main py-3">
            Why Choose Us
          </h1>
        </div>
        <div className="flex flex-col md:lg:flex-row items-center gap-x-4 py-4">
          {choose.map((item, i) => (
            <div
              key={i}
              className="w-80 h-80 bg-gray shadow-md rounded-lg bg-opacity-30 flex flex-col items-center justify-center my-2 lg:md:my-0"
            >
              <div className="w-full flex items-center justify-center py-3">
                <div className="bg-main bg-opacity-30 rounded-xl p-4 text-main">
                  <FaUserFriends size={45} />
                </div>
              </div>
              <div>
                <h1 className="font-lora font-bold text-xl text-main text-center">
                  {item.title}
                </h1>
                <p className="text-center px-1 text-sm py-3">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ddownload */}
      <div className="w-full flex items-center justify-center pb-20 pt-4">
        <Download />
      </div>
    </div>
  );
};

export default Choose;
