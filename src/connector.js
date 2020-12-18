import Axios from "axios";

export const connector = Axios.create({
  baseURL: "https://www.metaweather.com/api",
  // URL able to avoid cors issue
  // baseURL:
  //   "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api",
});

export const getWeatherByLocationId = async (location) => {
  const id = await getLocationID(location);
  if (id === null) return { consolidated_weather: [] };
  const { data } = await connector.get(`/location/${id}/`);
  return data;
};

const getLocationID = async (input) => {
  const location_info = await connector.get(`/location/search/?query=${input}`);
  let id;
  if (!location_info.data.length) {
    return null;
  } else {
    id = location_info.data[0].woeid;
    return id;
  }
};
