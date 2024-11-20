// import { useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import emailjs from "emailjs-com";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Location = () => {
//   const form = useRef();
//   const [formData, setFormData] = useState({
//     companyName: "",
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = ({ target: { name, value } }) => {
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     emailjs
//       .sendForm(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//         form.current,
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY
//       )
//       .then(() => {
//         toast.success("Form Submitted Successfully!");

//         // Trigger Google Ads conversion event
//         window.gtag("event", "conversion", {
//           send_to: "AW-708625819/wd3-CLiDqqMCEJuL89EC",
//         });

//         setFormData({
//           companyName: "",
//           firstName: "",
//           lastName: "",
//           email: "",
//           phone: "",
//           message: "",
//         });
//         setLoading(false);
//         setError("");
//       })
//       .catch(() => {
//         toast.error("Failed to send message, please try again.");
//         setLoading(false);
//         setError("Failed to send message, please try again.");
//       });
//   };

//   return (
//     <div className="flex flex-col md:flex-row items-center justify-between bg-[#373737] text-white p-6 md:p-12">
//       {/* Left Section */}
//       <div className="w-screen lg:flex flex-col items-center justify-center text-center py-24 md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
//         <h2 className="text-sm uppercase mb-2">GET STARTED WITH US</h2>
//         <h1 className="text-2xl md:text-4xl font-bold mb-4">
//           Start Conversation To <br />
//           <span className="text-[#ffa500]">Skyrocket</span> Your Business
//         </h1>
//         <p className="text-white mb-6 text-sm md:text-base">
//           Schedule a free consultation with our experts.
//           <br /> Uncover opportunities and take the first step <br /> towards
//           digital success.
//         </p>
//         <Link to="https://wa.me/+923316361916" target="_blank">
//           <button className="duration-300 ease-in-out bg-black hover:bg-orange-500 text-white px-6 py-2 rounded-full">
//             Let&apos;s Talk
//           </button>
//         </Link>
//       </div>

//       {/* Right Section (Form) */}
//       <div className="w-full md:w-1/2 bg-white rounded-lg p-6 text-black">
//         <h2 className="text-xl font-semibold mb-4 text-center">
//           Get A Free Consultation With <br />
//           Our Marketing Experts
//         </h2>
//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//         <form ref={form} onSubmit={sendEmail} className="space-y-4">
//           <input
//             type="text"
//             name="companyName"
//             placeholder="Company name"
//             value={formData.companyName}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded"
//             required
//           />
//           <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
//             {["firstName", "lastName"].map((name) => (
//               <input
//                 key={name}
//                 type="text"
//                 name={name}
//                 placeholder={name.replace(/([A-Z])/g, " $1").trim()}
//                 value={formData[name]}
//                 onChange={handleChange}
//                 className="w-full md:w-1/2 p-2 border border-gray-300 rounded"
//                 required
//               />
//             ))}
//           </div>
//           <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
//             {["email", "phone"].map((name) => (
//               <input
//                 key={name}
//                 type={name === "email" ? "email" : "phone"}
//                 name={name}
//                 placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
//                 value={formData[name]}
//                 onChange={handleChange}
//                 className="w-full md:w-1/2 p-2 border border-gray-300 rounded"
//                 required
//               />
//             ))}
//           </div>
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded h-24"
//             required
//           />
//           <button
//             className={`w-full ${
//               loading
//                 ? "bg-gray-400 text-white h-10"
//                 : "bg-black text-white h-10  hover:bg-[#373737]"
//             } duration-300 ease-in-out rounded-xl`}
//             type="submit"
//             disabled={loading}
//           >
//             {loading ? "Sending..." : "Send Message"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Location;
import { useRef, useState } from "react";
                    
                      
                      
  import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
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
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Form Submitted Successfully!");
        window.gtag("event", "conversion", {
          send_to: "AW-708625819/wd3-CLiDqqMCEJuL89EC",
        });
        setFormData({
          companyName: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
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
    <div className="min-h-screen bg-black p-6 md:p-12">
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
        <div className="flex flex-col md:flex-row items-stretch">
          {/* Left Section */}
          <div className="relative w-full md:w-1/2 bg-gradient-to-br from-gray-500/20 to-[#262626] p-8 md:p-16">
            {/* Animated background effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div className="absolute w-64 h-64 -top-32 -left-32 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute w-64 h-64 -bottom-32 -right-32 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 flex flex-col justify-center h-full text-center md:text-left space-y-8">
              <div className="animate-fadeIn">
                <h2 className="text-sm text-orange-400 font-bold tracking-widest uppercase mb-2 transform hover:scale-105 transition-transform duration-300">
                  GET STARTED WITH US
                </h2>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  Start Conversation To
                  <br />
                  <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text animate-gradient">
                    Skyrocket
                  </span>{" "}
                  Your Business
                </h1>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Schedule a free consultation with our experts.
                  <br /> Uncover opportunities and take the first step
                  <br /> towards digital success.
                </p>
              </div>

              <Link 
                to="https://wa.me/+923316361916" 
                target="_blank"
                className="inline-block group w-fit mx-auto md:mx-0"
              >
                <button className="relative overflow-hidden px-8 py-3 bg-orange-500 text-white rounded-full transform hover:translate-y-[-2px] transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30">
                  <span className="relative z-10">Lets Talk</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </Link>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="w-full md:w-1/2 bg-white p-8 md:p-16">
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8 animate-fadeIn">
                Get A Free Consultation With
                <br />
                <span className="text-orange-500">Our Marketing Experts</span>
              </h2>

              {error && (
                <div className="animate-fadeIn bg-red-50 text-red-500 p-4 rounded-lg text-center mb-6">
                  {error}
                </div>
              )}

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company name"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 hover:border-orange-300"
                  required
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["firstName", "lastName"].map((name) => (
                    <input
                      key={name}
                      type="text"
                      name={name}
                      placeholder={name.replace(/([A-Z])/g, " $1").trim()}
                      value={formData[name]}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 hover:border-orange-300"
                      required
                    />
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["email", "phone"].map((name) => (
                    <input
                      key={name}
                      type={name === "email" ? "email" : "tel"}
                      name={name}
                      placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
                      value={formData[name]}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 hover:border-orange-300"
                      required
                    />
                  ))}
                </div>

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all duration-300 hover:border-orange-300 h-32 resize-none"
                  required
                />

                <button
                  className={`w-full relative overflow-hidden group ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-orange-500 to-orange-600"
                  } text-white py-4 rounded-lg transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-orange-500/30`}
                  type="submit"
                  disabled={loading}
                >
                  <span className="relative z-10">
                    {loading ? "Sending..." : "Send Message"}
                  </span>
                  {!loading && (
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
