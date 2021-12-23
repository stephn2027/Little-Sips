import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import PropsSlider from './PropsSlider';
import SlideImage from './SlideImage';
import TextSimple from './TextSimple';

export default function ContentSimpleR(props) {
  const {
    sliderClass,
    imgClass,
    text,
    sliderPropsClass1,
    sliderPropsClass2,
    propsContWood,
    propsContGrey,
    title,
  } = props;

  const tl = gsap.timeline();
  useLayoutEffect(() => {
    tl.from('.contentS-containerss', {
      x: 60,
      opacity: 0,
      duration: 1,
      ease: 'back(.8).out',
    });
  }, []);

  return (
    <div className="contentS-container r">
      <SlideImage imgClass={imgClass} sliderClass={sliderClass} />
      <TextSimple title={title} text={text} />
      <PropsSlider propsClass={sliderPropsClass1} propsCont={propsContWood} />
      <PropsSlider propsClass={sliderPropsClass2} propsCont={propsContGrey} />
    </div>
  );
}
