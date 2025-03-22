import { useEffect } from "react";

export function DateDisplay({ onDateUpdate }: { onDateUpdate: (date: string) => void }) {
  useEffect(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    onDateUpdate(formattedDate);
  }, [onDateUpdate]);

  return null;
}
