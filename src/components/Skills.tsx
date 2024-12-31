import React from 'react';
import { Code, Palette, Layout, Database } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: <Code className="w-8 h-8 text-purple-400" />,
      items: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      category: "Design",
      icon: <Palette className="w-8 h-8 text-pink-400" />,
      items: ["Figma", "Adobe XD", "UI/UX Design", "Prototyping"]
    },
    {
      category: "Backend Development",
      icon: <Database className="w-8 h-8 text-blue-400" />,
      items: ["Node.js", "PostgreSQL", "REST APIs", "GraphQL"]
    },
    {
      category: "Other Skills",
      icon: <Layout className="w-8 h-8 text-green-400" />,
      items: ["Git", "Agile", "SEO", "Performance Optimization"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors"
            >
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold text-white ml-3">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-400">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;