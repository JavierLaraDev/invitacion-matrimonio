import Navbar from '@/components/navbar/Navbar';
import React from 'react'

export default function InvitacionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#f3efe9]">

      <Navbar/>

      <main className="pt-16">
        {children}
      </main>

    </div>
  )
}