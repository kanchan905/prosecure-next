import ServiceViewClient from "@/components/pages/ServiceViewClient";

async function getServiceData(slug) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_DEV_URL}/service/${slug}`, { next: { revalidate: 10 } });
  
    if (!response.ok) return null;
    return await response.json();
}

export async function generateMetadata({ params }) {
    const {slug } = await params;
    const service = await getServiceData(slug);
    const Base_URL = process.env.NEXT_PUBLIC_BASE_URL;

    if (!service) {
        return {
            metadataBase: new URL("https://admin.prosecure.co.in"),
            title: "Service Not Found | Prosecure",
            description: "The requested service could not be found.",
            openGraph: {
                title: "Service Not Found | Prosecure",
                description: "The requested service could not be found.",
            },
        };
    }

    const serviceTitle = service.title || "Service";
    const imageUrl = service.image
        ? `${Base_URL}/uploads/service/${service.image}`
        : `/frontend/assets/image/prosecure-logo.png`; // Fallback image


    return {
         metadataBase: new URL("https://admin.prosecure.co.in"),
        title: `Prosecure | ${serviceTitle}`,
        description: `Western Safety Patrol offers the best ${serviceTitle} service.`,
        openGraph: {
            title: `Prosecure | ${serviceTitle}`,
            description: `Western Safety Patrol offers the best ${serviceTitle} service.`,
            images: [
                {
                    url: imageUrl,
                    width: 800,
                    height: 600,
                    alt: serviceTitle,
                },
            ],
        },
    };
}

export async function generateStaticParams() {
    // Fetch all services from your API
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_DEV_URL}/service`, { cache: "no-store" });
    if (!response.ok) return [];

    const services = await response.json();
    return services.map(service => ({
        slug: service.slug
    }));
}

export default async function page({ params }) {
    params = await params;
    const service = await getServiceData(params.slug);

    // Pass the fetched service data as a prop
    return <ServiceViewClient service={service} />;
}