import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <div className="bg-black text-white py-52 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative z-10">
            <h1 className="text-3xl text-center font-bold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Privacy Policy
            </h1>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </div>
      <div className="privacy-policy bg-white text-gray-800 p-8 max-w-4xl mx-auto">
        <p className="mb-4">
          XSuite Digital is owned by Xsuite Marketing Agency, which operates as
          the data controller of your personal details.
        </p>

        <p className="mb-4">
          We have adopted this Privacy Policy to explain how we process the
          information collected by XSuite Digital and the reasons for collecting
          specific personal data about you. Please read this Privacy Policy
          carefully before using our website.
        </p>

        <p className="mb-4">
          We prioritize your personal data's confidentiality and safety.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">
          Personal Information We Collect
        </h2>
        <p className="mb-4">
          When you visit{" "}
          <a
            href="https://xsuite.digital/"
            className="text-blue-600 hover:underline"
          >
            https://xsuite.digital/
          </a>
          , we automatically collect particular details about your device,
          including information about your web browser, IP address, time zone,
          and some of the cookies installed on your device. In addition to this,
          as you browse the site, we collect information about the individual
          web pages or products you view, what websites or search terms referred
          you to our site, and how you engage with it. We refer to this
          instantly collected information as "Device Information."
        </p>

        <p className="mb-4">
          Moreover, we may collect personal data you provide to us during
          registration or when filling out forms (including but not limited to
          your name, address, email, payment information, etc.) to fulfill our
          contractual obligations.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">
          Why Do We Process Your Data?
        </h2>
        <p className="mb-4">
          Our primary goal is to ensure the security of customer data. We
          process only minimal user data that is absolutely necessary to
          maintain the website. Information collected automatically is used
          solely to identify potential cases of abuse and to gather statistical
          information regarding website usage. This statistical information is
          not aggregated in a manner that identifies any specific user.
        </p>

        <p className="mb-4">
          You can visit our website without disclosing your identity or any
          information that identifies you as a specific individual. However, if
          you wish to use certain features of the website, receive our
          newsletter, or provide information through forms, you may need to
          share personal data with us. Choosing not to provide this information
          may limit your ability to use some features, such as subscribing to
          our newsletter or contacting us directly.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">
          Your Rights
        </h2>
        <p className="mb-4">
          If you are a European resident, you have the following rights
          concerning your personal data:
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li>The right to be informed</li>
          <li>The right of access</li>
          <li>The right to rectification</li>
          <li>The right to erasure</li>
          <li>The right to restrict processing</li>
          <li>The right to data portability</li>
          <li>The right to object</li>
          <li>Rights in relation to automated decision-making and profiling</li>
        </ul>

        <p className="mb-4">
          To exercise these rights, please contact us using the information
          provided below.
        </p>

        <p className="mb-4">
          Additionally, if you are a European resident, we process your
          information to fulfill contracts we might have with you (for example,
          if you place an order through our site) or to pursue our legitimate
          business interests. Please note that your information may be
          transferred outside of Europe, including to Canada and the United
          States.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">
          Links to Other Websites
        </h2>
        <p className="mb-4">
          Our website may contain links to other websites not owned or managed
          by us. We are not responsible for the privacy practices of these
          external sites and encourage you to review their privacy policies when
          you leave our website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">
          Information Security
        </h2>
        <p className="mb-4">
          We secure the information you provide on controlled, secure system web
          servers, protected from unidentified access, utilize, or disclosure.
          We manage moderate administrative, technical, and physical safeguards
          to protect against unauthorized access and disclosure. However, no
          data transmission over the Internet or wireless network can be
          guaranteed to be completely secure.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">
          Legal Disclosure
        </h2>
        <p className="mb-4">
          We might reveal any information we collect, use, or receive if needed
          or permitted by law, such as to comply with a subpoena or similar
          legal processes, and when we believe disclosure is necessary to
          protect our rights, your safety, or the safety of others, investigate
          fraud, or respond to government requests.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">
          Contact Information
        </h2>
        <p className="mb-4">
          If you have any queries about this Privacy Policy or you want to
          discuss any issue related to your rights and personal facts, please
          contact us at{" "}
          <a
            href="mailto:info@xsuite.digital"
            className="text-blue-600 hover:underline"
          >
            info@xsuite.digital
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
