import React from 'react'
import "./header.css"
import Logo from "../assets/Logo-1.png"
import Moon from "../assets/Moon.png"
import { useTheme } from '../theme_context'
import sun from "../assets/Group 21.png"
import { Link } from 'react-router-dom'
import light_logo from "../assets/Group 15.png"

function Header() { 
    const {theme,toggleTheme}=useTheme()
console.log(theme)
    
    
  return <>
  <div className={'header ${theme}'}>
    <div className='header_left'>
        {
            theme==="light" ? <img src={Logo}/> : <img src={light_logo}/>
        }

<div className='name'>
    ANISH KUMAR SINHA
</div>
</div>

<div className='responsive'>
    <span></span>
    <span></span>
    <span></span>
</div>
<div className='header_right'>
    <div className='details'>
<ul>
    <li >  <Link to="/"style={{ color: theme === 'light' ? 'black' : 'white' }}  className='home'>Home</Link></li>
    <li ><Link to="/about" style={{ color: theme === 'light' ? 'black' : 'white' }} className='about_header'>About</Link></li>
    
    <li ><Link to="/resume" style={{ color: theme === 'light' ? 'black' : 'white' }} className='resume'>Resume</Link></li>
    <li ><Link to="/skill "style={{ color: theme === 'light' ? 'black' : 'white' }}  className='skill'>Skill</Link></li>
    <li ><Link to="/projects"style={{ color: theme === 'light' ? 'black' : 'white' }}  className='project'>Projects</Link></li>
    <li ><Link to="/contact" style={{ color: theme === 'light' ? 'black' : 'white' }} className='contact'>Contact</Link></li>
</ul>
</div>

<button
          type="button"
          onClick={toggleTheme}
          className="btn btn--icon nav__theme"
          aria-label="toggle theme"
          style={{ backgroundColor: "inherit" ,border:"none"}}
        >
          {theme === "dark" ?    <img src={sun}/>:<img src={Moon} width="40px"height="40px"alt='moon_image'/>}
        </button>


</div>

  </div>
  </>
}

export default Header
