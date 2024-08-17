import { createSlice } from "@reduxjs/toolkit";
import data from '../data.json'

const filterSlice = createSlice({
    name: 'filter',
    initialState: data,
    reducers: {
        all: () => {
            return data;
        },
        africa: () => {
            return data.filter((item) => {
                return item["region"] === "Africa"
            })
        },
        america: () => {
            return data.filter((item) => {
                return item["region"] === "Americas"
            })
        },
        asia: () => {
            return data.filter((item) => {
                return item["region"] === "Asia"
            })
        },
        europe: () => {
            return data.filter((item) => {
                return item["region"] === "Europe"
            })
        },
        oceania: () => {
            return data.filter((item) => {
                return item["region"] === "Oceania"
            })
        },
        searchAction: (state, action) => {
            if (action.payload !== '') {
                return state.filter(item => item.name.toLowerCase().includes(action.payload.toLowerCase()));
            } else {
                return [];
            }
        }
    }
})

export default filterSlice;
export const filterAction = filterSlice.actions;