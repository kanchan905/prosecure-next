"use client";

import React, { useContext, useState, useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Skeleton } from "@mui/material";
import Aos from "aos";
import { useSelector } from "react-redux";

export default function Video(){
    const videoData = useSelector((state) => state.content.videoData);
    const loader = useSelector((state) => state.ui.loader);
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    const [play, setPlay] = useState(false);
    const videoRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            const video = videoRef.current;
            const handleVideoEnd = () => {
                setPlay(false);
            };
            video.addEventListener('ended', handleVideoEnd);
            return () => {
                video.removeEventListener('ended', handleVideoEnd);
            };
        }
        Aos.init();
    }, [videoData]);

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    videoRef.current?.play();
                } else {
                    videoRef.current?.pause();
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.5
        });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    function handlePlay() {
        if (play) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setPlay(!play);
    };

    if(loader){
        <Row>
            <Col lg="12">
                <Skeleton variant="rectangular" height={300}/>
                <Skeleton width="100%"/>
                <Skeleton/>
            </Col>
        </Row>
    };
    return(
        <Section ref={sectionRef} className="position-relative" data-aos="fade-up" data-aos-duration="1500">
            {
                videoData && (
                    <>
                        <VideoClip ref={videoRef} src={`${BASE_URL}/uploads/videos/${videoData.video_file}`} ></VideoClip>
                        <PlayButton onClick={handlePlay}><i className={`fa-solid fa-${play ? 'pause' : 'play'}`}></i></PlayButton>
                    </>
                )
            }
        </Section>
    )
}

const VideoClip = styled.video`
    width: 100%;
    height: auto;
`;

const Section = styled.section`
    &::after{
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.6); 
    }
`;

const PlayButton = styled.button`
    position: absolute;
    top: 40%;
    left: 48%;
    width: 60px;
    height: 60px;
    font-size: 24px;
    color: #fff;
    border: none;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 99;
    transition: background 0.3s ease;

    &:hover {
        background: rgba(0, 0, 0, 0.7);
    }

    &:active {
        background: rgba(0, 0, 0, 0.9);
    }

    i {
        pointer-events: none;
    }
`;