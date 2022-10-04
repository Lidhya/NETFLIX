import React from 'react'
import './NavBar.css'

function NavBar({setLogin}) {
  return (
    <div className='navbar'>
       <div className='nav_left'> 
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Recently Added</li>
          <li>My List</li>
        </ul>
        </div>
        <div className='nav_right'>
        <ul>
          <li><i className="fa-solid fa-magnifying-glass"></i></li>
          <li>KIDS</li>
          <li>DVD</li>
          <li><i className="fa-solid fa-bell"></i></li>
        </ul>
        <div className="dropdown">
        <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" /><i className="fa-solid fa-caret-down"></i>
        <div className="dropdown-content">
          <p onClick={()=>{setLogin(false)}}>Logout</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default NavBar;