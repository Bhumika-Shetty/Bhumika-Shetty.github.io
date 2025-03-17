import { useEffect, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { Linkedin, ChevronDown } from 'lucide-react';

const TypeWriter = ({
  strings,
  typingSpeed = 100,         // Faster typing speed
  deletingSpeed = 50,         // Faster deletion speed
  delayBetweenStrings = 2000, // Delay after a string is complete
  loop = true,
}: {
  strings: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenStrings?: number;
  loop?: boolean;
}) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentString = strings[currentIndex];
    let timeout: ReturnType<typeof setTimeout>;

    // Typing phase: add one character at a time
    if (!isDeleting && charIndex <= currentString.length) {
      timeout = setTimeout(() => {
        setText(currentString.substring(0, charIndex));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    }
    // Deleting phase: remove one character at a time
    else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setText(currentString.substring(0, charIndex));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
    }

    // Once full string is typed, pause then start deleting
    if (!isDeleting && charIndex === currentString.length + 1) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
        setCharIndex(currentString.length - 1);
      }, delayBetweenStrings);
    }

    // Once string is deleted completely, move to next string
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 < strings.length ? prevIndex + 1 : loop ? 0 : prevIndex
      );
      setCharIndex(1);
    }

    return () => clearTimeout(timeout);
  }, [
    charIndex,
    isDeleting,
    currentIndex,
    strings,
    typingSpeed,
    deletingSpeed,
    delayBetweenStrings,
    loop,
  ]);

  return (
    <span>
      {text}
      <span className="blinking-cursor">|</span>
    </span>
  );
};

const Hero = () => {
  const [showCircleAnimation, setShowCircleAnimation] = useState(false);
  const { scrollToElement } = useSmoothScroll();

  // Animated elements using intersection observer
  const headingAnimation = useIntersectionObserver({ triggerOnce: true });
  const descriptionAnimation = useIntersectionObserver({
    triggerOnce: true,
    threshold: 0.2,
  });
  const socialAnimation = useIntersectionObserver({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    // Start the circle animation after a short delay
    const timer = setTimeout(() => {
      setShowCircleAnimation(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
        {/* Animated expanding circles */}
        {showCircleAnimation && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Second expanding circle with delay */}
            <div
              className="absolute w-16 h-16 rounded-full border-2 border-green-500 animate-circle-expand"
              style={{ animationDelay: '1s' }}
            ></div>
          </div>
        )}

        {/* Background decorative elements */}
        <div className="absolute top-40 left-10 w-60 h-60 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Profile Image */}
            <div className="mx-auto w-56 h-56 md:w-64 md:h-64 mb-8 rounded-full overflow-hidden border-4 border-green-500/20 p-1 shadow-lg shadow-green-500/10">
              <div className="w-full h-full rounded-full bg-gray-700 overflow-hidden">
                <img
                  src="/brain.png"
                  alt="Profile Picture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name */}
            <div
              ref={headingAnimation.ref as React.RefObject<HTMLDivElement>}
              className={`transition-all duration-700 delay-300 ${
                headingAnimation.isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Bhumika Shetty
              </h1>
            </div>

            {/* Typing effect */}
            <div className="h-10 mb-6 text-xl md:text-2xl text-gray-300">
              <TypeWriter
                strings={[
                  'Computer Engineering Student',
                  'Deep Learning Enthusiast',
                  'AI Researcher',
                  'Problem Solver',
                ]}
              />
            </div>

            {/* Description */}
            <div
              ref={descriptionAnimation.ref as React.RefObject<HTMLDivElement>}
              className={`max-w-2xl mx-auto transition-all duration-700 delay-500 ${
                descriptionAnimation.isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="text-lg text-gray-400 mb-8 text-balance">
                Exploring AI’s possibilities, crafting intelligent systems, and using technology to make a real-world impact.
              </p>
            </div>

            {/* Social Links & Discover More */}
            <div className="flex flex-col items-center gap-12">
              {/* LinkedIn Icon with higher z-index */}
              <div
                ref={socialAnimation.ref as React.RefObject<HTMLDivElement>}
                className="relative z-20 flex items-center justify-center transition-all duration-700 delay-700"
              >
                <a
                  href="https://www.linkedin.com/in/bhumika-shetty-531b451bb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card flex items-center justify-center p-4 rounded-full hover:bg-green-500/10 transition-colors"
                >
                  <Linkedin size={20} className="text-green-400" />
                </a>
              </div>
              {/* Discover More placed well below with lower z-index */}
              <div
                className="relative z-10 cursor-pointer animate-pulse-slow"
                onClick={() => scrollToElement('about')}
              >
                <span className="text-sm text-gray-400 block mb-2">Discover More</span>
                <ChevronDown className="mx-auto text-green-400" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 1em;
          margin-left: 2px;
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
