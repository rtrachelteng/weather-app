import Transform from "./Base";
import moment from "moment";

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatDateTime(unix) {
  return moment(unix*1000).format('YYYY-MMM-DD hh:mm A');
}

function formatTime(unix) {
  return moment(unix*1000).format('hh:mm A');
}

function round(num) {
  return Math.round(num);
}

export default class WeatherTransform extends Transform {
  static fetch(data) {
    return {
      name: data?.name,
      country: data?.sys?.country,
      description: capitalizeFirstLetter(data?.weather[0]?.description),
      temp: `${round(data?.main?.temp)}°C`,
      temp_range: `H: ${round(data?.main?.temp_max)}°C   L:${round(data?.main?.temp_min)}°C`,
      humidity: round(data?.main?.humidity),
      date_time: formatDateTime(data?.dt),
      sunrise: formatTime(data?.sys?.sunrise),
      sunset: formatTime(data?.sys?.sunset)
    }
  }
}