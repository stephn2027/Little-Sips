import React, { useEffect } from 'react';
import logo from '../images/logo-2.png';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

export default function Feature() {
  const timeline = gsap.timeline();

  useEffect(() => {
    timeline.from(
      '.feature-container',
      {
        y: -65,
        opacity: 0,
        ease: 'Power2.easeIn',
        delay: 0.2,
      },
      'Start')
      .from('.feature-title',{y:20,opacity:0,ease:'Power4.easeIn',delay:0.2},'Start')
      .from('.feature-photos_container',{x:220,opacity:0,ease:'Power4.easeInOut',delay:0.2},)
  }, []);
  return (
    <React.Fragment>
      <div className="feature-container">
        <h1 className="feature-title">FEATURE</h1>
        <div className="feature-photos_container">
          <div className="f-image left fadeIn">
            <p className="promo-text"> &nbsp; &nbsp; Promo of the week</p>
          </div>

          <div className="f-image right fadeIn">
            <p className="promo-text"> &nbsp; &nbsp; Promo of the month</p>
          </div>
        </div>

        <div className="feature-instagram_container">
          <div className="feature-instagram">
            <Link
              to={{
                pathname: 'https://www.instagram.com/littlesipscafe/?hl=en',
              }}
              target="_blank"
            >
              <img src={logo} className="logo" alt=""></img>
            </Link>
            <div className="insta-text">FIND US ON INSTAGRAM</div>
          </div>
          <div className="feature-effect"></div>
        </div>
      </div>
    </React.Fragment>
  );
}
