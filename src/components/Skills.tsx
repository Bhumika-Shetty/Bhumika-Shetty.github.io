import { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('areas'); // Set default tab to Knowledge Areas
  const headingAnimation = useIntersectionObserver({ triggerOnce: true });
  const contentAnimation = useIntersectionObserver({ triggerOnce: true, threshold: 0.2 });

  const skills = {
    languages: [
      'Python', 'C++', 'Java', 'Linux', 'SQL', 'HTML', 'CSS', 'Javascript'
    ],
    frameworks: [
      'PyTorch', 'Scikit-learn', 'NumPy', 'Pandas', 'OpenCV', 'React', 'Node.js', 'FastAPI', 'Hugging Face'
    ],
    tools: [
      'Git', 'Docker', 'Kubernetes', 'AWS', 'Google Cloud', 'Azure', 'MLflow', 'Jupyter', 'VSCode', 'Linux', 'CUDA', 'Matplotlib'
    ],
    areas: [
      'Deep Learning', 'Computer Vision', 'Generative AI', 'Stable Diffusion', 'Machine Learning', 'Machine Learning Ops', 'Data Analysis','Database Design', 'Web Development', 'Parallel Computing', 'Operating Systems'
    ],
  };

  // Reordered tabs: Knowledge Areas comes first
  const tabs = [
    { id: 'areas', label: 'Knowledge Areas' },
    { id: 'languages', label: 'Languages' },
    { id: 'frameworks', label: 'Frameworks & Libraries' },
    { id: 'tools', label: 'Tools & Platforms' },
  ];

  return (
    <section id="skills" className="section-container">
      <div 
        ref={headingAnimation.ref as React.RefObject<HTMLDivElement>}
        className={`text-center mb-16 transition-all duration-700 ${
          headingAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-green-500 text-4xl font-bold">Skills & Technologies</h2>
        <p className="section-subtitle max-w-3xl mx-auto">
          My technical toolkit and areas of expertise
        </p>
      </div>

      <div 
        ref={contentAnimation.ref as React.RefObject<HTMLDivElement>}
        className={`transition-all duration-700 delay-300 ${
          contentAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded transition-colors ${
                activeTab === tab.id
                  ? 'bg-green-500 text-white'
                  : 'text-green-500 hover:bg-green-500/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills List */}
        <div className="glass-card p-8 rounded-xl">
          <div className="skill-list">
            {skills[activeTab as keyof typeof skills].map((skill, index) => (
              <div
                key={index}
                className="skill-item animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
