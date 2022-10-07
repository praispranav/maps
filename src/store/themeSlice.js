import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    light: true
};

const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme:(state)=>{
        state.light = !state.light
    }
  },
});

export const { changeTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;
