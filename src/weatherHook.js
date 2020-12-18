/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from "react";
import { getWeatherByLocationId } from "./connector";

function useWeather(location) {
  const [data, setData] = useState(null);
  async function reload() {
    try {
      setData(null);
      setData(await getWeatherByLocationId(location));
    } catch (e) {
      console.error(e);
    }
  }
  useEffect(() => {
    reload();
  }, []);

  return [data, reload];
}

export default useWeather;
