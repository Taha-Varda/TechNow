// components/LogoSlider/LogoSlider.tsx
import Image, { StaticImageData } from 'next/image';
import './LogoSlider.css';

// Import logos directly in the component
import logo1 from '@/assets/client-logos/ktc.webp';
import logo2 from '@/assets/client-logos/HKP.webp';
import logo3 from '@/assets/client-logos/Eurodoors.webp';
import logo4 from '@/assets/client-logos/ContractHero.webp';
import logo5 from '@/assets/client-logos/Bernstein.webp';
import logo6 from '@/assets/client-logos/Audacious.webp';

interface LogoItem {
  src: StaticImageData;
  alt: string;
  href?: string; // Optional link URL
}

const defaultLogos: LogoItem[] = [
  { src: logo1, alt: "KTC Logo", href: "https://example.com/ktc" },
  { src: logo2, alt: "HKP Logo", href: "https://example.com/hkp" },
  { src: logo3, alt: "Eurodoors Logo", href: "https://example.com/eurodoors" },
  { src: logo4, alt: "ContractHero Logo", href: "https://example.com/contracthero" },
  { src: logo5, alt: "Bernstein Logo", href: "https://example.com/bernstein" },
  { src: logo6, alt: "Audacious Logo", href: "https://example.com/audacious" },
];

interface LogoSliderProps {
  logos?: LogoItem[]; // Optional custom logos
  grayscale?: boolean; // Whether to use grayscale effect
}

export default function LogoSlider({
  logos = defaultLogos,
  grayscale = true,
}: LogoSliderProps) {
  return (
    <section className="logo-slider-container py-24 bg-cultured">
      <div className="logo-slider">
        {/* Original logos */}
        {logos.map((logo, index) => (
          <div key={`original-${index}`} className="logo-item">
            {logo.href ? (
              <a href={logo.href} target="_blank" rel="noopener noreferrer">
                <Image 
                  src={logo.src} 
                  alt={logo.alt}
                  className={grayscale ? 'grayscale' : ''}
                />
              </a>
            ) : (
              <Image 
                src={logo.src} 
                alt={logo.alt}
                className={grayscale ? 'grayscale' : ''}
              />
            )}
          </div>
        ))}
        {/* Duplicated logos for seamless loop */}
        {logos.map((logo, index) => (
          <div key={`duplicate-${index}`} className="logo-item">
            {logo.href ? (
              <a href={logo.href} target="_blank" rel="noopener noreferrer">
                <Image 
                  src={logo.src} 
                  alt={logo.alt}
                  className={grayscale ? 'grayscale' : ''}
                />
              </a>
            ) : (
              <Image 
                src={logo.src} 
                alt={logo.alt}
                className={grayscale ? 'grayscale' : ''}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}