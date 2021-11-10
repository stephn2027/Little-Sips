import React, { useRef } from 'react'
import _ from 'lodash';
export default function TextContent({text}){
    const textRef = useRef(null);
    
    const checkSlide=(e)=>{
        const slideInAt = (window.scrollY + window.innerHeight) 
        - textRef.current.scrollHeight / 2;
        
        const imageBottom =textRef.current.offsetTop +textRef.current.scrollHeight;
        const isHalfShown = slideInAt>textRef.current.offsetTop;
        const isNotScrolledPast = imageBottom > window.scrollY;
        
        if(isHalfShown&&isNotScrolledPast){
           textRef.current.classList.add('active');
        }else{
           textRef.current.classList.remove('active');
        }

    }
    window.addEventListener('scroll',_.debounce(checkSlide,20));

    return (
        <div className="text-container" ref={textRef}>
            <p className="text-content">
                {text}
            </p>
            <button className="btn btn-link">Full Story ➤</button>
        </div>
    )
}
