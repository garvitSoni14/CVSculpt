import React from "react";
import { Link } from "react-router";

function Services() {
  return (
    <div className="bg-base-100 font-sans">
      {/* Hero Section */}
      <section className="hero min-h-[60vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-extrabold leading-tight mb-4">
              Our Services 🚀
            </h1>
            <p className="text-lg">
              From resume generation to CV design, we provide everything you
              need to shine in the job market.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-white shadow-xl hover:shadow-2xl transition">
              <div className="card-body text-center">
                <div className="text-5xl mb-4">📄</div>
                <h3 className="card-title text-xl font-semibold">
                  AI Resume Builder
                </h3>
                <p>
                  Generate professional, ATS-friendly resumes instantly with AI
                  assistance.
                </p>
              </div>
            </div>
            <div className="card bg-white shadow-xl hover:shadow-2xl transition">
              <div className="card-body text-center">
                <div className="text-5xl mb-4">📝</div>
                <h3 className="card-title text-xl font-semibold">
                  CV Customization
                </h3>
                <p>
                  Personalize your CV for specific industries, roles, or
                  companies.
                </p>
              </div>
            </div>
            <div className="card bg-white shadow-xl hover:shadow-2xl transition">
              <div className="card-body text-center">
                <div className="text-5xl mb-4">🎨</div>
                <h3 className="card-title text-xl font-semibold">
                  Modern Templates
                </h3>
                <p>
                  Choose from sleek, elegant templates designed to grab
                  attention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-base-200 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          Ready to Get Started?
        </h2>
        <p className="text-lg mb-8 text-gray-600">
          Create your resume or CV with just a few clicks. Stand out in the job
          market today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to={"/generate-resume"} className="btn btn-primary btn-lg">
            Build Resume
          </Link>
          <Link to={"/generate-cover-letter"} className="btn btn-outline btn-lg">
            Create CV
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Services;
