import React,{useLayoutEffect} from 'react'
import PropsSlider from './PropsSlider';
import SlideImage from './SlideImage';
import TextSimple from './TextSimple';
import gsap from 'gsap';

export default function ContentSimple(props) {
    const {sliderClass,imgClass,text,sliderPropsClass1,sliderPropsClass2,propsContWood,propsContGrey,title} = props;

    const tls =gsap.timeline();
    useLayoutEffect(()=>{
      tls.from('.contentS-container.l',{x:960, opacity:0,duration:1,delay:0.3,ease:"back(.8).out"},'Start')
      .from('.contentS-container.r',{x:-960, opacity:0,duration:1,ease:"back(.8).out"})
    },[]);

    return (
        <div className='contentS-container l'>
          <TextSimple title={title} text={text}/>
          <SlideImage imgClass={imgClass} sliderClass={sliderClass} />
          <PropsSlider propsClass={sliderPropsClass1} propsCont={propsContWood}/>
          <PropsSlider propsClass={sliderPropsClass2} propsCont={propsContGrey}/>


        </div>
    )
}

