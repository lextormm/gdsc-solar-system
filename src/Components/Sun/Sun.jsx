import React from 'react'
import sun from '../../assets/Sun2.png'
import './Sun.css'
import diameter from '../../assets/Diameter.png'
import temp1 from '../../assets/Redtemp.png'

const Sun = () => {
  return (
    <div className='container' id='one'>
      <img className='sun' src={sun} alt="" />
      <div className="content">
        <h1 className='maintitle'>Sun</h1>
        <p>
          The Sun is a huge, glowing ball of hot plasma at the centre of our solar system and provides the vital energy needed for life on Earth. This energy radiates outward in the form of light and heat, providing warmth and light to the entire solar system.
        </p>
      </div>
      <div className="sun_card">
      <div className="card">
      <img src={diameter} alt="Example" className="card-image" />
      <div className="card__content">
        <p className="card__title">Project Name</p>
        <p className="card__description">
          33333
        </p>
      </div>
    </div>
    <div className="card">
      <img src={temp1} alt="Example" className="card-image" />
      <div className="card__content">
        <p className="card__title">Day-Temperature</p>
        <p className="card__description">
          5500 &deg; Celsius
        </p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Sun
