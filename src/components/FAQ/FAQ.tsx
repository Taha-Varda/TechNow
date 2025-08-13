// components/FAQ/FAQ.tsx
"use client"

import { useState } from 'react';
import './Faq.css'; 

import { FiPlus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";


interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

const FAQ = ({ faqs }: FAQProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-accordion flex-col">
      {faqs.map((faq, idx) => (
        <div key={idx} className={`py-40 faq-item ${activeIndex === idx ? ' active' : ''}`}>
          <button className="faq-question bg-white width100 text-left mirage head24 flex-row justify-between align-center" onClick={() => toggleAccordion(idx)}>
            {faq.question} <span className='toggle-icon'>{activeIndex === idx ? <RxCross2 /> : <FiPlus />}</span>
          </button>
          {activeIndex === idx && (
            <div className="faq-answer lightPara para16">
              
              {faq.answer || <span>No answer provided yet.</span>}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;