import { createSlice } from '@reduxjs/toolkit';

export interface NavbarState {
  expandAsideMenu: boolean;
}

const initialState: NavbarState = {
  expandAsideMenu: true,
};

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setExpandAsideMenu: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.expandAsideMenu = !state.expandAsideMenu;
    },
  },
});

export const { setExpandAsideMenu } = navbarSlice.actions;

export default navbarSlice.reducer;
