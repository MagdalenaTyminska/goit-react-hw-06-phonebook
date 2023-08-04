import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filterStatus: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilterContact(state, action) {
      state.filterStatus = action.payload;
    },
  },
});

export const { setFilterContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
