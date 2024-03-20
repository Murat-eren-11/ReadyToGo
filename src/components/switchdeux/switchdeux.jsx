import "./switchdeux.css";
const Switchdeux = ({ switch2, setSwitch2 }) => {
  return (
    <div className="secondrow">
      <button
        className={switch2 ? "on active" : "on"}
        onClick={() => {
          setSwitch2(true);
        }}
      >
        On
      </button>
      <button
        className={switch2 ? "off" : "off active"}
        onClick={() => {
          setSwitch2(false);
        }}
      >
        Off
      </button>
    </div>
  );
};
export default Switchdeux;
