import React from 'react'
import "./home.css"
import profile from "../assets/Image.png"
import hello from "../assets/Hello.png"
import anish from "../assets/Anish Wave.png"
import tag from "../assets/Tag Line.png"
import buttons from "../assets/Buttons.png"
import links from "../assets/Socials Links.png"
import email from "../assets/Email.png"
import { useTheme } from '../theme_context'
import anish_dark from "../assets/I’m Anish.png";
import dark_designation from "../assets/dark_designation.png"
import face from "../assets/facebook.png"
import two from "../assets/two.png"
import three from "../assets/three.png"
import four from "../assets/four.png"
import five from "../assets/five.png"
import six from "../assets/six.png"
import seven from "../assets/seven.png"
import bird from "../assets/bird.png"
import email_dark from "../assets/email_dark.png"
import emailLine from "../assets/emailLine.png"


function Home() {
    const {theme,toggleTheme}=useTheme()
  return <>
  <div className='Home'>
    <div className='home_left'>
<div className='hello'>
    
    <img src={hello}/>
</div>
<div className='anish'>
    {
        theme==="light" ? <img src={anish}/> :<img src={anish_dark}/>
    }
    
</div>
<div className='tag'>
    {
        theme==="light" ? <img src={tag}/> : <img src={dark_designation}/>
    }
    
</div>
<div className='links_buttons'>
<div className='links'>
    {
        theme==="light"?<img src={links} />:(<div className='dark_links'>
            <img src={face} style={{width:20, height:20}}className='face'/>
            <img src={two}style={{width:20, height:20}}/>
            <img src={three}style={{width:20, height:20}}/>
            <img src={four}style={{width:20, height:20}}/>
            <img src={five}style={{width:20, height:20}}/>
            <img src={six}style={{width:20, height:20}}/>
            <img src={seven}style={{width:20, height:20}}/>
            <img src={bird}style={{width:15, height:15}} className='bird'/>
        </div>)
    }
    
</div>
<div className='buttons'>
    <img src={buttons}/>
</div>
</div>
    </div>
    <div className='home_right'>
        <img src={profile}/>
        <span>
            {
                theme==="light"?<img src={email}/>:<img src={email_dark}/>
            
                
            }
            
        </span>
    </div>
  </div>
  </>
}

export default Home
