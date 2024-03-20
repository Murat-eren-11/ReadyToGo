import { useState } from "react";
import Header from "./components/header/header";
import Switchun from "./components/switchun/switchun";
import Switchdeux from "./components/switchdeux/switchdeux";
import Switchtrois from "./components/switchtrois/switchtrois";
import Onoff from "./components/onoff/onoff";
import "./App.css";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <>
      <Header />
      <main>
        <div className="firstcol">
          <Switchun switch1={switch1} setSwitch1={setSwitch1} />
          <Switchdeux switch2={switch2} setSwitch2={setSwitch2} />
          <Switchtrois switch3={switch3} setSwitch3={setSwitch3} />
        </div>
        <div className="secondcol">
          <Onoff switch1={switch1} switch2={switch2} switch3={switch3} />
        </div>
      </main>
    </>
  );
}

export default App;
