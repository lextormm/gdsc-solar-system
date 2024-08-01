import React from 'react'
import './Mars.css'
import mars2 from '../../assets/Mars2.png'
import arrow3 from '../../assets/Arrow3.png'
import temp1 from '../../assets/Redtemp.png'
import dia from '../../assets/Diameter.png'
import temp2 from '../../assets/Bluetemp.png'
const Mars = () => {
  return (
    <div className='container' id='five'>
      <img className='mars2' src={mars2} alt="" />
      <img className='arrow3' src={arrow3} alt="" />
      <div className="content_mars">
        <h1 className='maintitle'>Mars</h1>
        <p>
        Mars, often referred to as the "Red Planet," is the fourth planet from the Sun and has captivated human imagination for centuries with its reddish appearance and potential for hosting life.
        </p>
      </div>
      <div className="content_marsmoons">
        <h1 className='maintitle'>Martian Moons</h1>
        <p>
        Mars has two small moons, Phobos and Deimos, which are irregularly shaped and thought to be captured asteroids.
        </p>
      </div>
      <div className="mars_cards">
      <div className="card">
      <img src={dia} alt="Example" className="card-image" />
      <div className="card__content">
        <p className="card__title">Diameter</p>
        <p className="card__description">
          870,000 Miles
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
    <div className="card">
      <img src={temp2} alt="Example" className="card-image" />
      <div className="card__content">
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

export default Mars
