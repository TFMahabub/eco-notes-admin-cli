/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export interface ModalState {
  modalCondition: boolean;
  modalType: string
}

const initialState: ModalState = {
  modalCondition: true,
  modalType: 'action',
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalClose: (state) => {
      state.modalCondition = false;
      state.modalType = '';
    },
    setModalOpen: (state, { payload }) => {
      state.modalCondition = false;
      state.modalType = payload.modalType;
    },
  },
});

export const { setModalClose, setModalOpen } = modalSlice.actions;

export default modalSlice.reducer;
