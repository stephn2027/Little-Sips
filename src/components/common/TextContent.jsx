import React, { useRef,useLayoutEffect } from 'react'
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import {Link} from 'react-router-dom';

export default function TextContent({text}){
   
    const textRef = useRef(null);
    const tl = gsap.timeline();

    useLayoutEffect(() => {  
        tl.from('.text-content',{opacity:0,delay:0.5,ease:"power3.out",duration:0.5,},'Start')
    }, [])
    const intersection = useIntersection(textRef,
     {root:null,rootMargin:'0px',threshold:0.9});
    
    // Animation for fading in
    const fadeIn = element => {
        gsap.to(element, .6, {
          opacity: 1,
          y: -20,
          ease: "power4.out",
          stagger: {
            amount: 0.5
          }
        })
        
      };
      // Animation for fading out
      const fadeOut = element => {
        gsap.to(element, .6, {
          opacity: 1,
          y: 20,
          ease: "Power2.out"
        });
        
      };
    
      // checking to see when the vieport is visible to the user
      intersection && intersection.intersectionRatio < 0.9
        ? fadeOut(".fadeInText2")
        : fadeIn(".fadeInText2");
     
    

    return (
        <div className="text-container fadeInText2" ref={textRef}>
            <p className="text-content">
                {text}
                
            </p>
            <Link to="/story" className='link-fullstory'> <button className="btn btn-link"> Full Story ➤</button></Link>
        </div>
    )
}
