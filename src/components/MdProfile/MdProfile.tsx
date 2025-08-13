// components/MdProfile/MdProfile.tsx
import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
import defaultProfile from '@/assets/Mohamed_Hamze.webp'; // Import default image

interface MdProfileProps {
  imageSrc?: StaticImageData | string; // Make optional
  name?: string;
  position?: string;
  children?: ReactNode;
}

export default function MdProfile({ 
  imageSrc = defaultProfile, 
  name = "Mohamed Hamzé", 
  position = "Managing Director, Bernstein Group",
  children 
}: MdProfileProps) {
  return (
    <div className="md-profile flex-row gap20">
      <Image 
        src={imageSrc} 
        alt={name}        
      />
      <div className="md-info flex-col white">
        <h3 className="md-name para16">{name}</h3>
        <p className="md-position para13 darkGrey">{position}</p>
      </div>
      {children}
    </div>
  );
}