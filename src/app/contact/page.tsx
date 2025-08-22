'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faClock, faCode } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-900/95 backdrop-blur-md border-b border-gray-700 sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <FontAwesomeIcon icon={faCode} className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent tracking-tight">Code Garden</span>
              <div className="ml-2 px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                v2.0
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="relative text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-200 group">
                <span>Home</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link href="/programs" className="relative text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-200 group">
                <span>Programs</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link href="/about" className="relative text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-200 group">
                <span>About</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link href="/contact" className="relative text-cyan-400 font-medium transition-colors duration-200 group">
                <span>Contact</span>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400 transition-all duration-300"></div>
              </Link>
              <div className="flex items-center space-x-2 text-sm text-gray-500 mr-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Live Support</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="space-y-1.5">
                <div className="w-6 h-0.5 bg-gray-300 transition-all duration-200"></div>
                <div className="w-6 h-0.5 bg-gray-300 transition-all duration-200"></div>
                <div className="w-6 h-0.5 bg-gray-300 transition-all duration-200"></div>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-6 border-t border-gray-700">
              <div className="space-y-4">
                <Link href="/" className="block text-gray-300 hover:text-cyan-400 font-medium py-2 transition-colors">
                  Home
                </Link>
                <Link href="/programs" className="block text-gray-300 hover:text-cyan-400 font-medium py-2 transition-colors">
                  Programs
                </Link>
                <Link href="/about" className="block text-gray-300 hover:text-cyan-400 font-medium py-2 transition-colors">
                  About
                </Link>
                <Link href="/contact" className="block text-cyan-400 font-medium py-2">
                  Contact
                </Link>
                <div className="flex items-center space-x-2 text-sm text-gray-500 py-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Live Support</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 bg-gray-900 relative">
        {/* Floating Code Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-blue-400/20 font-mono text-sm animate-pulse">
            contact.init()
          </div>
          <div className="absolute top-32 right-20 text-green-400/20 font-mono text-sm animate-pulse delay-1000">
            {'{ status: "ready" }'}
          </div>
          <div className="absolute bottom-32 left-20 text-purple-400/20 font-mono text-sm animate-pulse delay-2000">
            await response()
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Status Indicator */}
            <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-mono text-sm">CONTACT_MODULE: LOADED</span>
            </div>

            <h1 className="text-5xl font-bold text-white mb-6 font-mono">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
              Ready to start your child&apos;s coding journey? We&apos;re here to help answer your questions and guide you through our programs.
            </p>

            {/* Loading Indicator */}
            <div className="flex justify-center items-center space-x-2 mt-8">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-24 bg-gray-900 relative">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Status Indicator */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-green-500/30 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-mono text-sm">FORM_STATUS: ACTIVE</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-green-500/30 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
              {/* Form Module Tag */}
              <div className="absolute top-4 right-4 bg-green-500/20 border border-green-500/50 rounded-lg px-3 py-1">
                <span className="text-green-400 font-mono text-xs">FORM_001</span>
              </div>

              <h2 className="text-3xl font-bold text-white mb-8 font-mono">
                Schedule a Free Consultation
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="parent-name" className="block text-sm font-medium text-green-400 mb-2 font-mono">
                      Parent/Guardian Name *
                    </label>
                    <input
                      type="text"
                      id="parent-name"
                      name="parent-name"
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-green-500/30 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all text-white placeholder-gray-400 font-mono"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="student-name" className="block text-sm font-medium text-green-400 mb-2 font-mono">
                      Student Name *
                    </label>
                    <input
                      type="text"
                      id="student-name"
                      name="student-name"
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-green-500/30 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all text-white placeholder-gray-400 font-mono"
                      placeholder="Student's name"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-green-400 mb-2 font-mono">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-green-500/30 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all text-white placeholder-gray-400 font-mono"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-green-400 mb-2 font-mono">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-gray-700/50 border border-green-500/30 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all text-white placeholder-gray-400 font-mono"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="student-age" className="block text-sm font-medium text-green-400 mb-2 font-mono">
                      Student Age *
                    </label>
                    <select
                      id="student-age"
                      name="student-age"
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-green-500/30 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all text-white font-mono"
                    >
                      <option value="" className="bg-gray-700">Select age</option>
                      <option value="8-10" className="bg-gray-700">8-10 years</option>
                      <option value="11-13" className="bg-gray-700">11-13 years</option>
                      <option value="14-16" className="bg-gray-700">14-16 years</option>
                      <option value="17-18" className="bg-gray-700">17-18 years</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="program-interest" className="block text-sm font-medium text-green-400 mb-2 font-mono">
                      Program of Interest
                    </label>
                    <select
                      id="program-interest"
                      name="program-interest"
                      className="w-full px-4 py-3 bg-gray-700/50 border border-green-500/30 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all text-white font-mono"
                    >
                      <option value="" className="bg-gray-700">Select a program</option>
                      <option value="python" className="bg-gray-700">Python Programming</option>
                      <option value="web-dev" className="bg-gray-700">Web Development</option>
                      <option value="game-dev" className="bg-gray-700">Game Development</option>
                      <option value="not-sure" className="bg-gray-700">Not sure yet</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-green-400 mb-2 font-mono">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-green-500/30 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all text-white placeholder-gray-400 font-mono resize-none"
                    placeholder="Tell us about your child's interests and any questions you have..."
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <input
                    id="newsletter"
                    name="newsletter"
                    type="checkbox"
                    className="mt-1 h-4 w-4 text-green-400 focus:ring-green-400 bg-gray-700 border-green-500/30 rounded"
                  />
                  <label htmlFor="newsletter" className="ml-3 text-sm text-gray-300 font-mono">
                    I&apos;d like to receive updates about new programs and educational resources
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-400 text-white py-4 px-6 rounded-xl hover:from-green-600 hover:to-emerald-500 transition-all font-semibold shadow-lg shadow-green-500/25 font-mono"
                >
                  Schedule Free Consultation
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-8 relative overflow-hidden">
                {/* Info Module Tag */}
                <div className="absolute top-4 right-4 bg-blue-500/20 border border-blue-500/50 rounded-lg px-3 py-1">
                  <span className="text-blue-400 font-mono text-xs">INFO_001</span>
                </div>

                <h2 className="text-3xl font-bold text-white mb-8 font-mono">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group hover:bg-blue-500/10 p-4 rounded-xl transition-all">
                    <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 font-mono">Visit Our Campus</h3>
                      <p className="text-gray-300 font-mono text-sm">
                        123 Innovation Drive<br />
                        Tech Valley, CA 94025<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group hover:bg-orange-500/10 p-4 rounded-xl transition-all">
                    <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faPhone} className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 font-mono">Call Us</h3>
                      <p className="text-gray-300 font-mono text-sm">
                        Main: (555) 123-4567<br />
                        Admissions: (555) 123-4568<br />
                        Monday - Friday: 9AM - 6PM PST
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group hover:bg-green-500/10 p-4 rounded-xl transition-all">
                    <div className="w-12 h-12 bg-green-500/20 border border-green-500/50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 font-mono">Email Us</h3>
                      <p className="text-gray-300 font-mono text-sm">
                        General: info@codegarden.edu<br />
                        Admissions: admissions@codegarden.edu<br />
                        Support: support@codegarden.edu
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Office Hours */}
              <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 relative overflow-hidden">
                {/* Hours Module Tag */}
                <div className="absolute top-4 right-4 bg-purple-500/20 border border-purple-500/50 rounded-lg px-3 py-1">
                  <span className="text-purple-400 font-mono text-xs">HOURS_001</span>
                </div>

                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/50 rounded-xl flex items-center justify-center">
                    <FontAwesomeIcon icon={faClock} className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white font-mono">Office Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between hover:bg-purple-500/10 p-2 rounded transition-all">
                    <span className="text-gray-300 font-mono">Monday - Thursday</span>
                    <span className="text-white font-medium font-mono">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between hover:bg-purple-500/10 p-2 rounded transition-all">
                    <span className="text-gray-300 font-mono">Friday</span>
                    <span className="text-white font-medium font-mono">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between hover:bg-purple-500/10 p-2 rounded transition-all">
                    <span className="text-gray-300 font-mono">Saturday</span>
                    <span className="text-white font-medium font-mono">10:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between hover:bg-purple-500/10 p-2 rounded transition-all">
                    <span className="text-gray-300 font-mono">Sunday</span>
                    <span className="text-white font-medium font-mono">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-900 relative">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            {/* Status Indicator */}
            <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-purple-400 font-mono text-sm">FAQ_STATUS: ACTIVE</span>
            </div>

            <h2 className="text-4xl font-bold text-white mb-4 font-mono">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 font-mono">
              Common questions from parents about our programs
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 relative overflow-hidden group hover:bg-purple-500/5 transition-all">
              {/* FAQ Module Tag */}
              <div className="absolute top-4 right-4 bg-purple-500/20 border border-purple-500/50 rounded-lg px-3 py-1">
                <span className="text-purple-400 font-mono text-xs">FAQ_001</span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3 font-mono">
                What age groups do you serve?
              </h3>
              <p className="text-gray-300 font-mono text-sm">
                We offer programs for students aged 8-18, with age-appropriate curriculum designed for different skill levels and learning stages.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 relative overflow-hidden group hover:bg-purple-500/5 transition-all">
              {/* FAQ Module Tag */}
              <div className="absolute top-4 right-4 bg-purple-500/20 border border-purple-500/50 rounded-lg px-3 py-1">
                <span className="text-purple-400 font-mono text-xs">FAQ_002</span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3 font-mono">
                Do students need any prior programming experience?
              </h3>
              <p className="text-gray-300 font-mono text-sm">
                No prior experience is required! Our programs are designed to take students from complete beginners to confident programmers.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 relative overflow-hidden group hover:bg-purple-500/5 transition-all">
              {/* FAQ Module Tag */}
              <div className="absolute top-4 right-4 bg-purple-500/20 border border-purple-500/50 rounded-lg px-3 py-1">
                <span className="text-purple-400 font-mono text-xs">FAQ_003</span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3 font-mono">
                What is your class size?
              </h3>
              <p className="text-gray-300 font-mono text-sm">
                We maintain small class sizes with a maximum of 8 students per instructor to ensure personalized attention and support.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 relative overflow-hidden group hover:bg-purple-500/5 transition-all">
              {/* FAQ Module Tag */}
              <div className="absolute top-4 right-4 bg-purple-500/20 border border-purple-500/50 rounded-lg px-3 py-1">
                <span className="text-purple-400 font-mono text-xs">FAQ_004</span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3 font-mono">
                Do you offer online or in-person classes?
              </h3>
              <p className="text-gray-300 font-mono text-sm">
                We offer both online and in-person classes to accommodate different learning preferences and schedules. All our instructors are trained in both formats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 relative">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Status Indicator */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-blue-400 font-mono text-sm">FOOTER_STATUS: ACTIVE</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 relative overflow-hidden">
                {/* Company Module Tag */}
                <div className="absolute top-4 right-4 bg-blue-500/20 border border-blue-500/50 rounded-lg px-3 py-1">
                  <span className="text-blue-400 font-mono text-xs">COMPANY_INFO</span>
                </div>

                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold font-mono">Code Garden</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed max-w-md font-mono text-sm">
                  Preparing students for the digital future through comprehensive technology education and innovative learning experiences.
                </p>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 relative overflow-hidden">
                {/* Programs Module Tag */}
                <div className="absolute top-4 right-4 bg-green-500/20 border border-green-500/50 rounded-lg px-3 py-1">
                  <span className="text-green-400 font-mono text-xs">PROGRAMS_MODULE</span>
                </div>

                <h4 className="text-lg font-semibold mb-6 font-mono text-white">Programs</h4>
                <ul className="space-y-3">
                  <li><a href="/programs" className="text-gray-300 hover:text-green-400 transition-colors font-mono text-sm">Python Programming</a></li>
                  <li><a href="/programs" className="text-gray-300 hover:text-green-400 transition-colors font-mono text-sm">Web Development</a></li>
                  <li><a href="/programs" className="text-gray-300 hover:text-green-400 transition-colors font-mono text-sm">Game Development</a></li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-6 relative overflow-hidden">
                {/* Company Module Tag */}
                <div className="absolute top-4 right-4 bg-orange-500/20 border border-orange-500/50 rounded-lg px-3 py-1">
                  <span className="text-orange-400 font-mono text-xs">COMPANY_MODULE</span>
                </div>

                <h4 className="text-lg font-semibold mb-6 font-mono text-white">Company</h4>
                <ul className="space-y-3">
                  <li><a href="/about" className="text-gray-300 hover:text-orange-400 transition-colors font-mono text-sm">About Us</a></li>
                  <li><a href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors font-mono text-sm">Contact</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors font-mono text-sm">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm font-mono">
                © 2024 Code Garden. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}