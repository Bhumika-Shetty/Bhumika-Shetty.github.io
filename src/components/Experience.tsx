import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Calendar, Building } from 'lucide-react';

const Experience = () => {
  const headingAnimation = useIntersectionObserver({ triggerOnce: true });
  const timelineAnimation = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 });

  const experiences = [
    {
      title: 'Deep Learning Engineer',
      company: 'NeuroPixel.AI, Bengaluru',
      period: 'July 2023 - August 2024',
      description: [
        'Fine-tuned Meta’s Segment Anything Model (SAM) for garment segmentation, improving segmentation accuracy by 45%.',
        'Trained and deployed ControlNets for skin and hair texture generation using Stable Diffusion, enhancing realism in virtual try-ons.',
        'Developed a Stable Diffusion-based identity preservation workflow, reducing model swap errors by 60%.',
        'Designed and implemented a super-resolution module using SRGAN & PyTorch, enhancing image quality for e-commerce applications.',
        'Published a patent (202341060944) as a primary author on AI-driven human image modification.',
        'Collaborated with Landmark Group, Decathlon, and Myntra, leading pilot implementations and optimizing AI models for commercial use.',
        'Worked directly with the CTO to manage project timelines and team deliverables.',
        'Awarded the position of the President of the POSH committee.'
      ],
      skills: ['Meta SAM', 'Stable Diffusion', 'SRGAN', 'PyTorch']
    },
    {
      title: 'Software Development Engineer',
      company: 'NeuroPixel.AI, Bengaluru',
      period: 'August 2022 - June 2023',
      description: [
        'Built Dockerized ML pipelines, reducing deployment time by 60% and improving model scalability.',
        'Optimized CUDA-based parallel processing, accelerating the inference speed.',
        'Enhanced pre-processing workflows using OpenPose, DensePose, and CIHP, improving data efficiency.',
        'Developed a MERN stack-based cataloging platform, streamlining internal data management.',
        'Worked as the first female software developer of the team.'
      ],
      skills: ['Docker', 'CUDA', 'OpenPose', 'DensePose', 'CIHP', 'MERN']
    },
    {
      title: 'Software Engineering Intern',
      company: 'NeuroPixel.AI, Bengaluru',
      period: 'February 2022 - July 2022',
      description: [
        'Built web scraping pipelines to collect and preprocess training datasets for ML models.',
        'Developed image processing scripts using OpenCV & PIL, improving model input quality.'
      ],
      skills: ['Web Scraping', 'OpenCV', 'PIL']
    },
  ];

  return (
    <section id="experience" className="section-container">
      {/* Section Title */}
      <div 
        ref={headingAnimation.ref as React.RefObject<HTMLDivElement>}
        className={`text-center mb-16 transition-all duration-700 ${
          headingAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Removed "section-title" class to ensure green color is applied */}
        <h2 className="text-green-500 text-4xl font-bold">Work Experience</h2>
        <p className="section-subtitle max-w-3xl mx-auto">
          My professional journey in the field of AI and software development
        </p>
      </div>

      <div 
        ref={timelineAnimation.ref as React.RefObject<HTMLDivElement>}
        className={`relative transition-all duration-1000 ${
          timelineAnimation.isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Timeline line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-green-500/30 -translate-x-1/2"></div>

        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className={`mb-16 md:mb-24 transition-all duration-700 delay-${index * 200} ${
              timelineAnimation.isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            <div className={`md:grid md:grid-cols-2 relative ${index % 2 === 0 ? '' : 'md:col-start-2'}`}>
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-5 h-5 bg-green-500 rounded-full border-4 border-background z-10"></div>
              
              {/* Content */}
              <div className={`glass-card p-6 rounded-xl ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12 md:col-start-2'}`}>
                <div className="flex items-center mb-3 text-sm text-gray-400 md:justify-start">
                  <Calendar size={14} className="inline mr-1" />
                  <span>{exp.period}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1 text-left">{exp.title}</h3>
                <div className="flex items-center mb-4 text-green-500 md:justify-start">
                  <Building size={16} className="inline mr-1" />
                  <span>{exp.company}</span>
                </div>
                
                {/* Bullet Points */}
                <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2 text-left">
                  {exp.description.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 text-sm md:justify-start">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="px-2 py-1 bg-green-500/10 text-green-500 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
