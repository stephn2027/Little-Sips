import React, { useRef } from 'react'

import { useIntersection } from "react-use";

import gsap from "gsap";

export default function SlideImage({imgClass,sliderClass}) {
    
    
        // Ref for our element
        const sectionRef = useRef(null);
        // All the ref to be observed
        const intersection = useIntersection(sectionRef, {
          root: null,
          rootMargin: "0px",
          threshold: 0.8
        });
      
        // Animation for fading in
        const fadeIn = element => {
          gsap.to(element, 1, {
            opacity: 1,
            y: 10,
            scale:1.1,
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
            scale:.98,
            y:-20,
            ease: "power4.out"
          });
        };
      
        // checking to see when the vieport is visible to the user
        intersection && intersection.intersectionRatio < .8
          ? fadeOut(".fadeIn")
          : fadeIn(".fadeIn");
    
   
    
   

    return (
        <div className={sliderClass} ref={sectionRef}>
            <div className={`${imgClass} fadeIn`}>
                
            </div>
        </div>
    )
 
}
