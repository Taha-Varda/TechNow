// components/ContentSection/ContentSection.tsx
import React from 'react';
import SectionHeading13 from '@/components/SectionHeading13/SectionHeading13';
import ContactInfo from '@/components/ContactInfo/ContactInfo';

interface ContentSectionProps {
  sectionTitle: string;
  sectionTitleWidth?: string;
  mainHeading: string;
  paragraph1: string;
  paragraph2: string;
  showContactInfo?: boolean;
  className?: string;
  contentWidth?: string;
  isStatsSection?: boolean;
  stats?: Array<{
    title: string;
    value: string;
    description: string;
  }>;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  sectionTitle,
  sectionTitleWidth = 'width20',
  mainHeading,
  paragraph1,
  paragraph2,
  showContactInfo = false,
  className = '',
  contentWidth = 'width40',
  isStatsSection = false,
  stats = [],
}) => {
  return (
    <section className={`leftHeadingSection pxy-4 flex-row justify-between align-start gap60 ${className}`}>
      <SectionHeading13 widthClass={sectionTitleWidth}>{sectionTitle}</SectionHeading13>

      {isStatsSection ? (
        <div className='width80 infoCards flex-row justify-between flex-wrap gap20'>
          {stats.map((stat, index) => (
            <div key={index} className='infoCard pxy-40 bg-cultured width31 flex-col gap40'>
              <SectionHeading13 widthClass="width100">{stat.title}</SectionHeading13>
              <div>
                <h3 className='head44 mirage'>{stat.value}</h3>
                <p className='para16 lightPara'>{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className={contentWidth}>
            <h3 className='head44 mirage'>{mainHeading}</h3>
            {showContactInfo && <ContactInfo />}
          </div>

          <div className={contentWidth}>
            <p className="para20 mirage">{paragraph1}</p>
            <br />
            <p className="para16 lightPara">{paragraph2}</p>
          </div>
        </>
      )}
    </section>
  );
};

export default ContentSection;