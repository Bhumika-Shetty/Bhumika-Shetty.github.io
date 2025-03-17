import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Hobbies = () => {
  const headingAnimation = useIntersectionObserver({ triggerOnce: true });
  const contentAnimation = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="hobbies" className="section-container">
      {/* Section Title */}
      <div 
        ref={headingAnimation.ref as React.RefObject<HTMLDivElement>}
        className={`text-center mb-16 transition-all duration-700 ${
          headingAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-green-500 text-4xl font-bold">Hobbies & Interests</h2>
        <p className="section-subtitle max-w-3xl mx-auto">
          When I'm not coding or working on AI, here's what I enjoy
        </p>
      </div>

      {/* Combined Card: I Draw, Dance & Sing */}
      <div className="mb-12 mt-10 relative">
        <div className="glass-card p-4 md:p-8 rounded-xl max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-4 text-green-500">
            I Draw, Dance & Sing
          </h3>
          <p className="text-gray-300 text-center">
            Art and technology are both expressions of human creativity. While I spend most of my time 
            in the digital realm of AI, I find balance in traditional art forms that connect me to centuries 
            of human expression. I am also a professional Bharatnatyam dancer and Hindustani Music vocalist, 
            passionately performing and connecting with audiences through classical art forms.
          </p>
        </div>
      </div>

      {/* Artwork Section with Green Border */}
      <div className="mb-12 glass-card p-6 rounded-xl w-full border-4 border-green-500">
        <div className="flex flex-nowrap gap-6 px-4 overflow-x-auto">
          <div className="overflow-hidden rounded w-[500px] h-[500px]">
            <img 
              src="/1.png" 
              alt="Artwork 1" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded w-[500px] h-[500px]">
            <img 
              src="/2.png" 
              alt="Artwork 2" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded w-[500px] h-[500px]">
            <img 
              src="/3.png" 
              alt="Artwork 3" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded w-[500px] h-[500px]">
            <img 
              src="/4.png" 
              alt="Artwork 4" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Final Descriptive Card */}
      <div 
        ref={contentAnimation.ref as React.RefObject<HTMLDivElement>}
        className={`transition-all duration-700 delay-300 ${
          contentAnimation.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="mt-16 glass-card p-6 rounded-xl max-w-3xl mx-auto">
          <p className="text-gray-300 text-center">
            Beyond my professional interests in AI and deep learning, these hobbies help me maintain perspective, 
            find inspiration, and bring fresh ideas to my technical work.
          </p>
        </div>
      </div>

      {/* 🌍 Languages & Leadership Positions in Two Columns */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Languages Card (Left-Aligned, Smaller) */}
        <div className="glass-card p-6 rounded-xl max-w-sm border-4 border-green-500">
          <h3 className="text-3xl font-bold mb-4 text-green-500">Languages</h3>
          <ul className="text-gray-300 text-lg list-disc pl-6">
            <li>English</li>
            <li>Hindi</li>
            <li>Marathi</li>
            <li>Kannada</li>
            <li>Tulu</li>
          </ul>
        </div>

        {/* Leadership Positions Card (Right-Aligned) */}
        <div className="glass-card p-6 rounded-xl border-4 border-green-500">
          <h3 className="text-3xl font-bold mb-4 text-green-500">Leadership Positions</h3>
          <ul className="text-gray-300 text-lg list-disc pl-6">
            <li>President, POSH Committee - <span className="text-gray-400">NeuroPixel.AI Labs (Feb 2023 - Present)</span></li>
            <li>Deputy Community Service Director - <span className="text-gray-400">Rotaract Club of BMS Yelahanka (July 2020 - July 2021)</span></li>
            <li>General Secretary of Societies (Karnataka) - <span className="text-gray-400">Youth India Foundation (Nov 2020 - Jan 2021)</span></li>
            <li>Zonal Coordinator (South) - <span className="text-gray-400">Tech Fest IIT Bombay (Aug 2019 - Oct 2019)</span></li>
            <li>Public Relations & Marketing - <span className="text-gray-400">TedX BMSIT (Feb 2020)</span></li>
          </ul>
        </div>
      </div>

    </section>
  );
};

export default Hobbies;
