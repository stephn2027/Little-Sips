import React,{useEffect, useState} from 'react'
import http from '../../services/httpService'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';




export default function ProductsSlider() {
     
    const [slideImages,setSlideImages] = useState(); 

    useEffect(()=>{
         async function getdata(){
        //    const {data:images} =await http.get('https://picsum.photos/v2/list?limit=6%60',{});
           const image = productImages.map(m=>
            <img src={m.download_url} alt=""/>
               
           )
           setSlideImages(image);
           
        }
        getdata();
       
    },[])
    console.log(slideImages)

    return (
        <div className='products-slider_container'>
        <h1 className='products-title'>PRODUCTS</h1>
       
        <AliceCarousel
        className={'alice-container'}
        items={slideImages}
        autoPlayInterval={2000}
        autoPlayDirection="rtl"
        autoPlay={true}
        fadeOutAnimation={true}
        mouseTrackingEnabled={true}
        disableAutoPlayOnAction={true}
      />
            
        </div>
    )
}
const productImages = [
    {
      "id": "0",
      "author": "Alejandro Escamilla",
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
      "url": "https://unsplash.com/photos/GYumuBnTqKc",
      "download_url": "https://scontent-lax3-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/240399634_553298239209277_3318016007586028981_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=101&_nc_ohc=XP2Cqcln8g0AX-Ayjiv&edm=AP_V10EBAAAA&ccb=7-4&oh=af4756e06fc20d9a9065a445d4c5954e&oe=6191EEEA&_nc_sid=4f375e"
    },
    {
      "id": "1004",
      "author": "Greg Rakozy",
      "width": 5616,
      "height": 3744,
      "url": "https://unsplash.com/photos/SSxIGsySh8o",
      "download_url": "https://picsum.photos/id/1004/5616/3744"
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

  