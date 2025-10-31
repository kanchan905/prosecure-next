"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Skeleton } from "@mui/material";
import { testimonial } from "@/components/VariableHandler/handler";
import { useSelector } from "react-redux";

export default function Testimonial() {
  const testimonialData = useSelector((state) => state.content.testimonialData);
  const loader = useSelector((state) => state.ui.loader);
  const apiDataAvailable = useSelector((state) => state.ui.apiDataAvailable);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  if (loader) {
    return (
      <>
        <Skeleton width="100%" height={100} style={{ backgroundColor: "grey" }} />
        <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <Skeleton variant="circular" className="text-center" width={100} height={100} style={{ backgroundColor: "grey" }} />
          <Skeleton width={200} height={30} style={{ backgroundColor: "grey" }} />
          <Skeleton width={250} height={50} style={{ backgroundColor: "grey" }} />
        </div>
      </>
    );
  }

  return (
    <Slider {...settings} className="testimonial-slider">
      {apiDataAvailable && testimonialData ? (
        testimonialData.map((card, index) => (
          <div key={`testimonial-${index}`} className="testi-box">
            <p className="review">{card.message}</p>
            <div className="profile-img">
              <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/uploads/testimonial/${card.image}`} className="asd" alt="profileimage" />
            </div>
            <div className="text-center">
              <p className="name">{card.name}</p>
              <p className="designation">
                {card.designation}-{card.company_name}
              </p>
            </div>
          </div>
        ))
      ) : (
        testimonial.map((card) => (
          <div key={`testimonial-${card.id}`} className="testi-box">
            <p className="review">{`\u201c${card.review}\u201d`}</p>
            <div className="profile-img">
              <img src={`/frontend/assets/image/${card.src}`} className="asd" alt="profileimage" />
            </div>
            <div className="text-center">
              <p className="name">{card.name}</p>
              <p className="designation">
                {card.designation}-{card.company}
              </p>
            </div>
          </div>
        ))
      )}
    </Slider>
  );
}