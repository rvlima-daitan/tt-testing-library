import { useState } from "react";
import "./App.css";
import useTimer from "./useTimer";

function App() {
  const timer = useTimer();
  const [result, setResult] = useState({});

  const onClick = () => {
    fetch("https://swapi.dev/api/starships/9/")
      .then((it) => it.json())
      .then((it) => setResult(it));
  };
  return (
    <div>
      {Object.keys(result).length > 0 && (
        <span data-testid="result">{JSON.stringify(result)}</span>
      )}
      <button onClick={onClick}>Request</button>
      <small>{timer}</small>
    </div>
  );
}

export default App;
