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

const saveToLocalStorage = (state) => {
  const {
    selectedState,
    selectedCity,
    selectedHospital,
    selectedTime,
    selectedDate,
  } = state;
  localStorage.setItem(
    "appointmentDetails",
    JSON.stringify([
      {
        selectedState,
        selectedCity,
        selectedHospital,
        selectedTime,
        selectedDate,
      },
    ])
  );
};

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
      saveToLocalStorage(state);
    },
    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload;
      state.hospitalsList = [];
      saveToLocalStorage(state);
    },
    setSelectedHospital: (state, action) => {
      state.selectedHospital = action.payload;
      saveToLocalStorage(state);
    },
    setSelectedTime: (state, action) => {
      state.selectedTime = action.payload;
      saveToLocalStorage(state);
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
      saveToLocalStorage(state);
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
