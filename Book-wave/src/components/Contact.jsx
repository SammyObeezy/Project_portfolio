import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple form validation
    if (formData.name && formData.email && formData.message) {
      setFormStatus("Thank you for contacting us!");
      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } else {
      setFormStatus("Please fill in all fields.");
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10">
      <div className="max-w-5xl w-full px-4 md:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Contact Us
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12">
          <p className="text-lg text-gray-700 text-center mb-8">
            We'd love to hear from you! Fill out the form below, and we'll get
            back to you as soon as possible.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Name Input */}
              <div className="flex-1">
                <label className="block text-gray-600 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-red-400 transition duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Input */}
              <div className="flex-1">
                <label className="block text-gray-600 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-red-400 transition duration-300"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-gray-600 mb-2">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg h-40 focus:ring-2 focus:ring-red-400 transition duration-300"
                placeholder="Enter your message"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-red-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300"
              >
                Send Message
              </button>
            </div>

            {/* Form Status */}
            {formStatus && (
              <p className="text-center mt-4 text-lg text-red-500">
                {formStatus}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
