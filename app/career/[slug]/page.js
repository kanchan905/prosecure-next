import CareerViewPageContent from "@/components/pages/CareerViewPageContent";


async function getCareerData(slug) {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";
    const res = await fetch(`${BASE_URL}/api/career`, { next: { revalidate: 10 } });
    if (!res.ok) return null;
    const data = await res.json();
    return data.find((item) => item.slug === slug) || null;
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const careerPage = await getCareerData(resolvedParams.slug);

    if (!careerPage) {
        return {
            title: "Career Not Found | Prosecure",
            description: "The requested career could not be found.",
        };
    }

    return {
        metadataBase: new URL("https://admin.prosecure.co.in"),
        title: `Prosecure | ${careerPage.title}`,
        description: 'Western Safety Patrol provides customized security services with a focus on customers. Our team, including ex-police and military members, keeps you safe.',
        openGraph: {
            title: `Prosecure | ${careerPage.title}`,
            description: 'Western Safety Patrol provides customized security services with a focus on customers. Our team, including ex-police and military members, keeps you safe.',
            images: [
                {
                    url: `/frontend/assets/image/prosecure-logo.png`,
                    width: 800,
                    height: 600,
                },
            ],
        },
    };
}

export async function generateStaticParams() {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";
    const res = await fetch(`${BASE_URL}/api/career`, { cache: "no-store" });
    if (!res.ok) return [];
    const data = await res.json();
    return data.map(item => ({ slug: item.slug }));
}

export default async function page({ params }) {
    const resolvedParams = await params;
    const careerPage = await getCareerData(resolvedParams.slug);
    return <CareerViewPageContent careerPage={careerPage} />;
}