import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-white text-2xl font-bold">Ishwarya</a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com" className="text-gray-300 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" className="text-gray-300 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:jane@example.com" className="text-gray-300 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#about" className="block text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#skills" className="block text-gray-300 hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="block text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;