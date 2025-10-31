"use client"; 
import React from "react";
import Link from "next/link";
import { Container, Col } from "react-bootstrap";
import styled from "styled-components";




export default function ServiceViewClient({ service }) {

    if (!service) {
        return <div>Service Data not found!</div>;
    }

    return (
        <React.Fragment>           
            <div className="bg-image" style={{backgroundImage: "URL('/frontend/assets/image/Alphafire.jpg')"}}>
                <div className="py-3 position-relative" style={{zIndex: "999"}}>
                    <Container fluid>
                        <h1 className="page-name">{service ? service.title : 'Service'}</h1>
                        <div className="breadcrumb">
                            <Link href="/service" className="breadcrumb-item">Service</Link>
                            <Link href="/about" className="breadcrumb-item active">{service ? service.title : 'Service'}</Link>
                        </div>
                    </Container>
                </div>
            </div>
            <section className='py-5' style={{overflow: "auto"}}>
                <Container fluid>
                    {service ? (
                        <Col md="12" lg="12">
                            <div className="text-wrapper">
                                <div className="certificate-image mx-2">
                                    <img src={`${process.env.NEXT_PUBLIC_BASE_URL}/uploads/service/${service.image}`} className="img-thumbnail" alt="certificate"/>
                                </div>
                                <h4 className='service-title'>{service.title}</h4>
                                <Description dangerouslySetInnerHTML={{ __html: service.description }} />
                            </div>
                        </Col>
                    ) : (
                        <React.Fragment></React.Fragment>
                    )}
                </Container>
            </section>
        </React.Fragment>
    );
}

const Description = styled.div`
    margin-top: 1em;
`;