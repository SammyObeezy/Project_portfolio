import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10">
      <div className="max-w-5xl w-full px-4 md:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Privacy Policy
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12">
          <p className="text-lg text-gray-700 mb-4">
            Effective Date: 10:9:2024
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Introduction
          </h2>
          <p className="text-gray-600 mb-4">
            Welcome to BookWave! This Privacy Policy outlines how we collect,
            use, and protect your information when you use our services. Your
            privacy is important to us, and we are committed to safeguarding it.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Information We Collect
          </h2>
          <p className="text-gray-600 mb-4">
            We may collect the following types of information:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>
              Personal Information: Name, email address, and other contact
              details.
            </li>
            <li>
              Usage Data: Information on how you interact with our website.
            </li>
            <li>
              Cookies: Data that is stored on your device to enhance your
              experience.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            How We Use Your Information
          </h2>
          <p className="text-gray-600 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Provide and maintain our services.</li>
            <li>Improve our website and services.</li>
            <li>
              Communicate with you, including sending updates and marketing
              messages.
            </li>
            <li>Ensure the security of our services.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Sharing Your Information
          </h2>
          <p className="text-gray-600 mb-4">
            We do not sell or rent your personal information to third parties.
            We may share your information in the following circumstances:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>
              With service providers who assist us in operating our services.
            </li>
            <li>If required by law or in response to legal requests.</li>
            <li>To protect our rights or the safety of our users.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Data Security
          </h2>
          <p className="text-gray-600 mb-4">
            We take reasonable measures to protect your information from
            unauthorized access or disclosure. However, no method of
            transmission over the internet or electronic storage is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Your Rights
          </h2>
          <p className="text-gray-600 mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>Access the personal information we hold about you.</li>
            <li>Request correction of any inaccurate information.</li>
            <li>Request deletion of your personal information.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Changes to This Privacy Policy
          </h2>
          <p className="text-gray-600 mb-4">
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on our website.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-4">
            If you have any questions or concerns about this Privacy Policy,
            please contact us at info@bookwave.com.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
