import { useState } from 'react'

function AboutMe() {
  const [showResumeMessage, setShowResumeMessage] = useState(false)

  const handleResumeClick = () => {
    setShowResumeMessage(true)
    setTimeout(() => {
      setShowResumeMessage(false)
    }, 2000)
  }

  return (
    <section id="about-me" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {showResumeMessage && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-300">
            <div className="border-2 border-[#A020F0] bg-gray-900 px-6 py-3 rounded shadow-lg">
              <p className="text-white font-mono">Resume download not currently available</p>
            </div>
          </div>
        )}
        <div className="flex items-center space-x-4 mb-12">
          <h2 className="text-[#A020F0] text-2xl md:text-3xl font-bold font-mono">#about-me</h2>
          <div className="h-0.5 bg-[#A020F0] flex-1 max-w-md"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-white mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
              I'm Francis, a young software developer focused on building modern, user-friendly digital products. I'm 15 years old (born October 2010) and an American national, currently pursuing my education while actively developing real-world software projects. I've been coding for over five years, starting at the age of 10, and I'm driven by curiosity, consistency, and the desire to turn ideas into usable products.
            </p>
            <p className="text-white mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
              I've lived in the United States and Sri Lanka, and for most of my life I've been based in Poland. Growing up across different countries and cultures shaped how I think about technology — especially how important accessibility, clarity, and simplicity are when building software for real people. That global perspective strongly influences how I design and structure my work.
            </p>
            <p className="text-white mb-6 leading-relaxed text-sm sm:text-base md:text-lg">
              My main focus is on improving user interfaces, building better functionality, and connecting frontends with reliable backends to create smooth, intuitive experiences. I'm deeply interested in the world of technology and continuously exploring new tools and concepts, with the goal of creating software that is useful, accessible, and impactful for people around the world.
            </p>
            <button 
              onClick={handleResumeClick}
              className="border-2 border-[#A020F0] text-white px-4 sm:px-6 py-2 sm:py-3 hover:bg-[#A020F0] transition-colors font-mono text-sm sm:text-base"
            >
              Resume ↓
            </button>
          </div>

          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 border-2 border-[#A020F0] opacity-30"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-white opacity-20"></div>
            
            {/* About Me photo */}
            <div className="flex items-center justify-center">
              <div className="bg-gray-800 rounded-lg w-[70%] aspect-square flex items-center justify-center border-2 border-[#A020F0] relative overflow-hidden">
                <div className="absolute inset-0 border-2 border-[#A020F0] opacity-20"></div>
                <img 
                  src="/assets/photos/me2.png" 
                  alt="Francis Kierzkiewicz"
                  className="w-full h-full object-cover relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe

