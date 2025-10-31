import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = process.env.NEXT_PUBLIC_API_DEV_URL;

export const fetchContentData = createAsyncThunk(
  'content/fetchContentData',
  async () => {
    const [homepage, aboutContent, addressData, contactData, description, imageSlider, certificate, galleryData, career, videoData, testimonialData] = await Promise.all([
      fetch(`${BASE_URL}/homepage`).then(res => res.json()),
      fetch(`${BASE_URL}/footercontent`).then(res => res.json()),
      fetch(`${BASE_URL}/address`).then(res => res.json()),
      fetch(`${BASE_URL}/contact`).then(res => res.json()),
      fetch(`${BASE_URL}/description`).then(res => res.json()),
      fetch(`${BASE_URL}/imageslider`).then(res => res.json()),
      fetch(`${BASE_URL}/certificate`).then(res => res.json()),
      fetch(`${BASE_URL}/gallery`).then(res => res.json()),
      fetch(`${BASE_URL}/career`).then(res => res.json()),
      fetch(`${BASE_URL}/video`).then(res => res.json()),
      fetch(`${BASE_URL}/testimonial`).then(res => res.json()),
    ]);
    return { homepage, aboutContent, addressData, contactData, description, imageSlider, certificate, galleryData, career, videoData, testimonialData };
  }
);

const contentSlice = createSlice({
  name: 'content',
  initialState: {
    homepage: null,
    aboutContent: null,
    addressData: [],
    contactData: [],
    description: '',
    imageSlider: [],
    certificate: [],
    galleryData: [],
    career: null,
    videoData: null,
    testimonialData: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContentData.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchContentData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.homepage = action.payload.homepage;
        state.aboutContent = action.payload.aboutContent;
        state.addressData = action.payload.addressData;
        state.contactData = action.payload.contactData;
        state.description = action.payload.description;
        state.imageSlider = action.payload.imageSlider;
        state.certificate = action.payload.certificate;
        state.galleryData = action.payload.galleryData;
        state.career = action.payload.career;
        state.videoData = action.payload.videoData;
        state.testimonialData = action.payload.testimonialData;
      })
      .addCase(fetchContentData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default contentSlice.reducer; 