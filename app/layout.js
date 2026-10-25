import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", weight: ["700", "800"] });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

const title = "Naveen Mobile Shop Chaukhutiya | Mobiles, Accessories & Phone Repair";
const description = "Looking for a mobile shop near you in Chaukhutiya? Naveen Mobile Shop sells new mobiles and accessories and repairs phones. Near I ❤ Chaukhutiya. Get directions and call now.";

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s | Naveen Mobile Shop Chaukhutiya" },
  description,
  keywords: ["mobile shop near me", "mobile shop in Chaukhutiya", "mobile shop near Chaukhutiya", "phone repair Chaukhutiya", "mobile accessories Chaukhutiya", "Naveen Mobile Shop"],
  alternates: { canonical: "/" },
  openGraph: { title, description, url: site.url, siteName: site.name, locale: "en_IN", type: "website", images: [{ url: "/shop/i1.jpg" }] },
};
export const viewport = { themeColor: "#0a1033" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobilePhoneStore",
  name: site.name,
  url: site.url,
  telephone: site.phone,
  image: `${site.url}/shop/i1.jpg`,
  description,
  address: { "@type": "PostalAddress", streetAddress: "Near I ❤ Chaukhutiya", addressLocality: "Chaukhutiya", addressRegion: "Uttarakhand", addressCountry: "IN" },
  sameAs: [site.instagram],
  hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" data-theme="dark" suppressHydrationWarning className={`${display.variable} ${body.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "try{var t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t}catch(e){}" }} />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
