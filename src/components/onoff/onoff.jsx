import React from "react";
import "./onoff.css";

const Onoff = ({ switch1, switch2, switch3 }) => {
  console.log("switch1:", switch1);
  console.log("switch2:", switch2);
  console.log("switch3:", switch3);
  // Vérifie si tous les commutateurs sont activés
  const allSwitchesOn = switch1 && switch2 && switch3;

  return (
    <div className={`onoff-container ${allSwitchesOn ? "oui" : "non"}`}>
      {allSwitchesOn ? <p>Go !</p> : <p>No way !</p>}
    </div>
  );
};

export default Onoff;
