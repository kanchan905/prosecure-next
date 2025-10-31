import { createSlice } from '@reduxjs/toolkit';

const BASE_URL = process.env.NEXT_PUBLIC_API_DEV_URL;

const initialState = {
  loader: true,
  apiDataAvailable: true,
  whatsappNumber: '9254029400',
  counter: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoader(state, action) {
      state.loader = action.payload;
    },
    setApiDataAvailable(state, action) {
      state.apiDataAvailable = action.payload;
    },
    setWhatsappNumber(state, action) {
      state.whatsappNumber = action.payload;
    },
    setCounter(state, action) {
      state.counter = action.payload;
    },
  },
});

export const { setLoader, setApiDataAvailable, setWhatsappNumber, setCounter } = uiSlice.actions;
export default uiSlice.reducer; 