import { useState, useEffect } from "react";

interface WatchProps {
  onTimeUpdate: (newTime: string) => void;
}

export function Watch({ onTimeUpdate }: WatchProps) {
  const getFormattedTime = () => {
    return new Date().toLocaleTimeString("en-GB", { hour12: false });
  };

  const [,setTime] = useState<string>(getFormattedTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = getFormattedTime();
      setTime(newTime);
      onTimeUpdate(newTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [onTimeUpdate]);

  return null;
}
