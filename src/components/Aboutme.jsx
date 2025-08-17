import { Code, Briefcase } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="relative bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 py-16 px-4">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-purple-500">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE CONTENT */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="text-gray-600 dark:text-gray-300">
              With over 1 year of experience in web development, I specialize in creating responsive, accessible, and performant web applications using modern technologies.
            </p>

            <p className="text-gray-600 dark:text-gray-300">
              I'm passionate about creating elegant solutions to complex problems, and I'm constantly learning new technologies and techniques to stay at the forefront of the ever-evolving web landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center">
              <a 
                href="#contact" 
                className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* RIGHT SIDE CARDS */}
          <div className="grid grid-cols-1 gap-6">
            {/* Web Development Card */}
            <div className="border border-purple-500/30 p-6 rounded-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-shadow duration-300 group bg-gray-100 dark:bg-gray-800">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-purple-500/10">
                  <Code className="h-6 w-6 text-purple-500" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg group-hover:text-purple-400 transition-colors duration-300">Web Development</h4>
                  <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    Creating responsive websites and web applications with modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            {/* Python Programming Card */}
            <div className="border border-purple-500/30 p-6 rounded-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-shadow duration-300 group bg-gray-100 dark:bg-gray-800">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-purple-500/10">
                  <Code className="h-6 w-6 text-purple-500" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg group-hover:text-purple-400 transition-colors duration-300">Python Programming</h4>
                  <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    Building efficient, scalable applications and automating tasks with clean, maintainable code.
                  </p>
                </div>
              </div>
            </div>

            {/* Project Management Card */}
            <div className="border border-purple-500/30 p-6 rounded-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-shadow duration-300 group bg-gray-100 dark:bg-gray-800">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-purple-500/10">
                  <Briefcase className="h-6 w-6 text-purple-500" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg group-hover:text-purple-400 transition-colors duration-300">Project Management</h4>
                  <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    Leading projects from conception to completion with agile methodologies.
                  </p>
                </div>
              </div>
            </div>

            {/* Consulting Card */}
            <div className="border border-purple-500/30 p-6 rounded-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-shadow duration-300 group bg-gray-100 dark:bg-gray-800">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-purple-500/10">
                  <Briefcase className="h-6 w-6 text-purple-500" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg group-hover:text-purple-400 transition-colors duration-300">Consulting</h4>
                  <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    Providing expert advice on web technologies and digital strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* My Journey Timeline Section */}
        <div className="py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">
            My <span className="text-purple-500">Journey</span>
          </h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 h-full w-0.5 bg-purple-500 transform -translate-x-1/2 hover:bg-white transition-colors duration-300"></div>

            {/* Timeline items */}
            <div className="space-y-8">
              {/* October 2024 */}
              <div className="relative w-full flex justify-start pl-4 pr-4 md:pr-0 md:pl-0">
                <div className="w-full md:w-5/12">
                  <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-shadow duration-300 group relative">
                    <div className="absolute -right-6 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-500 z-10 hover:bg-white transition-colors duration-300"></div>
                    <h3 className="text-xl font-bold text-purple-500 group-hover:text-white transition-colors duration-300">October 2024</h3>
                    <h4 className="text-lg font-semibold mt-2 group-hover:text-white transition-colors duration-300">Started Saylani Mass IT Training</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      Began my journey with Saylani Mass IT, enrolled in the Modern Web Application (Frontend) course, learning HTML, CSS, and JavaScript fundamentals.
                    </p>
                  </div>
                </div>
              </div>

              {/* November 2024 */}
              <div className="relative w-full flex justify-end pl-4 pr-4 md:pl-0 md:pr-0">
                <div className="w-full md:w-5/12">
                  <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-shadow duration-300 group relative">
                    <div className="absolute -left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-500 z-10 hover:bg-white transition-colors duration-300"></div>
                    <h3 className="text-xl font-bold text-purple-500 group-hover:text-white transition-colors duration-300">November 2024</h3>
                    <h4 className="text-lg font-semibold mt-2 group-hover:text-white transition-colors duration-300">Mastered HTML & CSS</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      Developed strong skills in HTML and CSS, creating responsive static webpages through hands-on projects at Saylani.
                    </p>
                  </div>
                </div>
              </div>

              {/* December 2024 */}
              <div className="relative w-full flex justify-start pl-4 pr-4 md:pr-0 md:pl-0">
                <div className="w-full md:w-5/12">
                  <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-shadow duration-300 group relative">
                    <div className="absolute -right-6 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-500 z-10 hover:bg-white transition-colors duration-300"></div>
                    <h3 className="text-xl font-bold text-purple-500 group-hover:text-white transition-colors duration-300">December 2024</h3>
                    <h4 className="text-lg font-semibold mt-2 group-hover:text-white transition-colors duration-300">Learned JavaScript Basics</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      Gained proficiency in JavaScript, adding interactivity to web projects as part of the Saylani course curriculum.
                    </p>
                  </div>
                </div>
              </div>

              {/* January 2025 */}
              <div className="relative w-full flex justify-end pl-4 pr-4 md:pl-0 md:pr-0">
                <div className="w-full md:w-5/12">
                  <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-shadow duration-300 group relative">
                    <div className="absolute -left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-500 z-10 hover:bg-white transition-colors duration-300"></div>
                    <h3 className="text-xl font-bold text-purple-500 group-hover:text-white transition-colors duration-300">January 2025</h3>
                    <h4 className="text-lg font-semibold mt-2 group-hover:text-white transition-colors duration-300">Started Learning React</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      Began exploring React in the Saylani course to build dynamic and modern web applications.
                    </p>
                  </div>
                </div>
              </div>

              {/* February 2025 */}
              <div className="relative w-full flex justify-start pl-4 pr-4 md:pr-0 md:pl-0">
                <div className="w-full md:w-5/12">
                  <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-shadow duration-300 group relative">
                    <div className="absolute -right-6 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-500 z-10 hover:bg-white transition-colors duration-300"></div>
                    <h3 className="text-xl font-bold text-purple-500 group-hover:text-white transition-colors duration-300">February 2025</h3>
                    <h4 className="text-lg font-semibold mt-2 group-hover:text-white transition-colors duration-300">Adopted Tailwind CSS</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      Started using Tailwind CSS for efficient and responsive styling in frontend projects at Saylani.
                    </p>
                  </div>
                </div>
              </div>

              {/* March 2025 */}
              <div className="relative w-full flex justify-end pl-4 pr-4 md:pl-0 md:pr-0">
                <div className="w-full md:w-5/12">
                  <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-shadow duration-300 group relative">
                    <div className="absolute -left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-500 z-10 hover:bg-white transition-colors duration-300"></div>
                    <h3 className="text-xl font-bold text-purple-500 group-hover:text-white transition-colors duration-300">March 2025</h3>
                    <h4 className="text-lg font-semibold mt-2 group-hover:text-white transition-colors duration-300">Built First Major Project</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      Completed a full-fledged frontend project using HTML, CSS, JavaScript, React, and Tailwind CSS as part of Saylani's training.
                    </p>
                  </div>
                </div>
              </div>

              {/* June 2025 */}
              <div className="relative w-full flex justify-start pl-4 pr-4 md:pr-0 md:pl-0">
                <div className="w-full md:w-5/12">
                  <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-shadow duration-300 group relative">
                    <div className="absolute -right-6 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-500 z-10 hover:bg-white transition-colors duration-300"></div>
                    <h3 className="text-xl font-bold text-purple-500 group-hover:text-white transition-colors duration-300">June 2025</h3>
                    <h4 className="text-lg font-semibold mt-2 group-hover:text-white transition-colors duration-300">Continuing Saylani Journey</h4>
                    <p className="mt-2 text-gray-600 dark:text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      Currently advancing my skills in modern web development, preparing for real-world frontend projects through Saylani's training program.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};