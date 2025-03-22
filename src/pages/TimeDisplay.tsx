import { useState } from "react";
import { Watch } from "../components/watch";
import { DateDisplay } from "../components/date";

export function TimeDisplay() {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [currentDate, setCurrentDate] = useState<string>("");

  return (
    <section className="w-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
      <DateDisplay onDateUpdate={setCurrentDate} />
      <Watch onTimeUpdate={setCurrentTime} />
      <h2 className="text-[5vw]">{currentDate}</h2>
      <h1 className="text-[25vw]">{currentTime}</h1>
    </section>
  );
}
