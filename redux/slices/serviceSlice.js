import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = process.env.NEXT_PUBLIC_API_DEV_URL;

export const fetchServiceData = createAsyncThunk(
  'service/fetchServiceData',
  async () => {
    const [serviceCategory, serviceData, bestService, bestHeading] = await Promise.all([
      fetch(`${BASE_URL}/servicecategory`).then(res => res.json()),
      fetch(`${BASE_URL}/service`).then(res => res.json()),
      fetch(`${BASE_URL}/bestService`).then(res => res.json()),
      fetch(`${BASE_URL}/heading`).then(res => res.json()),
    ]);
    return { serviceCategory, serviceData, bestService, bestHeading };
  }
);

const serviceSlice = createSlice({
  name: 'service',
  initialState: {
    serviceCategory: [],
    serviceData: [],
    bestService: [],
    bestHeading: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchServiceData.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchServiceData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.serviceCategory = action.payload.serviceCategory;
        state.serviceData = action.payload.serviceData;
        state.bestService = action.payload.bestService;
        state.bestHeading = action.payload.bestHeading;
      })
      .addCase(fetchServiceData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default serviceSlice.reducer; 