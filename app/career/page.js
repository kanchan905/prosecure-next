import CareerPageContent from "@/components/pages/CareerPageContent";

export const metadata = {
  metadataBase: new URL("https://admin.prosecure.co.in/career"),
    title: "Prosecure | Career",
    description: "Western Safety Patrol provides customized security services with a focus on customers. Our team, including ex-police and military members, keeps you safe.",
    openGraph: {
      title: "Prosecure | Career",
      description: "Western Safety Patrol provides customized security services with a focus on customers. Our team, including ex-police and military members, keeps you safe.",
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
    <CareerPageContent/>
  );
}