import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Team = () => {
  const profile = [
    {
      imgSrc: "sir.webp",
      name: "Sir Zaheer",
      position: "CEO",
      fb: "blackfb.webp",
      insta: "blackinsta.webp",
      linkedin: "blacklinkedin.webp",
      fbLink: "https://www.facebook.com/Microthinksbyzaheer/",
      instaLink: "https://www.instagram.com/microthinks/",
      linkedinLink: "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAABvuYtABov1uB-q4PWigeWko8HiqfcL0tqs&keywords=zaheer%20masih&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=e0910a1b-8f61-4a28-a067-7cd8f172e278&sid=egR&spellCorrectionEnabled=true",
    },
    {
      imgSrc: "SJL.webp",
      name: "Sajal",
      position: "Graphics Designer",
      fb: "blackfb.webp",
      insta: "blackinsta.webp",
      linkedin: "blacklinkedin.webp",
      fbLink: "https://www.facebook.com/sajal.mughal.106/",
      instaLink: "https://www.instagram.com/me_sajal_000/",
      linkedinLink: "https://www.linkedin.com/in/amna-sajal-28a88925b/",
    },
    {
      imgSrc: "Anas.webp",
      name: "Muhammad Anas",
      position: "Team Lead | Frontend Developer",
      fb: "blackfb.webp",
      insta: "blackinsta.webp",
      linkedin: "blacklinkedin.webp",
      fbLink: "https://www.facebook.com/bmckhanz78?mibextid=LQQJ4d",
      instaLink: "https://www.instagram.com/muhammad_anas26?igsh=MTR1OHNqZ3Y5Y3VsaA%3D%3D&utm_source=qr",
      linkedinLink: "https://www.linkedin.com/in/muhammad-anas-bmc?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    {
      imgSrc: "Rafaqat.webp",
      name: "Rafaqat Ali",
      position: "Graphic Designer",
      fb: "blackfb.webp",
      insta: "blackinsta.webp",
      linkedin: "blacklinkedin.webp",
      fbLink: "   https://www.facebook.com/Rafaqat.Graphics",
      instaLink: "https://www.instagram.com/rafaqatali.graphics/",
      linkedinLink: "https://www.linkedin.com/in/rafaqat-ali-a35628315/",
    },
    {
      fb: "blackfb.webp",
      insta: "blackinsta.webp",
      linkedin: "blacklinkedin.webp",
      imgSrc: "Ali.jpg",
      name: "Ali Raza",
      fbLink: "https://www.facebook.com/aly.dogar/",
      instaLink: "https://www.instagram.com/alydogar?fbclid=IwY2xjawFyDQ5leHRuA2FlbQIxMAABHbbDeDB8M9_nIQuDqSUq7z1ktQQzVf4Sr0p4ESxVXmkJpUqYsvmiVN8CFQ_aem_KdCKrdtS6NNyC9aTOLCVRA",
      linkedinLink: "https://www.linkedin.com/in/sardaar-aly/",
      position: "UI/UX Designer",
    },
    {
      fb: "blackfb.webp",
      insta: "blackinsta.webp",
      linkedin: "blacklinkedin.webp",
      imgSrc: "/Mashhood.webp",
      name: "Mashhood Abdul Rehman",
      position: "Full Stack Developer",
      fbLink: "https://www.facebook.com/profile.php?id=100009166248846&mibextid=rS40aB7S9Ucbxw6v",
      instaLink: "https://www.instagram.com/mashhood.ar?igsh=dncwbXE2eG9wM2N4",
      linkedinLink: "https://www.linkedin.com/in/mashhood-rehman-48117b24b/",
    },
    {
      fb: "blackfb.webp",
      insta: "blackinsta.webp",
      linkedin: "blacklinkedin.webp",
      imgSrc: "",
      name: "Aqsa Malik",
      position: "Front-End Developer",
      fbLink: "https://www.facebook.com/sajal.mughal.106/",
      instaLink: "https://www.instagram.com/sirzaheer",
      linkedinLink: "https://www.linkedin.com/in/sirzaheer",
    },
    {
      fb: "blackfb.webp",
      insta: "blackinsta.webp",
      linkedin: "blacklinkedin.webp",
      imgSrc: "",
      name: "Sharoon",
      position: "Front-End Developer",
      fbLink: "https://www.facebook.com/sajal.mughal.106/",
      instaLink: "https://www.instagram.com/sirzaheer",
      linkedinLink: "https://www.linkedin.com/in/sirzaheer",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleProfiles, setVisibleProfiles] = useState([]);

  useEffect(() => {
    const updateVisibleProfiles = () => {
      const isMobile = window.innerWidth < 1024;
      setVisibleProfiles(
        profile.slice(currentIndex, currentIndex + (isMobile ? 1 : 4))
      );
    };

    updateVisibleProfiles();
    window.addEventListener("resize", updateVisibleProfiles);

    return () => {
      window.removeEventListener("resize", updateVisibleProfiles);
    };
  }, [currentIndex]);

  const nextProfiles = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + (window.innerWidth < 1024 ? 1 : 4) >= profile.length
        ? 0
        : prevIndex + (window.innerWidth < 1024 ? 1 : 4)
    );
  };

  const prevProfiles = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - (window.innerWidth < 1024 ? 1 : 4) < 0
        ? profile.length - (window.innerWidth < 1024 ? 1 : 4)
        : prevIndex - (window.innerWidth < 1024 ? 1 : 4)
    );
  };

  return (
    <div className="flex flex-col items-center bg-gray-200 py-8">
      <h1 className="font-bold text-2xl mb-6">Our Team</h1>

      <div className="relative  ">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          key={currentIndex}
        >
          {visibleProfiles.map((member, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center rounded-md p-6 shadow-lg bg-white"
            >
              <img
                loading="lazy"
                src={member.imgSrc}
                className="w-40 h-40 rounded-full object-cover border-2 border-gray-200 mb-4"
                alt={member.name}
              />
              <h2 className="text-gray-800 text-lg font-bold">{member.name}</h2>
              <p className="text-gray-600">{member.position}</p>

              <div className="flex space-x-6 items-center justify-center mt-4">
                <img
                  onClick={() => window.open(member.fbLink, "_blank")}
                  src={member.fb}
                  className="h-8 w-4"
                  alt="Facebook"
                />

                  <img 
                  
                   onClick={() => window.open(member.instaLink, "_blank")}
                  src={member.insta} className="h-6 w-6" alt="Instagram" />
                  <img
                   onClick={() => window.open(member.linkedinLink, "_blank")}
                    src={member.linkedin}
                    className="h-8 w-8"
                    alt="LinkedIn"
                  />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <button
          onClick={prevProfiles}
          className="absolute left-[-3rem] top-1/2 transform -translate-y-1/2 px-3 py-2 bg-gray-300 rounded-full transition z-10"
        >
          &#8592;
        </button>
        <button
          onClick={nextProfiles}
          className="absolute right-[-3rem] top-1/2 transform -translate-y-1/2 px-3 py-2 bg-gray-300 rounded-full transition z-10"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Team;
