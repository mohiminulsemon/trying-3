import { createSlice } from '@reduxjs/toolkit';
import { sliceKeys } from '../utils/keys';

// ==============================|| states ||============================== //
const initialState = {
  isSpaceKeyDown: false
};

// ==============================|| slice ||============================== //
export const hotKeySlice = createSlice({
  name: sliceKeys.hotKey,
  initialState,
  reducers: {
    setIsSpaceKeyDown: (state, action) => {
      state.isSpaceKeyDown = action.payload;
    }
  }
});

export const { setIsSpaceKeyDown } = hotKeySlice.actions;
export const hotKeyReducer = hotKeySlice.reducer;
