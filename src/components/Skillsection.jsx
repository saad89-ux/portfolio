import { useState } from "react";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },
  
  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "GraphQL", level: 60, category: "backend" },
  
  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Canva", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="relative bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 py-16 px-4">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-purple-500">Skills</span>
        </h2>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={
                `px-5 py-2 rounded-full transition-all duration-300 capitalize ${
                  activeCategory === category
                    ? "bg-purple-600 text-white shadow-[0_5px_15px_rgba(168,85,247,0.4)]"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-purple-500/10 hover:shadow-[0_5px_15px_rgba(168,85,247,0.2)]"
                }`
              }
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={`${skill.name}-${skill.category}`}
              className="group bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 shadow-sm hover:shadow-[0_10px_25px_-5px_rgba(168,85,247,0.3)] transition-all duration-300"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 group-hover:text-purple-500 transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>
              
              {/* Skill Progress Bar */}
              <div className="w-full bg-gray-300 dark:bg-gray-700 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-purple-500 h-2.5 rounded-full origin-left animate-[grow_1.5s_ease-out] group-hover:shadow-[0_0_10px_rgba(168,85,247,0.7)] transition-shadow duration-300"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              
              <div className="text-right mt-1">
                <span className="text-sm text-purple-500 dark:text-purple-400 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-300">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};