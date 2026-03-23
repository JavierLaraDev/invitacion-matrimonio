"use client";

import { Home } from "@/components/home/Home";
import DateSection from "@/components/date/DateSection";
import ParentsSection from "@/components/parents/ParentsSection";
import LocationSection from "@/components/ubicacion/LocationSection";
import DressCodeSection from "@/components/codigoVestimenta/DressCodeSection";
import ItinerarySection from "@/components/itinerario/ItinerarySection";
import AlbumSection from "@/components/album/AlbumSection";
import ConfirmationSection from "@/components/Confirmacion/ConfirmationSection";

export default function InvitacionPage() {
  return (
    < div className="font-[alex_Brush]">
      <Home />
      <DateSection />
      <ParentsSection />
      <LocationSection />
      <DressCodeSection />
      <ItinerarySection />
      <AlbumSection />
      <ConfirmationSection />
    </div>
  );
}