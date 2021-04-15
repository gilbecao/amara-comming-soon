import React, { useEffect, useState } from "react";

import "./counter.css";

function calculateTimeLeft() {
  const difference = +new Date("06-06-2021") - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
}

export default function Counter() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const id = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  });

  return (
    <div className="counter">
      <div className="counter__item">
        <div className="item__circle">{timeLeft.days}</div>
        DAYS
      </div>
      <div className="counter__item">
        <div className="item__circle">{timeLeft.hours}</div>
        HOURS
      </div>
      <div className="counter__item">
        <div className="item__circle">{timeLeft.minutes}</div>
        MINUTES
      </div>
      <div className="counter__item">
        <div className="item__circle">{timeLeft.seconds}</div>
        SECONDS
      </div>
    </div>
  );
}
