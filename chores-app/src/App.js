import "./App.css";
import { useState } from "react";
import d20 from "../src/imgs/d20_green.png";
import quotes from "./Quotes";
import choreList from "./Chores";

function App() {
  const [rngChore, setRngChore] = useState("");
  const [rngQuote, setRngQuote] = useState("");
  const [isRolling, setIsRolling] = useState(false);
  const [showDice, setShowDice] = useState(true);

  const randomChore = () => {
    setIsRolling(true);
    setTimeout(() => {
      setIsRolling(false);
      const randomIndex = Math.floor(Math.random() * choreList.length);
      const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
      const randomChoreChosen = choreList[randomIndex];
      const randomQuoteChosen = quotes[randomQuoteIndex];
      setRngChore(randomChoreChosen);
      setRngQuote(randomQuoteChosen);
      setShowDice(false);
    }, 2000);
  };

  return (
    <>
    {showDice === true &&
    <div className="img-container">
      <img
        className={`randomizerImage ${isRolling ? "roll" : ""}`}
        src={d20}
        alt="Dice"
        onClick={randomChore}
        style={{ cursor: isRolling ? "not-allowed" : "pointer" }}
      />
      </div>
    }
      {rngChore !== "" && (
        <>
      <div className="text-container">
          <div className="chore-result">
          <p className='chosen-chore'>{rngChore}!</p>
          <button className="reset-button" onClick={() => window.location.reload()}>Reset</button>
          </div>
          <div className="quote-container">
          <p className="quote-text">{rngQuote}</p>
          </div>
      </div>
        </>
      )}
    </>
  );
}

export default App;
