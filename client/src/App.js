import React from "react";
import "./App.css";
import Players from "./components/Players";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  const [darkMode, setDarkMode, handleClick] = useDarkMode();

  const buttonText = darkMode === false ? "To Dark" : "To White";
  return (
    <div className={darkMode === false ? "App" : `AppDark`}>
      <button data-testid="button" className="btn" onClick={handleClick}>
        {buttonText}
      </button>
      <Players data-testid="players" />
    </div>
  );
}

export default App;
