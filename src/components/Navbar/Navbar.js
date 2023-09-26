import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.jpg";
import "./Navbar.css";
const Navbar = () => {
  function togglenav(){
    let elem=document.getElementsByClassName("mobile-menu")[0]
    elem.classList.toggle("none")
  }
  console.log("component")
  return (
    
    <>
      <nav className="main-container">
        <div className="logo-container">
          <img src={logo} alt="logo of male fashion" />
        </div>
        <div className="link-container nav-list">
          <li className="nav-link">
            <NavLink to="/" className="nav-link-inner">
              Home
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/shop" className="nav-link-inner">
              Shop
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/pages" className="nav-link-inner">
              Pages
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/blogs" className="nav-link-inner">
              Blogs
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/contact" className="nav-link-inner last">
              Contacts
            </NavLink>
          </li>
        </div>
        <div className="icon-container">
          <div className="icons">
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1.4rem"
              width="1.4rem"
            >
              <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" />
            </svg>
          </div>
          <div className="icons">
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1.4rem"
              width="1.4rem"
            >
              <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" />
            </svg>
          </div>
          <div className="icons last">
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1.4rem"
              width="1.4rem"
            >
              <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z" />
            </svg>
          </div>
        </div>

        <div className="ham-container" onClick={togglenav}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </nav>    
          <div className="mobile-menu none" >
          <li className="nav-link">
            <NavLink to="/" className="nav-link-inner">
              Home
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/shop" className="nav-link-inner">
              Shop
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/pages" className="nav-link-inner">
              Pages
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/blogs" className="nav-link-inner">
              Blogs
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/contact" className="nav-link-inner">
              Contacts
            </NavLink>
          </li>
          </div>

    </>
  );
};

export default Navbar;
