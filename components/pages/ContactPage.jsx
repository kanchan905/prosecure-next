'use client';

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import ContactForm from "@/components/Elements/ContactForm";
import { useSelector } from "react-redux";
import "@/style/Contact.css";

export default function ContactPage() {
  const loader = useSelector((state) => state.ui.loader);
  const contactData = useSelector((state) => state.content.contactData);
  const addressData = useSelector((state) => state.content.addressData);

  return (
    <>
      <div
        className="bg-image"
        style={{
          backgroundImage: "url(/frontend/assets/image/bg-image.png)",
        }}
      >
        <div className="py-3 position-relative" style={{ zIndex: "999" }}>
          <Container fluid>
            <h1 className="page-name">Contact</h1>
            <div className="breadcrumb">
              <Link href="/" className="breadcrumb-item">
                Home
              </Link>
              <Link href="/contact" className="breadcrumb-item active">
                Contact
              </Link>
            </div>
          </Container>
        </div>
      </div>
      <section className="bg-section-contact">
        <Container fluid>
          <Row>
            <Col sm="12" md="12" lg="6">
              <div className="contact-info">
                <h2 className="title">Contact Us</h2>
                <div className="contact-card">
                  <div className="heading">
                    <i className="fa-solid fa-phone"></i>
                    <h4>Call Us</h4>
                  </div>
                  <div className="link-list">
                    {contactData.map((contact) => (
                      <React.Fragment key={`contact-${contact.contact_title}`}>
                        <a href={`tel:${contact.contact_number}`}>
                          <strong>Ph</strong>
                          {` – ${contact.contact_number} (${contact.contact_title})`}
                        </a>
                        <br />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div className="contact-card">
                  <div className="heading">
                    <i className="fa-solid fa-location-dot"></i>
                    <h4>Location</h4>
                  </div>
                  <div className="link-list">
                    {addressData.map((address) => (
                      <div key={`address-${address.id}`}>
                        <strong>{address.address_title}</strong>
                        {` - ${address.address}, ${address.city}, ${address.state}, ${address.pincode}`}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
            <Col sm="12" md="12" lg="6">
              <div className="contact-form">
                <ContactForm />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.9076338508758!2d77.12504717542973!3d28.871365273195032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dabc44edca1e5%3A0x6e9da7afc7578b88!2sWestern%20Safety%20Patrol!5e0!3m2!1sen!2sin!4v1697451271243!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}