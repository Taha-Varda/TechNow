"use client"

import ContactInfo from '@/components/ContactInfo/ContactInfo';
import './KnowUs.css';

export default function KnowUsSection() {
  return (
    <section className='knowUs py-3 px-4 flex-row justify-between align-center'>
      <h3 className='white head32'>Lernen Sie uns kennen</h3>
      <ContactInfo />
    </section>
  );
}