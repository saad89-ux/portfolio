import { useState, useEffect } from "react";

export const HeroSection = () => {
  const phrases = [
    "a Frontend Developer",
    "a Backend Developer",
    "a MERN Stack Developer",
    " Interested in Agentic AI",
    "Exploring AI Automation",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Typing effect
  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    if (charIndex < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentPhrase[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentPhraseIndex]);

  // Track mouse movement for custom cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Expertise data
  const expertise = [
    "HTML5", "CSS3", "JS", "JavaScript", "Tailwind CSS", "Bootstrap",
    "React", "Git", "Firebase", "Figma", "Vercel"
  ];

  return (
    <>
      {/* Custom Cursor */}
      <div
        style={{
          position: "fixed",
          top: cursorPos.y,
          left: cursorPos.x,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999
        }}
      >
        <div
          style={{
            width: "26px",
            height: "26px",
            border: "2px solid black",
            borderRadius: "50%",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              backgroundColor: "black",
              borderRadius: "50%"
            }}
          ></div>
        </div>
      </div>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative bg-white text-black dark:bg-black dark:text-white transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Main Hero Content */}
          <div className="min-h-screen flex items-center justify-center -mt-16 md:-mt-20">
            <div className="w-full grid md:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Hello, <span className="text-purple-500">my name is</span>{" "}
                  <span className="font-[cursive] text-purple-400">Saad Kamran</span>
                </h2>

                <h1 className="text-4xl md:text-5xl font-bold mt-4">
                  I'm{" "}
                  <span className="text-purple-500">{displayedText}</span>
                  <span className="border-r-2 border-purple-500 animate-pulse ml-1"></span>
                </h1>

                <p className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                  I am deeply passionate about the world of technology, driven by curiosity 
                  and creativity. I thrive on solving problems, crafting impactful solutions, 
                  and constantly evolving to make a meaningful contribution to the tech industry.
                </p>

                <a
                  href="public/resume/Document 4 - Copy.pdf"
                  download
                  className="mt-6 inline-block bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition"
                >
                  Download Resume
                </a>
              </div>

              {/* Right Image with Floating Animation */}
              <div className="flex justify-center relative">
                <div 
                  className="p-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"
                  style={{
                    animation: "float 3s ease-in-out infinite",
                  }}
                >
                  <div className="w-64 h-64 rounded-lg overflow-hidden border-4 border-white dark:border-gray-900 shadow-[0_0_60px_rgba(168,85,247,0.7)] hover:shadow-[0_0_80px_rgba(168,85,247,0.9)] transition-all duration-300">
                    <img
                      src="/images/WhatsApp-Image-2025-07-31.jpg"
                      alt="Saad Kamran"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="py-16">
            <h2 className="text-3xl font-bold mb-12 text-center">
              My <span className="text-purple-500">Timeline</span>
            </h2>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-1/2 h-full w-0.5 bg-purple-500 transform -translate-x-1/2 hover:bg-white transition-colors duration-300"></div>

              {/* Timeline items */}
              <div className="space-y-8">
                {/* 2022 - Left Side */}
                <div className="relative w-full flex justify-start pl-4 pr-4 md:pr-0 md:pl-0">
                  <div className="w-full md:w-5/12">
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-shadow duration-300 group relative">
                      {/* Circle on right */}
                      <div className="absolute -right-6 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-500 z-10 hover:bg-white transition-colors duration-300"></div>
                      <h3 className="text-xl font-bold text-purple-500 group-hover:text-white transition-colors duration-300">2022</h3>
                      <h4 className="text-lg font-semibold mt-2 group-hover:text-white transition-colors duration-300">Matriculation in Science</h4>
                      <p className="mt-2 text-gray-600 dark:text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        Completed Matriculation from the Board of Secondary Education, Karachi, with a focus on Science.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2024 - Right Side */}
                <div className="relative w-full flex justify-end pl-4 pr-4 md:pl-0 md:pr-0">
                  <div className="w-full md:w-5/12">
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-shadow duration-300 group relative">
                      {/* Circle on left */}
                      <div className="absolute -left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-500 z-10 hover:bg-white transition-colors duration-300"></div>
                      <h3 className="text-xl font-bold text-purple-500 group-hover:text-white transition-colors duration-300">2024</h3>
                      <h4 className="text-lg font-semibold mt-2 group-hover:text-white transition-colors duration-300">Intermediate in General-Science</h4>
                      <p className="mt-2 text-gray-600 dark:text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        Completed Intermediate from the Board of Intermediate Education, Karachi, specializing in Computer Science.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2023-2024 - Left Side */}
                <div className="relative w-full flex justify-start pl-4 pr-4 md:pr-0 md:pl-0">
                  <div className="w-full md:w-5/12">
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-shadow duration-300 group relative">
                      {/* Circle on right */}
                      <div className="absolute -right-6 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-500 z-10 hover:bg-white transition-colors duration-300"></div>
                      <h3 className="text-xl font-bold text-purple-500 group-hover:text-white transition-colors duration-300">2023 - 2024</h3>
                      <h4 className="text-lg font-semibold mt-2 group-hover:text-white transition-colors duration-300">Diploma in Python Programming</h4>
                      <p className="mt-2 text-gray-600 dark:text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        Earned a 1-year Diploma in Python Programming with Relevant libraries like Numpy,Pandas from the Aptech Institute.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2025-Present - Right Side */}
                <div className="relative w-full flex justify-end pl-4 pr-4 md:pl-0 md:pr-0">
                  <div className="w-full md:w-5/12">
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-shadow duration-300 group relative">
                      {/* Circle on left */}
                      <div className="absolute -left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-500 z-10 hover:bg-white transition-colors duration-300"></div>
                      <h3 className="text-xl font-bold text-purple-500 group-hover:text-white transition-colors duration-300">2025 - Present</h3>
                      <h4 className="text-lg font-semibold mt-2 group-hover:text-white transition-colors duration-300">Pursuing Undergraduate Degree</h4>
                      <p className="mt-2 text-gray-600 dark:text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        Currently pursuing a Bachelor's degree in Computer Science to become an Agentic AI Engineer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise Section */}
          <div className="py-16">
            <h2 className="text-3xl font-bold mb-12 text-center">
              My <span className="text-purple-500">Expertise</span>
            </h2>

            <div className="max-w-5xl mx-auto">
              {/* First Row */}
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {/* HTML5 */}
                <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 group p-4">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
                    alt="HTML5" 
                    className="w-12 h-12 mb-2 group-hover:brightness-125 transition-all duration-300"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">HTML5</span>
                </div>
                
                {/* CSS3 */}
                <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 group p-4">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
                    alt="CSS3" 
                    className="w-12 h-12 mb-2 group-hover:brightness-125 transition-all duration-300"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">CSS3</span>
                </div>
                
                {/* JavaScript */}
                <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 group p-4">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
                    alt="JavaScript" 
                    className="w-12 h-12 mb-2 group-hover:brightness-125 transition-all duration-300"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">JavaScript</span>
                </div>
                
                {/* TypeScript */}
                <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 group p-4">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
                    alt="TypeScript" 
                    className="w-12 h-12 mb-2 group-hover:brightness-125 transition-all duration-300"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">TypeScript</span>
                </div>
                
                {/* Tailwind CSS */}
                <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 group p-4">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"  
                    alt="Tailwind CSS" 
                    className="w-12 h-12 mb-2 group-hover:brightness-125 transition-all duration-300"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">Tailwind CSS</span>
                </div>
              </div>

              {/* Second Row */}
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {/* React */}
                <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 group p-4">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                    alt="React" 
                    className="w-12 h-12 mb-2 group-hover:brightness-125 transition-all duration-300"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">React</span>
                </div>
                
                {/* Next.js */}
                <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 group p-4">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" 
                    alt="Next.js" 
                    className="w-12 h-12 mb-2 group-hover:brightness-125 transition-all duration-300 invert dark:invert-0"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">Next.js</span>
                </div>
                
                {/* Node.js */}
                <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 group p-4">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
                    alt="Node.js" 
                    className="w-12 h-12 mb-2 group-hover:brightness-125 transition-all duration-300"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">Node.js</span>
                </div>
                
                {/* Express */}
                <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 group p-4">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" 
                    alt="Express" 
                    className="w-12 h-12 mb-2 group-hover:brightness-125 transition-all duration-300"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">Express</span>
                </div>
                
                {/* MongoDB */}
                <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 group p-4">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
                    alt="MongoDB" 
                    className="w-12 h-12 mb-2 group-hover:brightness-125 transition-all duration-300"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">MongoDB</span>
                </div>
              </div>

              {/* Third Row */}
              <div className="flex flex-wrap justify-center gap-4">
                {/* Git */}
                <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 group p-4">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
                    alt="Git" 
                    className="w-12 h-12 mb-2 group-hover:brightness-125 transition-all duration-300"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">Git</span>
                </div>
                
                {/* Firebase */}
                <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 group p-4">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" 
                    alt="Firebase" 
                    className="w-12 h-12 mb-2 group-hover:brightness-125 transition-all duration-300"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">Firebase</span>
                </div>
                
                {/* Supabase */}
                <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 group p-4">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" 
                    alt="Supabase" 
                    className="w-12 h-12 mb-2 group-hover:brightness-125 transition-all duration-300"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">Supabase</span>
                </div>
                
                {/* Vercel */}
                <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 group p-4">
                  <img 
                    src="https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" 
                    alt="Vercel" 
                    className="w-12 h-12 mb-2 group-hover:brightness-125 transition-all duration-300"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">Vercel</span>
                </div>
                
                {/* Python */}
                <div className="w-24 h-24 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 group p-4">
                  <img 
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
                    alt="Python" 
                    className="w-12 h-12 mb-2 group-hover:brightness-125 transition-all duration-300"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300">Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Animation Style */}
      <style >{`
        @keyframes float {
          0%, 100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-10px);
          }
          75% {
            transform: translateX(10px);
          }
        }
      `}</style>
    </>
  );

};
