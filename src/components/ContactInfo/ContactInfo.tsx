// components/ContactInfo/ContactInfo.tsx
import { ReactElement } from 'react';
import { IoCallOutline, IoMailOutline } from "react-icons/io5";
import './ContactInfo.css';

type ContactItem = {
  icon: ReactElement;
  text: string;
  href: string;
  type: 'tel' | 'mailto' | 'link';
};

interface ContactInfoProps {
  items?: ContactItem[]; // Make it optional to use default items
  className?: string;
}

const defaultContactItems: ContactItem[] = [
  {
    icon: <IoCallOutline />,
    text: '+49 30 46069295',
    href: '+493046069295',
    type: 'tel',
  },
  {
    icon: <IoMailOutline />,
    text: 'projects@tech-now.io',
    href: 'projects@tech-now.io',
    type: 'mailto',
  },
];

export default function ContactInfo({ 
  items = defaultContactItems, // Use default items if none provided
  className = '' 
}: ContactInfoProps) {
  return (
    <ul className={`contact-info flex-col gap10 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className={item.type }>
          <a href={`${item.type === 'link' ? '' : `${item.type}:`}${item.href}`} className='mirage flex-row align-center gap10'>
           <span className='info-icon'>{item.icon}</span>
            <span className="info-text">{item.text}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}