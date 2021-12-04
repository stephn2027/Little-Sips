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
            text={'Founded in April 2017 by two young man from Yogyakarta, Couvee comes from an idea that everyone can enjoy coffee. It’s all started at a small rented building on Jalan Kaliurang. By 2019, Couvee has 5 branches, one of them located in Jakarta.'}
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
const productImages = [
    {
      "id": "0",
      "author": "Coffee Cinnamon",
      "width": 5616,
      "height": 3744,
      "url": "https://imgur.com/IJlwG7o",
      "download_url": "https://s3-media0.fl.yelpcdn.com/bphoto/tg6Oi3j0E_pAq3v6MVKSUg/o.jpg"
    },
    {
      "id": "1",
      "author": "Alejandro Escamilla",
      "width": 5616,
      "height": 3744,
      "url": "https://unsplash.com/photos/LNRyGwIJr5c",
      "download_url": "https://s3-media0.fl.yelpcdn.com/bphoto/nK0X3aJtxHMKNfxE5fQq9Q/o.jpg"
    },
    {
      "id": "10",
      "author": "Paul Jarvis",
      "width": 2500,
      "height": 1667,
      "url": "https://unsplash.com/photos/6J--NXulQCs",
      "download_url": "https://s3-media0.fl.yelpcdn.com/bphoto/Jv9HTbsOe6GvONef_KN15w/o.jpg"
    },
    {
      "id": "100",
      "author": "Tina Rataj",
      "width": 2500,
      "height": 1656,
      "url": "https://unsplash.com/photos/pwaaqfoMibI",
      "download_url": "https://s3-media0.fl.yelpcdn.com/bphoto/SrhFtgEXad7aTTOmYH19Yg/o.jpg"
    },
    {
      "id": "1000",
      "author": "Lukas Budimaier",
      "width": 5626,
      "height": 3635,
      "url": "https://unsplash.com/photos/6cY-FvMlmkQ",
      "download_url": "https://s3-media0.fl.yelpcdn.com/bphoto/dBecbY53_wSnuWClRaIndQ/o.jpg"
    },
    {
      "id": "1001",
      "author": "Danielle MacInnes",
      "width": 5616,
      "height": 3744,
      "url": "https://unsplash.com/photos/1DkWWN1dr-s",
      "download_url": "https://s3-media0.fl.yelpcdn.com/bphoto/i57nmWIJio2JSbgGtvFSQg/o.jpg"
    },
    {
      "id": "1002",
      "author": "NASA",
      "width": 4312,
      "height": 2868,
      "url": "https://unsplash.com/photos/6-jTZysYY_U",
      "download_url": "https://s3-media0.fl.yelpcdn.com/bphoto/1y-JZtqamH--sZUPeRfxsw/o.jpg"
    },
    {
      "id": "1003",
      "author": "E+N Photographies",
      "width": 1181,
      "height": 1772,
      "url": "https://scontent-lax3-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/158850777_140290941320076_6044229572056858860_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=100&_nc_ohc=3WfkCvvYKR8AX-Tq8Gg&edm=AP_V10EBAAAA&ccb=7-4&oh=b1d125a26e2ae86546d503bd9c51e4a1&oe=61A83E77&_nc_sid=4f375e",
      "download_url": "https://scontent-lax3-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/158850777_140290941320076_6044229572056858860_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=100&_nc_ohc=3WfkCvvYKR8AX-Tq8Gg&edm=AP_V10EBAAAA&ccb=7-4&oh=b1d125a26e2ae86546d503bd9c51e4a1&oe=61A83E77&_nc_sid=4f375e",
    },
    {
      "id": "1004",
      "author": "Greg Rakozy",
      "width": 5616,
      "height": 3744,
      "url": "https://unsplash.com/photos/SSxIGsySh8o",
      "download_url": "https://www.instagram.com/1091784a-2c6c-417a-a871-03d0f157beca"
    },
    {
      "id": "1005",
      "author": "Matthew Wiebe",
      "width": 5760,
      "height": 3840,
      "url": "https://unsplash.com/photos/tBtuxtLvAZs",
      "download_url": "https://picsum.photos/id/1005/5760/3840"
    },
    {
      "id": "1006",
      "author": "Vladimir Kudinov",
      "width": 3000,
      "height": 2000,
      "url": "https://unsplash.com/photos/-wWRHIUklxM",
      "download_url": "https://picsum.photos/id/1006/3000/2000"
    },
    {
      "id": "1008",
      "author": "Benjamin Combs",
      "width": 5616,
      "height": 3744,
      "url": "https://unsplash.com/photos/5L4XAgMSno0",
      "download_url": "https://picsum.photos/id/1008/5616/3744"
    },
    {
      "id": "1009",
      "author": "Christopher Campbell",
      "width": 5000,
      "height": 7502,
      "url": "https://unsplash.com/photos/CMWRIzyMKZk",
      "download_url": "https://picsum.photos/id/1009/5000/7502"
    },
    {
      "id": "101",
      "author": "Christian Bardenhorst",
      "width": 2621,
      "height": 1747,
      "url": "https://unsplash.com/photos/8lMhzUjD1Wk",
      "download_url": "https://picsum.photos/id/101/2621/1747"
    },
    {
      "id": "1010",
      "author": "Samantha Sophia",
      "width": 5184,
      "height": 3456,
      "url": "https://unsplash.com/photos/NaWKMlp3tVs",
      "download_url": "https://picsum.photos/id/1010/5184/3456"
    },
    {
      "id": "1011",
      "author": "Roberto Nickson",
      "width": 5472,
      "height": 3648,
      "url": "https://unsplash.com/photos/7BjmDICVloE",
      "download_url": "https://picsum.photos/id/1011/5472/3648"
    },
    {
      "id": "1012",
      "author": "Scott Webb",
      "width": 3973,
      "height": 2639,
      "url": "https://unsplash.com/photos/uAgLGG1WBd4",
      "download_url": "https://picsum.photos/id/1012/3973/2639"
    },
    {
      "id": "1013",
      "author": "Cayton Heath",
      "width": 4256,
      "height": 2832,
      "url": "https://unsplash.com/photos/D8LcRLwZyPs",
      "download_url": "https://picsum.photos/id/1013/4256/2832"
    },
    {
      "id": "1014",
      "author": "Oscar Keys",
      "width": 6016,
      "height": 4000,
      "url": "https://unsplash.com/photos/AmPRUnRb6N0",
      "download_url": "https://picsum.photos/id/1014/6016/4000"
    },
    {
      "id": "1015",
      "author": "Alexey Topolyanskiy",
      "width": 6000,
      "height": 4000,
      "url": "https://unsplash.com/photos/-oWyJoSqBRM",
      "download_url": "https://picsum.photos/id/1015/6000/4000"
    },
    {
      "id": "1016",
      "author": "Philippe Wuyts",
      "width": 3844,
      "height": 2563,
      "url": "https://unsplash.com/photos/_h7aBovKia4",
      "download_url": "https://picsum.photos/id/1016/3844/2563"
    },
    {
      "id": "1018",
      "author": "Andrew Ridley",
      "width": 3914,
      "height": 2935,
      "url": "https://unsplash.com/photos/Kt5hRENuotI",
      "download_url": "https://picsum.photos/id/1018/3914/2935"
    },
    {
      "id": "1019",
      "author": "Patrick Fore",
      "width": 5472,
      "height": 3648,
      "url": "https://unsplash.com/photos/V6s1cmE39XM",
      "download_url": "https://picsum.photos/id/1019/5472/3648"
    },
]
