"use client";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Header() {
  const profile = useSelector((state) => state.profile.profile);
  const serviceData = useSelector((state) => state.service.serviceData);
  const whatsappNumber = useSelector((state) => state.ui.whatsappNumber);
  const apiDataAvailable = useSelector((state) => state.ui.apiDataAvailable);
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const redirectToWhatsapp = () => {
    const whatsBASE_URL = `https://api.whatsapp.com/send?phone=${encodeURIComponent(whatsappNumber)}`;
    window.open(whatsBASE_URL, "_blank");
  };

  return (
    <Height>
      <Navbar expand="lg" className="bg-white navbar-light fixed-top h-full">
        <Container fluid>
          <Navbar.Brand as={Link} href="/">
            {apiDataAvailable && profile?.company_logo ? (
              <Image
                src={`/frontend/assets/image/prosecure-logo.png`}
                alt="logo"
                width={120}
                height={40}
                className="logo"
                priority
              />
            ) : (
              <Image
                src="/frontend/assets/image/prosecure-logo.png"
                alt="logo"
                width={120}
                height={40}
                className="logo"
                priority
              />
            )}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-dark">
            <i className="fa-solid fa-bars"></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} href="/">Home</Nav.Link>
              <Nav.Link as={Link} href="/about">About us</Nav.Link>
              <NavDropdown title="Service" id="service-dropdown">
                <NavDropdown.Item as={Link} href="/service">
                  All Services
                </NavDropdown.Item>
                {apiDataAvailable && serviceData?.map((data, index) => (
                  <NavDropdown.Item as={Link} href={`/service/${data.slug}`} key={index}>
                    {data.title}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <Nav.Link as={Link} href="/career">Career</Nav.Link>
              <Nav.Link as={Link} href="/contact">Contact us</Nav.Link>
              <Nav.Link as={Link} href="/mobileapp">Download</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Height>
  );
}

const Height = styled.div`
  height: 91px;
  @media screen and (max-width: 1190px){
    height: 56px;
  }
`;