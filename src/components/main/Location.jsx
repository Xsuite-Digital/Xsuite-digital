import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Location = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col  md:flex-row items-center justify-between  bg-[#373737] text-white p-6 md:p-12">
      <div className="w-screen md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0 w">
        <h2 className="text-sm uppercase mb-2">GET STARTED WITH US</h2>
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Start Conversation To <br />
          <span className="text-[#ffa500]">Skyrocket</span> Your Business
        </h1>
        <p className="text-white mb-6 text-sm md:text-base">
          Schedule a free consultation with our experts. Uncover opportunities
          and take the first step towards digital success.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <Link to="https://wa.me/03316361916" target="_blank">
            <button className=" duration-300 ease-in-out bg-black hover:bg-[#373737] text-white px-6 py-2 rounded-full flex items-center justify-center">
              Let&apos;s Talk <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-white rounded-lg p-6 text-black">
        <h3 className="text-xl font-semibold mb-4 text-center">
          Get A Free Consultation With <br />
          Marketing Our Expert
        </h3>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="companyName"
            placeholder="Company name"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full md:w-1/2 p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full md:w-1/2 p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              className="w-full md:w-1/2 p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full md:w-1/2 p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded h-24"
            required
          ></textarea>
          <button
            className={`w-full ${
              loading ? "bg-gray-400" : "bg-black hover:bg-[#373737]"
            } text-white py-2 rounded`}
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Location;
