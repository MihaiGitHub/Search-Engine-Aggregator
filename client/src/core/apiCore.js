import axios from "axios";
import { API } from "../config";

export const googleSearch = (searchTerm) => {
  return axios.post(`${API}/google`, { searchTerm }).catch(function (error) {
    console.log(error);
  });
};

export const duckduckgoSearch = (searchTerm) => {
  return axios
    .post(`${API}/duckduckgo`, { searchTerm })
    .catch(function (error) {
      console.log(error);
    });
};
