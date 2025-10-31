"use client";
import styled from "styled-components";
import { Container } from "react-bootstrap";

export default function Searchbar({ searchProps }) {
  return (
    <section className="career-section">
      <Container>
        <SearchContainer>
          <SearchBox className="set-width">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              onChange={(e) => searchProps(e.target.value)}
              placeholder="search by title, location, type..."
            />
          </SearchBox>
        </SearchContainer>
      </Container>
    </section>
  );
}

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 3em 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 7px;
  border: 1px solid #CEC9C9;
  padding: 19px 30px;
  i {
    font-size: 25px;
    margin-right: 1em;
  }
  input {
    border: none;
    font-size: 18px;
    width: 100%;
    box-sizing: border-box;
    color: #000;
  }
  input:focus {
    outline-width: 0;
  }
  @media (max-width: 1024px) {
    width: 25%;
    padding: 16px;
    i {
      margin-right: 10px;
      font-size: 17px;
    }
    input {
      font-size: 14px;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 16px;
    border-radius: 7px 7px 0px 0px;
    i {
      margin-right: 10px;
      font-size: 17px;
    }
    input {
      font-size: 14px;
    }
  }
`;