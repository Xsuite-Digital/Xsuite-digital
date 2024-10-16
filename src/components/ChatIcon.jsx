import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ChatIcon = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 transition-transform duration-500 ease-in-out ${
        visible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
    >
      <Link to="https://wa.me/+92316361916" target="_blank">
        <img
          src="/whatsappicon.png"
          alt="whatsappicon"
          className="h-20 w-20  rounded-full hover:scale-110 transition-transform duration-300"
        />
      </Link>
    </div>
  );
};

export default ChatIcon;
