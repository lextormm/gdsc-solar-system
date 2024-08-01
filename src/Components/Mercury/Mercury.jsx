import React from 'react'
import './Mercury.css'
import merc2 from '../../assets/Mercury2.png'
import diameter from '../../assets/Diameter.png'
import temp1 from '../../assets/Redtemp.png'
import temp2 from '../../assets/Bluetemp.png'

const Mercury = () => {
  return (
    <div className='container' id='two'>
      <img className='merc2' src={merc2} alt="" />
      <div className="content_mercury">
        <h1 className='maintitle'>Mercury</h1>
        <p>
        Mercury is the closest planet to the Sun and is known for its extreme temperatures and barren, rocky surface. It is one of the four terrestrial planets in our solar system, characterized by their solid, rocky composition.
        </p>
      </div>
      <div className="card2" id='abc'>
      <img src={diameter} alt="Example" className="card-image2" />
      <div className="card__content2">
        <p className="card__title2">Diameter</p>
        <p className="card__description2">
          887700 Miles
        </p>
      </div>
    </div>
    <div className='dibba'>
    <div className="card2">
      <img src={temp1} alt="Example" className="card-image2" />
      <div className="card__content2">
        <p className="card__title">Day-Temperature</p>
        <p className="card__description">
          5500 &deg; Celsius
        </p>
      </div>
    </div>
    <div className="card2">
      <img src={temp2} alt="Example" className="card-image2" />
      <div className="card__content2">
        <p className="card__title">Night-Temperature</p>
        <p className="card__description">
        180 &deg; Celsius
        </p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Mercury
