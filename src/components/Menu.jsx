import React, { useState, useEffect } from 'react';
import { getCoffees } from '../services/CoffeeService';
import HeaderTitle from './common/Headertitle';
import Navbar from './Navbar';
import Gallery from 'react-grid-gallery';
import { getCoffeeType } from '../services/TypeOfCoffeeService';
import FilterList from './FilterList';
import gsap from 'gsap';

export default function Menu() {
  const [menuBg, setMenuBg] = useState('menu-headerBG');
  const [onSelectedImage, setOnSelectedImage] = useState(false);
  const [selectedCoffeeType, setSelectedCoffeeType] = useState();
  const [coffeeImages, setImages] = useState([]);
  const [coffeeTypes, setCoffeeTypes] = useState([]);

  const timeline = gsap.timeline();
  
  

  useEffect(() => {
    //    const coffees = getCoffees();
    setImages(getCoffees());
    setCoffeeTypes([{ name: 'All' }, ...getCoffeeType()]);
   
    timeline.from('.xheaderx-title',{opacity:.3,scale:0,ease:"back.out(1.4)",duration:.1,})
    .from('.product-title',{opacity:0,y:965,ease:"back.out(1)",duration:.6,})
    .from('.products-container',{opacity:0,y:965,ease:"back.out(1)",duration:.7,})
    .from('.ReactGridGallery_tile-viewport',{opacity:0,scale:.2,ease:"back.out(1)",duration:.5,})

  }, []);

  const filtered =
    selectedCoffeeType && selectedCoffeeType.id
      ? coffeeImages.filter((m) => m.kind === selectedCoffeeType.name)
      : coffeeImages;

  const handleClick = (index, image) => {
    const imagesCopy = { ...filtered };

    let img = imagesCopy[index];

    if (img.hasOwnProperty('isSelected')) {
      img.isSelected = !img.isSelected;
      
    } else {
      img.isSelected = true;
    }
    setOnSelectedImage(imagesCopy);
  };
  const handleTypeSelect = (type) => {
    setSelectedCoffeeType(type);
  };

  window.addEventListener('scroll', () => {
    window.scrollY >= 10
      ? setMenuBg('menu-headerBG active')
      : setMenuBg('menu-headerBG');
  });

  return (
    <div className="menu-container">
    <div className="menu-bg_wrapper">
    <div className={menuBg}>
        <Navbar onTypeSelect={handleTypeSelect} />
        <HeaderTitle text={'MENU'} />
      </div>
    </div>
     
      <div className="product-title">PRODUCTS</div>
      <div className="products-container">
        <div className="filter-wrapper">
          <FilterList
            types={coffeeTypes}
            selectedCoffeeType={selectedCoffeeType}
            onTypeSelect={handleTypeSelect}
          />
        </div>
        <div className="gallery-wrapper">
          <Gallery
            images={filtered}
            backDropCloseModal={true}
            onSelectImage={handleClick}
            rowHeight={360}
            rowWidth={200}
            margin={15}
            maxRows={10}
            maxColumns={10}
            enableImageSelection={true}
          />
        </div>
      </div>
    </div>
  );
}
