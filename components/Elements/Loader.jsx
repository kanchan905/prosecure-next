"use client";
import styled, { keyframes } from "styled-components";
import "@/style/Loader.css";

export default function Loader() {
  return (
    <LoaderContainer>
      <div className="load">
        <h2 className="loader-text">Loading</h2>
        <div className="loader">
          <div className="loader-dot"></div>
          <div className="loader-dot"></div>
          <div className="loader-dot"></div>
        </div>
      </div>
    </LoaderContainer>
  );
}

const LoaderContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background: #171717;
  font: 400 6em 'Cousine', monospace;
`;

