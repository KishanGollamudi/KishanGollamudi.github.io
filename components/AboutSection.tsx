import React from 'react';
import { FileText } from 'lucide-react';
import { Button } from './ui/Button';

export const AboutSection: React.FC = () => {
  return (
    <div className="flex flex-col items-start space-y-10 w-full max-w-lg">
      
      {/* Section Title */}
      <div>
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
          Profile
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
          About Me
          <span className="absolute -bottom-2 left-0 w-1/2 h-1.5 bg-gray-200 rounded-full"></span>
        </h3>
      </div>

      {/* Bio Text */}
      <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-600 font-light">
        <p>
          I am a DevOps Engineer skilled in AWS, CI/CD, Linux, Docker, and automation.
        </p>
        <p>
          Passionate about building scalable cloud environments, optimizing performance, and ensuring reliable infrastructure delivery.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
        <Button 
          variant="secondary" 
          icon={<FileText className="w-4 h-4 mr-2" />}
          className="shadow-md hover:shadow-lg"
        >
          View Resume
        </Button>
      </div>
      
      {/* Tech Stack */}
      <div className="pt-10 border-t border-gray-200 w-full mt-2">
         <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Technology Stack</p>
         <div className="flex flex-wrap gap-2">
            {['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Linux', 'Python', 'Git'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 shadow-sm hover:border-gray-300 hover:text-gray-900 transition-colors cursor-default">
                    {tech}
                </span>
            ))}
         </div>
      </div>
    </div>
  );
};