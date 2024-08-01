import React from 'react'
import './Jupiter.css'
import jupiter2 from '../../assets/Jupiter2.png'

const Jupiter = () => {
  return (
    <div className='container' id='six'>
      <img className='jupiter2' src={jupiter2} alt="" />
      <div className="content_jupiter">
        <h1 className='maintitle'>Jupiter</h1>
        <p>
        Jupiter, the largest planet in our solar system, is a gas giant known for its immense size, powerful storms, and numerous moons.
        </p>
      </div>
    </div>
  )
}

export default Jupiter
