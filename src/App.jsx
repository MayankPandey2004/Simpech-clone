import React from 'react';
import './styles/tailwind.css';
import ImageSlider from './components/ImageSlider';

const App = () => {
  return (
    <div className="font-serif bg-gray-50 min-h-screen ">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4 sm:space-x-8">
            <div className="text-xl sm:text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              Simpech
              <div className="text-xxs text-gray-600">SIMPLICITY IN TECHNOLOGY</div>
            </div>
            <div className="hidden md:flex space-x-4 sm:space-x-6">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">How It Works</a>
              <a href="#use-cases" className="text-gray-700 hover:text-blue-600 transition-colors">Use Cases</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
          <div className="flex space-x-2 sm:space-x-4">
            <button className="px-4 py-2 text-sm sm:text-base text-blue-600 bg-transparent border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
              Request Demo
            </button>
            <button className="px-4 py-2 text-sm sm:text-base text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 bg-gradient-to-b from-blue-100 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 animate-fade-in">
            Virtual Classroom
          </h1>
          <h2 className="mb-6 text-lg sm:text-xl md:text-2xl text-blue-800 animate-fade-in">
            Your Fully Customized Online Learning Ecosystem
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-sm sm:text-base md:text-lg text-gray-700 animate-fade-in">
            Experience a bespoke virtual classroom solution with your own dedicated domain, tailored
            features, and seamless integration. We handle all the technical complexities, allowing you to
            focus solely on delivering exceptional education.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up">
            <button className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center">
              Request a Demo
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base text-blue-600 bg-white rounded-md hover:bg-blue-50 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <ImageSlider />

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 sm:mb-12 text-2xl sm:text-3xl font-bold text-center text-gray-900">
            Comprehensive Features for Modern Education
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                {/* Card content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 text-blue-600 bg-blue-50 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 sm:mb-12 text-2xl sm:text-3xl font-bold text-center text-gray-900">
            How Virtual Classroom Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Step 1 */}
            <div className="group p-6 sm:p-8 text-center bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-6 text-white bg-gradient-to-r from-blue-500 to-white-800 rounded-full">
                <span className="text-xl font-semibold">1</span>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Consultation & Planning</h3>
              <p className="text-sm sm:text-base text-gray-600">
                We collaborate with you to understand your goals and design a tailored virtual classroom solution.
              </p>
            </div>

            {/* Step 2 */}
            <div className="group p-6 sm:p-8 text-center bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-6 text-white bg-gradient-to-r from-blue-500 to-white-800 rounded-full">
                <span className="text-xl font-semibold">2</span>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Development & Integration</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Our experts build and integrate custom features, ensuring seamless compatibility with your systems.
              </p>
            </div>

            {/* Step 3 */}
            <div className="group p-6 sm:p-8 text-center bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-6 text-white bg-gradient-to-r from-blue-500 to-white-800 rounded-full">
                <span className="text-xl font-semibold">3</span>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Launch & Ongoing Support</h3>
              <p className="text-sm sm:text-base text-gray-600">
                We deploy your platform, provide training, and offer continuous support to ensure success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 sm:mb-12 text-2xl sm:text-3xl font-bold text-center text-gray-900">
            Virtual Classroom Use Cases
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* K-12 Education */}
            <div className="group relative p-6 sm:p-8 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">K-12 Education</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Customized learning environments with age-appropriate interfaces, interactive tools, and robust parental controls.
                </p>
              </div>
            </div>

            {/* Higher Education */}
            <div className="group relative p-6 sm:p-8 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">Higher Education</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Advanced platforms for research presentations, collaborative projects, and integration with university systems.
                </p>
              </div>
            </div>

            {/* Corporate Training */}
            <div className="group relative p-6 sm:p-8 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">Corporate Training</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Branded solutions for professional development, featuring custom analytics and seamless HR system integration.
                </p>
              </div>
            </div>

            {/* Online Tutoring Centers */}
            <div className="group relative p-6 sm:p-8 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">Online Tutoring Centers</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Tailored platforms for one-on-one or group instruction, with custom scheduling and payment integrations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solution Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Heading with animation */}
          <h2
            className="mb-12 sm:mb-16 text-3xl sm:text-4xl font-bold text-center text-gray-800"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            Elevate Learning with Your Custom Virtual Classroom
          </h2>

          {/* Grid layout for features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 relative">
            {/* Vertical Divider Line */}
            <div className="hidden sm:block absolute inset-y-0 left-1/2 w-px bg-gray-200 transform -translate-x-1/2"></div>

            {/* Left Column */}
            <div data-aos="fade-right" data-aos-duration="600">
              {/* Dedicated Domain & Branding */}
              <div className="mb-8">
                <h3 className="mb-4 text-xl sm:text-2xl font-semibold text-gray-700">
                  Dedicated Domain & Branding
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <FeatureListItem text="Your own web address (e.g., learn.yourinstitution.com)" />
                  <FeatureListItem text="Fully customized UI to reflect your institution's branding" />
                  <FeatureListItem text="Personalized login and dashboard experiences for users" />
                </ul>
              </div>

              {/* Technical Expertise */}
              <div>
                <h3 className="mb-4 text-xl sm:text-2xl font-semibold text-gray-700">
                  Technical Expertise
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <FeatureListItem text="End-to-end development and maintenance by our expert team" />
                  <FeatureListItem text="Regular updates and cutting-edge feature enhancements" />
                  <FeatureListItem text="24/7 technical support and proactive system monitoring" />
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div data-aos="fade-left" data-aos-duration="600">
              {/* Tailored Features */}
              <div className="mb-8">
                <h3 className="mb-4 text-xl sm:text-2xl font-semibold text-gray-700">
                  Tailored Features
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <FeatureListItem text="Custom tools and integrations tailored to your needs" />
                  <FeatureListItem text="Unique workflows designed for your teaching methods" />
                  <FeatureListItem text="Scalable infrastructure to support your institution's growth" />
                </ul>
              </div>

              {/* Focus on Your Core Business */}
              <div>
                <h3 className="mb-4 text-xl sm:text-2xl font-semibold text-gray-700">
                  Focus on Your Core Business
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <FeatureListItem text="Focus on teaching and content creation while we handle the rest" />
                  <FeatureListItem text="Comprehensive management of all technical aspects and updates" />
                  <FeatureListItem text="Seamless scalability to grow with your institution" />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Heading with animation */}
          <h2
            className="mb-8 sm:mb-12 text-2xl sm:text-3xl font-bold text-center text-gray-900"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            Get in Touch
          </h2>

          {/* Grid layout for contact details and form */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {/* Left Column: Contact Details */}
            <div data-aos="fade-right" data-aos-duration="600">
              <h3 className="mb-4 text-lg sm:text-xl font-semibold text-gray-800">
                Discuss Your Custom Solution
              </h3>
              <p className="mb-6 text-sm sm:text-base text-gray-600">
                Ready to explore how a custom Virtual Classroom solution can transform your institution's
                online learning? Our team is here to discuss your unique needs and create a tailored plan.
              </p>
              <ul className="mb-6 space-y-3">
                <FeatureListItem text="In-depth consultation to understand your requirements" />
                <FeatureListItem text="Custom development roadmap for your institution" />
                <FeatureListItem text="Transparent pricing and flexible implementation plans" />
              </ul>

              {/* Contact Information */}
              <div className="mb-6 space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-700">hello@simpech.com</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-700">+91 76459 18958</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-700">+1 (332) 333-3759</span>
                </div>
              </div>

              {/* Schedule Consultation Button */}
              <button
                className="flex items-center px-6 py-3 text-sm sm:text-base text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                Schedule Consultation
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Right Column: Contact Form */}
            <div data-aos="fade-left" data-aos-duration="600">
              <h3 className="mb-4 text-lg sm:text-xl font-semibold text-gray-800">
                Request More Information
              </h3>
              {/* Form Box */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 sm:p-8">
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 text-sm sm:text-base text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-3 text-sm sm:text-base text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Your Phone with country code"
                      className="w-full p-3 text-sm sm:text-base text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Institution / Organisation Name"
                      className="w-full p-3 text-sm sm:text-base text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Tell us about your specific needs and customization requirements"
                      className="w-full p-3 text-sm sm:text-base text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      rows={4}
                    ></textarea>
                  </div>
                  <button
                    className="w-full p-3 text-sm sm:text-base text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                  >
                    Send Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-16 text-white bg-gray-900">
        <div className="container mx-auto px-4">
          {/* Grid layout for footer content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* About Section */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="mb-4 text-lg sm:text-xl font-semibold">About Simpech</h3>
              <p className="mb-6 text-sm sm:text-base text-gray-300">
                Simpech is at the forefront of digital innovation, creating cutting-edge products that
                empower businesses to thrive in the digital age. Our suite of solutions is designed to
                enhance productivity, streamline processes, and drive growth.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Terms Section */}
            <div>
              <h3 className="mb-4 text-lg sm:text-xl font-semibold">Terms</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">User Agreement</a></li>
              </ul>
            </div>

            {/* Products Section */}
            <div>
              <h3 className="mb-4 text-lg sm:text-xl font-semibold">Our Products</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Virtual Classroom</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cloud Recorder</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Document Converter</a></li>
              </ul>
            </div>

            {/* Connect Section */}
            <div>
              <h3 className="mb-4 text-lg sm:text-xl font-semibold">Connect With Us</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="pt-8 sm:pt-12 mt-8 sm:mt-12 text-center border-t border-gray-700">
            <p className="text-sm sm:text-base text-gray-300">© 2025 Simpech. All rights reserved.</p>
            <p className="mt-2 text-xs sm:text-sm text-gray-400">Empowering businesses through innovative technology solutions.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureListItem = ({ text }) => {
  return (
    <li className="flex items-start">
      <svg className="w-4 h-4 sm:w-5 sm:h-5 mt-1 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M5 13l4 4L19 7"></path>
      </svg>
      <span className="text-sm sm:text-base">{text}</span>
    </li>
  );
};

const features = [
  {
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0110 2c-1.88 0-3.627.713-4.946 1.95C3.454 5.535 2.43 7.698 2.088 10H3.1c.5 0 .866.41.776.898a7.016 7.016 0 01-.118 1.926 7 7 0 00.6-3.114 5.73 5.73 0 01.035-.717z" clipRule="evenodd"></path></svg>,
    title: "Custom Domain",
    description: "Your own branded platform with a unique web address for your institution."
  },
  {
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"></path><path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"></path><path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"></path></svg>,
    title: "Room Creation",
    description: "Instructors can easily create and manage virtual classrooms."
  },
  {
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path></svg>,
    title: "Screen Sharing",
    description: "Multiple screen sharing capabilities for enhanced collaboration."
  },
  {
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"></path></svg>,
    title: "Advanced Whiteboard",
    description: "Multi-tabbed design with support for various file formats."
  },
  {
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>,
    title: "Dark Mode",
    description: "Eye-friendly dark theme for comfortable extended use."
  },
  {
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path></svg>,
    title: "Full Customization",
    description: "Tailored features and design to match your specific educational needs."
  },
  {
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path></svg>,
    title: "Session Recordings",
    description: "Automatic recording and sharing of class sessions."
  },
  {
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>,
    title: "In-Class Chat",
    description: "Real-time messaging for engaging discussions."
  },
  {
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>,
    title: "Multimedia Integration",
    description: "Seamlessly incorporate YouTube videos and web content."
  },
  {
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>,
    title: "API Access",
    description: "Integrate with your existing systems and tools effortlessly."
  },
  {
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>,
    title: "User Management",
    description: "Effortless administration of students, instructors, and staff."
  },
  {
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>,
    title: "Resource Drive",
    description: "Centralized storage for teaching materials and resources."
  },
  {
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>,
    title: "Teacher Controls",
    description: "Granular permissions management for student interactions."
  },
  {
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>,
    title: "Analytics Dashboard",
    description: "Comprehensive insights into engagement and performance."
  },
  {
    icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>,
    title: "Continuous Updates",
    description: "Regular feature enhancements based on your feedback and needs."
  }
];

export default App;