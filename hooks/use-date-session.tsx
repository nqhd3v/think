import dayjs from "dayjs";
import { useEffect, useState } from "react";

export const useDateSession = () => {
  const [current, setCurrent] = useState<string>(getCurrentSession);

  useEffect(() => {
    const t = setInterval(
      () => setCurrent(getCurrentSession()),
      1000 * 60 * 60
    );

    return () => {
      clearInterval(t);
    };
  });

  return current;
};

const getCurrentSession = (): string => {
  const now = dayjs();
  if (now.hour() < 12) return "morning";
  if (now.hour() < 17) return "afternoon";
  return "night";
};
