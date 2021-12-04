import React from 'react'
import {Link} from 'react-router-dom';
import '../css/button.css'; 

export default function Button() {
    return (
        <Link to="/location">
            <button className="btn nav-links">Location</button>
        </Link>
    )
}
