import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Projects = () => {
  const headingAnimation = useIntersectionObserver({ triggerOnce: true });
  const projectsAnimation = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      title: 'Swadeshi-Ek kadam Unnati ki taraf and Mannat',
      period: 'Jan 2021 - July 2022',
      teamSize: 4,
      role: 'Team Member',
      description: `This project aimed to empower India's rural sector with four major facilities: 
      an exclusive e-commerce website for the rural market, a bidding platform to eliminate middlemen exploitation, 
      a blogging site to showcase rural culture, and an educational platform to boost employability. It also includes 
      Mannat—a website dedicated to supporting nonprofit organizations.`,
      achievements: 'Won 4th prize in National Level Competition Shristi 2022; Shortlisted for KCST 2022.',
      tags: ['MERN', 'E-commerce', 'Bidding', 'Blog', 'Educational'],
      image: '/swadeshi.png'
    },
    {
      title: 'Agritech',
      period: 'Dec 2020 - Aug 2021',
      teamSize: 4,
      role: 'Team Lead',
      description: `Developed a machine learning-based solution for precision agriculture featuring 9 functionalities such as soil fertility prediction, fertilizer recommendation, weed detection, and yield prediction. 
      Explored algorithms including Random Forest, Decision Trees, and CNN. This project was later integrated with Swadeshi as a product.`,
      achievements: 'Won PBL -2022.',
      tags: ['Machine Learning', 'Precision Agriculture', 'CNN', 'Random Forest'],
      image: '/agritech.png'
    },
    {
      title: 'ATS (Automated Ticketing System)',
      period: 'April 2020 - Dec 2020',
      teamSize: 4,
      role: 'Team Member',
      description: `Created a facial recognition model using Facenet as the base to automate the ticketing process in metros. 
      Utilized MTCNN for face and landmark detection and processed images with OpenCV. Integrated Aadhaar authentication for enhanced safety measures.`,
      achievements: 'Published a patent (Application No. 202141026348 A) and received recognition from the Government of Karnataka.',
      tags: ['Facial Recognition', 'MTCNN', 'OpenCV', 'Aadhaar'],
      image: '/ats.png'
    },
  ];

  return (
    <section id="projects" className="section-container">
      <div 
        ref={headingAnimation.ref as React.RefObject<HTMLDivElement>}
        className={`text-center mb-16 transition-all duration-700 ${ 
          headingAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-green-500 text-4xl font-bold">Projects</h2>
        <p className="section-subtitle max-w-3xl mx-auto">
          A showcase of my academic projects and research work
        </p>
      </div>

      <div 
        ref={projectsAnimation.ref as React.RefObject<HTMLDivElement>}
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 ${
          projectsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card flex flex-col h-full animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="aspect-video bg-gray-800 rounded-t-xl overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover object-center" 
                loading="lazy"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <div className="text-sm text-gray-400 mb-2">
                <span>{project.period}</span> | <span>Team Size: {project.teamSize}</span> | <span>Role: {project.role}</span>
              </div>
              <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
              <p className="text-gray-300 mb-4 italic">{project.achievements}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-green-500/10 text-green-500 rounded text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
