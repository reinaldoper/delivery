// reducers.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  update: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    requiretUpload: (state, action) => {
      state.update = action.payload;
    },
  },
});

export const { requiretUpload } = appSlice.actions;
export default appSlice.reducer;
