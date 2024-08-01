import React from 'react'
import './Uranus.css'
import uranus2 from '../../assets/Uranus2.png'

const Uranus = () => {
  return (
    <div className='container' id='eight'>
      <img className='uranus2' src={uranus2} alt="" />
      <div className="content_uranus">
        <h1 className='maintitle'>Uranus</h1>
        <p>
        Uranus, often referred to as the "Ice Giant," is a unique and mysterious planet in our solar system. It stands out due to its distinct blue-green color and its unusual rotation axis.
        </p>
      </div>
    </div>
  )
}

export default Uranus
