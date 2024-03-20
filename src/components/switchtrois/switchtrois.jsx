import "./switchtrois.css";
const Switchtrois = ({ switch3, setSwitch3 }) => {
  return (
    <div className="firstrow">
      <button
        className={switch3 ? "on active" : "on"}
        onClick={() => {
          setSwitch3(true);
        }}
      >
        On
      </button>
      <button
        className={switch3 ? "off" : "off active"}
        onClick={() => {
          setSwitch3(false);
        }}
      >
        Off
      </button>
    </div>
  );
};
export default Switchtrois;
