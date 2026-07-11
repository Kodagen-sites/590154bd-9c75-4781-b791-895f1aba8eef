import type { Metadata } from "next";
import { Lora, Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/headers/Header";
import Footer from "@/components/Footer";
import { FilmGrain, Vignette } from "@/components/motion";
import { CookieConsent } from "@/components/CookieConsent";
import EditorBridge from "@/components/__kodagen/EditorBridge";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Copperleaf Coffee Roasters — Small-Batch Specialty Coffee, Austin TX",
  description:
    "Single-origin beans, wholesale roasting, and barista workshops from Austin's craft roastery.",
  metadataBase: new URL("https://copperleafcoffee.com"),
  openGraph: {
    title: "Copperleaf Coffee Roasters",
    description: "Small-batch specialty coffee, roasted with intention in Austin.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lora.variable} ${nunito.variable}`}>
      <body className="bg-bg text-dark overflow-x-clip antialiased">
        <Header />
        {children}
        <Footer />
        <FilmGrain opacity={0.03} />
        <Vignette color="#2D1810" />
        <CookieConsent />
        <EditorBridge />
      </body>
    </html>
  );
}
