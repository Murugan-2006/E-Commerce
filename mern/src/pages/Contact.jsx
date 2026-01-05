import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We’re here to help. Reach out to us for any questions, support,
            or feedback.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-semibold mb-6">Get In Touch</h2>
          <p className="text-gray-600 mb-6">
            Have a question about our products, orders, or services?
            Our team is always ready to assist you.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>
              <span className="font-medium">📍 Address:</span><br />
              Chennai, Tamil Nadu, India
            </p>
            <p>
              <span className="font-medium">📞 Phone:</span><br />
              +91 98765 43210
            </p>
            <p>
              <span className="font-medium">✉️ Email:</span><br />
              support@yourstore.com
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              required
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map / Footer Note */}
      <div className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-600">
          <p>
            Our support team is available <span className="font-medium">24/7</span> to
            assist you with your shopping experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
