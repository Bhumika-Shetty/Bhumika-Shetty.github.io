import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const headingAnimation = useIntersectionObserver({ triggerOnce: true });
  const timelineAnimation = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 });

  const education = [
    {
      degree: 'Master of Science in Computer Engineering',
      institution: 'New York University',
      period: 'Sep 2024 - Present',
      description: 'Pursuing masters in Computer Engineering with focus on Deep Learning and Computer Vision.',
      courses: ['Deep Learning (Yan Le Cunn and Alfredo Canziani)', 'Machine Learning(Fraida Fund)', 'Machine Learning Ops(Fraida Fund)', 'Internet Architecture and Protocols', 'Computing Systems Architecture'],
      achievements: []
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'BMS Institute of Technology and Management, Bengaluru',
      period: 'Aug 2018 - May 2022',
      description: 'Graduated with a CGPA of 3.8, gaining a strong foundation in computer science along with practical project experience.',
      courses: ['Machine Learning','Neural Networks','Data Structures', 'Algorithms', 'Computer Architecture', 'Database Management Systems', 'Operating Systems'],
      achievements: ['CGPA: 3.8']
    }
    ,
    {
      degree: 'High-School',
      institution: 'Alvas Pre-University College',
      period: 'June 2016 - June 2018',
      description: 'Graduated with 98% in PCMB',
      achievements: []
    }
  ];

  return (
    <section id="education" className="section-container">
      <div 
        ref={headingAnimation.ref as React.RefObject<HTMLDivElement>}
        className={`text-center mb-16 transition-all duration-700 ${
          headingAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-green-500 text-4xl font-bold">Education</h2>
        <p className="section-subtitle max-w-3xl mx-auto">
          My academic journey and qualifications
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

        {education.map((edu, index) => (
          <div 
            key={index} 
            className={`mb-16 md:mb-24 transition-all duration-700 delay-${index * 200} ${
              timelineAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {/* Always left aligned grid */}
            <div className="md:grid md:grid-cols-2 relative">
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-5 h-5 bg-green-500 rounded-full border-4 border-background z-10"></div>
              
              {/* Content: alternating position preserved, text left aligned */}
              <div className={`glass-card p-6 rounded-xl text-left ${index % 2 !== 0 ? 'md:mr-12 md:col-start-1' : 'md:ml-12 md:col-start-2'}`}>
                <div className="flex items-center mb-3 text-sm text-gray-400 md:justify-start">
                  <Calendar size={14} className="inline mr-1" />
                  <span>{edu.period}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                <div className="flex items-center mb-4 text-green-500 md:justify-start">
                  <GraduationCap size={16} className="inline mr-1" />
                  <span>{edu.institution}</span>
                </div>
                
                <p className="text-gray-300 mb-4">{edu.description}</p>
                
                {edu.achievements.length > 0 && (
                  <div className="flex flex-wrap gap-2 text-sm md:justify-start">
                    {edu.achievements.map((achievement, i) => (
                      <span key={i} className="px-2 py-1 bg-green-500/10 text-green-500 rounded">
                        {achievement}
                      </span>
                    ))}
                  </div>
                )}

                {edu.courses && edu.courses.length > 0 && (
                  <div className="mt-4 text-left">
                    <h4 className="text-lg font-semibold text-white mb-2">Courses:</h4>
                    <ul className="list-disc pl-6 text-gray-300 space-y-1">
                      {edu.courses.map((course, i) => (
                        <li key={i}>{course}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
