"use client";

import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Aos from "aos";
import 'aos/dist/aos.css';
import { Skeleton } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { serviceArray } from "@/components/VariableHandler/handler";
import { useSelector } from "react-redux";
import Image from "next/image";

// This check is not strictly necessary in Next.js 13+ with the App Router
// but is kept for compatibility.
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

export default function ServiceCarousel() {
    const loader = useSelector((state) => state.ui.loader);
    const serviceData = useSelector((state) => state.service.serviceData);
    const apiDataAvailable = useSelector((state) => state.ui.apiDataAvailable);
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false, // Disable default arrows
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    };

    useEffect(() => {
        Aos.init({ once: true });
    }, []);

    const goToNext = () => {
        sliderRef.current.slickNext();
    };

    const goToPrev = () => {
        sliderRef.current.slickPrev();
    };


    if (loader) {
        return (
            <Row>
                <Col lg="4">
                    <Skeleton variant="rectangular" height={300} />
                    <Skeleton width="60%" />
                    <Skeleton />
                </Col>
                <Col lg="4">
                    <Skeleton variant="rectangular" height={300} />
                    <Skeleton width="60%" />
                    <Skeleton />
                </Col>
                <Col lg="4">
                    <Skeleton variant="rectangular" height={300} />
                    <Skeleton width="60%" />
                    <Skeleton />
                </Col>
            </Row>
        );
    }

    return (
        <section className="py-5" style={{ background: "#f8f9fa" }}>
            <div className="container-fluid">
                <div data-aos="fade-up" data-aos-duration="1500">
                    <h2 className="text-center section-title my-5">Our Services</h2>
                    <div className="text-center" style={{ fontSize: "20px", marginBottom: "80px" }}>
                        <p>We specialize in the installation and integration of CCTV, intrusion alarm, and fire alarm systems, all connected to a centralized command center to effectively manage emergencies and ensure comprehensive safety for our clients. Our services include complete surveillance system installation, provision of comprehensive fire safety equipment for industrial use, and offering annual maintenance contract (AMC) services after the initial installation to ensure ongoing reliability&nbsp;and&nbsp;protection.</p>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    <Slider ref={sliderRef} {...settings} className="service-slider">
                        {
                            apiDataAvailable && serviceData && serviceData.length > 0 ? (
                                serviceData.map((card, index) => (
                                    <div key={`carouselcard-${index}${card.id}`} className="frame-container">
                                        <div className="frame">
                                            <Image width={100} height={100} src={`${BASE_URL}/uploads/service/${card.image}`} className="service-image" alt={card.title} priority/>
                                            <div className="text-wrapper">
                                                <h4>{card.title}</h4>
                                                <p>{card.content}</p>
                                                <Link href={`service/${card.slug}`} className="redirect-link">
                                                    Learn more <i className="fa-solid fa-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) :
                                (
                                    serviceArray.map((card, index) => (
                                        <div key={`carouselcard-${index}${card.id}`} className="frame-container">
                                            <div className="frame">
                                                <Image width={100} height={50} src={`/frontend/assets/image/${card.src}`} className="service-image" alt={card.title} />
                                                <div className="text-wrapper">
                                                    <h4>{card.title}</h4>
                                                    <p>{card.content}</p>
                                                    <Link href={'about'} className="redirect-link">
                                                        Learn more <i className="fa-solid fa-arrow-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )
                        }
                    </Slider>

                    <div className="custom-arrows">
                        <button onClick={goToPrev} aria-label="Previous Slide">
                            {"<"}
                        </button>
                        <button onClick={goToNext} aria-label="Next Slide">
                            {">"}
                        </button>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .carousel-wrapper {
                    background: #ffffff;
                    padding: 40px 20px 20px 20px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
                    border-radius: 8px;
                }

                /* Add spacing between slides */
                .service-slider .slick-slide > div {
                    padding: 0 15px;
                }
                .service-slider .slick-list {
                    margin: 0 -15px;
                }
                .frame-container{
                    height: 100%;
                }
                .frame-container .frame{
                    background-color: transparent;
                    height: 100%;
                }

                .text-wrapper {
                    padding: 25px 5px 20px 5px; /* Top, Sides, Bottom */
                }

                .text-wrapper h4 {
                    color: #b94e48; /* Matching reddish-brown color */
                    text-transform: uppercase;
                    font-weight: 700;
                    font-size: 1rem;
                    margin-bottom: 15px;
                }

                .text-wrapper p {
                    color: #6c757d;
                    font-size: 0.9rem;
                    min-height: 80px; /* Allocate space for approx 4 lines */
                    display: -webkit-box;
                    -webkit-line-clamp: 4; /* Limit to 4 lines */
                    -webkit-box-orient: vertical;  
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .service-image {
                    width: 100% !important;
                    height: 800px;
                    object-fit: cover;
                }

                @media (max-width: 1600px) {
                    .service-image {
                        height: 600px;
                    }
                }
                
                @media (max-width: 1024px) {
                    .service-image {
                        height: 400px;
                    }
                }

                @media (max-width: 600px) {
                    .service-image {
                        height: 200px;
                    }
                }

                .redirect-link {
                    text-decoration: none;
                    color: #b94e48; /* Matching reddish-brown color */
                    font-weight: 600;
                    font-size: 0.95rem;
                }
                .redirect-link:hover {
                    color: #8c3b36;
                }

                .section-title {
                    font-weight: 800;
                }
                
                /* Custom Arrow Styling */
                .custom-arrows {
                    text-align: center;
                    margin-top: 30px;
                }

                .custom-arrows button {
                    background: #f0ad4e; /* Orange color from image */
                    border: none;
                    color: white;
                    padding: 8px 16px;
                    margin: 0 5px;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 1.2rem;
                    line-height: 1;
                    transition: background-color 0.2s ease;
                }

                .custom-arrows button:hover {
                    background: #ec971f; /* Darker orange on hover */
                }
            `}</style>
        </section>
    )
}