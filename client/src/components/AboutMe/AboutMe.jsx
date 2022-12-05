import React from 'react';
import NavBarBack from '../NavBarBack/NavBarBack';
import me from '../../img/me.jpeg';
import iconAboutMe from '../../img/about.gif';
import techskill from '../../img/techskill.png';
import linkedin from '../../img/linkedin.png';
import github from '../../img/github.png';

import'./AboutMe.css';

function handlerClick(event) {
  event.preventDefault();
  if(event.target.name === 'github') window.open('https://github.com/aronfraga');
  if(event.target.name === 'linkedin') window.open('https://linkedin.com/in/aaron-fraga-4036a8244');
}

export default function AboutMe() {
  return (
    <>
      <nav className='aboutMeNavBarBack'>
        <NavBarBack />
      </nav>
      <div className='mainContainerAboutMe'>
        <div className='containerTop'>
          <div className='imgAboutMe'>
            <img src={me} alt='img not found'/>
          </div>
          <div className='titleAboutMe'>
            <h1 className='titleName'>Aaron Fraga</h1>
            <h2 className='titleDev'>Full-Stack Developer</h2>
            <div className='contactIcon'>
              <img name='github' className='gitIcon' src={github} alt='img not found' onClick={(event) => handlerClick(event)}/>
              <img name='linkedin' className='likedinIcon' src={linkedin} alt='img not found' onClick={(event) => handlerClick(event)}/>
            </div>
          </div>   
        </div>
        <div className='containerBottom'>
          <div className='techAboutMe'>
            <img src={techskill} alt='img not found'/>
          </div>
          <div className='iconAboutMe'>
            <img src={iconAboutMe} alt='img not found'/>
          </div>
        </div>
      </div>
    </>
  );
}