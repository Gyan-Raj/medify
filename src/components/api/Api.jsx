import axios from "axios";

export const fetchStates = async () => {
  try {
    let response = await axios.get(
      "https://meddata-backend.onrender.com/states"
    );
    // console.log(response);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const fetchCities = (state) => {
  try {
    let response = axios
      .get("https://meddata-backend.onrender.com/states")
      .then((res) => {
        // console.log(res.data);
        return res.data;
      });
  } catch (error) {
    console.log(error);
  }
};
