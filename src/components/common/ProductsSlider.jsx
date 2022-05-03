import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { getCoffeesCarousel } from '../../services/CoffeeService';

export default function ProductsSlider() {
  const [slideImages, setSlideImages] = useState([]);

  useEffect(() => {
    const slideImagesCopy = getCoffeesCarousel();

    function getdata() {
      //    const {data:images} =await http.get('https://github.com/stephn2027/Little-Sips/tree/master/src/images',{});
      const images = slideImagesCopy.map((m) => (
        <div>
          <img src={m.download_url} alt={m.author} />
          <h2>{m.author}</h2>
        </div>
      ));
      setSlideImages(images);
    }
    getdata();
  }, []);
  const responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1024: {
      items: 3,
    },
  };

  return (
    <div className="products-slider_container">
      <h1 className="products-title">PRODUCTS</h1>

      <AliceCarousel
        items={slideImages}
        autoPlayInterval={2000}
        autoPlayDirection={'ltr'}
        autoPlay={true}
        animationDuration={400}
        fadeOutAnimation={true}
        mouseTrackingEnabled={true}
        disableAutoPlayOnAction={true}
        infinite={true}
        mouseTracking={true}
        responsive={responsive}
      />
      <div className="all-menu">
        <Link to="/menu">
          <button className="btn btn-link">All Menu ➤</button>
        </Link>
      </div>
    </div>
  );
}
