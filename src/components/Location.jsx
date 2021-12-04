import React,{useState,useLayoutEffect} from 'react';
import gsap from 'gsap';
import Map from './common/Map';
import ContentSimple from './common/ContentSimple';
import HeaderTitle from './common/Headertitle';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';



export default function Location() {
    const [locationBg, setTop] = useState('location-container');

  window.addEventListener('scroll', () => {
    window.scrollY >= 10
      ? setTop('location-container active')
      : setTop('location-container');
  });
  const tl = gsap.timeline();

  useLayoutEffect(()=>{
      tl.from('.htitle',{y:200,opacity:0,ease:"power4.out" ,duration:1},'Start')
      .from('.map-container',{y:600,opacity:0,ease:"back(1.2).out" ,duration:1.5},'Start')
      
  },[]);

    return (
        <React.Fragment>
        <div className='story-container'>
          <div className={locationBg}>
            <Navbar />
          <HeaderTitle text={'LOCATION'} className="htitle"/>
          </div>

         
            
         <ContentSimple  
         
              
             className='location-content'
             propsContWood={'loc-container_wood'}
              propsContGrey={'loc-container_grey'}
              sliderPropsClass1={'loc-slider-props_wood'}
              sliderPropsClass2={'loc-slider-props_grey'}
              sliderClass ={'loc-container_image'}
              imgClass={'loc-slider-image'}
              text={'Couvee is a brand of food and beverages from Yogyakarta, Indonesia. It was founded by two young man, on April 2017.  They started the business together in a modest rented building at Jalan Kaliurang Km 5.'}
              title={'COME VISIT US'}
            
         >
           
         </ContentSimple>

        
         
         <div className="map-container" id="map">
         <div className="map-title">
         <h1>Little Sips Cafe</h1>
             <div className="map-info">
                <h4>730 Harrison Ave, Harrison, NJ 07029</h4>
             </div>
         </div>  
         <Map/>
         </div>
         </div>
      </React.Fragment>
    )
}
