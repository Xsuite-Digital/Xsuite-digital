import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ChatIcon = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const togglevisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", togglevisibility);
    return () => window.removeEventListener("scroll", togglevisibility);
  }, []);
  return (
    <div
      className={`fixed bottom-4 right-4 z-50 transition-transform duration-500 ease-in-out ${
        visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      {visible && (
        <Link to="https:/wa.me/+923316361916" target="_blank">
          <img
            src="/whatsappicon.png"
            alt="whatsappicon"
            height={100}
            width={100}
            className="z-50 h-16 w-16"
          />
        </Link>
      )}
    </div>
  );
};

export default ChatIcon;
