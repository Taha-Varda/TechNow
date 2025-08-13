// components/Button.tsx
import React from 'react';
import Link from 'next/link';
import './button.css'; 

interface ButtonProps {
  text: string;
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  text, 
  href, 
  className = '', 
  type = 'button',
  onClick 
}) => {
  // The button content with the effect
  const buttonContent = (
    <span className="button-text">
      <div>{text}</div>
      <div>{text}</div>
    </span>
  );

  // If href is provided, return a Link wrapper
  if (href) {
    return (
      <Link href={href} className={`effectBtn globalBtn ${className}`}>
        {buttonContent}
      </Link>
    );
  }

  // Else return regular button
  return (
    <button type={type} className={`effectBtn ${className}`} onClick={onClick}>
      {buttonContent}
    </button>
  );
};

export default Button;