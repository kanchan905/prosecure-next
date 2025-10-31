"use client";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import TopArrowButton from "./TopArrowButton";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import styled from "styled-components";

export default function Footer() {
  const profile = useSelector((state) => state.profile.profile);
  const whatsappNumber = useSelector((state) => state.ui.whatsappNumber);
  const serviceData = useSelector((state) => state.service.serviceData);
  const apiDataAvailable = useSelector((state) => state.ui.apiDataAvailable);
  const addressData = useSelector((state) => state.content.addressData);
  const contactData = useSelector((state) => state.content.contactData);
  const loader = useSelector((state) => state.ui.loader);

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const redirectToWhatsapp = () => {
    const whatsBASE_URL = `https://api.whatsapp.com/send?phone=${encodeURIComponent(whatsappNumber)}`;
    window.open(whatsBASE_URL, '_blank');
  };

  if (loader) {
    return <Skeleton />;
  }

  return (
    <footer className="bg-dark py-5">
      <div className="container-fluid">
        <div className="row">
          {/* Brand and Social */}
          <div className="col-sm-12 col-md-4 col-lg-4">
            {apiDataAvailable && profile ? (
              <>
                <div className="footer-brand">
                  <Image
                    src={`/frontend/assets/image/prosecure-logo.png`}
                    alt="companylogo"
                    width={120}
                    height={40}
                    priority
                  />
                </div>
                <p>{profile.content}</p>
              </>
            ) : (
              <>
                <div className="footer-brand">
                  <Image
                    src="/frontend/assets/image/prosecure-logo.png"
                    alt="companylogo"
                    width={120}
                    height={40}
                    priority
                  />
                </div>
                <p>
                  WSP provides a full suite of private contract security and patrol services with a customer-focused culture that is unique to the industry.
                </p>
              </>
            )}
            <div className="social-link my-3">
              {apiDataAvailable && profile ? (
                <>
                  <a href={profile.company_fb_link} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href={profile.company_instagram_link} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                  <a href={profile.company_twitter_link} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i></a>
                  <a href={profile.company_linkedin_link} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                  <a onClick={redirectToWhatsapp} style={{cursor: 'pointer', color:'white'}}><i className="fa-brands fa-whatsapp"></i></a>
                </>
              ) : (
                <>
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                  <a target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                  <a target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i></a>
                  <a target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                  <a onClick={redirectToWhatsapp} style={{cursor: 'pointer', color:'white'}}><i className="fa-brands fa-whatsapp"></i></a>
                </>
              )}
            </div>
            <CustomLink href="https://play.google.com/store/apps/details?id=com.wsppatrolemployee" target="_blank" rel="noopener noreferrer">
              <Image src="/frontend/assets/image/play_store.png" className="android-btn" alt="" width={159} height={48} priority/>
            </CustomLink>
            <CustomLink href="https://apps.apple.com/in/app/western-safety-patrol/id6502806040" target="_blank" rel="noopener noreferrer">
              <Image src="/frontend/assets/image/app_store.png" className="app-store" alt="play store" width={159} height={48} priority/>
            </CustomLink>
          </div>
          {/* Services */}
          <div className="col-sm-12 col-md-4 col-lg-4 container-center">
            <div className="margin-resp">
              <h4 className="footer-title">Services</h4>
              <ul className="footer-nav-list" style={{paddingLeft: "0px"}}>
                {apiDataAvailable && serviceData ? (
                  serviceData.map((data, index) => (
                    <li className="footnav-link" key={index}>
                      <Link href={`/service/${data.slug}`}>{data.title}</Link>
                    </li>
                  ))
                ) : (
                  <>
                    <li className="footnav-link"><span>security officers</span></li>
                    <li className="footnav-link"><span>vehicle patrol</span></li>
                    <li className="footnav-link"><span>alarm & incident response</span></li>
                    <li className="footnav-link"><span>event security</span></li>
                    <li className="footnav-link"><span>transportation</span></li>
                    <li className="footnav-link"><span>security consultant</span></li>
                  </>
                )}
                <li className="footnav-link"><Link href="/">Privacy Policy</Link></li>
                <li className="footnav-link"><Link href="/sitemap">Sitemap</Link></li>
              </ul>
            </div>
          </div>
          {/* Address */}
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="margin-resp">
              <h4 className="footer-title">Address</h4>
              <ul className="footer-nav-list" style={{paddingLeft: "0px"}}>
                {apiDataAvailable && addressData ? (
                  addressData.map((address, index) => (
                    <li key={`footer-address-${index}`} className="footnav-link">
                      <a href={address.googlemap_link} target="_blank" rel="noopener noreferrer">
                        <strong>{address.address_title}</strong> - {`${address.address}, ${address.city}, ${address.state}, ${address.pincode}`}
                      </a>
                    </li>
                  ))
                ) : (
                  <li className="footnav-link">
                    <span>
                      <strong>Regd. Office</strong> – Tilak Nagar, 591 B, Shop No 1, Rohtak, Haryana, 124001
                    </span>
                  </li>
                )}
                <li className="footnav-link">
                  {apiDataAvailable && contactData ? contactData.map((contact, index) => (
                    <span key={`footercontact-${index}`}>
                      <a href={`tel:${contact.contact_number}`}>
                        <strong><i className="fa-solid fa-phone"></i></strong> {contact.contact_number} ({contact.contact_title})
                      </a>
                      <br />
                    </span>
                  )) : (
                    <>
                      <a href="tel:9254029411"><strong><i className="fa-solid fa-phone"></i></strong> - 92540-29411 (Sales)</a><br />
                      <a href="tel:7056740202"><strong><i className="fa-solid fa-phone"></i></strong> - 70567-40202 (Helpline)</a>
                    </>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <hr className="text-white mt-4" />
          <div className="col-lg-12 text-center">
            <div className="copyright text-white">
              &copy; Copyright
            </div>
            <div className="credits text-white ">
              All Rights Reserved by <strong>Prosecure</strong> 2024 &copy;
            </div>
          </div>
        </div>
      </div>
      <TopArrowButton />
    </footer>
  );
}

const CustomLink = styled.a`
  text-decoration: none;
  img {
    width: 159px;
    height: 48px;
    margin: 0.5em;
    &:hover {
      color: #fff;
    }
  }
  .android-btn {
    transform: translateY(0px);
    transition: all, .5s ease-in !important;
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0px 0px 16px -10px rgba(255,255,255,0.6);
    }
  }
`;