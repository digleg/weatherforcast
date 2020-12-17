import PropTypes from "prop-types";
import React from "react";

function Piechart({ value }) {
  return (
    <div width="100%" height="100%">
      <svg viewBox="0 0 42 42">
        <circle cx="21" cy="21" r="20" fill="#d2d3d4"></circle>
        <circle
          cx="21"
          cy="21"
          r="15"
          fill="transparent"
          stroke="#3f51b5"
          strokeWidth="10"
          style={{
            strokeDasharray: `${value} 15`,
          }}
        ></circle>
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          style={{ fontSize: 10 }}
        >
          {value}%
        </text>
      </svg>
    </div>
  );
}

Piechart.propTypes = {
  value: PropTypes.number.isRequired,
};

Piechart.defaultProps = {
  value: null,
};

export default Piechart;
