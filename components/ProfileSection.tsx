import React, { useState, useRef } from 'react';
import { Mail, MapPin, Camera, Upload } from 'lucide-react';
import { SocialIcons } from './SocialIcons';
import { Button } from './ui/Button';

export const ProfileSection: React.FC = () => {
  // Ref for the hidden file input
  const fileInputRef = useRef<HTMLInputElement>(null);

  // State to hold a manually uploaded image URL
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  // Comprehensive list of possible paths for the uploaded image
  // Added './' prefix which is often required for local builds
  const possibleImagePaths = [
    './kishan.jpg',
    '/kishan.jpg',
    'kishan.jpg',
    './Kishan.jpg',
    '/Kishan.jpg',
    'Kishan.jpg',
    './kishan.png',
    '/kishan.png',
    'kishan.png',
    './profile.jpg',
    'profile.jpg'
  ];

  const [currentPathIndex, setCurrentPathIndex] = useState(0);
  const [useFallback, setUseFallback] = useState(false);

  const handleImageError = () => {
    // If user has manually uploaded an image, don't cycle paths
    if (uploadedImage) return;

    // If we haven't tried all paths yet, move to the next one
    if (currentPathIndex < possibleImagePaths.length - 1) {
      setCurrentPathIndex(prev => prev + 1);
    } else {
      // All paths failed, show the fallback avatar
      setUseFallback(true);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
      setUseFallback(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  // Determine final source: Manual Upload -> Current Path Attempt -> Fallback Service
  const imgSrc = uploadedImage || (useFallback 
    ? "https://ui-avatars.com/api/?name=Kishan+Gollamudi&background=111827&color=fff&size=256&font-size=0.33"
    : possibleImagePaths[currentPathIndex]);

  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8 w-full max-w-lg transition-all duration-500 ease-in-out">
      
      {/* Hidden File Input for manual override */}
      <input 
        type="file" 
        ref={fileInputRef}
        onChange={handleFileSelect}
        className="hidden"
        accept="image/png, image/jpeg, image/jpg"
      />

      {/* Profile Image Area */}
      <div 
        className="relative group cursor-pointer" 
        onClick={triggerFileInput}
        title="Click to upload your photo if it's missing"
      >
        {/* Modern Square Shape (rounded-2xl) */}
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border-[6px] border-gray-50 shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:border-white group-hover:shadow-3xl bg-gray-100 relative">
          
          <img 
            key={imgSrc} // Force re-render on src change
            src={imgSrc}
            alt="Kishan Gollamudi" 
            onError={handleImageError}
            className="w-full h-full object-cover object-top"
          />

          {/* Overlay that appears on hover (or if fallback is active to encourage upload) */}
          <div className={`absolute inset-0 bg-black/40 flex flex-col items-center justify-center transition-opacity duration-300 ${useFallback ? 'opacity-0 group-hover:opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
            <Camera className="text-white w-8 h-8 mb-1" />
            <span className="text-white text-xs font-medium">Change Photo</span>
          </div>

        </div>
        
        {/* Status Indicator */}
        <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-md animate-pulse pointer-events-none"></div>
      </div>

      {/* Name and Title */}
      <div className="space-y-3">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
          Kishan<br />Gollamudi
        </h1>
        <div className="space-y-1">
          <p className="text-xl md:text-2xl text-gray-600 font-medium tracking-wide flex items-center justify-center md:justify-start gap-2">
            DevOps Engineer
          </p>
          <p className="text-sm text-gray-400 flex items-center justify-center md:justify-start gap-1 font-light">
            <MapPin size={14} className="opacity-70" /> Cloud Infrastructure • Automation
          </p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="pt-2 opacity-90 hover:opacity-100 transition-opacity">
        <SocialIcons />
      </div>

      {/* Call to Action */}
      <div className="pt-6">
        <Button 
          variant="primary" 
          icon={<Mail className="w-4 h-4 mr-2" />}
          onClick={() => window.location.href = 'mailto:gnmskishan@gmail.com'}
          className="shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          Get in Touch
        </Button>
      </div>
    </div>
  );
};