import React from "react";

import logo from "./logo.svg";
import "./App.css";
import CountDownTimer from "./components/Countdown/CountDownTimer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CountDownTimer
          endDate={new Date("2022-06-25T14:57:00")}
          onTimeout={() => {
            console.log("FIN");
          }}
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
