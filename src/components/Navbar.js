// import React, { useState } from 'react';

// import '../styles/navbar.css'

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
// <div className='navbar-logo'>
//           <img src= 'https://img.freepik.com/premium-vector/beauty-salon-golden-banner-scissors-comb-design_261524-3420.jpg?w=740' alt='image'/>
//           </div>
       
//         <div className="menu-icon" onClick={toggleMenu}>
//           <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'} />
//         </div>
//         <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
//           <li className="nav-item">
//             <div  className="nav-links" onClick={() => setIsOpen(false)}>
//              <a href='/'>Home</a> 
//             </div>
//           </li>
//           <li className="nav-item">
//           <div  className="nav-links" onClick={() => setIsOpen(false)}>
//              <a href='/Services'>Services</a> 
//             </div>
//           </li>
//           <li className="nav-item">
//           <div  className="nav-links" onClick={() => setIsOpen(false)}>
//              <a href='/Stylist'>Stylist</a> 
//             </div>
//           </li>
//           <li className="nav-item">
//           <div  className="nav-links" onClick={() => setIsOpen(false)}>
//              <a href='/Bookingform'>Booking</a> 
//             </div>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import { FaBars, FaTimes } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className='navbar-logo'>
          <img src='https://img.freepik.com/premium-vector/beauty-salon-golden-banner-scissors-comb-design_261524-3420.jpg?w=740' alt='logo'/>
        </div>
        
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? '<FaTimes/>' : '<FaBars/>'} />
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links" onClick={() => setIsOpen(false)}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/stylist" className="nav-links" onClick={() => setIsOpen(false)}>
              Stylist
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/booking" className="nav-links" onClick={() => setIsOpen(false)}>
              Booking
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
