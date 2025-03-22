import { useState } from "react";
import { Watch } from "../components/watch";

export function TimeDisplay() {
  const [currentTime, setCurrentTime] = useState<string>("");

  // Fungsi untuk menerima data waktu
  const handleTimeUpdate = (newTime: string) => {
    setCurrentTime(newTime);
  };

  return (
    <div className="width-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Watch onTimeUpdate={handleTimeUpdate} />
      <h1 className="text-[10vw]">{currentTime}</h1>
    </div>
  );
}
