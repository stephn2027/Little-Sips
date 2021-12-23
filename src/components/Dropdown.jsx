import React, { useState } from 'react';

import '../css/dropdown.css';

export default function Dropdown() {
  const [click, setClick] = useState(false);
  const handleCLick = () => setClick(!click);

  return (
    <React.Fragment>
      <ul
        onClick={handleCLick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        <li>
          <a
            className="dropdown-link"
            onClick={() => setClick(false)}
            href="https://www.instagram.com/littlesipscafe/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            <i class="fab fa-instagram"></i> Instagtram
          </a>
        </li>

        <li>
          <a
            className="dropdown-link"
            onClick={() => setClick(false)}
            href="https://www.yelp.com/biz/little-sips-cafe-harrison"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            <i class="fab fa-yelp"></i> Yelp
          </a>
        </li>

        <li>
          <a
            href="tel:+(973) 317-1200"
            className="dropdown-link"
            onClick={() => setClick(false)}
          >
            {' '}
            <i class="fas fa-phone-volume"></i> Call Us
          </a>
        </li>
      </ul>
    </React.Fragment>
  );
}
