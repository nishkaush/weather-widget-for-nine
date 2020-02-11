import React from "react";

const tempRadioButtons = [
  { name: "degreesRadioBtn", label: "C (degrees)", value: "degrees" },
  { name: "farenheitRadioBtn", label: "F (farenheit)", value: "farenheit" }
];

const windRadioButtons = [
  { name: "windOn", label: "On", value: "on" },
  { name: "windOff", label: "Off", value: "of" }
];

const CustomForm = ({
  title,
  setTitle,
  tempType,
  setTempType,
  wind,
  setWind
}) => {
  return (
    <div className="col" style={{ display: "flex" }}>
      <form>
        {/* For typing title */}
        <div className="form-group">
          <label htmlFor="widgetTitle">Title</label>
          <input
            name="widgetTitle"
            id="widgetTitle"
            type="text"
            placeholder="Title of Widget"
            className="form-control"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>

        {/* For choosing temperature */}
        <div className="temp-container">
          {tempRadioButtons.map(btn => (
            <React.Fragment key={btn.name}>
              <input
                key={btn.name}
                className="form-radio-input"
                type="radio"
                name={btn.name}
                id={btn.name}
                value={btn.value}
                checked={tempType === btn.value}
                onChange={() =>
                  btn.value !== tempType ? setTempType(btn.value) : null
                }
              />
              <label key={btn.name + "label"} htmlFor={btn.name}>
                {btn.label}
              </label>
            </React.Fragment>
          ))}
        </div>

        {/* For choosing wind */}
        <div className="wind-container">
          {windRadioButtons.map(btn => (
            <React.Fragment key={btn.name}>
              <input
                key={btn.name}
                className="form-radio-input"
                type="radio"
                name={btn.name}
                id={btn.name}
                value={btn.value}
                checked={wind === btn.value}
                onChange={() =>
                  btn.value !== wind ? setWind(btn.value) : null
                }
              />
              <label key={btn.name + "label"} htmlFor={btn.name}>
                {btn.label}
              </label>
            </React.Fragment>
          ))}
        </div>
      </form>
    </div>
  );
};

export default CustomForm;
