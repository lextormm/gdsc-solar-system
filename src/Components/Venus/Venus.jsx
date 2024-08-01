import React from 'react'
import './Venus.css'
import venus from '../../assets/Venus2.png'
import diameter from '../../assets/Diameter.png'
import temp1 from '../../assets/Redtemp.png'

const Venus = () => {
  return (
    <div className='container' id='three'>
      <img className='venus2' src={venus} alt="" />
      <div className="content_venus">
        <h1 className='maintitle'>Venus</h1>
        <p>
        Venus is often referred to as Earth's "sister planet" due to its similar size and composition, but it stands out with its extremely inhospitable environment.
        </p>
      </div>

      
    <div className="ven_cards">
    <div className="card">
      <img src={diameter} alt="Example" className="card-image" />
      <div className="card__content">
        <p className="card__title">Diameter</p>
        <p className="card__description">
          9770 550 miles
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

export default Venus
