import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faBook, faUsers, faGraduationCap, faUser, faLightbulb, faCode } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Tech Grid Background */}
      <div className="fixed inset-0 opacity-10">
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
              <Link href="/about" className="relative text-cyan-400 font-medium transition-colors duration-200 group">
                <span>About</span>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400 transition-all duration-300"></div>
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
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 overflow-hidden">
        {/* Floating Code Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 text-blue-400 font-mono text-sm animate-pulse">const about = () =&gt; &lbrace;</div>
          <div className="absolute top-40 right-20 text-green-400 font-mono text-sm animate-pulse">{/* Mission: Educate */}</div>
          <div className="absolute bottom-32 left-20 text-orange-400 font-mono text-sm animate-pulse">return success;</div>
          <div className="absolute bottom-20 right-10 text-purple-400 font-mono text-sm animate-pulse">&rbrace;</div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="text-blue-400 font-mono text-sm mb-4">{/* Loading company information... */}</div>
            <div className="flex items-center justify-center mb-6">
              <div className="text-green-400 font-mono text-sm mr-4">ABOUT_MODULE:</div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <div className="text-green-400 font-mono text-sm ml-2">LOADED</div>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6 font-mono">
              About Code Garden
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono leading-relaxed">
              We&rsquo;re dedicated to preparing the next generation for a digital future through comprehensive technology education and innovative learning experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-24 bg-gray-800">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-green-400 font-mono text-sm mb-4">{/* Defining our purpose... */}</div>
              <div className="flex items-center mb-6">
                <div className="text-green-400 font-mono text-sm mr-4">MISSION_STATUS:</div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div className="text-green-400 font-mono text-sm ml-2">ACTIVE</div>
              </div>
              <h2 className="text-4xl font-bold text-white mb-6 font-mono">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed font-mono">
                At Code Garden, we believe that every child deserves access to quality technology education. Our mission is to provide comprehensive, engaging, and safe learning experiences that prepare students for the digital future.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed font-mono">
                We combine cutting-edge curriculum with experienced instructors to create an environment where students can explore, learn, and grow their technical skills while developing critical thinking and problem-solving abilities.
              </p>
            </div>
            <div className="bg-gray-900 border border-green-400/30 rounded-2xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 opacity-50"></div>
              <div className="text-center relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center border border-green-400/50">
                    <FontAwesomeIcon icon={faLightbulb} className="w-12 h-12 text-white" />
                  </div>
                  <div className="text-green-400 font-mono text-xs ml-4">INNOVATION_MODULE</div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3 font-mono">Empowering Innovation</h3>
                <p className="text-gray-300 font-mono text-sm">Building the foundation for tomorrow&rsquo;s technology leaders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-24 bg-gray-900">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(249, 115, 22, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(249, 115, 22, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="text-orange-400 font-mono text-sm mb-4">{/* Core system values... */}</div>
            <div className="flex items-center justify-center mb-6">
              <div className="text-orange-400 font-mono text-sm mr-4">VALUES_SYSTEM:</div>
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <div className="text-orange-400 font-mono text-sm ml-2">INITIALIZED</div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 font-mono">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-mono">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-gray-800 border border-blue-400/30 rounded-2xl p-8 text-center hover:border-blue-400/60 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center border border-blue-400/50">
                    <FontAwesomeIcon icon={faShieldAlt} className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-blue-400 font-mono text-xs ml-3">VALUE_001</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 font-mono">Safety First</h3>
                <p className="text-gray-300 leading-relaxed font-mono text-sm">We prioritize the safety and security of our students in all our programs and interactions.</p>
              </div>
            </div>
            
            <div className="group bg-gray-800 border border-orange-400/30 rounded-2xl p-8 text-center hover:border-orange-400/60 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center border border-orange-400/50">
                    <FontAwesomeIcon icon={faBook} className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-orange-400 font-mono text-xs ml-3">VALUE_002</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 font-mono">Excellence</h3>
                <p className="text-gray-300 leading-relaxed font-mono text-sm">We strive for excellence in education, providing the highest quality learning experiences.</p>
              </div>
            </div>
            
            <div className="group bg-gray-800 border border-purple-400/30 rounded-2xl p-8 text-center hover:border-purple-400/60 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center border border-purple-400/50">
                    <FontAwesomeIcon icon={faUsers} className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-purple-400 font-mono text-xs ml-3">VALUE_003</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 font-mono">Community</h3>
                <p className="text-gray-300 leading-relaxed font-mono text-sm">We foster a supportive community where students can learn, grow, and succeed together.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-24 bg-gray-800">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '45px 45px'
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="text-purple-400 font-mono text-sm mb-4">{/* Loading team profiles... */}</div>
            <div className="flex items-center justify-center mb-6">
              <div className="text-purple-400 font-mono text-sm mr-4">TEAM_DATABASE:</div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <div className="text-purple-400 font-mono text-sm ml-2">CONNECTED</div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4 font-mono">
              Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-mono">
              Experienced educators and industry professionals dedicated to student success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-gray-900 border border-blue-400/30 rounded-2xl p-8 text-center hover:border-blue-400/60 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg mx-auto mb-6 flex items-center justify-center border border-blue-400/50">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="text-blue-400 font-mono text-xs mb-2">INSTRUCTOR_001</div>
                <h3 className="text-xl font-semibold text-white mb-2 font-mono">Sarah Johnson</h3>
                <p className="text-blue-400 font-mono font-medium mb-3">Lead Instructor</p>
                <p className="text-gray-300 text-sm font-mono">10+ years in software development and education</p>
              </div>
            </div>
            
            <div className="group bg-gray-900 border border-orange-400/30 rounded-2xl p-8 text-center hover:border-orange-400/60 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg mx-auto mb-6 flex items-center justify-center border border-orange-400/50">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="text-orange-400 font-mono text-xs mb-2">DIRECTOR_001</div>
                <h3 className="text-xl font-semibold text-white mb-2 font-mono">Michael Chen</h3>
                <p className="text-orange-400 font-mono font-medium mb-3">Curriculum Director</p>
                <p className="text-gray-300 text-sm font-mono">Former Google engineer with education expertise</p>
              </div>
            </div>
            
            <div className="group bg-gray-900 border border-green-400/30 rounded-2xl p-8 text-center hover:border-green-400/60 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg mx-auto mb-6 flex items-center justify-center border border-green-400/50">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="text-green-400 font-mono text-xs mb-2">MANAGER_001</div>
                <h3 className="text-xl font-semibold text-white mb-2 font-mono">Emily Rodriguez</h3>
                <p className="text-green-400 font-mono font-medium mb-3">Student Success Manager</p>
                <p className="text-gray-300 text-sm font-mono">Dedicated to ensuring every student thrives</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black text-white py-16">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <div className="text-blue-400 font-mono text-sm mb-2">{/* System footer initialized... */}</div>
            <div className="flex items-center justify-center mb-4">
              <div className="text-blue-400 font-mono text-sm mr-4">FOOTER_STATUS:</div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="text-blue-400 font-mono text-sm ml-2">ACTIVE</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="bg-gray-900 border border-blue-400/30 rounded-xl p-6">
                <div className="text-blue-400 font-mono text-xs mb-2">COMPANY_INFO</div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl flex items-center justify-center">
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
              <div className="bg-gray-900 border border-orange-400/30 rounded-xl p-6 h-full">
                <div className="text-orange-400 font-mono text-xs mb-2">PROGRAMS_MODULE</div>
                <h4 className="text-lg font-semibold mb-6 font-mono">Programs</h4>
                <ul className="space-y-3">
                  <li><a href="/programs" className="text-gray-300 hover:text-orange-400 transition-colors font-mono text-sm">Python Programming</a></li>
                  <li><a href="/programs" className="text-gray-300 hover:text-orange-400 transition-colors font-mono text-sm">Web Development</a></li>
                  <li><a href="/programs" className="text-gray-300 hover:text-orange-400 transition-colors font-mono text-sm">Game Development</a></li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-900 border border-green-400/30 rounded-xl p-6 h-full">
                <div className="text-green-400 font-mono text-xs mb-2">COMPANY_MODULE</div>
                <h4 className="text-lg font-semibold mb-6 font-mono">Company</h4>
                <ul className="space-y-3">
                  <li><a href="/about" className="text-gray-300 hover:text-green-400 transition-colors font-mono text-sm">About Us</a></li>
                  <li><a href="/contact" className="text-gray-300 hover:text-green-400 transition-colors font-mono text-sm">Contact</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors font-mono text-sm">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="text-center">
              <div className="text-blue-400 font-mono text-xs mb-2">{/* Copyright notice... */}</div>
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm font-mono">
                  © 2024 Code Garden. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}