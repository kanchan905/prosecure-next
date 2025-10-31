import ApplicationForm from "@/components/pages/ApplicationForm";
import { Suspense } from "react";


export const metadata = {
    metadataBase: new URL("https://prosecure.co.in"),
    title: "Prosecure | Applicant Form",
    description: "Western Safety Patrol provides customized security services with a focus on customers. Our team, including ex-police and military members, keeps you safe.",
    openGraph: {
        title: "Prosecure | Applicant Form",
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
       <Suspense fallback={<div>Loading...</div>}>
         <ApplicationForm/>
       </Suspense>
    )
}

