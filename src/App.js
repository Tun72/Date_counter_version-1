import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <>
      <div>
        <button
          onClick={() => {
            setStep((s) => s - 1);
          }}
        >
          -
        </button>
        <span>Step: {step}</span>
        <button
          onClick={() => {
            setStep((s) => s + 1);
          }}
        >
          +
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            setCount((c) => c - step);
          }}
        >
          -
        </button>
        <span>Count: {count}</span>
        <button
          onClick={() => {
            setCount((c) => c + step);
          }}
        >
          +
        </button>
      </div>

      {count > 0 ? (
        <p>
          {count} day from Today is {date.toDateString()}
        </p>
      ) : count < 0 ? (
        <p>
          {" "}
          {count * -1} day ago was is {date.toDateString()}
        </p>
      ) : (
        <p>Today is {date.toDateString()}</p>
      )}
    </>
  );
}
