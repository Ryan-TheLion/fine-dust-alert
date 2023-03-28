import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  selectedCity: "서울",
  selectedStation: "",
  favorites: [],
};

export const appStoreSlice = createSlice({
  name: "appStore",
  initialState,
  reducers: {
    selectCity: (state, action) => {
      state.selectedCity = action.payload;
    },
    selectStation: (state, action) => {
      state.selectedStation = action.payload;
    },
    addFavoriteLocation: (state, action) => {
      state.favorites = [...state.favorites, { ...action.payload }];
    },
    deleteFavoriteLocation: (state, action) => {
      state.favorites = state.favorites.filter(
        (location) => location.stationName !== action.payload
      );
    },
  },
  extraReducers: {},
});

export const {
  selectCity,
  selectStation,
  addFavoriteLocation,
  deleteFavoriteLocation,
} = appStoreSlice.actions;

export function useAppStore() {
  const data = useSelector((state) => state.appStore);
  const dispatch = useDispatch();

  return { data, dispatch };
}

export default appStoreSlice.reducer;
