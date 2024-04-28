import { useState } from "react";
import "./App.css";
import d20 from "../src/imgs/d20_green.png";

function App() {
  const [rngChore, setRngChore] = useState("");
  const [isRolling, setIsRolling] = useState(false);
  const [showDice, setShowDice] = useState(true);

  const choreList = [
    "Laundry",
    "Sweep Floors",
    "Wipe Surfaces",
    "Dishes",
    "Put Laundry Away",
    "Mop Laundry Room",
    "Sweep Laundry Room",
    "Clean Kruig",
    "Clean Nightstands",
    "Vacuum",
    "Put Shoes Away",
    "Dust",
    "Sweep Bathroom",
    "Clean Toilet",
    "Clean Bathroom Counter",
    "Clean out fridge",
    "Put Dishes Away",
    "Mop Main Floor",
    "Clean Tub",
    "Wash Sheets",
    "Clean Closet",
    "Make Bed",
  ];

  const randomChore = () => {
    setIsRolling(true);
    setTimeout(() => {
      setIsRolling(false);
      const randomIndex = Math.floor(Math.random() * choreList.length);
      const randomChoreChosen = choreList[randomIndex];
      setRngChore(randomChoreChosen);
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
      <div className="text-container">
      {rngChore !== "" && (
        <>
          <div className="chore-result">
          <p className='chosen-chore'>{rngChore}!</p>
          <button className="reset-button" onClick={() => window.location.reload()}>Reset</button>
          </div>
        </>
      )}
      </div>
    </>
  );
}

export default App;
