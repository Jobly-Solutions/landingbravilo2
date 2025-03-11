"use client"

import { useState } from "react"
import { Database, Users, FileText, Contact, Settings, Bot, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface NavigationProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { id: "crm", label: "CRM", icon: Users, badge: 14 },
    { id: "scouts", label: "Scouts", icon: Bot },
    { id: "databases", label: "Bases de datos", icon: Database },
    { id: "forms", label: "Formularios", icon: FileText },
    { id: "contacts", label: "Contactos", icon: Contact },
    { id: "settings", label: "Configuración", icon: Settings },
  ]

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-white transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-semibold">Brayllo By Jobly</span>
            </Link>
          </div>

          <nav className="flex-1 p-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className={cn(
                  "w-full justify-start mb-1 relative",
                  activeTab === item.id && "bg-[#E7F1FF] text-[#0D6EFD] hover:bg-[#E7F1FF]",
                )}
                onClick={() => {
                  setActiveTab(item.id)
                  if (window.innerWidth < 768) {
                    setIsOpen(false)
                  }
                }}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
                {item.badge && (
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                    {item.badge}
                  </span>
                )}
              </Button>
            ))}
          </nav>

          <div className="p-4 border-t mt-auto">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-200" />
              <div className="flex-1">
                <p className="text-sm font-medium">Luciano Joaquin Alfonso</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

