import React, { useState, useEffect } from 'react';
import './App.css';

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({});

  const calculateTimeLeft = () => {
    const eventDate = new Date('2024-10-31T00:00:00'); // Set your target date here
    const difference = eventDate - new Date();

    let timeRemaining = {};
    if (difference > 0) {
      timeRemaining = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeRemaining;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);





  return (
    <div className="coming-soon-container">
      <div className="background-overlay"></div>
      <div className="content">
        <h1>We are launching soon!</h1>
        <p>Stay tuned, something awesome is coming...</p>

        <div className="countdown-timer">
          <div className="time-box">
            <span className="time">{timeLeft.days || 0}</span>
            <span className="label">Days</span>
          </div>
          <div className="time-box">
            <span className="time">{timeLeft.hours || 0}</span>
            <span className="label">Hours</span>
          </div>
          <div className="time-box">
            <span className="time">{timeLeft.minutes || 0}</span>
            <span className="label">Minutes</span>
          </div>
          <div className="time-box">
            <span className="time">{timeLeft.seconds || 0}</span>
            <span className="label">Seconds</span>
          </div>
        </div>

 

        <footer>
          <p>© 2024 Quantum Brains</p>
        </footer>
      </div>
      
    </div>
  );
};

export default ComingSoon;
