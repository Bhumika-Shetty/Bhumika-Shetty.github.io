import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Publications = () => {
  const headingAnimation = useIntersectionObserver({ triggerOnce: true });
  const publicationsAnimation = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 });

  const entries = [
    {
      title: 'System and Method for Modifying a human image using machine learning models',
      authors: 'Patent filed under NeuroPixel.AI Labs, 4 authors',
      event: '11 September 2023',
      details: 'Application Number - 202341060961',
      type: 'Patent',
      year: '2023'
    },
    // {
    //   title: 'A Survey on Big Data in Cyber Security',
    //   authors: '6 authors',
    //   event: 'IEEE International Conference on Multidisciplinary Research in Technology and Management (MRTM23), New Horizon College of Engineering, Bengaluru',
    //   details: 'Scopus Index yet to be released',
    //   type: 'Publication',
    //   year: '2023'
    // },
    {
      title: 'Smart Ticketing System for Smart Cities',
      authors: '7 authors',
      event: 'Patent published under BMSIT&M, June 2021',
      details: 'Application Number - 202141026348 A',
      type: 'Patent',
      year: '2021'
    }
    // {
    //   title: 'Machine Learning in Precision Agriculture',
    //   authors: '6 authors',
    //   event: 'IEEE 4th International Conference on Communication, Computing and Industry (C216-2023), CMR College Bengaluru',
    //   details: 'Scopus Index yet to be released',
    //   type: 'Publication',
    //   year: '2023'
    // },
  ];

  return (
    <section id="publications" className="section-container">
      <div 
        ref={headingAnimation.ref as React.RefObject<HTMLDivElement>}
        className={`text-center mb-16 transition-all duration-700 ${
          headingAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-green-500 text-4xl font-bold">Patents and Publications</h2>
        <p className="section-subtitle max-w-3xl mx-auto">
          My research contributions to the scientific and technological community
        </p>
      </div>

      <div 
        ref={publicationsAnimation.ref as React.RefObject<HTMLDivElement>}
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 ${
          publicationsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {entries.map((entry, index) => (
          <div 
            key={index} 
            className="project-card flex flex-col animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="p-6">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-green-500 font-medium">{entry.year}</span>
                <div className="p-1 px-2 bg-green-500/10 rounded-full text-xs text-green-500">
                  {entry.type}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{entry.title}</h3>
              <p className="text-gray-400 italic mb-2">{entry.authors}</p>
              <p className="text-gray-300 mb-4">{entry.event}</p>
              <p className="text-gray-300 mb-4">{entry.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
