import { createSlice } from "@reduxjs/toolkit";

import { StateType } from "../types/weather.types";

const initialState: StateType = {
  weather: [],
  error: "",
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    fetchData: (state, action) => {
      return {
        ...state,
        weather: action.payload,
      };
    },
    setError: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
  },
});

export default weatherSlice;
