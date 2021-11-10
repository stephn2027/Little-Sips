import React, { useRef } from 'react'
import _ from 'lodash';


export default function SlideImage({imgClass}) {
    
    const sliderImageRef = useRef(null);
    const sliderImage = sliderImageRef;
    
    const checkSlide=(e)=>{
        const slideInAt = (window.scrollY + window.innerHeight) 
        - sliderImage.current.scrollHeight / 3;
        
        const imageBottom = sliderImage.current.offsetTop + sliderImage.current.scrollHeight;
        const isHalfShown = slideInAt>sliderImage.current.offsetTop;
        const isNotScrolledPast = imageBottom > window.scrollY;

        if(isHalfShown&&isNotScrolledPast){
            sliderImage.current.classList.add('active');
        }else{
            sliderImage.current.classList.remove('active');
        }

    }
    window.addEventListener('scroll',_.debounce(checkSlide,20));

    return (
        <div className='slider-container' ref={sliderImageRef}>
            <div className={imgClass} >
                
            </div>
        </div>
    )
 
}