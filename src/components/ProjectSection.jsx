import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Namaz Tracker App",
    description: "A responsive, Firebase-powered prayer tracker with real-time syncing, authentication, history view, and an interactive analytics dashboard for seamless Salah monitoring.",
    image: "https://i.pinimg.com/736x/df/ac/d2/dfacd26612d51397114154e213f32813.jpg",
    tags: ["JavaScript", "Firebase", "CSS3"],
    demoUrl: "https://www.linkedin.com/posts/saad-kamran-257564351_namazapp-firebase-javascript-activity-7354591623495700480-6rKn?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFfTTmMBc187Gcky4eGvb8_50g9ADOTp1s8",
    githubUrl: "https://github.com/saad89-ux/Namaz-Tracking-App",
  },
  {
    id: 2,
    title: "Quiz App",
    description: "A fun, fast, and good-looking quiz game built with pure HTML, CSS, and JavaScript, featuring a neon glow, timer, instant feedback, score report, and saving your progress without needing a server.",
    image: "https://i.pinimg.com/736x/5d/2c/7c/5d2c7cd2864204255bafc78db3282ccc.jpg",
    tags: ["Vallina JS", "CSS3", "HTML5"],
    demoUrl: "https://www.linkedin.com/posts/saad-kamran-257564351_javascript-webdevelopment-htmlcssjs-activity-7335637215487647744-f26e?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFfTTmMBc187Gcky4eGvb8_50g9ADOTp1s8",
    githubUrl: "https://github.com/saad89-ux/Quiz-App2",
  },
  {
    id: 3,
    title: "Expense Tracker App",
    description: "A simple expense tracker app that allows users to add, edit, and delete expenses, with a clean and intuitive interface.",
    image: "https://i.pinimg.com/736x/77/bc/1f/77bc1f510bba58f798ae53ef551700f9.jpg",
    tags: ["Vallina JS", "CSS3", "Firebase"],
    demoUrl: "https://www.linkedin.com/posts/saad-kamran-257564351_webdev-javascript-uidesign-activity-7340039970092425216-GdPR?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFfTTmMBc187Gcky4eGvb8_50g9ADOTp1s8",
    githubUrl: "https://github.com/saad89-ux/Expense-Tracker-App",
  },
  {
    id: 4,
    title: "E-commerce store",
    description: "A responsive e-commerce site built with HTML, CSS, and Vanilla JavaScript, featuring smart filters and a LocalStorage-based login system without any backend.",
    image: "https://i.pinimg.com/736x/5b/69/74/5b697402f5b2da245002551c7068abc7.jpg",
    tags: ["Vallina JS", "CSS3", "HTML5"],
    demoUrl: "https://e-commerce-intaial.vercel.app/",
    githubUrl: "https://github.com/saad89-ux/E-commerce-Intaial",
  },
    {
    id: 5,
    title: "HacktheBox-clone",
    description: "A responsive clone of the Hack The Box homepage featuring a video background, animated buttons, and a modern navigation bar using HTML and CSS.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWUjWiYwCl0mk1-JXjs28j_Nm_lMR-Iuklahz4idkbYgQ79hwxFbLFLLSo73gQZLZxIfU&usqp=CAU",
    tags: [ "CSS3", "HTML5" ],
    demoUrl: "https://hackthebox-clone.vercel.app/",
    githubUrl: "https://github.com/saad89-ux/hackthebox-clone",
  },
  {
    id: 6,
    title: "TodoApp",
    description: " Effortlessly add, update, and delete your tasks anytime, anywhere — all saved securely in the cloud with instant updates across devices. Perfect for staying organized on the go!",
    image: "https://i.pinimg.com/1200x/f7/19/0f/f7190f6b868faace1e417155d269cf9d.jpg",
    tags: [ "CSS3", "HTML5","Vallina JS" , "Firebase"],
    demoUrl: "https://www.linkedin.com/posts/saad-kamran-257564351_just-crafted-a-sleek-to-do-list-app-that-activity-7349738104934539266-e5Xn?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFfTTmMBc187Gcky4eGvb8_50g9ADOTp1s8",
    githubUrl: "https://github.com/saad89-ux/hackthebox-clone",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 py-16 px-4">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-purple-500">Projects</span>
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 shadow-sm hover:shadow-[0_10px_30px_-5px_rgba(168,85,247,0.3)]"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/10 text-purple-500 dark:text-purple-400 hover:bg-purple-500/20 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-gray-200 group-hover:text-purple-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-purple-500 transition-colors duration-300 hover:scale-110 transform"
                      aria-label="View demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-purple-500 transition-colors duration-300 hover:scale-110 transform"
                      aria-label="View on GitHub"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-all duration-300 text-center inline-flex items-center gap-2 hover:shadow-[0_5px_20px_rgba(168,85,247,0.4)] hover:-translate-y-1"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/saad89-ux"
          >
            Check My GitHub <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};