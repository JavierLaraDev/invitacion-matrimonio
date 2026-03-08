import { Home } from "@/components/home/Home";
import { Alex_Brush } from 'next/font/google';
import DateSection from "@/components/date/DateSection";

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
})
export default function InvitacionPage() {
  return (

    <main className="min-h-screen bg-[#f3efe9] flex flex-col items-center font-[alexBrush]">

      <Home/>
      <DateSection/>

    </main>
    
  )
}