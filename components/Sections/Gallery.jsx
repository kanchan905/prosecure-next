"use client";

import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Skeleton } from "@mui/material";
import Image from "next/image";

export default function Gallery() {
  const galleryData = useSelector((state) => state.service.serviceData);
  const loader = useSelector((state) => state.ui.loader);
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  if (loader) {
    // You might want a better skeleton layout for a grid
    return (
      <Container fluid className="py-5">
        <Row>
          {[...Array(6)].map((_, i) => (
            <Col md={6} lg={4} key={`skeleton-${i}`} className="mb-4">
              <Skeleton variant="rectangular" height={300} />
              <Skeleton variant="text" />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }

  return (
    <section className="py-5">
      <Container fluid>
        <Row>
          {galleryData.map((data, index) => (
            <Col md={6} lg={4} key={`gallery-item-${index}`} className="mb-4">
              <Link href={`/service/${data.slug}`} passHref>
                <div
                  className="grid-container"
                  //  ❗️ Key Change 1: Add position: relative to the parent div
                  style={{
                    cursor: 'pointer',
                    position: 'relative',
                    width: '100%',
                    height: '300px' // Give the container a defined height
                  }}
                >
                  <Image
                    src={`${BASE_URL}/uploads/service/${data.image}`}
                    className={`grid-item grid-item-${index}`}
                    alt={data.slug || ""}
                    priority
                    // ❗️ Key Change 2: Use fill instead of width/height
                    fill
                    // ❗️ Key Change 3: Control how the image fits
                    style={{ objectFit: 'cover' }}
                    // ❗️ Key Change 4: Pre-define image sizes for optimization
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* You might want to style this caption to overlay the image */}
                  <p style={{ position: 'absolute', bottom: 0, color: 'white', background: 'rgba(0,0,0,0.5)', width: '100%', padding: '10px', margin: 0 }}>
                    {data.title}
                  </p>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}