import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 rounded-lg font-medium transition-all duration-300 transform active:scale-95 shadow-sm";
  
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800 hover:shadow-lg border border-transparent",
    secondary: "bg-gray-900 text-white hover:bg-gray-700 hover:shadow-md border border-transparent",
    outline: "bg-transparent text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};