import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';

import '../css/dropdown.css';




export default function Dropdown() {
    
    const [click,setClick] = useState(false);
    const handleCLick = ()=>setClick(!click);
    return (

        <React.Fragment>

            <ul 
            onClick={handleCLick} 
            className={click?'dropdown-menu clicked': "dropdown-menu"} >
                {MenuItems.map((item,index)=>{
                    return (
                    <li key={index}>

                    <Link 
                    
                    to={item.path}
                    className={item.cName}
                    onClick={()=>{setClick(false)}}
                    >
                    {item.title}
                    </Link>
                    </li>
                    );
                })}
            </ul>
        </React.Fragment>
    )
}
