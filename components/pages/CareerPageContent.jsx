"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import Searchbar from "@/components/Elements/Searchbar";
import JobCard from "@/components/Sections/JobCard";
import "@/style/career.css";



export default function CareerPageContent() {
  const [search, setSearch] = useState('');

  return (
    <>
      <section className="py-5">
        <Container fluid>
          <div
            className="bg-image"
            style={{
              backgroundImage: "url('/frontend/assets/image/dark-theme-background.jpg')"
            }}
          >
            <div className="py-3 position-relative" style={{ zIndex: "999" }}>
              <Container fluid>
                <h1 className="page-name">Career</h1>
                <div className="breadcrumb">
                  <Link href="/" className="breadcrumb-item">Home</Link>
                  <Link href="/career" className="breadcrumb-item active">Career</Link>
                </div>
              </Container>
            </div>
          </div>
          <Searchbar searchProps={setSearch} />
          <JobCard filter={search} />
        </Container>
      </section>
    </>
  );
}