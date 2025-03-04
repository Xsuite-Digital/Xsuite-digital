import React from 'react';

const TrustedPartners = () => {
  // Sample partner data - replace with your actual partners
  const partners = [
    { id: 1, name: 'Partner 1', logo: '/C17.webp' },
    { id: 2, name: 'Partner 2', logo: '/C11.webp' },
    { id: 3, name: 'Partner 3', logo: '/C13.webp' },
    { id: 4, name: 'Partner 4', logo: '/C14.webp' },
    { id: 5, name: 'Partner 5', logo: '/C19.webp' },
    { id: 6, name: 'Partner 6', logo: '/C23.webp' },
    { id: 7, name: 'Partner 7', logo: '/C21.webp' },
    { id: 8, name: 'Partner 8', logo: '/C18.webp' },
    { id: 9, name: 'Partner 9', logo: '/C15.webp' },
    { id: 10, name: 'Partner 10', logo: '/C20.webp' },
    { id: 11, name: 'Partner 11', logo: '/C12.webp' },
    { id: 12, name: 'Partner 12', logo: '/C16.webp' },
  ];

  return (
    <div className="bg-black py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-center text-5xl font-bold mb-10">Our Trusted Partners</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {partners.map((partner) => (
            <div key={partner.id} className="flex items-center justify-center">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-15 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedPartners;