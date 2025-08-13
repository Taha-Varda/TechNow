// components/BlurCta/BlurCta.tsx
import { ReactNode } from 'react';
import { BiSolidQuoteRight } from "react-icons/bi";
import MdProfile from '@/components/MdProfile/MdProfile';
import './BlurCta.css';

interface BlurCtaProps {
  quoteIcon?: ReactNode;
  quoteText?: string;
  profile?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export default function BlurCta({
  quoteIcon = <BiSolidQuoteRight className='head32'/>,
  quoteText = "TechNow ist mehr als nur ein Dienstleister. Sie sind unser strategischer Partner.",
  profile = <MdProfile />,
  children,
  className = "blur-cta pxy-4 flex-col gap40"
}: BlurCtaProps) {
  return (
    <section className={className}>
      {quoteIcon}
      <h2 className='head61 white width80'>{quoteText}</h2>
      {profile}
      {children}
    </section>
  );
}