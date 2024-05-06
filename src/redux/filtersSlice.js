import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    items: [],
    name: "",
  },
  reducers: {
    searchContact: {
      reducer(state, action) {
        state.items = state.items.filter((contact) =>
          contact.name.includes(action.payload)
        );
      },
    },
  },
});

export const { searchContact } = filterSlice.actions;
export default filterSlice.reducer;
