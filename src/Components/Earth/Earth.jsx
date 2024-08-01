import React from 'react'
import './Earth.css'
import earth2 from '../../assets/Earth2.png'
import rocket from '../../assets/Rocket.png'
import arrow2 from '../../assets/Arrow2.png'

const Earth = () => {
  return (
    <div className='container' id='four'>
      <img className='earth2' src={earth2} alt="" />
      <img className="rocket" src={rocket} alt="" />
      <img className='arrow2' src={arrow2} alt="" />
      <div className="content_earth">
        <h1 className='maintitle'>Earth</h1>
        <p>
        Earth is the third planet from the Sun and the only known planet to support life. Earth is the only planet known to harbor life. It's a diverse and dynamic world with a wide range of ecosystems, climates, and geological features.
        </p>
      </div>
        <div className='content_moon'>
          <h1 className="maintitlee">Moon Planet</h1>
          <p>
          Earth has one natural satellite, the Moon, which plays a role in stabilizing the planet's rotation and tides. The Moon's gravitational pull causes ocean tides to rise and fall.
          </p>
        </div>
    </div>
  )
}

export default Earth
