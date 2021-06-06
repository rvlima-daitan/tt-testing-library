import { useEffect, useState } from "react";

const useTimer = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTimer((it) => it + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return timer;
};

export default useTimer;
