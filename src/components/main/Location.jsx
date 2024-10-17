import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';  
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Location = () => {
  const form = useRef();
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

  const handleChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      toast.success("Form Submitted Successfully!");
      setLoading(false);
      setError("");
    })
    .catch(() => {
      toast.error("Failed to send message, please try again.");
      setLoading(false);
      setError("Failed to send message, please try again.");
    });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-[#373737] text-white p-6 md:p-12">
      {/* Left Section */}
      <div className="w-screen lg:flex flex-col items-center justify-center text-center py-24 md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
        <h2 className="text-sm uppercase mb-2">GET STARTED WITH US</h2>
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Start Conversation To <br />
          <span className="text-[#ffa500]">Skyrocket</span> Your Business
        </h1>
        <p className="text-white mb-6 text-sm md:text-base">
          Schedule a free consultation with our experts.
          <br /> Uncover opportunities and take the first step <br /> towards
          digital success.
        </p>
        <Link to="https://wa.me/+923316361916" target="_blank">
          <button className="duration-300 ease-in-out bg-black hover:bg-orange-500 text-white px-6 py-2 rounded-full">
            Let&apos;s Talk
          </button>
        </Link>
      </div>

      {/* Right Section (Form) */}
      <div className="w-full md:w-1/2 bg-white rounded-lg p-6 text-black">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Get A Free Consultation With <br />
          Our Marketing Experts
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
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
            {["firstName", "lastName"].map((name) => (
              <input
                key={name}
                type="text"
                name={name}
                placeholder={name.replace(/([A-Z])/g, " $1").trim()}
                value={formData[name]}
                onChange={handleChange}
                className="w-full md:w-1/2 p-2 border border-gray-300 rounded"
                required
              />
            ))}
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            {["email", "phone"].map((name) => (
              <input
                key={name}
                type={name === "email" ? "email" : "phone"}
                name={name}
                placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
                value={formData[name]}
                onChange={handleChange}
                className="w-full md:w-1/2 p-2 border border-gray-300 rounded"
                required
              />
            ))}
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded h-24"
            required
          />
          <button
            className={`w-full ${loading ? "bg-gray-400 text-white h-10" : "bg-black text-white h-10  hover:bg-[#373737]"} duration-300 ease-in-out rounded-xl`}
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
