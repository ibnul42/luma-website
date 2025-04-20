"use client";
import { useEffect, useState } from "react";

export default function LocalTimeAndPlace() {
  const [dateTime, setDateTime] = useState("");
  const location = "Dhaka, Bangladesh";

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const formattedDate = now.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });

      // Static location for Dhaka, Bangladesh

      setDateTime(`${formattedDate} - ${formattedTime}`);
    };

    updateTime(); // run once immediately
    const interval = setInterval(updateTime, 5 * 1000); // update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <p>{dateTime}</p>
      <p className="opacity-70">Local time in {location}</p>
    </div>
  );
}
