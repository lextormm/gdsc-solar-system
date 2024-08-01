import React from 'react';
import './Hero.css';
import arrow from '../../assets/Downarrow.png';
import moon1 from '../../assets/Mercury.png';
import saturn from '../../assets/Saturn.png';
import jupiter from '../../assets/Jupiter.png';
import mars from '../../assets/Mars.png';
import earth from '../../assets/Earth.png';
import pluto from '../../assets/Pluto.png';
import venus from '../../assets/Venus.png';
import neptune from '../../assets/Neptune.png';

const Hero = () => {
  return (
    <div className="container planets-page" id='zero'>
      <div className="containertitle">
        <h1>Let's Get To Know Our Solar System Galaxy</h1>
        <div className="containercontent">
          <p>
            Embark on a cosmic journey across the ethereal expanse of the solar
            system Galaxy and follow the orchestration of the cosmos and the
            planets weaving stories of their timeless existence.
          </p>
          <div className="containerbutton">
          <button className="learn-more">Learn More</button>

          </div>
        </div>
        <img className="planet merc" src={moon1} alt="Mercury" />
        <img className="planet sat" src={saturn} alt="Saturn" />
        <img className="planet jup" src={jupiter} alt="Jupiter" />
        <img className="planet mars" src={mars} alt="Mars" />
        <img className="planet earth" src={earth} alt="Earth" />
        <img className="planet pluto" src={pluto} alt="Pluto" />
        <img className="planet venus" src={venus} alt="Venus" />
        <img className="planet nep" src={neptune} alt="Neptune" />
      </div>
    </div>
  );
};

export default Hero;
