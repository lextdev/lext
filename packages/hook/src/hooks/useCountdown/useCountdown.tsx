import { useEffect, useState } from "react"

const useCountdown = () => {
  const [time, setTime] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1)
    }, 1000)

    if (time === 0) {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [time, setTime])

  const formatTime = () => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`
  }

  return {
    setTime,
    time,
    formatTime,
  }
}

export default useCountdown
