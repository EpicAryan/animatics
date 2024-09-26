'use client'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Follower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update position based on mouse movement
  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      style={{
        width: '50px',
        height: '50px',
        backgroundColor: 'hotpink',
        borderRadius: '50%',
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none', // Ignore pointer events for this element
      }}
      animate={{
        x: position.x , // Offset the center of the circle
        y: position.y ,
      }}
      transition={{
        type: 'spring', 
        stiffness: 500, 
        damping: 30
      }}
    />
  );
};

export default Follower;
