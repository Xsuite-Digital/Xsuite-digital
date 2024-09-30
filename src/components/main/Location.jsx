const Location = () => {
  return (
    <>
      <h1 className="tracking-widest flex items-center justify-center font-bold text-xl lg:text-4xl mt-3">
        Location
      </h1>
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-4xl p-1 shadow-lg rounded-lg mb-4 bg-orange-500">
          <div className="w-full h-96 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.10178401976!2d74.32597427442657!3d31.54882114573784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905c4aac1473b%3A0x6e7c45965a04311e!2sMicro%20thinks%20Hotels%20Marketing%20Agency!5e0!3m2!1sen!2s!4v1727327057942!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
