"use client";
import React from "react";
import { useSelector } from "react-redux";
import CountUp from "react-countup";
import { Container, Row, Col } from "react-bootstrap";


export default function CounterSection() {
  const { apiDataAvailable, counter } = useSelector((state) => state.ui);

  return (
    <section className="bg-light">
      <Container fluid>
        <div className="counterbar">
          <Row>
            <Col lg="3" md="6" sm="6">
              <div className="count-wrapper">
                {apiDataAvailable && counter ? (
                  <h2>
                    <CountUp start={0} end={counter.cumulative_year} duration={2} />+
                  </h2>
                ) : (
                  <h2>
                    <CountUp start={0} end={100} duration={2} />+
                  </h2>
                )}
                <p>Cumulative Years in Business</p>
              </div>
            </Col>
            <Col lg="3" md="6" sm="6">
              <div className="count-wrapper">
                {apiDataAvailable && counter ? (
                  <h2>
                    <CountUp start={0} end={counter.happy_customers} duration={2} />+
                  </h2>
                ) : (
                  <h2>
                    <CountUp start={0} end={500} duration={2} />+
                  </h2>
                )}
                <p>Happy customers</p>
              </div>
            </Col>
            <Col lg="3" md="6" sm="6">
              <div className="count-wrapper">
                {apiDataAvailable && counter ? (
                  <h2>
                    <CountUp start={0} end={counter.trained_officer} duration={2} />+
                  </h2>
                ) : (
                  <h2>
                    <CountUp start={0} end={50} duration={2} />+
                  </h2>
                )}
                <p>Trained officer</p>
              </div>
            </Col>
            <Col lg="3" md="6" sm="6">
              <div className="count-wrapper">
                {apiDataAvailable && counter ? (
                  <h2>
                    <CountUp start={0} end={counter.asset_protected} duration={2} />+
                  </h2>
                ) : (
                  <h2>
                    <CountUp start={0} end={2000} duration={2} />+
                  </h2>
                )}
                <p>Assets Protected</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}