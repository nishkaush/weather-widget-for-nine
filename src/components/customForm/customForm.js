import React from "react";

const tempRadioButtons = [
  { name: "degreesRadioBtn", label: "&#8451;", value: "degrees" },
  { name: "farenheitRadioBtn", label: "&#8457;", value: "farenheit" }
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
    <div className="col" style={{ display: "flex", textAlign: "left" }}>
      <form className="px-4 py-4">
        {/* For typing title */}
        <div className="form-group">
          <label className="h6" htmlFor="widgetTitle">
            Title
          </label>
          <input
            name="widget title"
            id="widgetTitle"
            type="text"
            placeholder="Title of Widget"
            className="form-control"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>

        {/* For choosing temperature */}

        <fieldset className="temp-container">
          <legend className="h6 pt-2">Temperature</legend>
          <div className="d-flex justify-content-between">
            {tempRadioButtons.map(btn => (
              <div key={btn.name}>
                <label
                  key={btn.name + "label"}
                  htmlFor={btn.name}
                  aria-label={btn.value}
                >
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
                  <span
                    className="pl-2 h6"
                    dangerouslySetInnerHTML={{ __html: btn.label }}
                    aria-label={btn.value}
                  ></span>
                </label>
              </div>
            ))}
          </div>
        </fieldset>

        {/* For choosing wind */}
        <fieldset className="wind-container pt-2">
          <legend className="h6">Wind</legend>
          <div className="d-flex justify-content-between">
            {windRadioButtons.map(btn => (
              <div key={btn.name}>
                <label
                  key={btn.name + "label"}
                  htmlFor={btn.name}
                  aria-label={btn.value}
                >
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
                  <span className="pl-2 h6" aria-label={btn.value}>
                    {btn.label}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default CustomForm;
