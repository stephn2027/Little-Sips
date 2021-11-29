import React, { useLayoutEffect } from 'react'
import PropsSlider from './PropsSlider';
import SlideImage from './SlideImage';
import TextContent from './TextContent';
import gsap from 'gsap';
export default function Content(props) {
   const {sliderClass,imgClass,text,sliderPropsClass1,sliderPropsClass2,propsContWood,propsContGrey} = props;
   const timeline=gsap.timeline(); 
   useLayoutEffect(()=>{  
     timeline.from('.content-container',{opacity: 0,y:400,delay:.03,stagger:0.3,duration:1});
      
    },[]) 

   return (
        <div className='content-container'>
          <TextContent text={text}/>
          <SlideImage imgClass={imgClass} sliderClass={sliderClass} />
          <PropsSlider propsClass={sliderPropsClass1} propsCont={propsContWood}/>
          <PropsSlider propsClass={sliderPropsClass2} propsCont={propsContGrey}/>


        </div>
    )
}
