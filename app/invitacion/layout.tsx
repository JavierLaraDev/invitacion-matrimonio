"use client";

import Navbar from "@/components/navbar/Navbar";
import FooterSection from "@/components/footer/FooterSection";
export default function InvitacionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white">

      <Navbar />

      <main className="pt-16 flex justify-center">
        <div className="w-full max-w-[1200px]">
          {children}
        </div>
      </main>

      <div className="flex justify-center">
        <div className="w-full max-w-[1200px]">
          <FooterSection />
        </div>
      </div>
    </div>
  );
}