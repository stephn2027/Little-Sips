import React,{useLayoutEffect} from 'react'
import PropsSlider from './PropsSlider';
import SlideImage from './SlideImage';
import TextSimple from './TextSimple';
import gsap from 'gsap';

export default function ContentSimple(props) {
    const {sliderClass,imgClass,text,sliderPropsClass1,sliderPropsClass2,propsContWood,propsContGrey,title} = props;

    const tls =gsap.timeline();
    useLayoutEffect(()=>{
      tls.from('.contentS-container',{x:360, opacity:0,delay:0.2,ease:"power3.easeIn"},'Start')
    },[]);

    return (
        <div className='contentS-container'>
          <TextSimple title={title} text={text}/>
          <SlideImage imgClass={imgClass} sliderClass={sliderClass} />
          <PropsSlider propsClass={sliderPropsClass1} propsCont={propsContWood}/>
          <PropsSlider propsClass={sliderPropsClass2} propsCont={propsContGrey}/>


        </div>
    )
}

