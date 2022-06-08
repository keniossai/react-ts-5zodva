import React from 'react'


function Navbar(){
  return(
    <nav className="navbar bg-light fixed-top">
      <img src="https://i0.wp.com/www.primefaces.org/wp-content/uploads/2017/09/feature-react.png?ssl=1" alt="" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>  
  )
}

export default Navbar