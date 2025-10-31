"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProfileData } from "@/redux/slices/profileSlice";
import { fetchServiceData } from "@/redux/slices/serviceSlice";
import { fetchContentData } from "@/redux/slices/contentSlice";
import { setLoader } from "@/redux/slices/uiSlice";

export default function InitialDataLoader() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch all thunks in parallel
    Promise.all([
      dispatch(fetchProfileData()),
      dispatch(fetchServiceData()),
      dispatch(fetchContentData()),
    ]).finally(() => {
      dispatch(setLoader(false));
    });
  }, [dispatch]);

  return null;
  
}