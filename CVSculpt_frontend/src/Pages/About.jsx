import React from "react";
import { Link } from "react-router";

const About = () => {
  return (
    <div className="bg-base-100 font-sans">
      {/* Hero Section */}
      <section className="hero min-h-[50vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-extrabold leading-tight mb-4">
              About CVSculpt
            </h1>
            <p className="text-lg">
              Your AI-powered assistant for crafting professional, modern, and
              ATS-friendly resumes and cover letters.
            </p>
          </div>
        </div>
      </section>

      {/* Why CVSculpt Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose CVSculpt? 🚀
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card bg-white shadow-xl hover:shadow-2xl transition">
              <div className="card-body">
                <h3 className="card-title text-xl font-semibold">
                  Smart & Simple
                </h3>
                <p>
                  Generate tailored resumes and cover letters with built-in AI
                  support in just minutes.
                </p>
              </div>
            </div>
            <div className="card bg-white shadow-xl hover:shadow-2xl transition">
              <div className="card-body">
                <h3 className="card-title text-xl font-semibold">
                  Modern Templates
                </h3>
                <p>
                  Beautiful, customizable layouts designed to impress recruiters
                  and pass ATS scans.
                </p>
              </div>
            </div>
            <div className="card bg-white shadow-xl hover:shadow-2xl transition">
              <div className="card-body">
                <h3 className="card-title text-xl font-semibold">
                  Secure & Reliable
                </h3>
                <p>
                  Your data is safe with us. Easily download resumes in PDF
                  format anytime.
                </p>
              </div>
            </div>
            <div className="card bg-white shadow-xl hover:shadow-2xl transition">
              <div className="card-body">
                <h3 className="card-title text-xl font-semibold">
                  Premium Features
                </h3>
                <p>
                  Unlock advanced customization and priority features with our
                  premium plans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            How It Works 💡
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="card bg-base-100 shadow-md hover:shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">1. Enter Details</h3>
              <p>Fill in your experience, education, or upload an old resume.</p>
            </div>
            <div className="card bg-base-100 shadow-md hover:shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">2. Pick a Template</h3>
              <p>Select from sleek, ATS-friendly templates to match your style.</p>
            </div>
            <div className="card bg-base-100 shadow-md hover:shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">3. AI Generation</h3>
              <p>Let CVSculpt create a professional resume or cover letter instantly.</p>
            </div>
            <div className="card bg-base-100 shadow-md hover:shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">4. Download & Share</h3>
              <p>Save as PDF, refine further, or share directly with employers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-base-100 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          Ready to Level Up Your Applications?
        </h2>
        <p className="text-lg mb-8 text-gray-600">
          Start building resumes and cover letters that make an impact.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to={"/generate-resume"} className="btn btn-primary btn-lg">
            Start Building Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
