"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Image from "next/image";



export default function CareerViewPageContent({ careerPage }) {


  if (!careerPage) {
    return <div>Career Page Data not found!</div>;
  }

  return (
    <>
      <div
        className="bg-image"
        style={{
          backgroundImage: "url(/frontend/assets/image/dark-theme-background.jpg)",
        }}
      >
        <div className="py-3 position-relative" style={{ zIndex: "999" }}>
          <Container fluid>
            <h1 className="page-name">{careerPage.title || "Career Page"}</h1>
            <div className="breadcrumb">
              <a href="/career" className="breadcrumb-item">
                Career
              </a>
              <span className="breadcrumb-item active">
                {careerPage.title || "Career Page"}
              </span>
            </div>
          </Container>
        </div>
      </div>
      <Section>
        <Container fluid>
          <Row>
            <Col md="6">
              <LeftHeroSection>
                <HeroTitle className="hero-title">
                  {careerPage.title || "Job Title"}
                </HeroTitle>
              </LeftHeroSection>
            </Col>
            <Col md="6">
              <HeroImage style={{width:'100%'}}>
                <Image
                  className="hero-image"
                  src="/frontend/assets/image/vacancy.jpg"
                  alt="hero-img"
                  priority
                  width={800}
                  height={600}
                  style={{ width: "100%", height: "auto" }}
                />
              </HeroImage>
            </Col>
            <Col sm="12" lg="12">
              <Row>
                <Col sm="12" lg="4">
                  <SectionTitle>
                    <h2>Job Title</h2>
                    <p>{careerPage.title}</p>
                  </SectionTitle>
                </Col>
                <Col sm="12" lg="4">
                  <SectionTitle>
                    <h2>Job Type</h2>
                    <p>{careerPage.type}</p>
                  </SectionTitle>
                </Col>
                <Col sm="12" lg="4">
                  <SectionTitle>
                    <h2>Experience</h2>
                    <p>{careerPage.experience}</p>
                  </SectionTitle>
                </Col>
                <Col sm="12" lg="4">
                  <SectionTitle>
                    <h2>Salary</h2>
                    <p>{careerPage.salary}</p>
                  </SectionTitle>
                </Col>
                <Col sm="12" lg="4">
                  <SectionTitle>
                    <h2>Location</h2>
                    <p>{careerPage.location}</p>
                  </SectionTitle>
                </Col>
              </Row>
              <div
                dangerouslySetInnerHTML={{ __html: careerPage.description }}
              />
              <a
                href={`/careerform/applicant?id=${careerPage.id}`}
                className="eva-btn eva-btn-primary my-3"
              >
                Apply Now
              </a>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
}

// Styled-components (same as your original)
const Section = styled.div`
  padding: 3em 0;
`;

const HeroTitle = styled.h1`
  font-size: 84px;
  color: #454e9f !important;
  

  @media screen and (max-width: 379px) {
    font-size: 62px;
  }
  @media screen and (max-width: 245px) {
    font-size: 52px;
  }
`;
const LeftHeroSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HeroImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  position: relative;

  div.object {
    width: 500px;
    height: 500px;
    background-color: #3962a1;
  }

  img {
    width: 100%;
  }
`;
const SectionTitle = styled.div`
  margin-bottom: 5em;

  h2 {
    margin-bottom: 0.2em;
    color: #d43647;
  }
  p {
    font-size: 20px;
    font-weight: 500;
    color: #454e9f;
  }
  @media screen and (max-width: 990px) {
    margin-bottom: 2em;
  }
`;