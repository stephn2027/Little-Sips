import React,{useRef,useLayoutEffect} from 'react';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import PropsSlider from './PropsSlider';
import SlideImage from './SlideImage';
import TextSimple from './TextSimple';

export default function ContentSimpleR(props) {
    const {sliderClass,imgClass,text,sliderPropsClass1,sliderPropsClass2,propsContWood,propsContGrey,title} = props;
   

    const tls =gsap.timeline();
    useLayoutEffect(()=>{
      tls.from('.content-container',{x:-360, opacity:1,delay:0.3,ease:"power3.easeIn"},'Start')
    },[]);
  
    
    
    
    return (
        <div className='contentS-container'  
        >
          <SlideImage imgClass={imgClass} sliderClass={sliderClass} />
          <TextSimple title={title} text={text}/>
          <PropsSlider propsClass={sliderPropsClass1} propsCont={propsContWood}/>
          <PropsSlider propsClass={sliderPropsClass2} propsCont={propsContGrey}/>


        </div>
    )
}

