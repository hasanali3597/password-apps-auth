import React from "react";
import { NavLink } from "react-router";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ===== Hero Section ===== */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to Our Website</h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Learn, build, and grow with modern web technologies. React,
            Firebase, and Tailwind CSS made easy.
          </p>
          <div className="flex justify-center gap-4">
            <NavLink
              to="/singup"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100"
            >
              Get Started
            </NavLink>
            <button className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-blue-600">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* ===== Features Section ===== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">🚀 Fast Performance</h3>
            <p className="text-gray-600">
              Optimized React components for smooth and fast user experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">🔐 Secure Auth</h3>
            <p className="text-gray-600">
              Firebase authentication with Google & Email login support.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">🎨 Modern UI</h3>
            <p className="text-gray-600">
              Clean, responsive design using Tailwind CSS.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Call To Action ===== */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">
            Ready to start your journey?
          </h2>
          <p className="text-gray-600 mb-6">
            Build real projects and improve your skills step by step.
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Join Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
