import React from 'react'
import "./about.css"
import rectangle from "../assets/Rectangle.png";
import gray from "../assets/Vector 1.png"
import middle from "../assets/Group 25.png"
import yellow from "../assets/Vector 3.png"
import yellow_bottom from "../assets/Vector 4.png"
import gray_bottom from "../assets/Vector 5.png"
import email from "../assets/Email.png"
import links from "../assets/Socials Links.png"
import { useTheme } from '../theme_context';
import text from "../assets/Group 25 (3).png"
import face from "../assets/facebook.png"
import two from "../assets/two.png"
import three from "../assets/three.png"
import four from "../assets/four.png"
import five from "../assets/five.png"
import six from "../assets/six.png"
import seven from "../assets/seven.png"
import bird from "../assets/bird.png"


function About() {
    const {theme,toggleTheme}=useTheme()
  return <>
  <div className='about'>
    <div className='about_top'>
    <div className='left'>
    <img src={gray} className='gray'/>
<img src={rectangle} className='hand'/>

    </div>
    <div className='middle'>
        {
            theme==="light"?<img src={middle}/>:<img src={text}/>
        }

    </div>
    <div className='right'>
        <img src={yellow}/>
    </div>
    </div>
 
  <div className='bottom'>
    <div className='bottom_left'>
  <div className='links'> 
  {
        theme==="light"?<img src={links} />:(<div className='dark_links'>
            <img src={face} style={{width:25, height:25}}className='face'/>
            <img src={two}style={{width:25, height:25}}/>
            <img src={three}style={{width:25, height:25}}/>
            <img src={four}style={{width:25, height:25}}/>
            <img src={five}style={{width:25, height:25}}/>
            <img src={six}style={{width:25, height:25}}/>
            <img src={seven}style={{width:25, height:25}}/>
            <img src={bird}style={{width:20, height:20}} className='bird'/>
        </div>)
    }
    
  </div>
  <div className='yellow_bottom'>
    <img src={yellow_bottom}/>
  </div>
  </div>
  <div className='bottom_right'>
  <div className='gray_bottom'>
    <img src={gray_bottom}/>
  </div>
  <div className='email'>
    <img src={email}/>
  </div>
  </div>
  </div>
  </div>
  </>
}

export default About
