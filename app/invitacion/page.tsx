import { Home } from "@/components/home/Home";
import { Alex_Brush } from "next/font/google";
import DateSection from "@/components/date/DateSection";
import ParentsSection from "@/components/parents/ParentsSection";
import LocationSection from "@/components/ubicacion/LocationSection";
import DressCodeSection from "@/components/codigoVestimenta/DressCodeSection";
import ItinerarySection from "@/components/itinerario/ItinerarySection";



const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
});

export default function InvitacionPage() {
  return (
    <div className={`w-full max-w-[1200px] ${alexBrush.className}`}>

      <Home />
      <DateSection />
      <ParentsSection />
      <LocationSection />
      <DressCodeSection />
      <ItinerarySection />
    </div>
  );
}