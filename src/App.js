import Plan from './plan.jpg';
import React, { useEffect } from 'react';
import './App.css';

const SinglePage = () => {
  const deadline = '2021-10-31';
  const [dateObj, setDateObj] = React.useState({});
  useEffect(() => {
    const timeinterval = setInterval(() => {
      setDateObj(updateTimer())
      if (updateTimer().total <= 0) {
        clearInterval(timeinterval);
      }
    }, 1000);

  })
  const updateTimer = () => {
    const total = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { days, hours, minutes, seconds, total };
  }
  return (
    <div className="App" id="time">
      <header className="App-header">
        <p>Journey starts...</p>
        <div style={{display: "flex"}}>
          <h3>{`Days ${dateObj?.days} `}</h3>
          <h3>{`Hours ${dateObj?.hours} `}</h3>
          <h3>{`Minutes ${dateObj?.minutes} `}</h3>
          <h3>{`Seconds ${dateObj?.seconds} `}</h3>
        </div>
        <img src={Plan} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default SinglePage;
