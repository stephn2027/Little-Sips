import React,{useState,useEffect} from 'react';
import { getCoffees } from '../services/CoffeeService';
import HeaderTitle from './common/Headertitle';
import Navbar from './Navbar';
import Gallery from 'react-grid-gallery';
import { getCoffeeType } from '../services/TypeOfCoffeeService';
import FilterList from './FilterList';


export default function Menu() {

    const [menuBg, setMenuBg] = useState('menu-headerBG');
    const [onSelectedImage,setOnSelectedImage] = useState(false);
    const [selectedCoffeeType,setSelectedCoffeeType] =useState();
    const [coffeeImages,setImages] = useState([]);
    const [coffeeTypes,setCoffeeTypes] = useState([]);

    useEffect(() => {
    //    const coffees = getCoffees();
       setImages(getCoffees())
       
       setCoffeeTypes([{name:"All"},...getCoffeeType()]);
    }, []);

    const filtered = selectedCoffeeType&&selectedCoffeeType.id ? coffeeImages.filter(m=>m.kind === selectedCoffeeType.name):coffeeImages;

    
    const handleClick =(index,image)=>{
        const imagesCopy={...filtered};
        
        let img = imagesCopy[index];

        if(img.hasOwnProperty('isSelected')){
        img.isSelected = !img.isSelected;

        }else{
            img.isSelected = true;

        }
       setOnSelectedImage(imagesCopy)
        
       
    }
    const handleTypeSelect=(type)=>{
       
        setSelectedCoffeeType(type);
       
    };
   
    
    

  window.addEventListener('scroll', () => {
    window.scrollY >= 10
      ? setMenuBg('menu-headerBG active')
      : setMenuBg('menu-headerBG');
  });

    return (
        <div className='menu-container'>
        <div className={menuBg}>
            <Navbar/>
            <HeaderTitle text={"MENU"}/>
        </div>
        <div className="products-container">
        <div className="product-title">
            PRODUCTS
        </div>
        <div className="filter-wrapper">
            <FilterList 
             types={coffeeTypes}
             selectedCoffeeType={selectedCoffeeType}
             onTypeSelect={handleTypeSelect}

             />
        </div>
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
    )
}
