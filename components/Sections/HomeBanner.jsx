"use client";

import React, { useState, useEffect, useContext } from "react";
import { Row, Container, Col } from "react-bootstrap";
import styled from "styled-components";
import Aos from "aos";
import { useSelector } from "react-redux";
import { Skeleton } from "@mui/material";
import Image from "next/image";

export default function HomeBanner(){
    const homepage = useSelector((state) => state.content.homepage);
    const apiDataAvailable = useSelector((state) => state.ui.apiDataAvailable);
    const loader = useSelector((state) => state.ui.loader);
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

    useEffect(() => {
        Aos.init();
    }, []);

    if(loader){
        return <React.Fragment>
            <Container>
                <Skeleton variant="rectangular" height={40} sx={{margin: "84px 0 0 0"}}/>
                <Skeleton variant="circular" width={100} height={100} sx={{margin: "1em 0"}}/>
                <Skeleton variant="rectangular" height={60} sx={{margin: "1em 0"}}/>
                <Skeleton variant="rounded" height={60} sx={{margin: "1em 0"}}/>
            </Container>
        </React.Fragment>
    }

    return(
            <section className="home-banner">
                <div className="section-content">
                    <Container fluid>
                        <Row>
                            <Col sm="12" md="6" lg="6">
                                <div className="banner-content">
                                    &nbsp; &nbsp; &nbsp; <br />
                                    &nbsp; &nbsp; &nbsp;
                                    <CompanyName>
                                        Prosecure 
                                        <TagLine className="text-color">Integrated Solutions Private Limitied</TagLine> 
                                    </CompanyName>
                                    &nbsp; &nbsp; &nbsp; <br/>
                                    <TagLine>a new venture inspired by the expertise of our parent company, Western Safety Patrol.</TagLine>
                                    &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                                </div>
                            </Col>
                            <Col sm="12" md="6" lg="6" data-aos="flip-right" data-aos-duration="1500" className="d-flex justify-content-end">
                                &nbsp; &nbsp; &nbsp;
                                <div className="banner-profile margin-resp">
                                    {
                                        apiDataAvailable && homepage ? (
                                            <Image priority width={100} height={100} src={`${BASE_URL}/uploads/homepage/${homepage.image}`} alt="prosecure" style={{ width: "80%", height: "50%" }}/>
                                        ) : (
                                            <Image priority width={100} height={100} src="/frontend/assets/image/prosecure-logo.png" alt="logo" className="logo" style={{ width: "auto", height: "auto" }}/>
                                        )
                                    }
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
    )
}

const CompanyName = styled.h3`
    font-size: 75px;
    font-weight: bold;
    letter-spacing: 1px;
    margin-bottom: 10px;
    color: var(--main-color);

    span{
        font-weight: 600;
        color: var(--primary-color);
    }

    @media (max-width: 1252px) { font-size: 70px; }
    @media (max-width: 1173px) { font-size: 64px; }
    @media (max-width: 1080px) { font-size: 58px; }
    @media (max-width: 984px) { font-size: 52px; }
    @media (max-width: 891px) { font-size: 45px; }
    @media (max-width: 781px) { font-size: 40px; }
    @media (max-width: 766px) { font-size: 50px; }
`;

const TagLine = styled.p`
    font-family: var(--paragraph);
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 400;
    color: #fff;

    @media (max-width: 1200px) { font-size: 17px; }
    @media (max-width: 991px) { font-size: 13px; }
    @media (max-width: 768px) { font-size: 18px; }
    @media (max-width: 575px) { font-size: 15px; }
    @media (max-width: 525px) { font-size: 13px; }
    @media (max-width: 480px) { font-size: 12px; }
    @media (max-width: 352px) { font-size: 10px; }

    &.text-color{
        color: #0059b1;
        font-weight: 600;
    }
`