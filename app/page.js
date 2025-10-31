import HomeBanner from "@/components/Sections/HomeBanner";
import ServiceCategory from "@/components/Sections/ServiceCategory";
import HomeAbout from "@/components/Sections/HomeAbout";
import BestService from "@/components/Sections/BestService";
import ServiceCarousel from "@/components/Sections/ServiceCarousel";
import Video from "@/components/Sections/VideoSection";
import CommonSection from "@/components/Sections/CommonSection";
import Client from "@/components/Sections/Client";
import Director from "@/components/Sections/Director";




export const metadata = {
  metadataBase: new URL("https://admin.prosecure.co.in"),
  title: "Prosecure | Home",
  description: "Prosecure",
  openGraph: {
    title: "Prosecure | Home",
    description: "Prosecure",
    images: [
      {
        url: "/frontend/assets/image/prosecure-logo.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function page() {
  return (
    <>
      <HomeBanner />
      <ServiceCategory />
      <HomeAbout />
      <BestService />
      <Video />
      <ServiceCarousel />
      <CommonSection />
      <Client />
      <Director />
    </>
  );
}
