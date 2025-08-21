'use client';

import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGlobe, faGamepad, faUsers, faAward, faShieldAlt, faBook, faLaptopCode, faRocket, faGraduationCap, faStar } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900">
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
              <a href="#home" className="relative text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-200 group">
                <span>Home</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a href="/programs" className="relative text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-200 group">
                <span>Programs</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a href="/about" className="relative text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-200 group">
                <span>About</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a href="/contact" className="relative text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-200 group">
                <span>Contact</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
              </a>
              <div className="flex items-center space-x-2 text-sm text-gray-500 mr-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Live Support</span>
              </div>
              <button className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="space-y-1.5">
                <div className="w-6 h-0.5 bg-gray-600 transition-all duration-200"></div>
                <div className="w-6 h-0.5 bg-gray-600 transition-all duration-200"></div>
                <div className="w-6 h-0.5 bg-gray-600 transition-all duration-200"></div>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-6 border-t border-gray-700">
              <div className="space-y-4">
                <a href="#home" className="block text-gray-300 hover:text-cyan-400 font-medium py-2 transition-colors">Home</a>
                <a href="#programs" className="block text-gray-300 hover:text-cyan-400 font-medium py-2 transition-colors">Programs</a>
                <a href="#about" className="block text-gray-300 hover:text-cyan-400 font-medium py-2 transition-colors">About</a>
                <a href="#contact" className="block text-gray-300 hover:text-cyan-400 font-medium py-2 transition-colors">Contact</a>
                <button className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg font-medium mt-4 transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
        {/* Tech Matrix Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
          {/* Floating Code Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-1/4 text-cyan-400 opacity-30 font-mono text-sm animate-pulse">{'<Code/>'}</div>
            <div className="absolute top-32 right-1/4 text-green-400 opacity-30 font-mono text-sm animate-pulse" style={{animationDelay: '1s'}}>function()</div>
            <div className="absolute top-64 left-1/5 text-blue-400 opacity-30 font-mono text-sm animate-pulse" style={{animationDelay: '2s'}}>console.log</div>
            <div className="absolute bottom-32 right-1/3 text-purple-400 opacity-30 font-mono text-sm animate-pulse" style={{animationDelay: '3s'}}>{'{ }'}</div>
            <div className="absolute bottom-64 left-1/3 text-orange-400 opacity-30 font-mono text-sm animate-pulse" style={{animationDelay: '4s'}}>01010101</div>
          </div>
        </div>
        
        {/* Tech Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-16 h-16 border-2 border-cyan-400 rounded-lg rotate-12 animate-pulse opacity-40"></div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce opacity-50" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 left-20 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 transform rotate-45 animate-spin opacity-60" style={{animationDuration: '8s'}}></div>
          <div className="absolute bottom-20 right-40 w-20 h-20 border-2 border-purple-400 rounded-full animate-ping opacity-30"></div>
          <div className="absolute top-1/2 left-10 w-6 h-6 bg-green-400 rounded opacity-40 animate-pulse" style={{animationDelay: '2.5s'}}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-gray-800 border border-cyan-400 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-cyan-400 font-mono">SYSTEM_STATUS: ONLINE</span>
                <span className="text-sm font-medium text-gray-300 ml-2">{/* 1,200+ families connected */}</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="text-cyan-400 font-mono text-lg block mb-2">{/* Initializing future developers... */}</span>
                Prepare Your Child for the
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"> Digital Future</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                <span className="text-green-400 font-mono text-sm block mb-2">{/* Comprehensive technology education */}</span>
                Building confidence, creativity, and critical thinking skills through hands-on programming experiences powered by AI-assisted learning and real-world project development.
              </p>
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">+</div>
                  </div>
                  <span className="ml-3 text-sm text-gray-600">Join 1,200+ students</span>
                </div>
                <div className="flex items-center">
                  <div className="flex text-orange-400">
                    <FontAwesomeIcon icon={faStar} className="w-4 h-4" />
                    <FontAwesomeIcon icon={faStar} className="w-4 h-4" />
                    <FontAwesomeIcon icon={faStar} className="w-4 h-4" />
                    <FontAwesomeIcon icon={faStar} className="w-4 h-4" />
                    <FontAwesomeIcon icon={faStar} className="w-4 h-4" />
                  </div>
                  <span className="ml-2 text-sm text-gray-600">4.9/5 parent rating</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all font-semibold relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center">
                    <FontAwesomeIcon icon={faRocket} className="w-4 h-4 mr-2" />
                    Initialize Session
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <a href="/programs" className="group border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl hover:bg-cyan-400 hover:text-gray-900 transition-all font-semibold text-center font-mono relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center">
                    <span className="mr-2">&gt;</span>
                    View Programs
                  </span>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 via-white to-orange-100 rounded-3xl border border-gray-200 flex items-center justify-center relative overflow-hidden shadow-xl">
                {/* Code Animation Background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 text-blue-600 font-mono text-xs animate-pulse">&lt;html&gt;</div>
                  <div className="absolute top-12 right-8 text-orange-500 font-mono text-xs animate-pulse" style={{animationDelay: '0.5s'}}>function()</div>
                  <div className="absolute bottom-16 left-8 text-green-600 font-mono text-xs animate-pulse" style={{animationDelay: '1s'}}>console.log</div>
                  <div className="absolute bottom-8 right-12 text-purple-600 font-mono text-xs animate-pulse" style={{animationDelay: '1.5s'}}>{'{}'}</div>
                </div>
                
                {/* Enhanced VR Headset */}
                <div className="relative z-10">
                  <div className="animate-bounce">
                    <div className="relative">
                      <svg className="w-32 h-32 text-blue-600 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center animate-ping">
                        <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-gray-700 font-semibold text-lg">Interactive Learning</p>
                    <p className="text-gray-500 text-sm">Hands-on coding adventures</p>
                  </div>
                </div>
                
                {/* Enhanced Floating Elements */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                <div className="absolute top-8 right-8 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-6 left-8 w-4 h-4 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-12 right-6 w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 left-2 w-1 h-1 bg-red-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-1/3 right-4 w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
              </div>
              
              {/* Achievement Badges */}
              <div className="absolute -bottom-4 left-4 bg-gray-800 rounded-lg shadow-lg p-3 border border-gray-600">
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faShieldAlt} className="w-4 h-4 text-green-600" />
                  <span className="text-xs font-medium text-gray-300">Safe Learning</span>
                </div>
              </div>
              <div className="absolute -bottom-4 right-4 bg-gray-800 rounded-lg shadow-lg p-3 border border-gray-600">
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faGraduationCap} className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-medium text-gray-300">Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center max-w-4xl mx-auto mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-sm hover:shadow-md">
              Explore Programs
            </button>
            <button className="border border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200">
              Schedule Consultation
            </button>
          </div>
            
          {/* Tech Stats Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-xl p-6 border border-cyan-400 relative overflow-hidden group hover:border-cyan-300 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 text-center">
                <div className="text-cyan-400 font-mono text-sm mb-2">ACTIVE_USERS</div>
                <div className="text-4xl font-bold text-white mb-2 font-mono">1,200+</div>
                <div className="text-gray-300 font-medium">Students Connected</div>
                <div className="flex justify-center mt-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-orange-400 relative overflow-hidden group hover:border-orange-300 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 text-center">
                <div className="text-orange-400 font-mono text-sm mb-2">MENTORS_ONLINE</div>
                <div className="text-4xl font-bold text-white mb-2 font-mono">15+</div>
                <div className="text-gray-300 font-medium">Expert Instructors</div>
                <div className="flex justify-center mt-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-purple-400 relative overflow-hidden group hover:border-purple-300 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 text-center">
                <div className="text-purple-400 font-mono text-sm mb-2">SATISFACTION_RATE</div>
                <div className="text-4xl font-bold text-white mb-2 font-mono">98%</div>
                <div className="text-gray-300 font-medium">Parent Approval</div>
                <div className="flex justify-center mt-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gray-800 border border-cyan-400 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium text-cyan-400 font-mono">FEEDBACK_STREAM</span>
              <span className="text-sm font-medium text-gray-300 ml-2">{/* Live testimonials */}</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="text-cyan-400 font-mono text-lg block mb-2">{/* Parent reviews loading... */}</span>
              Community Feedback
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real-time feedback from families in our Code Garden developer community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 border border-cyan-400 rounded-2xl p-8 shadow-xl relative overflow-hidden group hover:border-cyan-300 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-orange-400">
                    <FontAwesomeIcon icon={faStar} className="w-4 h-4" />
                    <FontAwesomeIcon icon={faStar} className="w-4 h-4" />
                    <FontAwesomeIcon icon={faStar} className="w-4 h-4" />
                    <FontAwesomeIcon icon={faStar} className="w-4 h-4" />
                    <FontAwesomeIcon icon={faStar} className="w-4 h-4" />
                  </div>
                  <div className="text-cyan-400 font-mono text-xs">REVIEW_001</div>
                </div>
                <p className="text-gray-300 mb-6 italic font-mono text-sm leading-relaxed">
                  &ldquo;My daughter went from being intimidated by technology to creating her own games. The instructors are patient and make learning fun!&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-white">Sarah M.</p>
                    <p className="text-sm text-gray-400 font-mono">Parent of Emma, Age 10</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 border border-orange-400 rounded-2xl p-8 shadow-xl relative overflow-hidden group hover:border-orange-300 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-orange-400">
                    <FontAwesomeIcon icon={faStar} className="w-4 h-4" />
                    <FontAwesomeIcon icon={faStar} className="w-4 h-4" />
                    <FontAwesomeIcon icon={faStar} className="w-4 h-4" />
                    <FontAwesomeIcon icon={faStar} className="w-4 h-4" />
                    <FontAwesomeIcon icon={faStar} className="w-4 h-4" />
                  </div>
                  <div className="text-orange-400 font-mono text-xs">REVIEW_002</div>
                </div>
                <p className="text-gray-300 mb-6 italic font-mono text-sm leading-relaxed">
                  &ldquo;The curriculum is perfectly structured. My son learned Python basics in just 8 weeks and is now building his own projects!&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold">
                    M
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-white">Michael R.</p>
                    <p className="text-sm text-gray-400 font-mono">Parent of Alex, Age 12</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 border border-purple-400 rounded-2xl p-8 shadow-xl relative overflow-hidden group hover:border-purple-300 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-orange-400">
                    <FontAwesomeIcon icon={faStar} className="w-4 h-4" />
                    <FontAwesomeIcon icon={faStar} className="w-4 h-4" />
                    <FontAwesomeIcon icon={faStar} className="w-4 h-4" />
                    <FontAwesomeIcon icon={faStar} className="w-4 h-4" />
                    <FontAwesomeIcon icon={faStar} className="w-4 h-4" />
                  </div>
                  <div className="text-purple-400 font-mono text-xs">REVIEW_003</div>
                </div>
                <p className="text-gray-300 mb-6 italic font-mono text-sm leading-relaxed">
                  &ldquo;Safe, supportive environment where kids can explore technology. The small class sizes ensure individual attention.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
                    L
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-white">Lisa K.</p>
                    <p className="text-sm text-gray-400 font-mono">Parent of Maya, Age 9</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-blue-500/10 border border-blue-400/30 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-blue-400 font-mono text-sm">FEATURES_LOADED</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="text-gray-500 font-mono text-lg block mb-2">{/* System advantages initialized... */}</span>
              Why Parents Choose Code Garden
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-mono">
              Comprehensive technology education designed specifically for young learners
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="group text-center bg-gray-800 border border-blue-400/30 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-blue-400/50">
                  <FontAwesomeIcon icon={faUsers} className="w-8 h-8 text-white" />
                </div>
                <div className="text-blue-400 font-mono text-xs mb-2">MODULE_001</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">Small Class Sizes</h3>
                <p className="text-gray-300 leading-relaxed mb-4 font-mono text-sm">Maximum 8 students per class ensures personalized attention and meaningful instructor interaction.</p>
                <div className="flex items-center justify-center text-sm text-blue-400 font-mono">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                  Max 8 students per class
                </div>
              </div>
            </div>
            
            <div className="group text-center bg-gray-800 border border-orange-400/30 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-orange-400/50">
                  <FontAwesomeIcon icon={faShieldAlt} className="w-8 h-8 text-white" />
                </div>
                <div className="text-orange-400 font-mono text-xs mb-2">MODULE_002</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-orange-400 transition-colors">Safe & Secure</h3>
                <p className="text-gray-300 leading-relaxed mb-4 font-mono text-sm">Comprehensive safety protocols and monitored environments provide peace of mind for parents.</p>
                <div className="flex items-center justify-center text-sm text-orange-400 font-mono">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse" style={{animationDelay: '0.5s'}}></span>
                  100% secure platform
                </div>
              </div>
            </div>
            
            <div className="group text-center bg-gray-800 border border-green-400/30 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-green-400/50">
                  <FontAwesomeIcon icon={faBook} className="w-8 h-8 text-white" />
                </div>
                <div className="text-green-400 font-mono text-xs mb-2">MODULE_003</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-green-400 transition-colors">Industry Curriculum</h3>
                <p className="text-gray-300 leading-relaxed mb-4 font-mono text-sm">Structured programs designed by professionals to build real-world applicable skills.</p>
                <div className="flex items-center justify-center text-sm text-green-400 font-mono">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" style={{animationDelay: '1s'}}></span>
                  Professional-designed courses
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <div className="text-center p-6 bg-gray-800/50 border border-blue-400/20 rounded-lg shadow-md hover:shadow-lg hover:border-blue-400/40 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faLaptopCode} className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2 font-mono">Live Coding</h4>
              <p className="text-sm text-gray-400 font-mono">Interactive programming sessions</p>
            </div>
            
            <div className="text-center p-6 bg-gray-800/50 border border-orange-400/20 rounded-lg shadow-md hover:shadow-lg hover:border-orange-400/40 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faAward} className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2 font-mono">Certificates</h4>
              <p className="text-sm text-gray-400 font-mono">Course completion awards</p>
            </div>
            
            <div className="text-center p-6 bg-gray-800/50 border border-green-400/20 rounded-lg shadow-md hover:shadow-lg hover:border-green-400/40 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faRocket} className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2 font-mono">Project-Based</h4>
              <p className="text-sm text-gray-400 font-mono">Build real applications</p>
            </div>
            
            <div className="text-center p-6 bg-gray-800/50 border border-purple-400/20 rounded-lg shadow-md hover:shadow-lg hover:border-purple-400/40 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faGraduationCap} className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-white mb-2 font-mono">Progress Tracking</h4>
              <p className="text-sm text-gray-400 font-mono">Regular parent updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Child&rsquo;s Coding Journey?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Join over 1,200 families who trust Code Garden to provide their children with essential 21st-century skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gray-800 text-cyan-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-700 transition-colors shadow-lg">
              Start Free Trial
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-400 hover:text-gray-900 transition-colors">
              Schedule Consultation
            </button>
          </div>
          <div className="mt-8 flex items-center justify-center space-x-6 text-white opacity-80">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faShieldAlt} className="w-5 h-5 mr-2" />
              <span>Safe & Secure</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faAward} className="w-5 h-5 mr-2" />
              <span>Certified Instructors</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faStar} className="w-5 h-5 mr-2" />
              <span>Parent Approved</span>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-green-500/10 border border-green-400/30 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-green-400 font-mono text-sm">COURSES_AVAILABLE</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="text-gray-500 font-mono text-lg block mb-2">{/* Loading course catalog... */}</span>
              Popular Courses
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-mono">
              Discover our most loved programs designed to inspire and educate young minds
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-gray-800 border border-blue-400/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-bl-lg text-sm font-mono">
                POPULAR
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-blue-400/50">
                    <FontAwesomeIcon icon={faCode} className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-blue-400 font-mono text-xs">COURSE_001</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors font-mono">
                  Python Programming
                </h3>
                <p className="text-gray-300 mb-6 font-mono text-sm leading-relaxed">
                  Foundation programming skills using Python, focusing on logic, problem-solving, and computational thinking.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-300 font-mono">
                    <FontAwesomeIcon icon={faUsers} className="w-4 h-4 mr-2 text-blue-400" />
                    <span>Ages 8-16</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300 font-mono">
                    <FontAwesomeIcon icon={faLaptopCode} className="w-4 h-4 mr-2 text-blue-400" />
                    <span>12 weeks program</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300 font-mono">
                    <FontAwesomeIcon icon={faAward} className="w-4 h-4 mr-2 text-blue-400" />
                    <span>Certificate included</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-blue-400 font-mono">$99</span>
                    <span className="text-gray-400 font-mono">/month</span>
                  </div>
                  <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all font-mono border border-blue-400/50">
                    ENROLL_NOW
                  </button>
                </div>
              </div>
            </div>

            <div className="group bg-gray-800 border border-orange-400/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-orange-400/50">
                    <FontAwesomeIcon icon={faGlobe} className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-orange-400 font-mono text-xs">COURSE_002</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-orange-400 transition-colors font-mono">
                  Web Development
                </h3>
                <p className="text-gray-300 mb-6 font-mono text-sm leading-relaxed">
                  Create modern websites and applications using HTML, CSS, JavaScript, and contemporary frameworks.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-300 font-mono">
                    <FontAwesomeIcon icon={faUsers} className="w-4 h-4 mr-2 text-orange-400" />
                    <span>Ages 10-18</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300 font-mono">
                    <FontAwesomeIcon icon={faLaptopCode} className="w-4 h-4 mr-2 text-orange-400" />
                    <span>16 weeks program</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300 font-mono">
                    <FontAwesomeIcon icon={faRocket} className="w-4 h-4 mr-2 text-orange-400" />
                    <span>Portfolio projects</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-orange-400 font-mono">$109</span>
                    <span className="text-gray-400 font-mono">/month</span>
                  </div>
                  <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all font-mono border border-orange-400/50">
                    ENROLL_NOW
                  </button>
                </div>
              </div>
            </div>

            <div className="group bg-gray-800 border border-green-400/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 right-0 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-bl-lg text-sm font-mono">
                NEW!
              </div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-green-400/50">
                    <FontAwesomeIcon icon={faGamepad} className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-green-400 font-mono text-xs">COURSE_003</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-green-400 transition-colors font-mono">
                  Game Development
                </h3>
                <p className="text-gray-300 mb-6 font-mono text-sm leading-relaxed">
                  Design and develop interactive games while learning programming concepts and creative problem-solving.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-300 font-mono">
                    <FontAwesomeIcon icon={faUsers} className="w-4 h-4 mr-2 text-green-400" />
                    <span>Ages 12-18</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300 font-mono">
                    <FontAwesomeIcon icon={faGamepad} className="w-4 h-4 mr-2 text-green-400" />
                    <span>20 weeks program</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-300 font-mono">
                    <FontAwesomeIcon icon={faRocket} className="w-4 h-4 mr-2 text-green-400" />
                    <span>Published games</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-green-400 font-mono">$119</span>
                    <span className="text-gray-400 font-mono">/month</span>
                  </div>
                  <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all font-mono border border-green-400/50">
                    ENROLL_NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              View All Courses
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Trusted Technology Education
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Code Garden provides comprehensive technology education designed to prepare students for the digital future. 
                Our structured curriculum combines fundamental programming concepts with practical application.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Led by certified instructors with industry experience, our programs emphasize critical thinking, 
                problem-solving, and creativity while maintaining the highest standards of online safety and educational excellence.
              </p>
              
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1,200+</div>
                  <div className="text-sm text-gray-600 font-medium">Students Enrolled</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">98%</div>
                  <div className="text-sm text-gray-600 font-medium">Parent Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl p-12 border border-gray-100">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FontAwesomeIcon icon={faGraduationCap} className="w-12 h-12 text-white" />
              </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Preparing Tomorrow&rsquo;s Innovators</h3>
                  <p className="text-gray-600">Building foundational skills for future success in technology and beyond</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-900 relative overflow-hidden">
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
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-4">
              Start Your Child&rsquo;s Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Schedule a consultation to discuss how our programs can benefit your child&rsquo;s future
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-gray-900 rounded-3xl border border-gray-600 p-10">
              <h3 className="text-2xl font-semibold text-white mb-8">Get in Touch</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">Parent Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-800 border border-gray-600 text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">Child&rsquo;s Age</label>
                    <select className="w-full px-4 py-3 bg-gray-800 border border-gray-600 text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                      <option>Select age range</option>
                      <option>6-8 years</option>
                      <option>9-12 years</option>
                      <option>13-16 years</option>
                      <option>17+ years</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 bg-gray-800 border border-gray-600 text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Program Interest</label>
                  <select className="w-full px-4 py-3 bg-gray-800 border border-gray-600 text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                    <option>Select a program</option>
                    <option>Python Programming</option>
                    <option>Web Development</option>
                    <option>Game Development</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Additional Information</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-gray-800 border border-gray-600 text-white rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400" placeholder="Tell us about your child's interests and experience level..."></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-colors font-medium text-lg">
                  Schedule Consultation
                </button>
              </form>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gray-900 rounded-2xl border border-gray-600 p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center">
                    <FontAwesomeIcon icon={faLaptopCode} className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Email Support</h4>
                    <p className="text-gray-300 mb-1">admissions@codegarden.com</p>
                    <p className="text-sm text-gray-400">Response within 24 hours</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded-2xl border border-gray-600 p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-50 border border-orange-100 rounded-xl flex items-center justify-center">
                    <FontAwesomeIcon icon={faRocket} className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Phone Consultation</h4>
                    <p className="text-gray-300 mb-1">+1 (555) 123-CODE</p>
                    <p className="text-sm text-gray-400">Monday - Friday, 9AM - 6PM EST</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl border border-gray-600 p-8">
                <h4 className="text-lg font-semibold text-white mb-3">Free Trial Available</h4>
                <p className="text-gray-300 mb-4">Experience our teaching methodology with a complimentary trial session for your child.</p>
                <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 relative overflow-hidden">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        {/* Floating Code Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 text-blue-400 opacity-20 font-mono text-xs animate-pulse">&lt;/&gt;</div>
          <div className="absolute top-20 right-20 text-orange-400 opacity-20 font-mono text-xs animate-pulse" style={{animationDelay: '1s'}}>{'{}'}</div>
          <div className="absolute bottom-20 left-20 text-green-400 opacity-20 font-mono text-xs animate-pulse" style={{animationDelay: '2s'}}>function()</div>
          <div className="absolute bottom-10 right-40 text-purple-400 opacity-20 font-mono text-xs animate-pulse" style={{animationDelay: '3s'}}>console.log</div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon icon={faCode} className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">Code Garden</h3>
                  <div className="text-xs text-gray-400 font-mono">v2.0.1 // Stable Release</div>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Preparing students for the digital future through comprehensive technology education and innovative learning experiences.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="group w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-orange-500 transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="group w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-orange-500 transition-all duration-300 hover:scale-110">
                  <FontAwesomeIcon icon={faGlobe} className="w-5 h-5" />
                </a>
                <a href="#" className="group w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-orange-500 transition-all duration-300 hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="group w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-orange-500 transition-all duration-300 hover:scale-110">
                  <FontAwesomeIcon icon={faRocket} className="w-5 h-5" />
                </a>
              </div>
              
              {/* Tech Status Indicators */}
              <div className="mt-6 space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-400 font-mono">System Status: Online</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <span className="text-gray-400 font-mono">API: Operational</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  <span className="text-gray-400 font-mono">Learning Platform: Active</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Programs</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Python Programming</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Game Development</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Private Tutoring</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Parent Resources</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Safety Guidelines</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Technical Support</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 Code Garden. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
