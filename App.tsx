import React from 'react';
import { ProfileSection } from './components/ProfileSection';
import { AboutSection } from './components/AboutSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row overflow-hidden bg-white">
      {/* Left Section: Profile (Fixed width on desktop or 50% split) */}
      <div className="w-full md:w-1/2 lg:w-[45%] xl:w-[40%] flex items-center justify-center p-8 md:p-12 lg:p-20 relative animate-fade-in-left">
        <ProfileSection />
      </div>

      {/* Right Section: About (Grey background) */}
      <div className="w-full md:w-1/2 lg:w-[55%] xl:w-[60%] bg-gray-100 flex items-center justify-center p-8 md:p-12 lg:p-20 animate-fade-in-right">
        <AboutSection />
      </div>
    </div>
  );
};

export default App;