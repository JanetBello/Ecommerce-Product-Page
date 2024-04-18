import "./SwitchMode.css";

const SwitchMode = ({ handleChange, isChecked }) => {
  return (
    <button className="switch-container">
      <input
        type="checkbox"
        id="check"
        className="switch"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check">
        <abbr title="switch mode">mode</abbr>
      </label>
    </button>
  );
};

export default SwitchMode;
