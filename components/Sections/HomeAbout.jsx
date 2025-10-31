"use client";

import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Aos from "aos";
import CountUp from "react-countup";
import { Skeleton } from "@mui/material";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function HomeAbout() {
  const aboutContent = useSelector((state) => state.content.aboutContent);
  const counter = useSelector((state) => state.ui.counter);
  const apiDataAvailable = useSelector((state) => state.ui.apiDataAvailable);
  const loader = useSelector((state) => state.ui.loader);

  useEffect(() => {
    Aos.init();
  }, []);

  if (loader) {
    return (
      <React.Fragment>
        <Container>
          <Skeleton variant="rectangular" height={40} sx={{ margin: "84px 0 0 0" }} />
          <Skeleton variant="circular" width={100} height={100} sx={{ margin: "1em 0" }} />
          <Skeleton variant="rectangular" height={60} sx={{ margin: "1em 0" }} />
          <Skeleton variant="rounded" height={60} sx={{ margin: "1em 0" }} />
        </Container>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <section className="py-5">
        <Container fluid>
          <div className="rectangle-wrapper">
            <div className="about-section" data-aos="flip-left" data-aos-duration="1500">
              <h2>About us</h2>
              {aboutContent && aboutContent.content ? (
                apiDataAvailable ? (
                  <p>{`${aboutContent.content.substring(0, 358)}...`}</p>
                ) : (
                  <p>{aboutContent.content}</p>
                )
              ) : (
                <p>About content is not available.</p>
              )}
              <Link href="/about" className="eva-btn eva-btn-jasper text-uppercase">
                learn more..
              </Link>
            </div>
            <div className="number-section" data-aos="flip-right" data-aos-duration="1500">
              <div className="frame">
                <h2>Let's number talk</h2>
                {apiDataAvailable && counter ? (
                  <div className="number-count">
                    <div className="count-down">
                      <h1 className="count">
                        <CountUp start={0} end={counter.cumulative_year} duration={2} />+
                      </h1>
                      <p className="count-text">cumulative years in business</p>
                    </div>
                    <div className="count-down">
                      <h1 className="count">
                        <CountUp start={0} end={counter.happy_customers} duration={2} />+
                      </h1>
                      <p className="count-text">Happy customers</p>
                    </div>
                    <div className="count-down">
                      <h1 className="count">
                        <CountUp start={0} end={counter.trained_officer} duration={2} />+
                      </h1>
                      <p className="count-text">Trained officer</p>
                    </div>
                    <div className="count-down">
                      <h1 className="count">
                        <CountUp start={0} end={counter.asset_protected} duration={2} />+
                      </h1>
                      <p className="count-text">assets protected</p>
                    </div>
                  </div>
                ) : (
                  <div className="number-count">
                    <div className="count-down">
                      <h1 className="count">
                        <CountUp start={0} end={80} duration={2} />+
                      </h1>
                      <p className="count-text">cumulative years in business</p>
                    </div>
                    <div className="count-down">
                      <h1 className="count">
                        <CountUp start={0} end={250} duration={2} />+
                      </h1>
                      <p className="count-text">Happy customers</p>
                    </div>
                    <div className="count-down">
                      <h1 className="count">
                        <CountUp start={0} end={500} duration={2} />+
                      </h1>
                      <p className="count-text">Trained officer</p>
                    </div>
                    <div className="count-down">
                      <h1 className="count">
                        <CountUp start={0} end={2000} duration={2} />+
                      </h1>
                      <p className="count-text">assets protected</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
}