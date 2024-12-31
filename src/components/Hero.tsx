import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black text-white relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Ishwarya M
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">Web Designer & Developer</p>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          Crafting beautiful digital experiences with a focus on user-centered design and modern technologies.
        </p>
        <a 
          href="#projects"
          className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
        >
          View My Work
          <ArrowDown className="ml-2" size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;