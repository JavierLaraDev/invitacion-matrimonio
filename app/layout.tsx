import type { Metadata } from "next";
import "./globals.css";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dyland & Giancarla",
  description: "Invitación de boda digital",
  openGraph: {
    title: "Dyland & Giancarla",
    description: "Te invitamos a nuestra boda digital. ¡Confirma tu asistencia!",
    url: "https://invitacion-dyg.netlify.app/",
    siteName: "Invitación DyG",
    images: [
      {
        url: "https://invitacion-dyg.netlify.app/images/portada.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dyland & Giancarla",
    description: "Te invitamos a nuestra boda digital. ¡Confirma tu asistencia!",
    images: ["https://invitacion-dyg.netlify.app/images/portada.png"],
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