'use client';

import React, {useEffect} from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Skeleton } from "@mui/material";
import Aos from "aos";
import '@/style/about.css';
import AboutDescription from "@/components/Sections/AboutDescription";
import CounterSection from "@/components/Sections/CounterSection";
import Certificate from "@/components/Sections/Certificate";
import Director from "@/components/Sections/Director";



export const metadata = {
    metadataBase: new URL("https://admin.prosecure.co.in/about"),
    title: "About | Prosecure",
    description: "Prosecure is a leading provider of security services in the UAE. We offer a wide range of security solutions to meet the needs of our clients.",
    openGraph: {
      title: "About | Prosecure",
      description: "Prosecure is a leading provider of security services in the UAE. We offer a wide range of security solutions to meet the needs of our clients.",
      images: [
        {
          url: "/frontend/assets/image/prosecure-logo.png",
          width: 800,
          height: 600,
        },
      ],
    },
  };
  

export default function About(){

    const loader = useSelector(state => state.ui.loader);


    useEffect(() => {
        Aos.init();
    }, []);

    if(loader){
        return  <Row>
                    <Col lg="4">
                        <Skeleton variant="rectangular" height={300}/>
                        <Skeleton width="40%"/>
                        <Skeleton/>
                    </Col>
                    <Col lg="4">
                        <Skeleton variant="rectangular" height={300}/>
                        <Skeleton width="40%"/>
                        <Skeleton/>
                    </Col>
                    <Col lg="4">
                        <Skeleton variant="rectangular" height={300}/>
                        <Skeleton width="40%"/>
                        <Skeleton/>
                    </Col>
                </Row>

    }

    return(
        <>
            <AboutDescription/>
            <CounterSection/>
            <Certificate/>
            <Director/>
        </>

    )
}