import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] px-6 py-16">
      <div className="max-w-3xl mx-auto">
        {/* Contact form only */}
        <form className="bg-white p-10 shadow-2xl rounded-2xl space-y-6 border border-gray-100">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Send us a message
          </h3>

          {/* Name Field */}
          <div className="form-control">
            <label className="label mb-2">
              <span className="text-gray-700 font-medium">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/70"
            />
          </div>

          {/* Email Field */}
          <div className="form-control">
            <label className="label mb-2">
              <span className="text-gray-700 font-medium">Email Address</span>
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/70"
            />
          </div>

          {/* Message Field */}
          <div className="form-control">
            <label className="label mb-2">
              <span className="text-gray-700 font-medium">Message</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/70"
              rows={5}
              placeholder="Your message..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button className="btn btn-primary w-full text-lg rounded-xl shadow-md hover:shadow-lg transition-all">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
