import React, {useState, useEffect} from 'react';
import './Navbar.css';

const Navbar = () => {

  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100){
        handleShow(true);
      } else handleShow(false);
    });
  
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);
  

  


  return (
    <div className= {`nav ${show && "nav_black"}`}> 
        <img 
        className='nav_logo'
        src='../assets/netflix_logo.png'
        alt='Netflix Logo' />
        <img 
        className='nav_avatar'
        src='../assets/netflix_emoji.jpg'
        alt='Netflix Logo' />
    </div>
  )
}

export default Navbar;