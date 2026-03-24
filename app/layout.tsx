import type { Metadata } from "next";
import "./globals.css";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://invitacion-dyg.netlify.app"),

  title: "Dyland & Giancarla",
  description: "Invitación",

  openGraph: {
    title: "Nuestra boda - Dyland & Giancarla",
    description: "Te invitamos a nuestra boda. ¡Confirma tu asistencia!",
    url: "https://invitacion-dyg.netlify.app",
    siteName: "Invitación DyG",
    images: [
      {
        url: "/images/portada.png",
        width: 1200,
        height: 630,
        alt: "Invitación Dyland y Giancarla",
      },
    ],
    type: "website",
    locale: "es_ES",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dyland & Giancarla",
    description: "Te invitamos a nuestra boda",
    images: ["/images/portada.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${cinzel.className} antialiased bg-[#f3efe9]`}>
        {children}
      </body>
    </html>
  );
}