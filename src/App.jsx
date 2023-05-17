import { useState } from "react";
import "./App.css";

function Tirage() {
  const [count, setCount] = useState(0);
  const [historique, setHistoriqueTirage] = useState([]);
  const handleClick = () => {
    setCount(Math.floor(Math.random() * 90));
    if (historique.includes(count) == true) {
      alert("Le numero exist déjà dans le tableau");
    } else {
      setHistoriqueTirage([...historique, count]);
      console.log("false");
    }

    console.log("tableau", historique);
  };

  const renderMyArray = () => {
    return historique.map((number, key) => <p key={key}>{number}</p>);
  };

  return (
    <>
      <div className="result">
        <h1> Bienvenu au loto</h1>
        <button onClick={handleClick}>Tirer au Sort</button>
        <p>Le number tiré au sort est : {count}</p>
        {renderMyArray()}
      </div>
    </>
  );
}

export default Tirage;
