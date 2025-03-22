import { useState, useEffect } from "react";

// Menentukan tipe untuk props
interface WatchProps {
  onTimeUpdate: (newTime: string) => void;
}

export function Watch({ onTimeUpdate }: WatchProps) {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

  // Update time setiap detik
  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = new Date().toLocaleTimeString();
      setTime(newTime);
      // Kirim data waktu ke komponen lain melalui callback
      onTimeUpdate(newTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [onTimeUpdate]);

  return null; // Komponen ini hanya menangani data, tidak menampilkan apa pun
}
