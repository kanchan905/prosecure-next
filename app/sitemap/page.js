import SitemapComponent from "@/components/Elements/SitemapComponent"

export const metadata = {
  metadataBase: new URL("https://admin.prosecure.co.in/sitemap"),
  title: "Prosecure | Sitemap",
  description: "WSP provides a full suite of private contract security and patrol services with a customer-focused culture that is unique to the industry. We are able to tailor our offerings to clients’ needs due in-part to our well-trained personnel with varied backgrounds that include law enforcement, private security, customer service, and military experience.",
  openGraph: {
      title: "Prosecure | Sitemap",
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
  return  <SitemapComponent/>
}