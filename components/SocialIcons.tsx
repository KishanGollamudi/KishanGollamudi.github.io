import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export const SocialIcons: React.FC = () => {
  const icons = [
    { icon: <Github size={20} />, href: "https://github.com/KishanGollamudi", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/gollamudi-kishan2498/", label: "LinkedIn" },
  ];

  return (
    <div className="flex items-center space-x-6">
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className="text-gray-400 hover:text-black transform hover:-translate-y-1 transition-all duration-300"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};