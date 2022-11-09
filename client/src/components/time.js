import React from "react";
import { useEffect, useState } from "react";

export function Time() {
  const [runTime, setRunTime] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setRunTime(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return <box className="runtime">{runTime}</box>;
}

