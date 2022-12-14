import { createSlice } from "@reduxjs/toolkit";
import { getData } from "../../../services/fetchData";

const initialState = {
  Apartments: "",
  loading: false,
  hasErrors: false,
};

export const ApartmentsSlice = createSlice({
  name: "Apartments",
  initialState,
  reducers: {
    fetchApartments: (state) => {
      state.loading = true;
    },
    fetchApartmentsSuccess: (state, { payload }) => {
      state.Apartments = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    fetchApartmentsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    filterApartments: (state, { payload }) => {
      state.Apartments = payload;
    },
  },
});

//   console.log(initialState);

export const {
  fetchApartments,
  fetchApartmentsSuccess,
  fetchApartmentsFailure,
} = ApartmentsSlice.actions;

// a selector
export const ApartmentsSelector = (state) => state?.Apartments;

// the reducer
export default ApartmentsSlice.reducer;

// Asynchronous thunk action
export const fetchApartmentsAsync = () => {
  return async (dispatch) => {
    dispatch(fetchApartments());
    try {
      getData("entries").then((Apartments) => dispatch(fetchApartmentsSuccess(Apartments)));
      // dispatch(fetchApartmentsSuccess(Apartments));
    } catch (error) {
      dispatch(fetchApartmentsFailure(error));
    }
  };
};
