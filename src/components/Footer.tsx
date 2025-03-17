import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2 text-green-500">Bhumika Shetty</h2>
            <p className="text-gray-400">Deep Learning Engineer</p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#about" className="text-gray-400 hover:text-green-500 transition-colors">About</a>
            <a href="#experience" className="text-gray-400 hover:text-green-500 transition-colors">Experience</a>
            <a href="#projects" className="text-gray-400 hover:text-green-500 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-green-500 transition-colors">Contact</a>
          </div>
          
          <div className="text-gray-500 text-sm flex items-center">
            <span>&copy; {currentYear} • Designed & Built with</span>
            <Heart size={14} className="mx-1 text-green-500" />
            <span>by Bhumika</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
