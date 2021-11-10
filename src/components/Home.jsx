import React, { useState } from 'react';
import Navbar from './Navbar';

import Content from './common/Content';
import ProductsSlider from './common/ProductsSlider';


export default function Home() {

    const [Class,setClass] = useState('content home');

    window.addEventListener('scroll',()=>{
        window.scrollY >=10? setClass('content home active'):setClass('content home');
    });
    
    return (
        <React.Fragment>
        
            <div className={Class}>
            <Navbar/>
            <h1 className="brand-title">Little Sips</h1>
            <p className="brand-sub">"Start your day right with a delightful cup of coffee."</p>
            
            </div>
            <Content
            propsContWood={'props-container_wood'}
            propsContGrey={'props-container_grey'}
            sliderPropsClass1={'slider-props-wood_align-left'}
            sliderPropsClass2={'slider-props-grey_pop-below'}

            imgClass={'slider-image__store-out-align-right'}
            text={'Founded in April 2017 by two young man from Yogyakarta, Couvee comes from an idea that everyone can enjoy coffee. It’s all started at a small rented building on Jalan Kaliurang. By 2019, Couvee has 5 branches, one of them located in Jakarta.'}
            />
            <ProductsSlider/>
            
            
            

        
            
        </React.Fragment>
    )
}
