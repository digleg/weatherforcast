import React from "react";
import PropTypes from "prop-types";
import WeatherCard from "./WeatherCard";
import useWeather from "./weatherHook";

function WithHook({ location }) {
  const [data, reload] = useWeather(location);
  return <WeatherCard title="With Hooks" data={data} reload={reload} />;
}

WithHook.propTypes = {
  location: PropTypes.string.isRequired,
};

export default WithHook;
