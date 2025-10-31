"use client";

import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { Skeleton } from "@mui/material";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useSelector } from "react-redux";

export default function Client() {
  const apiDataAvailable = useSelector((state) => state.ui.apiDataAvailable);
  const clientData = useSelector((state) => state.profile.clientData);
  const loader = useSelector((state) => state.ui.loader);
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  // Slick carousel responsive settings
  const responsiveOptions = [
    {
      breakpoint: 1000,
      settings: { slidesToShow: 4 }
    },
    {
      breakpoint: 500,
      settings: { slidesToShow: 3 }
    },
    {
      breakpoint: 0,
      settings: { slidesToShow: 1 }
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: responsiveOptions
  };

  useEffect(() => {
    Aos.init();
  }, []);

  if (loader) {
    return (
      <div className="container">
        <Skeleton variant="rectangular" height={40} sx={{ margin: "84px 0 0 0" }} />
        <Skeleton variant="circular" width={100} height={100} sx={{ margin: "1em 0" }} />
        <Skeleton variant="rectangular" height={60} sx={{ margin: "1em 0" }} />
        <Skeleton variant="rounded" height={60} sx={{ margin: "1em 0" }} />
      </div>
    );
  }

  return (
    <Section>
      <div className="container-fluid">
        <Heading className="text-center section-title">Our Client</Heading>
        {clientData.length > 0 && (
          <Slider {...settings} className="client-slider">
            {clientData.map((card, index) => (
              <ClientImage key={`client-${index}`}>
                <img src={`${BASE_URL}/uploads/client/${card.image}`} alt={card.title} />
              </ClientImage>
            ))}
          </Slider>
        )}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 3em 0;
  .client-slider .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ClientImage = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  filter: grayscale(1);
  &:hover {
    filter: grayscale(0);
  }
`;

const Heading = styled.h2`
  font-size: 36px;
  font-family: var(--heading);
  color: var(--main-color);
  font-weight: 700;
  text-transform: capitalize;
  margin: 50px 0;
`;