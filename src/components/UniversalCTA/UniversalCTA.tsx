"use client"

import Button from '@/components/Button/Button';
import React from 'react';
import './UniversalCTA.css';

interface UniversalCTAProps {
  title?: string;
  heading?: string;
  description?: string;
  buttons?: {
    text: string;
    href: string;
    className: string;
  }[];
  className?: string;
}

const UniversalCTA: React.FC<UniversalCTAProps> = ({
  title = "KI BERATUNG",
  heading = "Mit KI Ihr Unternehmen für die Zukunft aufstellen",
  description = "Contact us today for a no-obligation discussion. Simply fill out the form or call us directly.",
  buttons = [
    { text: "Kontakt", href: "/contact", className: "white-btn" },
    { text: "Mehr erfahren", href: "/contact", className: "trans-btn" }
  ],
  className = ""
}) => {
  return (
    <section className={`universalCta py-6 px-4 flex-col ${className}`}>
      <div className="universalCta-overlay"></div>
      <div className="universalCtaContent align-center flex-col gap20 justify-center">
        {title && <h3 className="subhead12 white">{title}</h3>}
        <h2 className='head68 white text-center'>{heading}</h2>
        <p className="para18 darkGrey width50 text-center">{description}</p>
        <div className="btn-container flex-row gap20">
          {buttons.map((button, index) => (
            <Button
              key={index}
              text={button.text}
              href={button.href}
              className={button.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniversalCTA;