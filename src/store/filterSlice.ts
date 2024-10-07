import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    data, // Original data
    filteredData: data, // This stores the filtered results
  },
  reducers: {
    all: (state) => {
      state.filteredData = state.data; 
    },
    africa: (state) => {
      state.filteredData = state.data.filter(
        (item) => item["region"] === "Africa"
      );
    },
    america: (state) => {
      state.filteredData = state.data.filter(
        (item) => item["region"] === "Americas"
      );
    },
    asia: (state) => {
      state.filteredData = state.data.filter(
        (item) => item["region"] === "Asia"
      );
    },
    europe: (state) => {
      state.filteredData = state.data.filter(
        (item) => item["region"] === "Europe"
      );
    },
    oceania: (state) => {
      state.filteredData = state.data.filter(
        (item) => item["region"] === "Oceania"
      );
    },
    searchAction: (state, action) => {
      const input = action.payload.trim().toLowerCase();
      if (input !== "") {
        state.filteredData = state.data.filter((item) =>
          item.name.toLowerCase().includes(input)
        );
      } else {
        state.filteredData = state.data; // Reset to all data if input is empty
      }
    },
  },
});

export default filterSlice;
export const filterAction = filterSlice.actions;
