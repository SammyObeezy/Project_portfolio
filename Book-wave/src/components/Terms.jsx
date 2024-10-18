import React from "react";

const TermsOfUse = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10">
      <div className="max-w-5xl w-full px-4 md:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Terms of Use
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12">
          <p className="text-lg text-gray-700 mb-4">Last updated: 17:10:2024</p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Introduction
          </h2>
          <p className="text-gray-600 mb-4">
            Welcome to BookWave! These Terms of Use govern your use of our
            website and services. By accessing or using BookWave, you agree to
            comply with these terms. If you do not agree with these terms,
            please do not use our service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            User Accounts
          </h2>
          <p className="text-gray-600 mb-4">
            To access certain features of our service, you may be required to
            create an account. You agree to provide accurate, current, and
            complete information during the registration process and to update
            such information to keep it accurate, current, and complete.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            User Responsibilities
          </h2>
          <p className="text-gray-600 mb-4">
            As a user of BookWave, you are responsible for:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4">
            <li>
              Maintaining the confidentiality of your account information.
            </li>
            <li>Not sharing your account with others.</li>
            <li>
              Not using the service for any illegal or unauthorized purpose.
            </li>
            <li>Not violating any applicable laws or regulations.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Intellectual Property
          </h2>
          <p className="text-gray-600 mb-4">
            All content on BookWave, including text, graphics, logos, and
            images, is the property of BookWave or its content suppliers and is
            protected by copyright and other intellectual property laws.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Limitation of Liability
          </h2>
          <p className="text-gray-600 mb-4">
            In no event shall BookWave or its affiliates be liable for any
            indirect, incidental, special, consequential, or punitive damages
            arising out of or relating to your use of our service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Changes to Terms
          </h2>
          <p className="text-gray-600 mb-4">
            We reserve the right to modify these Terms of Use at any time. We
            will notify you of any changes by posting the new terms on our
            website. Your continued use of BookWave after such changes will
            constitute your acceptance of the new terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Governing Law
          </h2>
          <p className="text-gray-600 mb-4">
            These Terms of Use shall be governed by and construed in accordance
            with the laws of Kenya, without regard to its conflict
            of law principles.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about these Terms of Use, please contact
            us at info@bookwave.com.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsOfUse;
