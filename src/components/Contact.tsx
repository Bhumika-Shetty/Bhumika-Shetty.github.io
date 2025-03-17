import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const headingAnimation = useIntersectionObserver({ triggerOnce: true });
  const infoAnimation = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="section-container">
      <div 
        ref={headingAnimation.ref as React.RefObject<HTMLDivElement>}
        className={`text-center mb-16 transition-all duration-700 ${
          headingAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-green-500 text-4xl font-bold">Get In Touch</h2>
        <p className="section-subtitle max-w-3xl mx-auto">
          Interested in collaborating or have questions? Let's connect!
        </p>
      </div>

      {/* Contact Info */}
      <div 
        ref={infoAnimation.ref as React.RefObject<HTMLDivElement>}
        className={`transition-all duration-700 delay-500 ${
          infoAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="glass-card p-8 rounded-xl max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-green-500 mb-6">Contact Information</h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-green-500/10 text-green-500">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-1">Email</h4>
                <a 
                  href="mailto:bhumidshetty2000@gmail.com" 
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  bhumidshetty2000@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-green-500/10 text-green-500">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-1">Location</h4>
                <p className="text-gray-300">
                  Brooklyn, New York
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-green-500/10 text-green-500">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-1">Phone</h4>
                <a 
                  href="tel:+19297024696" 
                  className="text-gray-300 hover:text-green-500 transition-colors"
                >
                  +1 (929) 702-4696
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-700">
            <h4 className="text-lg font-medium text-white mb-4">Connect with me</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/bhumika-shetty-531b451bb/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-green-500/10 text-green-500 hover:bg-green-500/20 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:bhumidshetty2000@gmail.com" 
                className="p-3 rounded-full bg-green-500/10 text-green-500 hover:bg-green-500/20 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;
