"use client";

import React, { useEffect } from "react";
import Slider from "react-slick";
import Aos from "aos";
import { Avatar, Skeleton } from "@mui/material";
import Link from "next/link";
import 'aos/dist/aos.css';
import { useSelector } from "react-redux";
import Image from "next/image";

export default function Director() {
  const teamData = useSelector((state) => state.profile.teamData);
  const loader = useSelector((state) => state.ui.loader);
  const apiDataAvailable = useSelector((state) => state.ui.apiDataAvailable);
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  // Slick carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="vision py-5" style={{ backgroundColor: "rgb(235 235 235)" }}>
      <div className="container-fluid">
        {loader ? (
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-6 offset-md-4">
              <h2 className="section-title">Director Vision</h2>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
              <Skeleton variant="circular" width={150} height={150}>
                <Avatar />
              </Skeleton>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
              <Skeleton height={100} />
              <Skeleton width="40%" />
            </div>
          </div>
        ) : (
          apiDataAvailable && teamData.length > 0 && (
            <Slider {...settings} className="director-slider">
              {teamData.map((data, index) => (
                <div key={`director-${index}`}>
                  <div className="row align-items-center">
                    <div className="col-sm-12 col-md-12 offset-md-4">
                      <h2 className="section-title">{data.title}</h2>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 d-flex justify-content-center" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                      <div className="profile-md">
                        <Image width= {400} height={200} src={`${BASE_URL}/uploads/profile/${data.director_photo}`} alt="mdprofile" priority/>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-8" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                      <div className="content-text">
                        <p className="vision-content">{data.director_discription}</p>
                        <Link href={data.linkedin_link} target="_blank" rel="noopener noreferrer">
                          <p className="director-name">{`${data.director_name} - ${data.designation}`}</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          )
        )}
      </div>
    </section>
  );
}