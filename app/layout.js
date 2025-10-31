import InitialDataLoader from "@/redux/InitialDataLoader";
import ReduxProvider from "@/redux/provider";
import "./globals.css";
import "@/style/about.css";
import "@/style/career.css";
import "@/style/service.css";
import "@/style/Contact.css";
import "@/style/Loader.css";
import Header from "@/components/Include/Header";
import Footer from "@/components/Include/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalLoader from "@/components/Elements/GlobalLoader";
import "../public/frontend/assets/css/style.css";
import "../public/frontend/assets/css/responsive.css";
import "../public/frontend/assets/vendor/fontawesome/css/all.min.css";
import "../public/frontend/assets/vendor/bootstrap-5/css/bootstrap.min.css";
import "../public/frontend/assets/css/eva-design.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        {/* Favicon */}
        <link href="/frontend/assets/image/prosecure-logo.png" rel="icon" />
      </head>
      <body>
        <ReduxProvider>
          <InitialDataLoader />
          <GlobalLoader />
          <Header />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
