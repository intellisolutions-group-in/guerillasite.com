import type { Metadata } from "next";
import { Inter, Manrope, Syne, Space_Grotesk, Plus_Jakarta_Sans, Share_Tech_Mono, Playfair_Display, Dancing_Script } from "next/font/google";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech-mono",
  subsets: ["latin"],
  weight: ["400"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "GuerillaSite | Precision Enterprise Engineering",
    template: "%s | GuerillaSite",
  },
  description: "Precision software development, cloud infrastructure, AI integrations, and technical consulting.",
  metadataBase: new URL("https://guerillasite.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GuerillaSite | Precision Enterprise Engineering",
    description: "Precision software development, cloud infrastructure, AI integrations, and technical consulting.",
    url: "https://guerillasite.com",
    siteName: "Guerilla Site",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/GuerillaSiteLogo-01.png",
        width: 1200,
        height: 630,
        alt: "GuerillaSite Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GuerillaSite | Precision Enterprise Engineering",
    description: "Precision software development, cloud infrastructure, AI integrations, and technical consulting.",
    images: ["/images/GuerillaSiteLogo-01.png"],
  },
  icons: {
    icon: [
      { url: "/images/favicon.ico", sizes: "any" },
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${syne.variable} ${spaceGrotesk.variable} ${plusJakarta.variable} ${shareTechMono.variable} ${playfair.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <head>
        {/* eslint-disable-next-line @next/next/google-font-display, @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block" />
      </head>
      <body className="min-h-full flex flex-col bg-[#F0EEE9] text-[#17184B] selection:bg-[#D8E63C] selection:text-[#17184B]">
        <div className="relative min-h-screen overflow-x-clip flex flex-col flex-grow">
          {/* Pulsing background blur blobs for global theme consistency */}
          <div className="absolute top-20 left-10 md:left-1/4 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-[#D8E63C]/10 rounded-full filter blur-[100px] -z-10 pointer-events-none animate-pulse duration-[8000ms]"></div>
          <div className="absolute bottom-20 right-10 md:right-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[#D8E63C]/5 rounded-full filter blur-[90px] -z-10 pointer-events-none animate-pulse duration-[6000ms]"></div>
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </div>
      </body>
    </html>
  );
}

