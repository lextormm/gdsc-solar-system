import React from 'react'
import './Neptune.css'
import neptune2 from '../../assets/Neptune2.png'

const Neptune = () => {
  return (
    <div className='container' id='nine'>
      <img className='neptune2' src={neptune2} alt="" />
      <div className="content_neptune">
        <h1 className='maintitle'>Neptune</h1>
        <p>
        Neptune, often called the "Blue Giant," is the eighth and farthest planet from the Sun in our solar system. It is a gas giant known for its striking blue color and turbulent atmosphere.
        </p>
      </div>
    </div>
  )
}

export default Neptune
