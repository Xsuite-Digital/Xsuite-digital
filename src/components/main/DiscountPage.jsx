import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Discount = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isAnimated, setIsAnimated] = useState(true);

  useEffect(() => {
    // Check if popup has been shown already in this session
    const hasPopupBeenShown = sessionStorage.getItem('discountPopupShown');
    
    if (!hasPopupBeenShown) {
      // Show popup after a delay, but only if it hasn't been shown before
      const timer = setTimeout(() => {
        setIsOpen(true);
        // Trigger animation after a small delay
        setTimeout(() => setIsAnimated(true), 100);
        // Mark that popup has been shown in this session
        sessionStorage.setItem('discountPopupShown', 'true');
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsAnimated(false);
    // Wait for exit animation to complete before removing from DOM
    setTimeout(() => setIsOpen(false), 300);
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${isAnimated ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`relative bg-gradient-to-br from-orange-500 to-orange-600 max-w-lg w-full overflow-hidden rounded-lg shadow-2xl transform transition-all duration-500 ${isAnimated ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-black"></div>
          <div className="absolute top-40 -right-10 w-60 h-60 rounded-full bg-black"></div>
          <div className="absolute -bottom-20 left-20 w-80 h-80 rounded-full bg-black"></div>
        </div>
        
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white hover:text-gray-200 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-20 hover:bg-opacity-30 transition-all duration-200"
          aria-label="Close popup"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        {/* Content section */}
        <div className="p-8 text-center">
          {/* Animated discount text */}
          <div className="flex justify-center items-center mb-6">
            <div className={`text-white font-bold text-6xl transform transition-all duration-700 ${isAnimated ? 'scale-100 rotate-0' : 'scale-0 rotate-12'}`} style={{ transitionDelay: '200ms' }}>
              30%
            </div>
            <div className={`ml-2 text-white font-bold text-4xl transform transition-all duration-700 ${isAnimated ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
              OFF
            </div>
          </div>
          
          <h2 className={`text-3xl font-bold text-white mb-4 transition-all duration-500 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
            Limited Time Offer
          </h2>
          
          <p className={`text-gray-100 mb-8 transition-all duration-500 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
            Get 30% off on all our services. This exclusive deal won't last long!
          </p>
          
          {/* Pulsing CTA button */}
          <div className={`transition-all duration-500 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '500ms' }}>
            <Link
              to="/PackageDetails"
              className="inline-block w-full bg-white text-black font-bold py-4 px-6 rounded-lg text-center hover:bg-gray-100 transition duration-200 transform hover:scale-105 shadow-lg relative overflow-hidden group"
            >
              <span className="relative z-10">Claim Your Discount Now</span>
              <span className="absolute inset-0 bg-white opacity-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </div>
          
          <p className={`text-xs text-gray-200 text-center mt-6 leading-relaxed transition-all duration-500 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
            Offer valid for new customers only.
            See our{' '}
            <a href="#" className="text-white font-medium hover:underline">Privacy Policy</a> and{' '}
            <a href="#" className="text-white font-medium hover:underline">Terms</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Discount;