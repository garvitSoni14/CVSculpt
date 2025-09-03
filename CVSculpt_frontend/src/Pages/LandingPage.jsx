import React from "react";
import { Link } from "react-router";

const LandingPage = () => {
  return (
    <div className="bg-base-100 font-sans">
      {/* Hero Section */}
      <section className="hero min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              Build the Perfect Resume or CV with AI ⚡
            </h1>
            <p className="text-lg mb-8">
              Just describe your experience and skills. Our intelligent engine will craft a professional Resume or CV in seconds.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to={"/generate-resume"} className="btn btn-primary btn-lg">
                Generate Resume
              </Link>
              <Link to={"/generate-cover-letter"} className="btn btn-outline btn-lg">
                Generate Cover Letter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-white shadow-xl hover:shadow-2xl transition-all">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4">🤖</div>
                <h3 className="card-title text-xl font-semibold">AI-Powered Writing</h3>
                <p>
                  Let our AI intelligently generate your resume and cover letter based on your profile.
                </p>
              </div>
            </div>
            <div className="card bg-white shadow-xl hover:shadow-2xl transition-all">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4">🎨</div>
                <h3 className="card-title text-xl font-semibold">Elegant Templates</h3>
                <p>
                  Choose from clean, modern, and ATS-friendly templates.
                </p>
              </div>
            </div>
            <div className="card bg-white shadow-xl hover:shadow-2xl transition-all">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="card-title text-xl font-semibold">Tailored for Jobs</h3>
                <p>
                  Customize your resume or cover letter for specific job roles and industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition">
              <div className="card-body">
                <p>
                  “This AI resume tool helped me create a stunning resume within minutes. Got interview calls the same week!”
                </p>
                <div className="flex items-center mt-4">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">John Doe</h4>
                    <p>Software Engineer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition">
              <div className="card-body">
                <p>
                  “I created my CV in under 5 minutes using this platform. Super simple and effective!”
                </p>
                <div className="flex items-center mt-4">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="User" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Jane Smith</h4>
                    <p>Marketing Specialist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-base-100 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          Start Building Your Future Today
        </h2>
        <p className="text-lg mb-8 text-gray-600">
          Join thousands using our AI tools to stand out in the job market.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to={"/generate-resume"} className="btn btn-primary btn-lg">
            Create Resume
          </Link>
          <Link to={"/generate-cv"} className="btn btn-outline btn-lg">
            Create Cover Letter
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="footer-title">AI Resume Maker</h4>
              <p>Smart resume & cover letter generation powered by AI.</p>
            </div>
            <div>
              <h4 className="footer-title">Quick Links</h4>
              <a href="#" className="link link-hover">About Us</a>
              <a href="#" className="link link-hover">Features</a>
              <a href="#" className="link link-hover">Contact</a>
            </div>
            <div>
              <h4 className="footer-title">Legal</h4>
              <a href="#" className="link link-hover">Privacy Policy</a>
              <a href="#" className="link link-hover">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
