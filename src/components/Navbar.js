import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.aboutText}</a>
        </li>
      
      
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    {/* <br /><br />Hello I am Navbar */}
    </div>
  )
}
//Manually set value of props , value of title : TextUtils , Value of aboutText : TextUtils, we can see these value 
//while calling Navbar in app.js file send these two values.
Navbar.propTypes = {
    title: PropTypes.string, 
    aboutText: PropTypes.string
 }

 //About isRequired ==> It we apply isRequired then we cant't left the coloumn empty, they need the value on those you have mentioned isRequired.
 //here I have mentioned isRequired in title & aboutText as well, so we can't left empty the coloum of title. 
Navbar.propTypes = {
    title: PropTypes.string.isRequired, 
    aboutText: PropTypes.string.isRequired
 }

 //Default value of props, this will work if not passed values of title & aboutText manually
//  Navbar.defaultProps = {
//     title: 'Set Title here', 
//     aboutText: 'About text here' 
//  }
 
