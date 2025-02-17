'use client';

import { useEffect, useState } from 'react';
import styles from './CursorEffect.module.scss';

export default function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInteracting, setIsInteracting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let mouseTimeout: NodeJS.Timeout;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      // Hide cursor effect after 2 seconds of no movement
      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    };

    const handleMouseEnter = () => {
      setIsInteracting(true);
    };

    const handleMouseLeave = () => {
      setIsInteracting(false);
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll('a, button, .hover-expand').forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    // Cleanup
    return () => {
      clearTimeout(mouseTimeout);
      window.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('a, button, .hover-expand').forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`${styles.cursorDot} ${isInteracting ? styles.interacting : ''}`}
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        opacity: isVisible ? 1 : 0
      }}
    />
  );
}