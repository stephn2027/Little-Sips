import React, { useState, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ContentSimple from './common//ContentSimple';
import ContentSimpleR from './common/ContentSimpleR';
import HeaderTitle from './common/Headertitle';
import Navbar from './Navbar';

export default function Story() {
  const [headerBg, setTop] = useState('header-container');

  window.addEventListener('scroll', () => {
    window.scrollY >= 10
      ? setTop('header-container active')
      : setTop('header-container');
  });
  const tl = gsap.timeline();

  useLayoutEffect(() => {
    tl.from(
      '.htitle',
      { y: 200, opacity: 0, ease: 'power4.out', delay: 0.4 },
      'Start'
    );
  }, []);

  return (
    <React.Fragment>
      <div className="story-container">
        <div className={headerBg}>
          <Navbar />
          <HeaderTitle text={'OUR STORY'} className="htitle" />
        </div>

        <ContentSimple
          className="content1"
          propsContWood={'container_wood'}
          propsContGrey={'container_grey'}
          sliderPropsClass1={'slider-props_wood'}
          sliderPropsClass2={'slider-props_grey'}
          sliderClass={'container_image'}
          imgClass={'slider-image'}
          text={
            'Little Sips is a brand of food and beverages from Harrison Ave., New Jersey. It was founded by two sisters, on May 2021.  They started the business together in a modest rented building at 730 Harrison Ave.'
          }
          title={'OUR BEGINNING'}
        />
        <ContentSimpleR
          className="content2"
          propsContWood={'container_woodR'}
          propsContGrey={'container_greyR'}
          sliderPropsClass1={'slider-props_woodR'}
          sliderPropsClass2={'slider-props_greyR'}
          sliderClass={'container_imageR'}
          imgClass={'slider-imageR'}
          text={
            'Little Sips comes from the idea that everyone can enjoy coffee. It doesn’t matter if you like your coffee light and sweet, or you prefer strong coffee with no sugar, you can always enjoy it with your personal preferences in here. It’s our pleasure to help you find the best crafted drink that suits your taste in the best way.'
          }
          title={'OUR BACKGROUNDS'}
        />
      </div>
    </React.Fragment>
  );
}
