"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { ScoutsList } from "@/components/scouts-list"

export function Dashboard() {
  const [activeTab, setActiveTab] = useState("scouts")

  return (
    <div className="flex min-h-screen">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 p-6">
        {activeTab === "scouts" && <ScoutsList />}
        {/* Otros tabs se pueden agregar aquí */}
      </div>
    </div>
  )
}

