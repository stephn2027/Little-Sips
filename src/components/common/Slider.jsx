import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../../css/products-slider.css';

const slideImages = [
  {
    url: '../../images/iced-pumpkin-spice-latte.jpeg',
    caption: 'Slide 1',
  },
  {
    url: '../../images/pistachio-lavander-latte.jpeg',
    caption: 'Slide 2',
  },
  {
    url: '../../images/lychee-rose-soda.jpeg',
    caption: 'Slide 3',
  },
  {
    url: '../../images/strawberr-ube-lattte.jpeg',
    caption: 'Slide 4',
  },
];

export default function Slideshow() {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div style={{ backgroundImage: `url(${slideImage.url})` }}>
              <span>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
