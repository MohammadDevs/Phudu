import React from 'react';

const Contacts = () => {
    return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-6">
        Contact Us
      </h2>
      <p className="text-center text-lg mb-12">
        Have any questions? We’re here to help. Reach out to us anytime!
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <img
              src="/src/assets/location-icon.png"
              alt="Location"
              className="w-8"
            />
            <p>123 Main Street, Dhaka, Bangladesh</p>
          </div>
          <div className="flex items-center gap-4">
            <img
              src="/src/assets/phone-icon.png"
              alt="Phone"
              className="w-8"
            />
            <p>+880 123 456 789</p>
          </div>
          <div className="flex items-center gap-4">
            <img
              src="/src/assets/email-icon.png"
              alt="Email"
              className="w-8"
            />
            <p>support@example.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-md">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    );
};

export default Contacts;