import React from "react";
import AboutPageContent from "@/components/pages/AboutPageContent"; 


export const metadata = {
    metadataBase: new URL("https://admin.prosecure.co.in/about"),
    title: "Prosecure | About",
    description: "WSP provides a full suite of private contract security and patrol services with a customer-focused culture that is unique to the industry. We are able to tailor our offerings to clients’ needs due in-part to our well-trained personnel with varied backgrounds that include law enforcement, private security, customer service, and military experience.",
    openGraph: {
        title: "Prosecure | About",
        description: "WSP provides a full suite of private contract security and patrol services with a customer-focused culture that is unique to the industry. We are able to tailor our offerings to clients’ needs due in-part to our well-trained personnel with varied backgrounds that include law enforcement, private security, customer service, and military experience.",
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
        <AboutPageContent />
    );
}