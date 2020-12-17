import PropTypes from "prop-types";
import React from "react";

function Barchart({ value }) {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "50%",
          margin: "0 0 0 0",
          justifyContent: "flex-end",
          display: "flex",
        }}
      >
        {value < 0 && (
          <div
            style={{
              width: `${Math.abs(value) * 2}%`,
              background: value > 0 ? "#fff" : "#3f51b5",
              borderRadius: 5,
              paddingTop: "10px",
              paddingBottom: "10px",
              marginRight: 0,
              margin: "0 0 0 0",
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            {Math.floor(value * 100) / 100}&#8451;
          </div>
        )}
      </div>
      <div
        style={{
          width: "50%",
        }}
      >
        {value >= 0 && (
          <div
            style={{
              width: `${Math.abs(value) * 2}%`,
              background: value > 0 ? "#e57373" : "#fff",
              borderRadius: 5,
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            {Math.floor(value * 100) / 100}&#8451;
          </div>
        )}
      </div>
    </div>
  );
}

Barchart.propTypes = {
  value: PropTypes.number.isRequired,
};

Barchart.defaultProps = {
  value: null,
};

export default Barchart;
