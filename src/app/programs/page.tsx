import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBook, faBriefcase, faCertificate, faCode } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Programs() {
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
              <Link href="/" className="relative text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-200 group">
                <span>Home</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link href="/programs" className="relative text-cyan-400 font-medium transition-colors duration-200 group">
                <span>Programs</span>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400 transition-all duration-300"></div>
              </Link>
              <Link href="/about" className="relative text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-200 group">
                <span>About</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link href="/contact" className="relative text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-200 group">
                <span>Contact</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
              <div className="flex items-center space-x-2 text-sm text-gray-500 mr-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Live Support</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 bg-gray-800">
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
        
        {/* Floating Code Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 text-blue-400/20 font-mono text-sm transform -rotate-12">
            def learn_programming():
          </div>
          <div className="absolute top-40 right-20 text-orange-400/20 font-mono text-sm transform rotate-12">
            &lt;html&gt;&lt;body&gt;
          </div>
          <div className="absolute bottom-32 left-20 text-green-400/20 font-mono text-sm transform rotate-6">
            console.log(&rsquo;Hello World&rsquo;);
          </div>
          <div className="absolute bottom-20 right-10 text-purple-400/20 font-mono text-sm transform -rotate-6">
            class GameEngine &lbrace;
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="text-blue-400 font-mono text-sm mb-4">{/* Loading program catalog... */}</div>
            <div className="flex items-center justify-center mb-6">
              <div className="text-blue-400 font-mono text-sm mr-4">PROGRAMS_MODULE:</div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="text-blue-400 font-mono text-sm ml-2">LOADED</div>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6 font-mono">
              Our Programs
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono">
              Comprehensive technology education programs designed to prepare students for the digital future with hands-on learning and expert instruction.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="relative py-24 bg-gray-900">
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
          <div className="text-center mb-16">
            <div className="text-green-400 font-mono text-sm mb-4">{/* Initializing program modules... */}</div>
            <div className="flex items-center justify-center mb-6">
              <div className="text-green-400 font-mono text-sm mr-4">CATALOG_STATUS:</div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <div className="text-green-400 font-mono text-sm ml-2">ACTIVE</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Python Programming */}
            <div className="group bg-gray-800 rounded-2xl border border-blue-400/30 overflow-hidden hover:border-blue-400/60 transition-all duration-300 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="bg-gray-900 p-8">
                  <div className="text-blue-400 font-mono text-xs mb-2">PROGRAM_001</div>
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 border border-blue-400/50">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-mono">Python Programming</h3>
                  <p className="text-gray-300 mb-6 font-mono text-sm">Learn the fundamentals of programming with Python, one of the most popular and versatile programming languages.</p>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3 font-mono">What You&rsquo;ll Learn:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-mono text-sm">Variables and data types</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-mono text-sm">Control structures and loops</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-mono text-sm">Functions and modules</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-mono text-sm">Object-oriented programming</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-sm text-blue-400 font-mono">Ages 10-16</span>
                    <span className="text-sm text-blue-400 font-mono">12 weeks</span>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors font-mono border border-blue-400/50">
                    LEARN_MORE
                  </button>
                </div>
              </div>
            </div>

            {/* Web Development */}
            <div className="group bg-gray-800 rounded-2xl border border-orange-400/30 overflow-hidden hover:border-orange-400/60 transition-all duration-300 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="bg-gray-900 p-8">
                  <div className="text-orange-400 font-mono text-xs mb-2">PROGRAM_002</div>
                  <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-6 border border-orange-400/50">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-mono">Web Development</h3>
                  <p className="text-gray-300 mb-6 font-mono text-sm">Create stunning websites and web applications using modern technologies like HTML, CSS, and JavaScript.</p>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3 font-mono">What You&rsquo;ll Learn:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-mono text-sm">HTML structure and semantics</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-mono text-sm">CSS styling and layouts</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-mono text-sm">JavaScript fundamentals</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-mono text-sm">Responsive design</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-sm text-orange-400 font-mono">Ages 12-18</span>
                    <span className="text-sm text-orange-400 font-mono">16 weeks</span>
                  </div>
                  <button className="w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition-colors font-mono border border-orange-400/50">
                    LEARN_MORE
                  </button>
                </div>
              </div>
            </div>

            {/* Game Development */}
            <div className="group bg-gray-800 rounded-2xl border border-purple-400/30 overflow-hidden hover:border-purple-400/60 transition-all duration-300 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="bg-gray-900 p-8">
                  <div className="text-purple-400 font-mono text-xs mb-2">PROGRAM_003</div>
                  <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6 border border-purple-400/50">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-mono">Game Development</h3>
                  <p className="text-gray-300 mb-6 font-mono text-sm">Design and build your own games using industry-standard tools and learn the principles of game design.</p>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3 font-mono">What You&rsquo;ll Learn:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-mono text-sm">Game design principles</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-mono text-sm">Unity game engine</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-mono text-sm">C# programming</span>
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-mono text-sm">2D and 3D game creation</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-sm text-purple-400 font-mono">Ages 13-18</span>
                    <span className="text-sm text-purple-400 font-mono">20 weeks</span>
                  </div>
                  <button className="w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition-colors font-mono border border-purple-400/50">
                    LEARN_MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="text-green-400 font-mono text-sm mb-4">{/* Loading feature modules... */}</div>
            <div className="flex items-center justify-center mb-6">
              <div className="text-green-400 font-mono text-sm mr-4">FEATURES_STATUS:</div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <div className="text-green-400 font-mono text-sm ml-2">ACTIVE</div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 font-mono">
              Why Choose Our Programs?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-mono">
              Our comprehensive approach ensures students receive the best possible education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center bg-gray-800 p-6 rounded-xl border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <div className="relative z-10">
                <div className="text-blue-400 font-mono text-xs mb-2">FEATURE_001</div>
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 border border-blue-400/50">
                  <FontAwesomeIcon icon={faBook} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 font-mono">Expert Instructors</h3>
                <p className="text-gray-300 text-sm font-mono">Learn from industry professionals with years of experience</p>
              </div>
            </div>
            
            <div className="group text-center bg-gray-800 p-6 rounded-xl border border-orange-400/30 hover:border-orange-400/60 transition-all duration-300 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <div className="relative z-10">
                <div className="text-orange-400 font-mono text-xs mb-2">FEATURE_002</div>
                <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-6 border border-orange-400/50">
                  <FontAwesomeIcon icon={faBriefcase} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 font-mono">Hands-on Projects</h3>
                <p className="text-gray-300 text-sm font-mono">Build real projects that showcase your skills</p>
              </div>
            </div>
            
            <div className="group text-center bg-gray-800 p-6 rounded-xl border border-green-400/30 hover:border-green-400/60 transition-all duration-300 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <div className="relative z-10">
                <div className="text-green-400 font-mono text-xs mb-2">FEATURE_003</div>
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-6 border border-green-400/50">
                  <FontAwesomeIcon icon={faUsers} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 font-mono">Small Classes</h3>
                <p className="text-gray-300 text-sm font-mono">Personalized attention with maximum 8 students per class</p>
              </div>
            </div>
            
            <div className="group text-center bg-gray-800 p-6 rounded-xl border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <div className="relative z-10">
                <div className="text-purple-400 font-mono text-xs mb-2">FEATURE_004</div>
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 border border-purple-400/50">
                  <FontAwesomeIcon icon={faCertificate} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 font-mono">Certification</h3>
                <p className="text-gray-300 text-sm font-mono">Receive certificates upon successful completion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="text-blue-400 font-mono text-sm mb-4">{/* Initializing enrollment system... */}</div>
          <div className="flex items-center justify-center mb-6">
            <div className="text-blue-400 font-mono text-sm mr-4">ENROLLMENT_STATUS:</div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="text-blue-400 font-mono text-sm ml-2">READY</div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6 font-mono">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-mono">
            Join thousands of students who have already started their coding journey with us. Enroll today and unlock your potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors font-mono border border-blue-400/50">
              SCHEDULE_CONSULTATION
            </button>
            <button className="border-2 border-orange-400 text-orange-400 px-8 py-4 rounded-xl hover:bg-orange-400 hover:text-gray-900 transition-colors font-mono">
              VIEW_PRICING
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-green-400 font-mono text-sm mb-8">{/* Loading footer components... */}</div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2 bg-gray-800 p-6 rounded-xl border border-blue-400/30">
              <div className="text-blue-400 font-mono text-xs mb-2">COMPANY_INFO</div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl flex items-center justify-center border border-blue-400/50">
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
            
            <div className="bg-gray-800 p-6 rounded-xl border border-green-400/30">
              <div className="text-green-400 font-mono text-xs mb-2">PROGRAMS_MODULE</div>
              <h4 className="text-lg font-semibold mb-6 font-mono">Programs</h4>
              <ul className="space-y-3">
                <li><a href="/programs" className="text-gray-300 hover:text-green-400 transition-colors font-mono text-sm">Python Programming</a></li>
                <li><a href="/programs" className="text-gray-300 hover:text-green-400 transition-colors font-mono text-sm">Web Development</a></li>
                <li><a href="/programs" className="text-gray-300 hover:text-green-400 transition-colors font-mono text-sm">Game Development</a></li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl border border-purple-400/30">
              <div className="text-purple-400 font-mono text-xs mb-2">COMPANY_MODULE</div>
              <h4 className="text-lg font-semibold mb-6 font-mono">Company</h4>
              <ul className="space-y-3">
                <li><a href="/about" className="text-gray-300 hover:text-purple-400 transition-colors font-mono text-sm">About Us</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-purple-400 transition-colors font-mono text-sm">Contact</a></li>
                <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors font-mono text-sm">Privacy Policy</a></li>
              </ul>
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