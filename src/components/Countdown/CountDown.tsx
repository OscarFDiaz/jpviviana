import { useEffect, useState } from 'react';

import COUNTDOWN from '/countdown.webp';

import sx from './CountDown.module.css';

const getTimeLeft = (): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} => {
  const now = new Date();
  const targetDate = new Date(now.getFullYear(), 4, 31, 23, 59, 59); // 31 de mayo
  if (now > targetDate) {
    targetDate.setFullYear(targetDate.getFullYear() + 1); // Si ya pasó, contar para el siguiente año
  }

  const difference = targetDate.getTime() - now.getTime();
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

export const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Limpia el intervalo al desmontar
  }, []);

  return (
    <div className={sx.container} id="countdown">
      <h2 className={sx.title}>Cuenta regresiva</h2>

      <div style={{ backgroundImage: `url(${COUNTDOWN})` }} className={sx.image}>
        <p>
          {timeLeft.days} días, {timeLeft.hours} horas, {timeLeft.minutes} minutos,{' '}
          {timeLeft.seconds} segundos
        </p>
      </div>
    </div>
  );
};
