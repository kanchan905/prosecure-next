import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Head from "next/head";
import Gallery from "../../components/Sections/Gallery";
import '../../style/service.css';



export const metadata = {
    metadataBase: new URL("https://admin.prosecure.co.in/service"),
    title: "Prosecure | Service",
    description: "Our professional team offers reliable safety patrols for Western regions, ensuring secure premises and timely responses.",
    openGraph: {
      title: "Prosecure | Service",
      description: "Our professional team offers reliable safety patrols for Western regions, ensuring secure premises and timely responses.",
      images: [
        {
          url: "/frontend/assets/image/prosecure-logo.png",
          width: 800,
          height: 600,
        },
      ],
    },
  };

export default function page() {


    return (
        <React.Fragment>
            <Head>
                <title>Prosecure | Service</title>
                <meta name="description" content="Our professional team offers reliable safety patrols for Western regions, ensuring secure premises and timely responses."/>
            </Head>
            <div className="bg-image" style={{backgroundImage: `url(/frontend/assets/image/Alphafire.jpg)`}}>
                <div className="py-3 position-relative" style={{zIndex: "999"}}>
                    <Container fluid> 
                        <h1 className="page-name">Service</h1>
                        <div className="breadcrumb">
                            <Link href="/" className="breadcrumb-item">Home</Link>
                            <Link href="/service" className="breadcrumb-item active"> Service</Link>
                        </div>
                    </Container>
                </div>
            </div>
            <section className="py-5">
            <Container fluid>
                <Row>
                    <Col sm="12" md="4" lg="4">
                        <div className="service-rectangle-wrapper">
                            <div className="frame">
                                <div className="frame-icon">
                                    <i className="fa-solid fa-user-group"></i>
                                </div>
                                <h4 className="text-center">On-site Guarding</h4>
                                <p className="service-paragraph">
                                    Our manned Guarding Service provides customers with fully-trained, professional Security Guard services. Whether your requirements are full-time, temporary or for special events, our officers are constantly evaluated and monitored to ensure we provide industry-leading service levels
                                </p>
                            </div>  
                        </div>
                    </Col>
                    <Col sm="12" md="4" lg="4">
                        <div className="service-rectangle-wrapper">
                            <div className="frame">
                                <div className="frame-icon">
                                    <i className="fa-solid fa-car"></i>
                                </div>
                                <h4 className="text-center">Mobile Guarding</h4>
                                <p className="service-paragraph">
                                    Our range of cost-effective Mobile Security response services can operate individually or in combination. From uniformed vehicle patrols, alarm response and lone worker escorts to protect your business continuity.
                                </p>
                            </div>  
                        </div>      
                    </Col>
                    <Col sm="12" md="4" lg="4">
                        <div className="service-rectangle-wrapper">
                            <div className="frame">
                                <div className="frame-icon">
                                    <i className="fa-solid fa-code-branch"></i>
                                </div>
                                <h4 className="text-center">Remote Guarding</h4>
                                <p className="service-paragraph">
                                    We have the experience, skills, and advanced technology to watch for and stop incidents before they happen. Our clients can experience true peace of mind knowing their property is safe, secure, and protected with state-of-the-art remote guarding services.
                                </p>
                            </div>  
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <Gallery/>

        </React.Fragment>
    )
}