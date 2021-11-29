import React,{useEffect} from 'react'

import SlideImage from './SlideImage';
import PropsSlider from './PropsSlider';
import TextBox from './TextBox';
import gsap from 'gsap';

export default function FillerContent(props) {
    const {sliderClass,imgClass,text,sliderPropsClass1,sliderPropsClass2,propsContWood,propsContGrey} = props;

    const timeline = gsap.timeline();

  useEffect(() => {
    timeline.from(
      '.filler-content_container',
      {
        y: 65,
        opacity: 0,
        ease: 'power3.easeIn',
        duration: 0.2,
      },
      'Start')
      
  }, []);
    return (
        <div className='filler-content_container'>
          
          <SlideImage imgClass={imgClass} sliderClass={sliderClass}/>
          <PropsSlider propsClass={sliderPropsClass1} propsCont={propsContWood}/>
          <PropsSlider propsClass={sliderPropsClass2} propsCont={propsContGrey}/>
            <TextBox text={text}/>

        </div>
    )
}
