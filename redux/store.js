import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './slices/profileSlice';
import serviceReducer from './slices/serviceSlice';
import contentReducer from './slices/contentSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    service: serviceReducer,
    content: contentReducer,
    ui: uiReducer,
  },
});