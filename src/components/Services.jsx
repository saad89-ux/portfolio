import { Code, BrainCircuit, Server, Rocket, Shield, Smartphone } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Frontend Development",
      description: "Building responsive and interactive web applications using HTML, CSS, JavaScript, and frameworks like React and Tailwind CSS.",
      icon: <Code className="h-8 w-8 text-purple-500" />
    },
    {
      id: 2,
     title: "Python Programming",
      description: "Building efficient Python applications with a focus on AI agent development. Specializing in creating intelligent, autonomous systems using libraries like TensorFlow, PyTorch, and LangChain for advanced machine learning solutions.",
     icon: <BrainCircuit className="h-8 w-8 text-purple-500" />
    },
    {
      id: 3,
      title: "Responsive Design",
      description: "Ensuring your website looks and works perfectly across all devices, from mobile phones to desktops.",
      icon: <Smartphone className="h-8 w-8 text-purple-500" /> // Changed from Mobile to Smartphone
    },
    {
      id: 4,
      title: "Backend Integration",
      description: "Connecting frontend applications with backend services like Firebase for real-time data and functionality.",
      icon: <Server className="h-8 w-8 text-purple-500" />
    },
    {
      id: 5,
      title: "Performance Optimization",
      description: "Enhancing website speed and performance through code optimization and best practices.",
      icon: <Rocket className="h-8 w-8 text-purple-500" />
    },
    {
      id: 6,
      title: "Website Maintenance",
      description: "Providing ongoing support and updates to keep your website secure, functional, and up-to-date.",
      icon: <Shield className="h-8 w-8 text-purple-500" />
    }
  ];

  return (
    <section id="services" className="relative bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 py-16 px-4">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Explore <span className="text-purple-500">My Services</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I offer a range of web development and design services to help you build modern,
            responsive, and user-friendly digital solutions. Let's bring your ideas to life!
          </p>
        </div>

        <h3 className="text-2xl font-bold mb-8 text-center text-purple-500">
          What I Offer
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/40 shadow-sm hover:shadow-[0_10px_25px_-5px_rgba(168,85,247,0.3)] transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-purple-500 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};