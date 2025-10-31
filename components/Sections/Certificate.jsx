'use client';

import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { fetchContentData } from "../../redux/slices/contentSlice";
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Certificate() {
    const dispatch = useDispatch();
    const { certificate, status } = useSelector((state) => state.content);
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    const sliderRef = useRef(null);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchContentData());
        }
    }, [dispatch, status]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows: false, // Disable default arrows
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const goToNext = () => {
        sliderRef.current.slickNext();
    };

    const goToPrev = () => {
        sliderRef.current.slickPrev();
    };

    if (status === 'loading') {
        return (
            <section className="my-3">
                <Container fluid>
                    <div className="text-center">Loading certificates...</div>
                </Container>
            </section>
        );
    }

    if (status === 'failed') {
        return (
            <section className="my-3">
                <Container fluid>
                    <div className="text-center text-danger">Failed to load certificates</div>
                </Container>
            </section>
        );
    }

    return (
        <section className="my-3">
            <Container fluid className="mb-5">
            <div data-aos="fade-up" data-aos-duration="1500">
            <h2 className="text-center section-title my-5">Certificates</h2>
            </div>
                <Slider ref={sliderRef} {...settings}>
                    {certificate && certificate.map((cert, index) => (
                        <div className="certificate-item" key={index}>
                            <div className="certificate-image">
                                <Link href={`${BASE_URL}/uploads/certificate/${cert.certificate_image}`} target="_blank">
                                    <Image
                                        src={`${BASE_URL}/uploads/certificate/${cert.certificate_image}`}
                                        alt="certificate"
                                        width={300}
                                        height={200}
                                        className="img-thumbnail certificate"
                                        priority
                                    />
                                </Link>
                            </div>
                        </div>
                    ))}
                </Slider>
                {certificate && certificate.length > 0 && (
                    <div className="custom-arrows">
                        <button onClick={goToPrev} aria-label="Previous Slide">{"<"}</button>
                        <button onClick={goToNext} aria-label="Next Slide">{">"}</button>
                    </div>
                )}
            </Container>
            <style jsx global>{`
                .custom-arrows {
                    text-align: center;
                    margin-top: 30px;
                }
                .custom-arrows button {
                    background: #f0ad4e;
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
                    background: #ec971f;
                }
            `}</style>
        </section>
    );
}