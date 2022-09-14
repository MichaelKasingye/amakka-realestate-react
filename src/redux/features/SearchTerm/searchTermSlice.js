import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    SearchTerm: '',
    loading: false,
    hasErrors: false,
};

export const SearchTermSlice = createSlice({
    name: "SearchTerm",
    initialState,
    reducers: {
      fetchSearchTerm: (state) => {
        state.loading = true;
      },
      fetchSearchTermSuccess: (state, { payload }) => {
        state.SearchTerm = payload;
        state.loading = false;
        state.hasErrors = false;
      },
      fetchSearchTermFailure: (state) => {
        state.loading = false;
        state.hasErrors = true;
      },
      filterSearchTerm: (state, { payload }) => {
        state.SearchTerm = payload;
      },
    },
  });

//   console.log(initialState);

  export const { fetchSearchTerm, fetchSearchTermSuccess, fetchSearchTermFailure } =
  SearchTermSlice.actions;

// a selector
export const SearchTermSelector = (state) => state?.SearchTerm;

// the reducer
export default SearchTermSlice.reducer;

// Asynchronous thunk action
export const fetchSearchTermAsync = (SearchTerm) => {
    return async (dispatch) => {
      dispatch(fetchSearchTerm());
      try {
          dispatch(fetchSearchTermSuccess(SearchTerm));
      } catch (error) {
        dispatch(fetchSearchTermFailure(error));
      }
    };
  };
  
  