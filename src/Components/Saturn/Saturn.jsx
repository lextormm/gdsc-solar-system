import React from 'react'
import './Saturn.css'
import saturn2 from '../../assets/Saturn2.png'

const Saturn = () => {
  return (
    <div className='container' id='seven'>
      <img className='saturn2' src={saturn2} alt="" />
      <div className="content_saturn">
        <h1 className='maintitle'>Saturn</h1>
        <p>
        Saturn, often referred to as the "Ringed Planet," is known for its stunning system of rings that encircle the planet's equator. It's the sixth planet from the Sun and is one of the most visually distinctive objects in our solar system, with more than 80 known satellites.
        </p>
      </div>
      <div className="sat_card">
        
      </div>
    </div>
  )
}

export default Saturn
