import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Our Store
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Your one-stop destination for quality products, unbeatable prices,
            and a seamless shopping experience.
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        {/* Left */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We are a modern e-commerce platform dedicated to bringing you
            high-quality products from trusted brands. Our goal is to make
            online shopping simple, secure, and enjoyable for everyone.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From electronics and fashion to daily essentials, we carefully
            curate products that offer the best value and reliability.
          </p>
        </div>

        {/* Right */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
          <ul className="space-y-3 text-gray-600">
            <li>✔ High-quality & genuine products</li>
            <li>✔ Affordable and transparent pricing</li>
            <li>✔ Fast & reliable delivery</li>
            <li>✔ Secure payments</li>
            <li>✔ Dedicated customer support</li>
          </ul>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To deliver a smooth and trustworthy online shopping experience
              by combining technology, quality products, and excellent
              customer service.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To become a leading e-commerce platform that customers trust
              and love, known for innovation, value, and reliability.
            </p>
          </div>
        </div>
      </div>

      {/* Call To Action */}
      <div className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start Shopping With Us Today
          </h2>
          <p className="text-gray-300 mb-6">
            Explore thousands of products and enjoy a seamless shopping
            experience.
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default About;
