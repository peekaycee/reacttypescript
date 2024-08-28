// import { Link } from 'react-router-dom'
// import { useState } from 'react';
import './Landinpage.css'
import HeroImage from '../../assets/images/Hero-image.png'

const LandingPage = () => {
  
  // const [darkMode, setDarkMode] = useState(false);
  
  // const ToggleDarkmode = () => {
  //   setDarkMode(!darkMode)    

  //   if (!darkMode){
  //     document.documentElement.classList.remove('dark');
  //   } else {
  //     document.documentElement.classList.add('dark');
  //   }   
  // }

  return (
    <section>
        <nav className="navigationBar">
          <h1 className="logo">Besnik.</h1>
          <ul className="navLinks">
            <li>Home</li>
            <li>Features</li>
            <li>Services</li>
            <li>Listed</li>
            <li>Contact</li>
          </ul>
          <ul className="authLinks">
            <li>Sign up</li>
            <li>Register</li>
          </ul>
        </nav>
        <div className="hero">
          <div className='hero-text'>
            <p>Welcome to Besnik Agency</p>
            <h1>Discover a place you'll love to live.</h1>
            <p>Get the best real estate deals first, before they hit the mass market! hot foreclosure deals with one simple seach</p>
            <button type='button'>More About Us</button>
          </div>
          <div className='image'>
            <img src={HeroImage} alt="An image of a house" />
          </div>
        </div>
    </section>
  );
};

export default LandingPage;
