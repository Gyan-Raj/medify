import axios from "axios";

export const fetchStates = async () => {
  try {
    let response = await axios.get(
      "https://meddata-backend.onrender.com/states"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const fetchCities = (state) => {
  try {
    let response = axios
      .get(`https://meddata-backend.onrender.com/states=${state}&cities`)
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    console.log(error);
  }
};
export const fetchHospitals = (state, city) => {
  try {
    let response = axios
      .get(
        `https://meddata-backend.onrender.com/states=${state}&cities=${city}`
      )
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    console.log(error);
  }
};
