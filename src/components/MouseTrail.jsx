
import React, { useEffect, useRef } from 'react';
import "./MouseTrail.css";

const MouseTrail = () => {
  const trailRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const trail = document.createElement('div');
      trail.className = 'mouse-trail';
      document.body.appendChild(trail);
      trailRef.current.push(trail);

      const { clientX: x, clientY: y } = e;

      trail.style.left = `${x}px`;
      trail.style.top = `${y}px`;

      const removeTrail = setTimeout(() => {
        trail.remove();
        trailRef.current.shift();
      }, 100); 

      const animateTrail = (targetX, targetY) => {
        const interval = requestAnimationFrame(() => {
          const rect = trail.getBoundingClientRect();
          const trailX = rect.left + rect.width / 2;
          const trailY = rect.top + rect.height / 2;

          const deltaX = targetX - trailX;
          const deltaY = targetY - trailY;

          const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

          
          if (distance > 1) {
            trail.style.transform = `translate(${deltaX / 20}px, ${deltaY / 20}px)`;
            animateTrail(targetX, targetY);
          } else {
            cancelAnimationFrame(interval);
          }
        });
      };

      animateTrail(x, y);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      trailRef.current.forEach((trail) => trail.remove());
    };
  }, []);

  return null; 
};

export default MouseTrail;
