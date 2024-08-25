import React, { useEffect } from "react";
import './Nav.css';
import{Link, useLocation} from 'react-router-dom'

export default function Navbar(){
    /*let location = useLocation();
    useEffect(()=>{
        let path = location.pathname;
        console.log(location.pathname);
    },[location]);

   const Li = document.querySelector('Link');

   Li.addEventListener('click',handleOnClick);

   const handleOnClick = ()=>{
    Li.style.color('white')
   };*/
    return(
        <nav>
            <Link className="logo" to="/home">iNotebook</Link>
            <ul className="tags">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/mynotes">My-notes</Link></li>
                
            </ul>
        </nav>
    );
}