import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo-2.png';


export default function Footer() {
  return (
    <React.Fragment>
    <div className="footer-wrapper">
      <div className="footer-container" 
      // style={{background:`url(${bg})`,backgroundSize:'cover',backgroundRepeat:'no-repeat'}}
      >
        <div className="links-cont">
          <Link
            to={{ pathname: 'https://www.instagram.com/littlesipscafe/?hl=en' }}
            target="_blank"
          >
            <img src={logo} className="logo-footer" alt=""></img>
          </Link>
          <ul className='links'>LINKS
              <li className='list'><Link to="/">Homepage</Link></li>
              <li className='list'><Link to="/story">Story</Link></li>
              <li className='list'><Link to="/menu" target="_blank">Menu</Link></li>
             
              
          </ul>
          <ul className='links'>CONTACTS
          <li className='list'>Orders: <Link to={{pathname: 'https://www.yelp.com/biz/little-sips-cafe-harrison'}}>Order online</Link></li>
          <li className='list'>Phone: <a href="tel:+(973) 317-1200">(973) 317-1200</a></li>
          </ul>
          <ul className="links">SOCIAL
          <li className='list'> <i className="fab fa-instagram"/> <Link to={{pathname:'https://www.instagram.com/littlesipscafe/?hl=en'}}>littlesipscafe</Link></li>
          
          </ul>

        </div>
        
      </div>
      <div className="copyright footer-bg">
        <i className="far fa-copyright"
        > <span>2021 Little Sips</span></i>  
        
        <i className="fas fa-laptop-code" ><span>stephenUy</span></i>
        </div>
        </div>
    </React.Fragment>
  );
}
