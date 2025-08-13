import React from 'react';
import Image from 'next/image';
import './client-rating.css'

// Client Icons
import client1 from '@/assets/client-icon/client1.webp';
import client2 from '@/assets/client-icon/client2.webp';
import client3 from '@/assets/client-icon/client3.webp';
import client4 from '@/assets/client-icon/client4.webp';

interface ClientRatingProps {
  className?: string;
  newClass?: string; // Add this new prop
  rating?: number;
  text?: string;
}

const ClientRating: React.FC<ClientRatingProps> = ({
  className = "client-rating pxy-4 flex-row gap40",
  newClass = "", // Default empty
  rating = 5,
  text = "50+ customers already trust TechNow"
}) => {
  // Create stars based on rating
  const stars = '★'.repeat(rating);

  return (
 <div className={`${className} ${newClass}`.trim()}>       
      <div className='rating-info flex-col align-end'>
        <span className='stars'>{stars}</span> 
        <span className='trust-text white'>{text}</span>
      </div>
      <div className="client-logos">
        <Image src={client1} alt="Client 1" />
        <Image src={client2} alt="Client 2" />
        <Image src={client3} alt="Client 3" />
        <Image src={client4} alt="Client 4" />
      </div>
    </div>
  );
};

export default ClientRating;