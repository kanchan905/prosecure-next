"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {  useSelector } from "react-redux";
import SitemapCard from "@/components/Elements/SitemapCard";

const SitemapComponent = () => {
  const serviceData = useSelector((state) => state.service.serviceData);

 

  const sitemapData = [
    {
      title: "Main Navigation",
      icon: "fa-solid fa-house",
      links: [
        { name: "Home", url: "/", description: "Welcome page and overview" },
        { name: "About Us", url: "/about", description: "Company information and history" },
        { name: "Services", url: "/service", description: "Complete service portfolio" },
        { name: "Contact", url: "/contact", description: "Get in touch with us" },
      ],
    },
    {
      title: "Services",
      icon: "fa-solid fa-gear",
      links: serviceData?.map((service) => ({
        name: service?.title,
        url: `/service/${service?.slug}`,
        description: service?.content || "Service details",
      })) || [],
    },
    {
      title: "Legal & Compliance",
      icon: "fa-solid fa-file-lines",
      links: [
        { name: "Privacy Policy", url: "/", description: "Data protection policy" },
        { name: "Terms of Service", url: "/", description: "Service agreement" },
      ],
    },
  ];

  return (
    <React.Fragment>
      <div className="py-5 bg-section" >
        <Container>
          <div className="text-center">
            <h1 className="fw-bold">Website Sitemap</h1>
            <p className="max-w-2xl mx-auto">
              Navigate through all pages and sections of our comprehensive security services website
            </p>
          </div>
        </Container>
      </div>

      <section className="py-5">
        <Container>
          <Row>
            {sitemapData.map((section, index) => (
              <Col sm={6} md={4} lg={4} key={index} className="mb-4">
                <SitemapCard head={section.title} icon={section.icon} links={section.links} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default SitemapComponent;
