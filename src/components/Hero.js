import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className="middle">
          <div className = "left">
            <h1 className = "hero-title">We<br/> Make<br/>Good <br/>Shit</h1>
          </div>
          <div className = "right"></div>
        </div>
        <div className = "bottom">
            <div className='bottom-left'></div>
            <div className='bottom-right'>
                <h2 className="bottom-title">Dogstudio is a multidisciplinary<br/> creative studio at the intersection<br/> of art, design and technology.</h2>
                <br/>
                <p className = "bottom-text">Our goal is to deliver amazing experiences that make <br/> people talk, and build strategic value for brands, tech, <br/> entertainment, arts & culture.</p>
            </div>
            <div className="first-line"></div>
            <div className="second-line"></div>
        </div>
    </div>
  )
}

export default Hero
