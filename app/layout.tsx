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