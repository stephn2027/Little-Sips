import React from 'react'
import PropsSlider from './PropsSlider';
import SlideImage from './SlideImage';
import TextContent from './TextContent';

export default function Content(props) {
   const {imgClass,text,sliderPropsClass1,sliderPropsClass2,propsContWood,propsContGrey} = props;
    return (
        <div className='content-container'>
          <TextContent text={text}/>
          <SlideImage imgClass={imgClass} />
          <PropsSlider propsClass={sliderPropsClass1} propsCont={propsContWood}/>
          <PropsSlider propsClass={sliderPropsClass2} propsCont={propsContGrey}/>


        </div>
    )
}
