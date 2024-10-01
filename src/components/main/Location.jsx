import { ArrowRight } from "lucide-react";

const Location = () => {
  return (
    <div className="flex items-center justify-between bg-emerald-800 text-white p-12">
      <div className="w-1/2 pr-8">
        <h2 className="text-sm uppercase mb-2">GET STARTED WITH US</h2>
        <h1 className="text-4xl font-bold mb-4">
          Start Conversation To <br />
          <span className="text-yellow-400">Skyrocket</span> Your Business
        </h1>
        <p className="text-emerald-200 mb-6">
          Schedule a free consultation with our experts. Uncover opportunities
          and take the first step towards digital success.
        </p>
        <div className="flex space-x-4">
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full flex items-center">
            Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          <button className="border border-white hover:bg-white hover:text-emerald-800 text-white px-6 py-2 rounded-full">
            Book A Demo
          </button>
        </div>
      </div>

      <div className="w-1/2 bg-white rounded-lg p-6 text-black">
        <h3 className="text-xl font-semibold mb-4 text-center">
          Get A Free Consultation With <br />
          Marketing Our Expert
        </h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Company name"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="First name"
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex space-x-4">
            <input
              type="email"
              placeholder="E-mail"
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="w-full p-2 border border-gray-300 rounded h-24"
          ></textarea>
          <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Location;
