"use client";

import React, { useEffect } from "react";
import Aos from "aos";
import Testimonial from "../Elements/Testimonial";
import ContactForm from "../Elements/ContactForm";

export default function CommonSection() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section
      id="sectionBackground"
      className="bg-section py-4"
      style={{
        backgroundImage: "url('/frontend/assets/image/fire-safety-bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="container-fluid">
        <div className="row" style={{ position: "relative", zIndex: "99" }}>
          <div
            className="col-md-6 col-lg-5"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          >
            <h2 className="text-center section-title my-5">Testimonial</h2>
            <div className="testimonial-container">
              <Testimonial />
            </div>
          </div>
          <div className="d-none d-lg-block col-md-0 col-lg-2 column-hide"></div>
          <div
            className="col-md-6 col-lg-5"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          >
            <div className="title-container">
              <h2 className="text-center section-title mt-5">Request Info</h2>
              <p>Feel free to contact us for any query </p>
            </div>
            <div className="contact-form">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}