import axios from "axios";

export const fetchStates = async () => {
  try {
    let response = await axios.get(
      "https://meddata-backend.onrender.com/states"
    );
    console.log(response);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const fetchCities = async (state) => {
  try {
    let response = await axios.get(
      `https://meddata-backend.onrender.com/cities/${state}`
    );
    // console.log(response);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const fetchHospitals = async (state, city) => {
  try {
    let response = await axios.get(
      `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
    );
    // console.log(response);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
