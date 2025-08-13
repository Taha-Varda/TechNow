// components/SectionHeading/SectionHeading.tsx
import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
  widthClass?: string;
  className?: string;
}

const SectionHeading13: React.FC<SectionHeadingProps> = ({
  children,
  widthClass = 'width20',
  className = 'mirage',
}) => {
  return (
    <h2 className={`sectionHead13 ${widthClass} ${className}`}>
      {children}
    </h2>
  );
};

export default SectionHeading13;