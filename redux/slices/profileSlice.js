import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = process.env.NEXT_PUBLIC_API_DEV_URL;

export const fetchProfileData = createAsyncThunk(
  'profile/fetchProfileData',
  async () => {
    const [profile, clientData, teamData] = await Promise.all([
      fetch(`${BASE_URL}/profile`).then(res => res.json()),
      fetch(`${BASE_URL}/client`).then(res => res.json()),
      fetch(`${BASE_URL}/team`).then(res => res.json()),
    ]);
    return { profile, clientData, teamData };
  }
);

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: [],
    clientData: [],
    teamData: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProfileData.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchProfileData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.profile = action.payload.profile;
        state.clientData = action.payload.clientData;
        state.teamData = action.payload.teamData;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default profileSlice.reducer; 