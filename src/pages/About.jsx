import React from 'react'
import coding from '../assets/coding.svg'

const About = () => {
  return (
    <div className='genediv'>
      <div>
        <img src={coding} alt="coding" />
      </div>
        <div className='baslik'>
            <h1>ABOUT THIS PAGE</h1>
        </div>
        <div className='tools'>
            <p>React</p>
            <p>HTML</p>
            <p>TAILWIND CSS</p>
            <p>JAVASCRIPT</p>
            <p>AXIOS</p>
            <p>REACT ROUTER DOM v6</p>
            <p>REACT ICONS</p>
        </div>
        <div className='mylinks'>
            <h1>Social Media Links</h1>
            <a href="https://www.linkedin.com/in/menfavakitsayan/">Linkedin</a>
            <a href="https://github.com/qxan">Github</a>
            <a href="https://github.com/qxan/react-reacipe-app">Source Code</a>
        </div>
    </div>
  )
}

export default About