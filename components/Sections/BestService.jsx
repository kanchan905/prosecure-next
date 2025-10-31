"use client";

import React, { useEffect } from "react";
import Aos from "aos";
import { Skeleton } from "@mui/material";
import { serviceCard } from '@/components/VariableHandler/handler';
import { useSelector } from "react-redux";

export default function BestService() {
  const apiDataAvailable = useSelector((state) => state.ui.apiDataAvailable);
  const bestService = useSelector((state) => state.service.bestService);
  const bestHeading = useSelector((state) => state.service.bestHeading);
  const loader = useSelector((state) => state.ui.loader);

  useEffect(() => {
    Aos.init();
  }, []);

  if (loader) {
    return (
      <React.Fragment>
        <div className="container">
          <Skeleton variant="rectangular" height={40} sx={{ margin: "84px 0 0 0" }} />
          <Skeleton variant="circular" width={100} height={100} sx={{ margin: "1em 0" }} />
          <Skeleton variant="rectangular" height={60} sx={{ margin: "1em 0" }} />
          <Skeleton variant="rounded" height={60} sx={{ margin: "1em 0" }} />
        </div>
      </React.Fragment>
    );
  }

  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container-fluid">
        <h2
          className="text-center section-title"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          {apiDataAvailable && bestHeading ? bestHeading.heading : "We Provide The Best Services"}
        </h2>
        <div className="row">
          {apiDataAvailable && bestService ? (
            bestService.map((service) => (
              <div key={service.id} className="col-12 col-md-4 col-lg-4">
                <div className="container-wrapper" data-aos="fade-up" data-aos-duration="1500">
                  <div className="text-center icon">
                    <div dangerouslySetInnerHTML={{ __html: service.icon }} />
                  </div>
                  <div className="label">
                    <h4 className="label-content">{service.title}</h4>
                    <p className="label-paragraph">{service.content}</p>
                    {/* <Link href="/about" className="eva-btn eva-btn-jasper text-uppercase">learn more..</Link> */}
                  </div>
                </div>
              </div>
            ))
          ) : (
            serviceCard.map((card, index) => (
              <div key={index} className="col-12 col-md-4 col-lg-4">
                <div className="container-wrapper" data-aos="fade-up" data-aos-duration="1500">
                  <div className="text-center icon">
                    <i className={card.icon}></i>
                  </div>
                  <div className="label">
                    <h4 className="label-content">{card.title}</h4>
                    <p className="label-paragraph">{card.description}</p>
                    {/* <Link href="/about" className="eva-btn eva-btn-jasper text-uppercase">learn more..</Link> */}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}