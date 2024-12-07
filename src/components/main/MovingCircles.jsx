import React from 'react';

const MovingCircles = () => {
  const circles = Array.from({ length: 10 }, (_, i) => ({
    size: Math.random() * 200 + 100,
    left: Math.random() * 200 - 50,
    top: Math.random() * 200 - 50,
    duration: Math.random() * 40 + 60,
    delay: Math.random() * -40,
  }));

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: -1,
      }}
    >
      {circles.map((circle, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            borderRadius: '50%',
            backgroundColor: 'black',
            opacity: 0.05,
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            left: `${circle.left}%`,
            top: `${circle.top}%`,
            animation: `float-around ${circle.duration}s linear infinite`,
            animationDelay: `${circle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default MovingCircles;

