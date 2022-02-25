import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import burger from '../images/icon-hamburger.svg'
import chevron from '../images/icon-chevron.svg'

const Nav = ({planetsChange, openOrClose, openMenu}) => {
  


  return (
    <header>
      <h1>THE PLANETS</h1>
      <img onClick={openMenu} className='burger' src={burger} alt="burger" />
      <nav className={`${!openOrClose ? 'closeNav' : ""}`}>
        <div className='navElement'>  
          <NavLink to="/reactproject3/" onClick={planetsChange}>        
          <span style={{background: "#DEF4FC"}}></span>mercury</NavLink>
          <img src={chevron} alt="chevron" /> 
        </div>

        <div className='navElement'>  
          <NavLink to="/reactproject3/venus" onClick={planetsChange}>   
          <span style={{background: "#F7CC7F"}}></span>venus</NavLink>
          <img src={chevron} alt="chevron" />   
        </div>

        <div className='navElement'>  
          <NavLink to="/reactproject3/earth"  onClick={planetsChange}>   
          <span style={{background: "#545BFE"}}></span>earth</NavLink>
          <img src={chevron} alt="chevron" />   
        </div>

        <div className='navElement'>  
          <NavLink to="/reactproject3/mars" onClick={planetsChange}>    
          <span style={{background: "#FF6A45"}}></span>mars</NavLink>
          <img src={chevron} alt="chevron" />    
        </div>

        <div className='navElement'>  
          <NavLink to="/reactproject3/jupiter" onClick={planetsChange}> 
          <span style={{background: "#ECAD7A"}}></span>jupiter</NavLink>
          <img src={chevron} alt="chevron" /> 
        </div>

        <div className='navElement'>  
          <NavLink to="/reactproject3/saturn" onClick={planetsChange}>  
          <span style={{background: "#FCCB6B"}}></span>saturn</NavLink>
          <img src={chevron} alt="chevron" />  
        </div>

        <div className='navElement'>  
          <NavLink to="/reactproject3/uranus" onClick={planetsChange}>  
          <span style={{background: "#65F0D5"}}></span>uranus</NavLink> 
          <img src={chevron} alt="chevron" />   
        </div>

        <div className='navElement'>  
          <NavLink to="/reactproject3/neptune" onClick={planetsChange}> 
          <span style={{background: "#497EFA"}}></span>neptune</NavLink> 
          <img src={chevron} alt="chevron" />  
        </div>

      </nav>
    </header>
  )
}

export default Nav