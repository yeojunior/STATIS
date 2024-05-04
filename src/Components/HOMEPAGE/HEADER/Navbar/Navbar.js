import React, { useState } from 'react'
import './Navbar.css'
function Navbar() {
  const[clicked,setClicked]=useState(false)
  const[link,setLink]=useState(false)
  return (
    <>
      <nav>

      <h1>STATIS</h1>
      {/*  fin du  logo */}

      {/* debut de creation des liens */}

          <div >
            <ul id='Navbar' className={clicked?'#Navbar Active':'#Navbar'}>
              {/* <li> <a className='Active'>home</a></li> */}
              <li className='btn_sign'><a>connexion</a></li>
              <li className='btn_sign'><a>connexion</a></li>
            </ul>
          </div>

      {/* fin de creation des liens */}

      {/*debut  le toogle pour le mobile */}

          <div id='mobile'>
          <i id='bar' 
          className={clicked?'fas fa-times':'fas fa-bars'} 
          onClick={() => setClicked(!clicked)}>

          </i>
          </div>
       {/*fin le toogle pour le mobile */}

      </nav>
    </>
  )
}

export default Navbar