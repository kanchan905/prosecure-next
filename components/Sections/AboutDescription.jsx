import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@/style/about.css';
import Image from "next/image";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || ''; 

export default function AboutDescription() {
  const apiDataAvailable = useSelector((state) => state.ui.apiDataAvailable);
  const description = useSelector((state) => state.content.description);
  const imageSlider = useSelector((state) => state.content.imageSlider);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Add loading state
  if (!apiDataAvailable) {
    return (
      <div className="py-5 text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div
        className="bg-image"
        style={{
          backgroundImage: "url('/frontend/assets/image/firefighters-training-live-fire.jpg')",
        }}
      >
        <div className="py-3 position-relative" style={{ zIndex: "999" }}>
          <Container fluid>
            <h1 className="page-name">About</h1>
            <div className="breadcrumb">
              <Link href="/" className="breadcrumb-item">
                Home
              </Link>
              <span className="breadcrumb-item active" style={{cursor: 'pointer'}}> About</span>
            </div>
          </Container>
        </div>
      </div>
      <section className="aboutpage-section" data-aos="fade-up" data-aos-duration="1500">
        <Container fluid className="py-5">
          <Row>
            <Col md={8} lg={8}>
              <div className="text-wrapper">
                <div 
                  dangerouslySetInnerHTML={{ 
                    __html: description?.description || '<p>Description not available</p>' 
                  }} 
                />
              </div>
            </Col>
            <Col md={4} lg={4} className="d-flex align-items-flex-start justify-content-flex-start">
              <div style={{width: '100%'}}>
                {imageSlider && imageSlider.length > 0 ? (
                  <Slider {...sliderSettings} className="about-image-slider">
                    {imageSlider.map((data, index) => (
                      <div key={`image-${index}${data.id}`} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                          src={`${BASE_URL}/uploads/aboutimage/${data.image}`}
                          alt="certificate"
                          width={350}
                          height={350}
                          priority
                          className="about-image-slider-img"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            console.error('Image failed to load:', data.image);
                          }}
                        />
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <div className="text-center py-4">
                    <p>No images available</p>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
}