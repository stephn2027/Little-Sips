import React, { useRef } from 'react'

import gsap from 'gsap';
import { useIntersection } from 'react-use';
export default function PropsSlider({propsClass,propsCont}) {
    
    // Ref for our element
    const sectionRef = useRef(null);
    // All the ref to be observed
    const intersection = useIntersection(sectionRef, {
      root: null,
      rootMargin: "0px",
      threshold: .84
    });
  
    // Animation for fading in
    const fadeIn = element => {
      gsap.to(element, 1, {
        opacity: 1,
        x:-10,
        scale:1,
     ease: "power4.out",
        stagger: {
          amount: 0.3
        }
      });
    };
    // Animation for fading out
    const fadeOut = element => {
      gsap.to(element, 1, {
        opacity: 1,
        scale:1,
        x:30,
        ease: "power4.out"
      });
    };
  
    // checking to see when the vieport is visible to the user
    intersection && intersection.intersectionRatio < .84
      ? fadeOut(".fadeInProps")
      : fadeIn(".fadeInProps");


    return (
        <div className={propsCont} ref={sectionRef} >
            <div className={`${propsClass} fadeInProps` } >
                
            </div>
        </div>
    )
 
}
