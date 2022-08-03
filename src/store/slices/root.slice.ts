import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type StateProps = {
  darkMode: boolean;
};

const rootSlice = createSlice({
  name: 'root',
  initialState: {
    darkMode: false
  } as StateProps,
  reducers: {
    toggleDarkMode: (state: StateProps) => {
      state.darkMode = !state.darkMode;

      return state;
    }
  }
});

export const { toggleDarkMode } = rootSlice.actions;

export default rootSlice.reducer;
