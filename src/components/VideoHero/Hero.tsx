// components/Hero/Hero.tsx
import React from 'react';
import Button from '@/components/Button/Button';
import ClientRating from '@/components/ClientRating/ClientRating';
import './hero.css'; 

interface ButtonConfig {
  text: string;
  href: string;
  className: string;
}

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  highlightText?: string;
  buttons?: ButtonConfig[];
  className?: string;
  contentClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  descriptionClassName?: string;
  videoSrc?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  highlightText,
  buttons,
  className = "hero col container",
  contentClassName = "col-1 pxy-4 bg-mirage flex-col justify-center gap20",
  titleClassName = "head68 white",
  subtitleClassName = "white subhead12",
  descriptionClassName = "darkGrey para18",
  videoSrc = "/video/Landing-Page_Header.mov"
}) => {
  return (
    <section className={className}>
      <div className={contentClassName}>
        {subtitle && <h3 className={subtitleClassName}>{subtitle}</h3>}
        <h1 className={titleClassName}>
          {highlightText && <span className="darkGrey">{highlightText}<br /></span>}
          {highlightText ? title.replace(highlightText, '').trim() : title}
        </h1>
        {description && <p className={descriptionClassName}>{description}</p>}

        {buttons && buttons.length > 0 && (
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
        )}
      </div>

      <div className="col-2">
        <div className="video-container">
          <video autoPlay muted loop id="myVideo">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
          <ClientRating />
        </div>
      </div>
    </section>
  );
};

export default Hero;