import React from 'react';
import './Footer.css';
import neptune3 from '../../assets/Neptune2.png';
import eco from '../../assets/eco.png';
import head from '../../assets/Universe.png';

const Footer = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Subscribing..");
    const formData = new FormData(event.target);

    formData.append("access_key", "94a791d9-4dcf-4526-8aeb-e7c2714317ef");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Subscribed!!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='container' id='ten'>
      <img className='neptune3' src={neptune3} alt="" />
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-text">Join The Education Community</p>
          <div className="subscribe-section">
            <p className="subscribe-title">Join the Education Community today and be part of a movement that's transforming minds and shaping tomorrows.</p>
            <form onSubmit={onSubmit} className="subscribe-form">
              <input type="email" name="email" placeholder="Enter your email" className="subscribe-input" required />
              <button type="submit" className="subscribe-button">Subscribe</button>
            </form>
            <div className="confirmation">{result}</div>
          </div>
          <div className="footer-logo">
            <div className='divhead'>
              <img className='leaf' src={eco} alt="" />
              <img className='navhead' src={head} alt="" />
            </div>
            <ul>
              <li className='copy'>ⓒ 2023 Solarsystemdesign</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
