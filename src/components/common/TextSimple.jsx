import React, { useRef } from 'react';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
export default function TextSimple({ text, title }) {
  const textRefS = useRef(null);
  // All the ref to be observed
  const intersection = useIntersection(textRefS, {
    root: null,
    rootMargin: '0px',
    threshold: 0.9,
  });

  // Animation for fading in
  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: 0,
      ease: 'power4.out',
      stagger: {
        amount: 0.3,
      },
    });
    gsap.to('.title', { scale: 1, ease: 'power3.out', delay: 0.6 }, 'Start');
  };
  // Animation for fading out
  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: 30,
      ease: 'Power2.out',
    });
    gsap.to('.title', { scale: 0.93, ease: 'power3.out', delay: 0.6 }, 'Start');
  };

  // checking to see when the vieport is visible to the user
  intersection && intersection.intersectionRatio < 0.9
    ? fadeOut('.fadeInTextS')
    : fadeIn('.fadeInTextS');

  return (
    <React.Fragment>
      <div className="textSimple-container">
        <div className="textSimple-content fadeInTextS" ref={textRefS}>
          <h1 className="title">{title}</h1>
          <div className="text-body">{text}</div>
        </div>
      </div>
    </React.Fragment>
  );
}
