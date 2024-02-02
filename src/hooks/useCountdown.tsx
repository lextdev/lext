import { useEffect, useState } from "react";

function useCountdown(seconds: number) {
  const [remainingTime, setRemainingTime] = useState(seconds);
  const [isCompleteRemainingTime, setCompleteRemainingTime] = useState(false);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  useEffect(() => {
    if (remainingTime <= 0) {
      setCompleteRemainingTime(true);
    }
  }, [remainingTime]);

  const formatTime = () => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };
  return {
    isCompleteRemainingTime,
    formatTime: formatTime(),
  };
}

export default useCountdown;
