import React, { useState ,useLayoutEffect} from 'react';
import gsap from 'gsap';
import { getCoffeesCarousel } from '../services/CoffeeService';
import Navbar from './Navbar';
import Content from './common/Content';
import ProductsSlider from './common/ProductsSlider';
import FillerContent from './common/FillerContent';
import Feature from './Feature';
import Title from './common/Title';

export default function Home() {

    const [Class,setClass] = useState('content home');
    
    const timeline = gsap.timeline();
    window.addEventListener('scroll',()=>{
        window.scrollY >=10? setClass('content home active'):setClass('content home');
    });

    useLayoutEffect(() => {
     
      
      timeline.from(".homes",{opacity:0,y:65,delay:0.2,ease:'power4.out'})
      .from(".brand-sub",{opacity:0,x:65,delay:0.2,ease:'power4.out'})
    }, [])
   
    
    return (
        <React.Fragment>
            <div
            className="home-container">
              <div className={Class}>
            <Navbar/>
            <Title/>
            
            <p className="brand-sub">Enjoy the little moments.</p>
            
            </div>
            <Content
            propsContWood={'props-container_wood'}
            propsContGrey={'props-container_grey'}
            sliderPropsClass1={'slider-props-wood_align-left'}
            sliderPropsClass2={'slider-props-grey_pop-below'}
            sliderClass ={'slider-container'}
            imgClass={'slider-image__store-out-align-right'}
            text={"Little Sips Cafe is a place where coffee & sweets aren't just a treat, but an experience. From lattes to our signature waffles, we have it all - watch as we prepare our delicious creations right before your eyes!"}
            />
            <ProductsSlider/>
            <FillerContent 
            sliderClass ={'filler-container'}
            propsContWood={'filler-container_wood'}
            propsContGrey={'filler-container_grey'}
            sliderPropsClass1={'filler-props-wood'}
            sliderPropsClass2={'filler-props-grey'}
            imgClass={'filler-image'}
            text={'"A cup of coffee shared with a friend is happiness tasted and time well spent. "'}
            />
           <Feature/>
           

            </div>
            

        </React.Fragment>
    )
}
