import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useIntersection } from 'react-use';
export default function TextBox({ text }) {
  const textRef = useRef(null);
  const intersection = useIntersection(textRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.93,
  });

  const fadeIn = (element) => {
    gsap.to(element, 2, {
      opacity: 1,
      y: 0,
      ease: 'power4.out',
      stagger: {
        amount: 0.2,
      },
    });
  };
  // Animation for fading out
  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: 0,
      ease: 'power4.out',
    });
  };

  // checking to see when the vieport is visible to the user
  intersection && intersection.intersectionRatio < 0.93
    ? fadeOut('.fadeInText')
    : fadeIn('.fadeInText');

  return (
    <div className="textbox-container">
      <div className="textbox-content fadeInText" ref={textRef}>
        {text}
      </div>
    </div>
  );
}
