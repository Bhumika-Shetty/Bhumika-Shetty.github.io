import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Code2, Database, Brain, Server } from 'lucide-react';

const About = () => {
  const headingAnimation = useIntersectionObserver({ triggerOnce: true });
  const contentAnimation = useIntersectionObserver({ triggerOnce: true, threshold: 0.2 });
  const skillsAnimation = useIntersectionObserver({ triggerOnce: true, threshold: 0.3 });

  const coreSkills = [
    {
      title: 'Deep Learning',
      icon: <Brain className="h-10 w-10 text-green-500" />,
      description: 'Neural Networks, CNN, RNN, Transformers'
    },
    {
      title: 'Programming',
      icon: <Code2 className="h-10 w-10 text-green-500" />,
      description: 'Python, PyTorch, OpenCV, C++, MERN'
    },
    {
      title: 'Data Science',
      icon: <Database className="h-10 w-10 text-green-500" />,
      description: 'Data Analysis, Data Pre-processing'
    },
    {
      title: 'MLOps',
      icon: <Server className="h-10 w-10 text-green-500" />,
      description: 'Model Deployment, Monitoring, Scalability'
    },
  ];

  return (
    <section id="about" className="section-container">
      {/* Section Title */}
      <div 
        ref={headingAnimation.ref as React.RefObject<HTMLDivElement>}
        className={`text-center mb-16 transition-all duration-700 ${
          headingAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Removed section-title to avoid blue styling; using direct green styling */}
        <h2 className="text-green-500 text-4xl font-bold">About Me</h2>
        <p className="section-subtitle max-w-3xl mx-auto">
          I'm a deep learning engineer with a passion for creating AI solutions that matter.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div 
          ref={contentAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`lg:order-2 transition-all duration-700 delay-300 ${
            contentAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
        >
          <div className="relative">
            <div className="w-full aspect-square bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/me.png"
                alt="Bhumika Shetty"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-green-500/10 rounded-xl -z-10"></div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-green-500/10 rounded-xl -z-10"></div>
          </div>
        </div>

        {/* Text */}
        <div 
          className={`lg:order-1 transition-all duration-700 delay-500 ${
            contentAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}
        >
          <h3 className="text-2xl font-bold mb-6 text-white">Hello there! I'm Bhumika Dinesh Shetty</h3>
          <div className="space-y-4 text-gray-300">
            <p>
              I'm a passionate Computer Engineering student and Deep Learning enthusiast currently pursuing my Masters at New York University. With a strong foundation from my Bachelor’s in Computer Science, I've combined rigorous academics with hands-on industry experience.
            </p>
            <p>
              At NeuroPixel.AI, I honed my expertise as a Deep Learning Engineer—fine-tuning advanced models like Meta’s Segment Anything Model, developing innovative solutions for identity preservation using Stable Diffusion, and implementing super-resolution techniques with SRGAN.
            </p>
            <p>
              My journey began with a fascination for how computers learn patterns and make decisions, which naturally led me to specialize in deep learning, computer vision, and natural language processing. Whether I'm optimizing ML pipelines or collaborating on AI-driven projects, I'm dedicated to leveraging technology to drive real-world impact in fields such as healthcare and environmental sustainability.
            </p>
          </div>
        </div>
      </div>

      {/* Core Skills */}
      <div
        ref={skillsAnimation.ref as React.RefObject<HTMLDivElement>}
        className={`mt-20 transition-all duration-700 delay-700 ${
          skillsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h3 className="text-xl font-semibold mb-8 text-center text-white">Core Competencies</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreSkills.map((skill, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-xl hover:shadow-lg hover:shadow-green-500/5 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
                  {skill.icon}
                </div>
                <h4 className="text-xl font-medium mb-2 text-white">{skill.title}</h4>
                <p className="text-gray-400">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
