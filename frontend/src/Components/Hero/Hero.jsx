import React, { useEffect } from 'react';
import './Hero.css';
// import hand_icon from '../Assets/icon2.png';
import arrow_icon from '../Assets/icons8-arrow-30.png';
// import Earphone_img from '../Assets/Earphone.png';
import img_1 from '../Assets/www.galaxystore.com.jpg';
import img_2 from '../Assets/shop now - www.galaxystore.com.png';
import img_3 from '../Assets/Sale2Copy.png';
import img_4 from '../Assets/www.galaxystore.com.jpg';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/latestcollection');
  };

  useEffect(() => {
    let counter = 1;
    const interval = setInterval(() => {
      const radio = document.getElementById('radio' + counter);
      if (radio) {
        radio.checked = true;
      }
      counter++;
      if (counter > 4) {
        counter = 1;
      }
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div className='hand-hand'>
          <div className="hand-hand-icon">
            <p>new</p>
            {/* <img src={hand_icon} alt="" /> */}
          </div>
          <p>Collections</p>
          <h1>for everyone</h1>
        </div>
        <div className="hero-latest-btn">
          <button onClick={handleClick}>Latest Collection  <img src={arrow_icon} alt="" /> </button>
        </div>
      </div>
      <div className="hero-right">
        {/* <img src={Earphone_img} alt="" /> */}
      </div>
      <div className='slider'>
        <div className="slides">
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />

          <div className='slide first'>
            <img src={img_1} alt='' />
          </div>
          <div className='slide'>
            <img src={img_2} alt='' />
          </div>
          <div className='slide'>
            <img src={img_3} alt='' />
          </div>
          <div className='slide'>
            <img src={img_4} alt='' />
          </div>
          <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
