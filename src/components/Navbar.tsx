import { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollToElement } = useSmoothScroll();

  const navItems = [
    { title: 'About', id: 'about' },
    { title: 'Experience', id: 'experience' },
    { title: 'Education', id: 'education' },
    { title: 'Skills', id: 'skills' },
    { title: 'Projects', id: 'projects' },
    { title: 'Publications', id: 'publications' },
    { title: 'Hobbies', id: 'hobbies' },
    { title: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    scrollToElement(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-background/90 backdrop-blur-md shadow-md'
          : 'py-5 bg-transparent'
      }`}
    >
      {/* Full-width container without horizontal padding */}
      <div className="w-full flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold text-green-500 hover:text-green-600 transition-colors pl-4"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 pr-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-secondary/60 rounded-md transition-colors"
            >
              {item.title}
            </button>
          ))}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="ml-4">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 border-green-500 text-white hover:bg-green-500/20"
            >
              <FileText size={16} />
              Resume
            </Button>
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center pr-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}
      >
        <div className="glass-card mx-4 mt-2 rounded-lg divide-y divide-gray-700">
          <div className="py-2 space-y-1 px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-secondary/60 rounded-md transition-colors"
              >
                {item.title}
              </button>
            ))}
          </div>
          <div className="py-4 px-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button
                variant="outline"
                size="sm"
                className="w-full flex items-center justify-center gap-2 border-green-500 text-white hover:bg-green-500/20"
              >
                <FileText size={16} />
                Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
