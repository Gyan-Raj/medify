import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchStates, fetchCities, fetchHospitals } from "../../api/Api";

export const fetchStatesList = createAsyncThunk(
  "hospital/fetchStatesList",
  fetchStates
);

export const fetchCitiesList = createAsyncThunk(
  "hospital/fetchCitiesList",
  async (state) => {
    const response = await fetchCities(state);
    return response;
  }
);

export const fetchHospitalsList = createAsyncThunk(
  "hospital/fetchHospitalsList",
  async ({ state, city }) => {
    const response = await fetchHospitals(state, city);
    return response;
  }
);

const initialState = {
  statesList: [],
  citiesList: [],
  hospitalsList: [],
  selectedState: "",
  selectedCity: "",
  selectedHospital: "",
  selectedTime: "",
  selectedDate: "",
};

const hospitalSlice = createSlice({
  name: "hospital",
  initialState,
  reducers: {
    setSelectedState: (state, action) => {
      state.selectedState = action.payload;
      state.citiesList = [];
    },
    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload;
      state.hospitalsList = [];
    },
    setSelectedHospital: (state, action) => {
      state.selectedHospital = action.payload;
    },
    setSelectedTime: (state, action) => {
      state.selectedTime = action.payload;
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchStatesList.fulfilled, (state, action) => {
        state.statesList = action.payload;
      })
      .addCase(fetchCitiesList.fulfilled, (state, action) => {
        state.citiesList = action.payload;
      })
      .addCase(fetchHospitalsList.fulfilled, (state, action) => {
        state.hospitalsList = action.payload;
      });
  },
});

export const {
  setSelectedState,
  setSelectedCity,
  setSelectedHospital,
  setSelectedTime,
  setSelectedDate,
} = hospitalSlice.actions;

export default hospitalSlice.reducer;
