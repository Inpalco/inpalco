import { Inter, Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import WhatsappBaloon from "@/components/whatsappBaloon";
import VLibrasScript from "@/components/vlibrasScript";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata = {
  title: "In-Palco",
  description: "Transforme seus eventos em experiências acessíveis e inclusivas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={`${inter.variable} ${quicksand.variable} antialiased relative`}
      >
        <WhatsappBaloon/>
        <Header/>
        {children}
        <PrismicPreview repositoryName={repositoryName} />
        <VLibrasScript/>
        <SpeedInsights />
      </body>
    </html>
  );
}
