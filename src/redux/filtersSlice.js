import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    name: "",
  },
  reducers: {
    searchContact: {
      reducer(state, action) {
        state.name = action.payload;
      },
    },
  },
});

export const { searchContact } = filterSlice.actions;
export default filterSlice.reducer;
