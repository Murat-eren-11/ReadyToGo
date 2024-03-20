import "./switchun.css";
const Switchun = ({ switch1, setSwitch1 }) => {
  return (
    <div className="firstrow">
      <button
        className={switch1 ? "on active" : "on"}
        onClick={() => {
          setSwitch1(true);
        }}
      >
        On
      </button>
      <button
        className={switch1 ? "off" : "off active"}
        onClick={() => {
          setSwitch1(false);
        }}
      >
        Off
      </button>
    </div>
  );
};
export default Switchun;
